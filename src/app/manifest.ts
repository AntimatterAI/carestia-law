import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Carestia Law - Experienced Attorneys, Personal Attention',
    short_name: 'Carestia Law',
    description: 'Expert legal representation in New York & New Jersey with over 15 years experience. Free consultation available 24/7.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#FFD700',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icons/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    categories: ['business', 'legal', 'finance'],
    shortcuts: [
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get your free legal consultation',
        url: '/contact',
        icons: [{ src: '/icons/contact-96x96.png', sizes: '96x96' }],
      },
      {
        name: 'Practice Areas',
        short_name: 'Services',
        description: 'View our legal services',
        url: '/practice-areas',
        icons: [{ src: '/icons/services-96x96.png', sizes: '96x96' }],
      },
      {
        name: 'Testimonials',
        short_name: 'Reviews',
        description: 'Client testimonials and reviews',
        url: '/testimonials',
        icons: [{ src: '/icons/reviews-96x96.png', sizes: '96x96' }],
      },
    ],
    screenshots: [
      {
        src: '/screenshots/desktop-home.png',
        type: 'image/png',
        sizes: '1280x720',
        form_factor: 'wide',
        label: 'Carestia Law Homepage - Desktop View',
      },
      {
        src: '/screenshots/mobile-home.png',
        type: 'image/png',
        sizes: '390x844',
        form_factor: 'narrow',
        label: 'Carestia Law Homepage - Mobile View',
      },
    ],
    related_applications: [
      {
        platform: 'webapp',
        url: 'https://carestialaw.com/manifest.json',
      },
    ],
    prefer_related_applications: false,
    lang: 'en-US',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    id: 'carestialaw',
    edge_side_panel: {
      preferred_width: 400,
    },
    protocol_handlers: [
      {
        protocol: 'web+carestialaw',
        url: '/contact?source=%s',
      },
    ],
  };
} 