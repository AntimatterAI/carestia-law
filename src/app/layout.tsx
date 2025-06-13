import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
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

// Critical CSS for performance and layout stability
const criticalCSS = `
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; scroll-behavior: smooth; }
  body { 
    font-family: var(--font-inter), system-ui, -apple-system, sans-serif; 
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  /* Prevent layout shifts and optimize rendering */
  img, video { 
    max-width: 100%; 
    height: auto; 
    display: block;
  }
  
  /* Reserve space for hero section */
  .hero-section { 
    min-height: 100vh; 
    contain: layout style paint;
    position: relative;
  }
  
  /* Optimize navigation */
  .nav-bar { 
    backdrop-filter: blur(8px); 
    will-change: transform; 
    contain: layout;
    height: 80px; /* Fixed height to prevent CLS */
  }
  
  /* Button optimizations */
  .cta-button { 
    transform: translateZ(0); 
    will-change: transform;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Font loading stability */
  .font-loading { font-display: swap; }
  
  /* Prevent CLS from dynamic content */
  .trust-card-modern { 
    min-height: 120px;
    contain: layout;
  }
  
  /* Grid stability */
  .practice-grid { 
    display: grid;
    gap: 1.5rem;
    contain: layout;
  }
  
  /* Animation performance */
  .hero-animate, .scroll-animate {
    will-change: transform, opacity;
  }
  
  /* Aspect ratio containers */
  .aspect-ratio { 
    position: relative; 
    contain: layout;
  }
  .aspect-ratio::before { 
    content: ''; 
    display: block; 
    padding-bottom: var(--aspect-ratio, 56.25%); 
  }
  .aspect-ratio > * { 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
  }
  
  /* Skeleton loading for better perceived performance */
  .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  /* Optimize repaints */
  .gold-gradient-text {
    contain: layout style;
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
        {/* Favicon - simplified for mobile compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
        {/* Essential resource hints only */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        
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
        

      </head>
      
      <body className="antialiased">
        {/* Main application content */}
        <div id="root" className="min-h-screen">
          {children}
        </div>
        
        {/* Essential analytics only */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
