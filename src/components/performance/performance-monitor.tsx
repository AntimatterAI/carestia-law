'use client';

import { useEffect } from 'react';
import { initializePerformanceMonitoring } from '@/lib/performance-optimization';

export function PerformanceMonitor() {
  useEffect(() => {
    // Initialize performance monitoring
    initializePerformanceMonitoring();

    // Additional performance optimizations
    const optimizeRendering = () => {
      // Reduce layout thrashing
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Perform non-critical tasks during idle time
          console.log('[Performance] Idle callback executed');
        });
      }

      // Optimize scroll performance
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Scroll-related optimizations here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    const cleanup = optimizeRendering();

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg-optimized.webp',
        '/images/logo-optimized.webp'
      ];

      const criticalFonts = [
        '/fonts/Inter-Variable.woff2',
        '/fonts/PlayfairDisplay-Variable.woff2'
      ];

      // Send message to service worker to preload
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'PRELOAD_RESOURCES',
          resources: [...criticalImages, ...criticalFonts]
        });
      }
    };

    preloadCriticalResources();

    return cleanup;
  }, []);

  return null;
} 