'use client';

import React, { useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { useIntersectionObserver, useLayoutShiftPrevention, generateImageSizes, generateSrcSet } from '@/lib/performance-optimization';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string; // Make alt required for SEO
  caption?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  className?: string;
  containerClassName?: string;
  showCaption?: boolean;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | string;
  enableLazyLoading?: boolean;
  preventLayoutShift?: boolean;
  skeletonColor?: string;
  performanceTracking?: boolean;
  webpSrc?: string;
  avifSrc?: string;
  fallbackSrc?: string;
}

// Function to create base64 blur data URL without Buffer
function createBlurDataURL(color: string): string {
  const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
    <rect width="100%" height="100%" fill="url(#grad)" opacity="0.3"/>
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
        <stop offset="50%" style="stop-color:#e0e0e0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color};stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>`;
  
  // Use btoa for base64 encoding in the browser
  if (typeof window !== 'undefined') {
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  }
  
  // Fallback for server-side rendering - use simple color
  return `data:image/svg+xml;utf8,${encodeURIComponent(`<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`)}`;
}

export function OptimizedImage({
  alt,
  caption,
  priority = false,
  loading = 'lazy',
  className = '',
  containerClassName = '',
  showCaption = false,
  aspectRatio,
  width,
  height,
  fill,
  sizes,
  enableLazyLoading = true,
  preventLayoutShift = true,
  skeletonColor = '#f0f0f0',
  performanceTracking = false,
  webpSrc,
  avifSrc,
  fallbackSrc,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadStartTime, setLoadStartTime] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Layout shift prevention
  const { dimensions, measureElement } = useLayoutShiftPrevention();
  
  // Intersection observer for advanced lazy loading
  const { hasIntersected } = useIntersectionObserver(imageRef, {
    threshold: 0.1,
    rootMargin: '50px',
  });

  const shouldLoad = priority || !enableLazyLoading || hasIntersected;

  const handleLoadStart = () => {
    if (performanceTracking) {
      setLoadStartTime(Date.now());
    }
  };

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    
    if (performanceTracking && loadStartTime) {
      const loadTime = Date.now() - loadStartTime;
      console.log(`Image loaded in ${loadTime}ms:`, alt);
      
      // Report to Core Web Vitals if this is LCP candidate
      if (priority) {
        performance.mark('lcp-image-loaded');
      }
    }

    // Measure element for layout shift prevention
    if (preventLayoutShift) {
      measureElement(event.currentTarget);
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    if (performanceTracking) {
      console.warn('Image failed to load:', alt);
    }
  };

  // Generate aspect ratio class
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case 'portrait':
        return 'aspect-[3/4]';
      case 'landscape':
        return 'aspect-[4/3]';
      default:
        return aspectRatio ? `aspect-[${aspectRatio}]` : '';
    }
  };

  // Generate responsive sizes if not provided
  const responsiveSizes = sizes || generateImageSizes();

  // Generate WebP srcSet if webpSrc is provided
  const webpSrcSet = webpSrc ? generateSrcSet(webpSrc.replace(/\.[^/.]+$/, ""), 'webp') : undefined;
  const avifSrcSet = avifSrc ? generateSrcSet(avifSrc.replace(/\.[^/.]+$/, ""), 'avif') : undefined;

  // Create blur data URL using the browser-compatible function
  const blurDataURL = createBlurDataURL(skeletonColor);

  // Error fallback with improved accessibility
  if (hasError) {
    return (
      <div 
        ref={imageRef}
        className={`bg-gray-200 flex items-center justify-center ${getAspectRatioClass()} ${containerClassName}`}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
        style={preventLayoutShift && dimensions.width ? { 
          width: dimensions.width, 
          height: dimensions.height 
        } : undefined}
      >
        <div className="text-gray-500 text-center p-4">
          <svg 
            className="w-12 h-12 mx-auto mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
          <p className="text-sm">Image not available</p>
          {fallbackSrc && (
            <img 
              src={fallbackSrc} 
              alt={alt}
              className="mt-2 max-w-full h-auto"
              loading="lazy"
            />
          )}
        </div>
      </div>
    );
  }

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div 
      className={`absolute inset-0 ${skeletonColor === '#f0f0f0' ? 'bg-gray-200' : ''} animate-pulse`}
      style={{ backgroundColor: skeletonColor }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  );

  return (
    <figure className={containerClassName}>
      <div 
        ref={imageRef}
        className={`relative overflow-hidden ${getAspectRatioClass()}`}
        style={preventLayoutShift && dimensions.width ? { 
          width: dimensions.width, 
          height: dimensions.height 
        } : undefined}
      >
        {/* Loading skeleton */}
        {isLoading && <LoadingSkeleton />}
        
        {/* Render image only when it should load */}
        {shouldLoad && (
          <>
            {/* Modern image formats with fallbacks */}
            {(webpSrcSet || avifSrcSet) ? (
              <picture>
                {avifSrcSet && (
                  <source 
                    srcSet={avifSrcSet} 
                    sizes={responsiveSizes}
                    type="image/avif" 
                  />
                )}
                {webpSrcSet && (
                  <source 
                    srcSet={webpSrcSet} 
                    sizes={responsiveSizes}
                    type="image/webp" 
                  />
                )}
                <Image
                  {...props}
                  alt={alt}
                  width={width}
                  height={height}
                  fill={fill}
                  sizes={responsiveSizes}
                  priority={priority}
                  loading={loading}
                  className={`transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  } ${className}`}
                  onLoadStart={handleLoadStart}
                  onLoad={handleLoad}
                  onError={handleError}
                  quality={90}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </picture>
            ) : (
              <Image
                {...props}
                alt={alt}
                width={width}
                height={height}
                fill={fill}
                sizes={responsiveSizes}
                priority={priority}
                loading={loading}
                className={`transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                } ${className}`}
                onLoadStart={handleLoadStart}
                onLoad={handleLoad}
                onError={handleError}
                quality={90}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            )}
          </>
        )}
      </div>
      
      {/* Caption */}
      {showCaption && caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Specialized components for common use cases
export function HeroImage({ alt, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      alt={alt}
      priority={true}
      loading="eager"
      aspectRatio="video"
      sizes="100vw"
      performanceTracking={true}
      preventLayoutShift={true}
      enableLazyLoading={false}
    />
  );
}

export function LogoImage({ alt, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      alt={alt}
      priority={true}
      loading="eager"
      className="object-contain"
      preventLayoutShift={true}
      performanceTracking={true}
    />
  );
}

export function ProfileImage({ alt, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      alt={alt}
      aspectRatio="square"
      className="object-cover rounded-full"
      enableLazyLoading={true}
      preventLayoutShift={true}
    />
  );
}

export function CardImage({ alt, ...props }: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      alt={alt}
      aspectRatio="landscape"
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      enableLazyLoading={true}
      preventLayoutShift={true}
    />
  );
}

// Performance-optimized gallery component
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    webpSrc?: string;
    avifSrc?: string;
  }>;
  className?: string;
  aspectRatio?: OptimizedImageProps['aspectRatio'];
  enableVirtualization?: boolean;
  itemsPerPage?: number;
}

