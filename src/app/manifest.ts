import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Car Crashes in Atlanta - Your Legal Resource',
    short_name: 'CarCrashATL',
    description: 'Comprehensive resource for car crash victims in Atlanta. Connect with experienced attorneys and understand your rights. Available 24/7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#FFD700',
    orientation: 'portrait',
    scope: '/',
    id: 'car-crash-atl-app',
    categories: ['legal', 'business', 'utilities'],
    lang: 'en-US',
    dir: 'ltr',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      },
      {
        src: '/images/logo-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/images/logo-512.png', 
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    shortcuts: [
      {
        name: 'Find Attorney',
        short_name: 'Find Attorney',
        description: 'Connect with experienced car accident attorneys',
        url: '/find-attorney',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '96x96'
          }
        ]
      },
      {
        name: 'Emergency Help',
        short_name: 'Emergency',
        description: 'Get immediate legal help after car accident',
        url: '/what-to-do-after-car-accident',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '96x96'
          }
        ]
      }
    ],
    prefer_related_applications: false,
    related_applications: [],
    screenshots: [
      {
        src: '/images/og-social.png',
        sizes: '1200x630',
        type: 'image/png',
        label: 'Car Crashes in Atlanta Homepage'
      }
    ],
    edge_side_panel: {
      preferred_width: 400
    },
    launch_handler: {
      client_mode: ['navigate-existing', 'auto']
    }
  };
} 