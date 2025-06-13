const CACHE_NAME = 'carestia-law-v1';
const STATIC_CACHE = `${CACHE_NAME}-static`;
const DYNAMIC_CACHE = `${CACHE_NAME}-dynamic`;
const IMAGE_CACHE = `${CACHE_NAME}-images`;

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only'
};

// Static assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/practice-areas',
  '/contact',
  '/testimonials',
  '/manifest.json',
  '/favicon.ico',
  // Add other critical static assets
];

// Network-first routes (dynamic content)
const NETWORK_FIRST_ROUTES = [
  '/api/',
  '/contact',
  '/practice-areas/'
];

// Cache-first routes (static content)
const CACHE_FIRST_ROUTES = [
  '/images/',
  '/fonts/',
  '/_next/static/',
  '/icons/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      // Force activation
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith('carestia-law-') && 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients
      return self.clients.claim();
    })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }
  
  // Determine cache strategy based on request
  const strategy = getCacheStrategy(request);
  
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      event.respondWith(cacheFirst(request));
      break;
    case CACHE_STRATEGIES.NETWORK_FIRST:
      event.respondWith(networkFirst(request));
      break;
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      event.respondWith(staleWhileRevalidate(request));
      break;
    case CACHE_STRATEGIES.NETWORK_ONLY:
      // Let the browser handle it
      break;
    default:
      event.respondWith(staleWhileRevalidate(request));
  }
});

// Cache strategy implementations
async function cacheFirst(request) {
  const cache = await caches.open(getCacheName(request));
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Cache first failed:', error);
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function networkFirst(request) {
  const cache = await caches.open(getCacheName(request));
  
  try {
    const response = await fetch(request);
    
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/');
    }
    
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(getCacheName(request));
  const cached = await cache.match(request);
  
  // Start fetch in background
  const fetchPromise = fetch(request).then((response) => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch((error) => {
    console.error('[SW] Background fetch failed:', error);
    return cached;
  });
  
  // Return cached immediately if available
  if (cached) {
    return cached;
  }
  
  // Otherwise wait for network
  return fetchPromise;
}

// Helper functions
function getCacheStrategy(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Images get cache-first treatment
  if (isImageRequest(request)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // Static assets get cache-first treatment
  if (CACHE_FIRST_ROUTES.some(route => pathname.startsWith(route))) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // Dynamic content gets network-first treatment
  if (NETWORK_FIRST_ROUTES.some(route => pathname.startsWith(route))) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // Navigation requests get stale-while-revalidate
  if (request.mode === 'navigate') {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
  }
  
  // Default strategy
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
}

function getCacheName(request) {
  if (isImageRequest(request)) {
    return IMAGE_CACHE;
  }
  
  const url = new URL(request.url);
  if (url.pathname.startsWith('/_next/static/')) {
    return STATIC_CACHE;
  }
  
  return DYNAMIC_CACHE;
}

function isImageRequest(request) {
  const url = new URL(request.url);
  const extension = url.pathname.split('.').pop()?.toLowerCase();
  return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg'].includes(extension || '');
}

// Background sync for analytics and form submissions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
  
  if (event.tag === 'analytics') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncContactForm() {
  // Retrieve queued form submissions from IndexedDB
  // and attempt to submit them when online
  console.log('[SW] Syncing contact form submissions');
}

async function syncAnalytics() {
  // Sync analytics data when online
  console.log('[SW] Syncing analytics data');
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