const CACHE_NAME = 'carestia-law-v2';
const STATIC_CACHE = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;
const IMAGE_CACHE = `${CACHE_NAME}-images`;

// Critical static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.svg',
];

// Critical resource patterns
const CACHE_PATTERNS = {
  IMAGES: /\.(png|jpg|jpeg|webp|avif|svg|ico)$/,
  FONTS: /\.(woff|woff2|ttf|eot)$/,
  STATIC: /\/_next\/static\//,
  CSS: /\.css$/,
  JS: /\.js$/,
};

// Install event - cache critical assets only
self.addEventListener('install', (event) => {
  console.log('[SW] Installing v2...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching critical assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - optimized caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and chrome-extension requests
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  // Handle different resource types
  if (CACHE_PATTERNS.IMAGES.test(url.pathname)) {
    event.respondWith(handleImageRequest(request));
  } else if (CACHE_PATTERNS.FONTS.test(url.pathname)) {
    event.respondWith(handleFontRequest(request));
  } else if (CACHE_PATTERNS.STATIC.test(url.pathname) || 
             CACHE_PATTERNS.CSS.test(url.pathname) || 
             CACHE_PATTERNS.JS.test(url.pathname)) {
    event.respondWith(handleStaticRequest(request));
  } else if (url.pathname === '/' || url.pathname.startsWith('/practice-areas')) {
    event.respondWith(handlePageRequest(request));
  }
});

// Cache-first strategy for images
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Image request failed:', error);
    return new Response('Image not available', { status: 404 });
  }
}

// Cache-first strategy for fonts
async function handleFontRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Font request failed:', error);
    return fetch(request);
  }
}

// Cache-first strategy for static assets
async function handleStaticRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Static request failed:', error);
    return fetch(request);
  }
}

// Stale-while-revalidate for pages
async function handlePageRequest(request) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);
    
    // Fetch in background
    const fetchPromise = fetch(request).then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    });
    
    // Return cached version immediately if available
    return cached || fetchPromise;
  } catch (error) {
    console.log('[SW] Page request failed:', error);
    return fetch(request);
  }
}

// Background sync for forms (if needed)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(handleFormSync());
  }
});

async function handleFormSync() {
  // Handle offline form submissions
  console.log('[SW] Syncing forms...');
}

// Push notifications for legal updates
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New legal update available',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Read More',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Carestia Law Update', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_PERFORMANCE') {
    // Cache performance metrics
    console.log('[SW] Performance metrics received:', event.data.metrics);
  }
});

// Preload critical resources
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRELOAD_RESOURCES') {
    const { resources } = event.data;
    
    event.waitUntil(
      caches.open(STATIC_CACHE).then((cache) => {
        return Promise.all(
          resources.map((resource) => {
            return fetch(resource).then((response) => {
              if (response.status === 200) {
                return cache.put(resource, response);
              }
            }).catch((error) => {
              console.error('[SW] Preload failed for:', resource, error);
            });
          })
        );
      })
    );
  }
});

// Cache management
async function cleanupCaches() {
  const caches = await caches.keys();
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
  
  for (const cacheName of caches) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      const dateHeader = response?.headers.get('date');
      
      if (dateHeader) {
        const age = Date.now() - new Date(dateHeader).getTime();
        if (age > maxAge) {
          await cache.delete(request);
        }
      }
    }
  }
}

// Run cleanup periodically
setInterval(cleanupCaches, 24 * 60 * 60 * 1000); // Daily cleanup 