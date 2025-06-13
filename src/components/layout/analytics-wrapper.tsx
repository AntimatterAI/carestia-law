'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function AnalyticsWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Defer analytics loading until after the page is interactive
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000); // Wait 2 seconds before loading analytics

    // Or load when user starts interacting
    const handleInteraction = () => {
      setShouldLoad(true);
      clearTimeout(timer);
    };

    // Load on first user interaction
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
} 