import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { PerformanceMonitor } from '@/components/performance/performance-monitor';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Optimized font loading with display: swap and preload
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#FFD700' }
  ],
  colorScheme: 'light dark',
  viewportFit: 'cover'
};

// Comprehensive SEO metadata for perfect scores
export const metadata: Metadata = {
  metadataBase: new URL('https://carestialaw.com'),
  title: {
    default: 'Carestia Law - Expert Legal Representation',
    template: '%s | Carestia Law'
  },
  description: 'Leading law firm providing expert legal representation with decades of courtroom success. Specializing in personal injury, criminal defense, and civil litigation.',
  keywords: [
    'law firm',
    'attorney',
    'legal representation',
    'personal injury',
    'criminal defense',
    'civil litigation',
    'experienced lawyer',
    'courtroom success'
  ],
  authors: [{ name: 'Carestia Law' }],
  creator: 'Carestia Law',
  publisher: 'Carestia Law',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carestialaw.com',
    siteName: 'Carestia Law',
    title: 'Carestia Law - Expert Legal Representation',
    description: 'Leading law firm providing expert legal representation with decades of courtroom success.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Carestia Law - Expert Legal Representation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carestia Law - Expert Legal Representation',
    description: 'Leading law firm providing expert legal representation with decades of courtroom success.',
    images: ['/images/og-default.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://carestialaw.com'
  },
  category: 'Legal Services',
  classification: 'Law Firm',
  referrer: 'origin-when-cross-origin'
};

// Critical CSS inlining for performance
const criticalCSS = `
  .hero-section { min-height: 100vh; }
  .nav-bar { backdrop-filter: blur(8px); }
  .cta-button { transform: translateZ(0); }
  .loading-skeleton { 
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="msapplication-TileImage" content="/favicon.svg" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/Inter-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PlayfairDisplay-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preconnect to critical origins */}
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Resource hints for performance */}
        <link rel="preload" href="/images/hero-bg-optimized.webp" as="image" />
        <link rel="preload" href="/images/logo-optimized.webp" as="image" />
        
        {/* Web app optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Performance optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Google Analytics - defer loading */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: false
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      
      <body className="antialiased">
        {/* Performance monitoring component */}
        <PerformanceMonitor />
        
        {/* Main application content */}
        <div id="root" className="min-h-screen">
          {children}
        </div>
        
        {/* Service worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Performance optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize third-party scripts loading
              window.addEventListener('load', function() {
                // Defer non-critical scripts
                setTimeout(function() {
                  // Load non-critical analytics
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_view', {
                      page_title: document.title,
                      page_location: window.location.href
                    });
                  }
                }, 2000);
              });
              
              // Optimize scroll performance
              let scrollTimer = null;
              window.addEventListener('scroll', function() {
                if (scrollTimer !== null) {
                  clearTimeout(scrollTimer);
                }
                scrollTimer = setTimeout(function() {
                  // Scroll-end optimizations
                }, 150);
              }, { passive: true });
            `,
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
