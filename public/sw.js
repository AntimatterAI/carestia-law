const CACHE_NAME = 'carestia-law-mobile-v1';
const STATIC_CACHE = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;

// Mobile-optimized: Only cache essential assets
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.svg',
];

// Simplified cache patterns for mobile
const CACHE_PATTERNS = {
  IMAGES: /\.(png|jpg|jpeg|webp|avif|svg|ico)$/,
  FONTS: /\.(woff2)$/, // Only cache woff2 for mobile
  STATIC: /\/_next\/static\//,
  CSS: /\.css$/,
  JS: /\.js$/,
};

// Mobile connection detection
let isSlowConnection = false;

// Install event - minimal caching for mobile
self.addEventListener('install', (event) => {
  console.log('[SW] Installing mobile-optimized version...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching essential assets only');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - aggressive cleanup for mobile storage
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating mobile-optimized SW...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheName.includes(CACHE_NAME)) {
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

// Fetch event - mobile-optimized strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and chrome-extension requests
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') {
    return;
  }

  // Mobile-first routing
  if (url.pathname === '/') {
    event.respondWith(handlePageRequest(request));
  } else if (CACHE_PATTERNS.FONTS.test(url.pathname)) {
    event.respondWith(handleFontRequest(request));
  } else if (CACHE_PATTERNS.STATIC.test(url.pathname) || 
             CACHE_PATTERNS.CSS.test(url.pathname) || 
             CACHE_PATTERNS.JS.test(url.pathname)) {
    event.respondWith(handleStaticRequest(request));
  } else if (CACHE_PATTERNS.IMAGES.test(url.pathname)) {
    event.respondWith(handleImageRequest(request));
  }
});

// Network-first for pages on mobile (faster updates)
async function handlePageRequest(request) {
  try {
    // Try network first for fresh content
    const response = await fetch(request, {
      // Mobile-optimized fetch options
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin',
    });
    
    if (response.ok) {
      // Only cache on mobile if connection is stable
      if (!isSlowConnection) {
        const cache = await caches.open(DYNAMIC_CACHE);
        cache.put(request, response.clone());
      }
    }
    return response;
  } catch (error) {
    // Fallback to cache only if network fails
    console.log('[SW] Network failed, trying cache:', error);
    const cache = await caches.open(DYNAMIC_CACHE);
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

// Cache-first for fonts (mobile optimized)
async function handleFontRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request, {
      // Mobile optimization: shorter timeout
      signal: AbortSignal.timeout(5000)
    });
    
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Font request failed:', error);
    return fetch(request).catch(() => new Response('Font not available'));
  }
}

// Stale-while-revalidate for static assets (mobile friendly)
async function handleStaticRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    
    // Mobile: Return cached immediately, update in background
    if (cached) {
      // Update in background for next time
      fetch(request).then(response => {
        if (response.ok && response.status === 200) {
          cache.put(request, response.clone());
        }
      }).catch(() => {}); // Silent fail for background updates
      
      return cached;
    }
    
    // No cache, fetch fresh
    const response = await fetch(request, {
      signal: AbortSignal.timeout(8000) // Mobile-friendly timeout
    });
    
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Static request failed:', error);
    return fetch(request);
  }
}

// Network-first for images (mobile data conscious)
async function handleImageRequest(request) {
  try {
    // For images, check cache first to save mobile data
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    // Fetch with mobile-friendly timeout
    const response = await fetch(request, {
      signal: AbortSignal.timeout(10000)
    });
    
    if (response.ok && response.status === 200) {
      // Only cache images under 500KB on mobile
      const contentLength = response.headers.get('content-length');
      if (!contentLength || parseInt(contentLength) < 500000) {
        cache.put(request, response.clone());
      }
    }
    return response;
  } catch (error) {
    console.log('[SW] Image request failed:', error);
    // Return placeholder for failed images
    return new Response('', { status: 204 });
  }
}

// Mobile connection detection
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CONNECTION_CHANGE') {
    isSlowConnection = event.data.isSlowConnection;
    console.log('[SW] Connection type updated:', isSlowConnection ? 'slow' : 'fast');
  }
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Mobile-optimized cache cleanup
async function cleanupCaches() {
  try {
    const cacheNames = await caches.keys();
    const maxCacheSize = 10 * 1024 * 1024; // 10MB limit for mobile
    const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days for mobile
    
    for (const cacheName of cacheNames) {
      if (!cacheName.includes(CACHE_NAME)) continue;
      
      const cache = await caches.open(cacheName);
      const requests = await cache.keys();
      
      // Remove old entries
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
  } catch (error) {
    console.log('[SW] Cache cleanup failed:', error);
  }
}

// Aggressive cleanup for mobile storage
setInterval(cleanupCaches, 6 * 60 * 60 * 1000); // Every 6 hours

// Mobile-specific performance optimization
self.addEventListener('beforeinstallprompt', (event) => {
  console.log('[SW] PWA install prompt ready');
  // Let the app handle the install prompt
});

// Mobile-friendly error handling
self.addEventListener('error', (event) => {
  console.error('[SW] Error:', event.error);
});

// Minimal push notification support for mobile
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const options = {
    body: event.data.text(),
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    vibrate: [100, 50, 100],
    requireInteraction: false, // Don't require interaction on mobile
    silent: false,
    data: {
      timestamp: Date.now()
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Carestia Law', options)
  );
});

// Handle notification clicks efficiently
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll().then(clientList => {
      // Focus existing tab if available
      for (const client of clientList) {
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }
      // Open new tab if no existing tab
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
}); 