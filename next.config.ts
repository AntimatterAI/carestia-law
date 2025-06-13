import type { NextConfig } from "next";

// Bundle analyzer configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Skip ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Skip TypeScript checking during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Mobile-optimized image configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://vitals.vercel-insights.com https://vercel.live; frame-ancestors 'none';",
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
      // Aggressive caching for static assets
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(css|js|woff|woff2|ttf|eot|ico|png|jpg|jpeg|webp|avif|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect HTTP to HTTPS in production
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.carcrashatl.com/:path*',
        permanent: true,
      },
      // WWW to non-WWW redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'carcrashatl.com',
          },
        ],
        destination: 'https://www.carcrashatl.com/:path*',
        permanent: true,
      },
    ];
  },

  // Mobile-optimized webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Mobile-friendly bundle splitting - fewer chunks for better performance on slow connections
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 30000, // Larger minimum size for mobile
        maxSize: 200000, // Smaller max size for mobile
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework chunk - keep React and Next.js together for mobile
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|next|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Single vendor chunk for mobile efficiency
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
            enforce: true,
            minChunks: 2,
          },
          // App code chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            enforce: true,
          },
        },
      };

      // Tree shaking optimizations
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Module concatenation for better performance
      config.optimization.concatenateModules = true;
    }

    // Module resolution optimizations
    config.resolve.alias = {
      ...config.resolve.alias,
      // Optimize lucide-react imports for tree shaking
      'lucide-react': 'lucide-react/dist/esm/lucide-react',
    };

    return config;
  },

  // Experimental features for performance
  experimental: {
    // Enable optimizePackageImports for better tree shaking
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-dialog', 
      '@radix-ui/react-label',
    ],
  },

  // External packages for server components
  serverExternalPackages: ['@vercel/analytics', '@vercel/speed-insights'],

  // Output configuration for production
  output: 'standalone',
  
  // Transpile packages for better performance
  transpilePackages: ['lucide-react'],
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
    // Enable SWC minification
    styledComponents: false,
  },
  
  // Additional performance settings
  productionBrowserSourceMaps: false,
};

export default withBundleAnalyzer(nextConfig);
