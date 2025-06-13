import { useEffect, useState, useCallback } from 'react';

// Performance monitoring utilities
export class PerformanceMonitor {
  private static metrics: Map<string, number> = new Map();

  static measureLCP() {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      
      if (lastEntry) {
        this.metrics.set('LCP', lastEntry.startTime);
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  static measureFID() {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0] as any;
      
      if (firstEntry) {
        this.metrics.set('FID', firstEntry.processingStart - firstEntry.startTime);
      }
    });
    
    observer.observe({ entryTypes: ['first-input'] });
  }

  static measureCLS() {
    if (typeof window === 'undefined') return;
    
    let clsValue = 0;
    let clsEntries: any[] = [];
    
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = clsEntries[0];
          const lastSessionEntry = clsEntries[clsEntries.length - 1];
          
          if (clsEntries.length === 0 ||
              (entry.startTime - lastSessionEntry.startTime < 1000 &&
               entry.startTime - firstSessionEntry.startTime < 5000)) {
            clsEntries.push(entry);
          } else {
            clsEntries = [entry];
          }
        }
      }
      
      clsValue = Math.max(clsValue, clsEntries.reduce((sum, entry) => sum + (entry as any).value, 0));
      this.metrics.set('CLS', clsValue);
    });
    
    observer.observe({ entryTypes: ['layout-shift'] });
  }

  static getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  static reportMetrics() {
    const metrics = this.getMetrics();
    console.log('Core Web Vitals:', metrics);
    
    // Report to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      Object.entries(metrics).forEach(([name, value]) => {
        (window as any).gtag('event', name, {
          value: Math.round(value),
          metric_id: name,
          custom_parameter: value
        });
      });
    }
  }
}

// Critical resource preloader
export class ResourcePreloader {
  private static preloadedResources = new Set<string>();

  static preloadCriticalResources() {
    if (typeof window === 'undefined') return;

    // Preload critical fonts
    this.preloadFont('/fonts/Inter-Variable.woff2', 'font/woff2');
    this.preloadFont('/fonts/PlayfairDisplay-Variable.woff2', 'font/woff2');
    
    // Preload critical images
    this.preloadImage('/images/hero-bg-optimized.webp');
    this.preloadImage('/images/logo-optimized.webp');
    
    // Preload critical CSS
    this.preloadCSS('/_next/static/css/app.css');
  }

  private static preloadFont(href: string, type: string) {
    if (this.preloadedResources.has(href)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'font';
    link.type = type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    
    this.preloadedResources.add(href);
  }

  private static preloadImage(href: string) {
    if (this.preloadedResources.has(href)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'image';
    document.head.appendChild(link);
    
    this.preloadedResources.add(href);
  }

  private static preloadCSS(href: string) {
    if (this.preloadedResources.has(href)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = 'style';
    document.head.appendChild(link);
    
    this.preloadedResources.add(href);
  }
}

// Intersection Observer for lazy loading
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

// Dynamic component loader with preloading
export function useDynamicImport<T>(
  importFunction: () => Promise<{ default: T }>,
  shouldLoad: boolean = true
) {
  const [component, setComponent] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!shouldLoad) return;

    setLoading(true);
    setError(null);

    importFunction()
      .then((module) => {
        setComponent(module.default);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [importFunction, shouldLoad]);

  return { component, loading, error };
}

// Layout shift prevention
export function useLayoutShiftPrevention() {
  const [dimensions, setDimensions] = useState<{
    width?: number;
    height?: number;
  }>({});

  const measureElement = useCallback((element: HTMLElement | null) => {
    if (!element) return;
    
    const { width, height } = element.getBoundingClientRect();
    setDimensions({ width, height });
  }, []);

  return { dimensions, measureElement };
}

// Critical CSS inlining utility
export function inlineCriticalCSS() {
  if (typeof window === 'undefined') return;

  const criticalCSS = `
    /* Critical above-the-fold styles */
    body { 
      margin: 0; 
      padding: 0; 
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
    }
    
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    }
    
    .header-nav {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(10px);
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      color: #000;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      transition: transform 0.2s ease;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
    }
    
    /* Prevent layout shifts */
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    
    .skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
}

// Performance budget monitoring
export class PerformanceBudget {
  private static budgets = {
    LCP: 2500, // 2.5 seconds
    FID: 100,  // 100 milliseconds
    CLS: 0.1,  // 0.1 cumulative score
    FCP: 1800, // 1.8 seconds
    TTI: 3800, // 3.8 seconds
    TBT: 300,  // 300 milliseconds
  };

  static checkBudgets() {
    const metrics = PerformanceMonitor.getMetrics();
    const violations: string[] = [];

    Object.entries(this.budgets).forEach(([metric, budget]) => {
      const value = metrics[metric];
      if (value && value > budget) {
        violations.push(`${metric}: ${Math.round(value)}ms exceeds budget of ${budget}ms`);
      }
    });

    if (violations.length > 0) {
      console.warn('Performance Budget Violations:', violations);
    }

    return {
      passed: violations.length === 0,
      violations,
      metrics
    };
  }
}

// Service Worker registration
export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Image optimization utilities
export function generateImageSizes(breakpoints: number[] = [640, 768, 1024, 1280, 1536]) {
  return breakpoints
    .map((width, index) => {
      if (index === breakpoints.length - 1) {
        return `${width}px`;
      }
      return `(max-width: ${width}px) ${width}px`;
    })
    .join(', ');
}

export function generateSrcSet(
  baseName: string, 
  extension: string = 'webp',
  sizes: number[] = [640, 768, 1024, 1280, 1536, 1920]
) {
  return sizes
    .map(size => `/images/${baseName}-${size}w.${extension} ${size}w`)
    .join(', ');
}

// Bundle size monitoring
export class BundleMonitor {
  static analyzeBundle() {
    if (typeof window === 'undefined') return;

    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    
    let totalJS = 0;
    let totalCSS = 0;

    scripts.forEach(script => {
      if (script.getAttribute('src')?.includes('_next')) {
        // Estimate bundle size based on network timing
        const resource = performance.getEntriesByName(script.src)[0] as PerformanceResourceTiming;
        if (resource) {
          totalJS += resource.transferSize || 0;
        }
      }
    });

    stylesheets.forEach(link => {
      if (link.getAttribute('href')?.includes('_next')) {
        const resource = performance.getEntriesByName(link.href)[0] as PerformanceResourceTiming;
        if (resource) {
          totalCSS += resource.transferSize || 0;
        }
      }
    });

    console.log('Bundle Analysis:', {
      totalJS: `${Math.round(totalJS / 1024)}KB`,
      totalCSS: `${Math.round(totalCSS / 1024)}KB`,
      total: `${Math.round((totalJS + totalCSS) / 1024)}KB`
    });

    return { totalJS, totalCSS, total: totalJS + totalCSS };
  }
}

// Initialize performance monitoring
export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Start Core Web Vitals monitoring
  PerformanceMonitor.measureLCP();
  PerformanceMonitor.measureFID();
  PerformanceMonitor.measureCLS();

  // Preload critical resources
  ResourcePreloader.preloadCriticalResources();

  // Inline critical CSS
  inlineCriticalCSS();

  // Register service worker
  registerServiceWorker();

  // Report metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      PerformanceMonitor.reportMetrics();
      PerformanceBudget.checkBudgets();
      BundleMonitor.analyzeBundle();
    }, 3000);
  });
} 