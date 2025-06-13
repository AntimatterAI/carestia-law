import { useCallback } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}

// Easing functions
const easingFunctions = {
  easeInOut: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number): number => t * (2 - t),
  easeIn: (t: number): number => t * t,
  linear: (t: number): number => t,
};

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((
    target: string | Element,
    options: SmoothScrollOptions = {}
  ) => {
    const {
      duration = 800,
      easing = easingFunctions.easeInOut,
      offset = 80, // Account for sticky header
    } = options;

    let element: Element | null = null;

    if (typeof target === 'string') {
      // Handle anchor links
      if (target.startsWith('#')) {
        element = document.querySelector(target);
      } else {
        element = document.querySelector(`[id="${target}"]`);
      }
    } else {
      element = target;
    }

    if (!element) {
      console.warn(`Element not found: ${target}`);
      return;
    }

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToTop = useCallback((options: Omit<SmoothScrollOptions, 'offset'> = {}) => {
    const { duration = 600, easing = easingFunctions.easeOut } = options;
    
    const startPosition = window.pageYOffset;
    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string, options?: SmoothScrollOptions) => {
    scrollToElement(`#${sectionId}`, options);
  }, [scrollToElement]);

  return {
    scrollToElement,
    scrollToTop,
    scrollToSection,
    easingFunctions,
  };
};

export default useSmoothScroll; 