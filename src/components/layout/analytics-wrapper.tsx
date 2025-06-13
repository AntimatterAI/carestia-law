'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Connection speed detection for mobile optimization
function detectConnectionSpeed() {
  if (typeof window === 'undefined') return false;
  
  const connection = (navigator as any).connection || 
                     (navigator as any).mozConnection || 
                     (navigator as any).webkitConnection;
  
  if (connection) {
    const slowConnections = ['2g', 'slow-2g'];
    return slowConnections.includes(connection.effectiveType);
  }
  
  // Fallback: detect by memory (mobile devices typically have less memory)
  const deviceMemory = (navigator as any).deviceMemory;
  if (deviceMemory && deviceMemory <= 2) {
    return true; // Assume slow device/connection
  }
  
  return false;
}

export function AnalyticsWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Mobile-optimized connection detection
    const slowConnection = detectConnectionSpeed();
    setIsSlowConnection(slowConnection);
    
    // Communicate with service worker about connection speed
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'CONNECTION_CHANGE',
        isSlowConnection: slowConnection
      });
    }

    // Mobile-optimized loading strategy
    const loadAnalytics = () => {
      // Adaptive delay based on connection and device
      let delay = 3000; // Default
      
      if (slowConnection) {
        delay = 8000; // Much longer for slow connections
      } else if (window.innerWidth <= 768) {
        delay = 4000; // Slightly longer for mobile even on fast connections
      }
      
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, delay);

      // Mobile-optimized interaction events
      const interactionEvents = [
        'touchstart', 
        'touchend',
        'click', 
        'keydown', 
        'scroll',
        'focus',
        'visibilitychange'
      ];
      
      const handleInteraction = () => {
        clearTimeout(timer);
        setShouldLoad(true);
        
        // Clean up event listeners
        interactionEvents.forEach(event => {
          if (event === 'visibilitychange') {
            document.removeEventListener(event, handleInteraction);
          } else {
            document.removeEventListener(event, handleInteraction, { passive: true });
          }
        });
      };

      // Add interaction listeners with proper options
      interactionEvents.forEach(event => {
        if (event === 'visibilitychange') {
          document.addEventListener(event, handleInteraction);
        } else {
          document.addEventListener(event, handleInteraction, { passive: true, once: true });
        }
      });

      // Cleanup function
      return () => {
        clearTimeout(timer);
        interactionEvents.forEach(event => {
          if (event === 'visibilitychange') {
            document.removeEventListener(event, handleInteraction);
          } else {
            document.removeEventListener(event, handleInteraction, { passive: true });
          }
        });
      };
    };

    // Only load analytics on the client side
    if (typeof window !== 'undefined') {
      const cleanup = loadAnalytics();
      return cleanup;
    }
  }, []);

  // Monitor connection changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const connection = (navigator as any).connection;
    if (connection) {
      const handleConnectionChange = () => {
        const newSlowConnection = detectConnectionSpeed();
        setIsSlowConnection(newSlowConnection);
        
        // Update service worker
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage({
            type: 'CONNECTION_CHANGE',
            isSlowConnection: newSlowConnection
          });
        }
      };

      connection.addEventListener('change', handleConnectionChange);
      
      return () => {
        connection.removeEventListener('change', handleConnectionChange);
      };
    }
  }, []);

  // Don't render anything on slow connections until absolutely necessary
  if (isSlowConnection && !shouldLoad) {
    return null;
  }

  return shouldLoad ? (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  ) : null;
} 