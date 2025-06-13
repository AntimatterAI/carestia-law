import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AnalyticsWrapper } from '@/components/layout/analytics-wrapper';

// Optimized font loading - reduce font loading impact
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  // Reduce font weights for faster loading
  weight: ['400', '500', '600', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  // Reduce font weights for faster loading
  weight: ['400', '600', '700'],
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
  metadataBase: new URL('https://www.carcrashatl.com'),
  title: {
    default: 'Carestia Law - Expert Legal Representation',
    template: '%s | Carestia Law'
  },
  description: 'Leading law firm providing expert legal representation with decades of courtroom success. Specializing in personal injury, criminal defense, and civil litigation.',
  keywords: [
    'personal injury lawyer',
    'legal representation', 
    'car accident attorney',
    'medical malpractice lawyer',
    'Georgia attorney',
    'Atlanta lawyer',
    'experienced lawyers',
    'free consultation'
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
    url: 'https://www.carcrashatl.com',
    siteName: 'Carestia Law',
    title: 'Carestia Law - Expert Legal Representation',
    description: 'Leading law firm providing expert legal representation with decades of courtroom success.',
    images: [
      {
        url: '/images/og-social.png',
        width: 1200,
        height: 630,
        alt: 'Carestia Law - Expert Legal Representation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carestia Law - Expert Legal Representation',
    description: 'Leading law firm providing expert legal representation with decades of courtroom success.',
    images: ['/images/og-social.png'],
    creator: '@CarestiaLaw',
    site: '@CarestiaLaw',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.carcrashatl.com'
  },
  category: 'Legal Services',
  classification: 'Law Firm',
  referrer: 'origin-when-cross-origin'
};

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
        {/* Critical resource hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon - optimized */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Critical CSS for immediate rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *{box-sizing:border-box}
            html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            body{font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;margin:0;padding:0;background:#fff;color:#111827}
            .hero-section{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(135deg,#000,#1a1a1a,#000)}
            img,video,iframe{max-width:100%;height:auto;display:block}
            .btn-modern-primary{display:inline-flex;align-items:center;justify-content:center;padding:1rem 2rem;font-weight:700;font-size:1.125rem;border-radius:0.5rem;background:linear-gradient(to right,#facc15,#eab308);color:#000;transition:transform 0.2s ease-out}
            .btn-modern-secondary{display:inline-flex;align-items:center;justify-content:center;padding:1rem 2rem;font-weight:700;font-size:1.125rem;border-radius:0.5rem;border:2px solid #facc15;color:#facc15;background:transparent;transition:all 0.2s ease-out}
          `
        }} />
        
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
        
        {/* Deferred analytics to prevent blocking */}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
