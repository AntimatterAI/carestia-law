import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Carestia Law - Expert Legal Representation',
    short_name: 'Carestia Law',
    description: 'Expert legal representation in Georgia with over 15 years experience. Free consultation available 24/7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#FFD700',
    orientation: 'portrait',
    scope: '/',
    id: 'carestia-law-app',
    categories: ['legal', 'business'],
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
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch for legal consultation',
        url: '/contact',
        icons: [
          {
            src: '/favicon.svg',
            sizes: '96x96'
          }
        ]
      },
      {
        name: 'Practice Areas',
        short_name: 'Services',
        description: 'View our legal services',
        url: '/practice-areas',
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
        label: 'Carestia Law Homepage'
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