export function ImageGallery({ 
  images, 
  className = '', 
  aspectRatio = 'landscape',
  enableVirtualization = false,
  itemsPerPage = 12
}: ImageGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState(new Set<number>());
  
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleImages = enableVirtualization 
    ? images.slice(startIndex, startIndex + itemsPerPage)
    : images;

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((image, index) => {
          const globalIndex = enableVirtualization ? startIndex + index : index;
          
          return (
            <OptimizedImage
              key={globalIndex}
              src={image.src}
              webpSrc={image.webpSrc}
              avifSrc={image.avifSrc}
              alt={image.alt}
              caption={image.caption}
              showCaption={!!image.caption}
              aspectRatio={aspectRatio}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              enableLazyLoading={true}
              preventLayoutShift={true}
              onLoad={() => handleImageLoad(globalIndex)}
            />
          );
        })}
      </div>
      
      {/* Pagination for virtualized gallery */}
      {enableVirtualization && totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 disabled:opacity-50 rounded"
            aria-label="Previous page"
          >
            Previous
          </button>
          
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 disabled:opacity-50 rounded"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}
      
      {/* Loading progress indicator */}
      <div className="text-center text-sm text-gray-500">
        {loadedImages.size} of {visibleImages.length} images loaded
      </div>
    </div>
  );
}

// Image preloader component
interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

export function ImagePreloader({ images, priority = false }: ImagePreloaderProps) {
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const preloadImages = images.slice(0, priority ? images.length : 3);
    
    preloadImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, [images, priority]);

  return null;
} 