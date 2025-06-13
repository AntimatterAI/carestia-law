import type { Metadata } from 'next';

// Base URL configuration
export const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://carestialaw.com' 
  : 'http://localhost:3000';

// Default SEO configuration
export const DEFAULT_SEO = {
  title: 'Carestia Law - Experienced Attorneys, Personal Attention',
  description: 'Expert legal representation in New York & New Jersey with over 15 years experience. Free consultation available 24/7 for personal injury, medical malpractice, and more.',
  keywords: [
    'personal injury lawyer',
    'New York attorney',
    'New Jersey lawyer',
    'medical malpractice',
    'car accident lawyer',
    'legal consultation',
    'Carestia Law',
    'experienced attorney',
    'legal representation'
  ],
  siteName: 'Carestia Law',
  locale: 'en_US',
  type: 'website' as const,
};

// Generate page metadata
interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = '',
  image,
  noIndex = false,
  canonical,
}: GenerateMetadataProps): Metadata {
  const fullTitle = title 
    ? `${title} | ${DEFAULT_SEO.siteName}`
    : DEFAULT_SEO.title;
  
  const metaDescription = description || DEFAULT_SEO.description;
  const url = `${BASE_URL}${path}`;
  const canonicalUrl = canonical || url;
  const ogImage = image || `${BASE_URL}/images/og-default.jpg`;
  
  const allKeywords = [...DEFAULT_SEO.keywords, ...keywords];

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: allKeywords,
    canonical: canonicalUrl,
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: DEFAULT_SEO.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: DEFAULT_SEO.locale,
      type: DEFAULT_SEO.type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: '@CarestiaLaw',
      site: '@CarestiaLaw',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
    },
  };
}

// Structured data generators
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Carestia Law",
    "alternateName": "Carestia Law Firm",
    "description": "Experienced personal injury and medical malpractice attorneys serving New York and New Jersey",
    "url": BASE_URL,
    "logo": `${BASE_URL}/images/logo.png`,
    "image": `${BASE_URL}/images/office-exterior.jpg`,
    "telephone": "+1-404-844-2799",
    "email": "info@carestialaw.com",
    "foundingDate": "2009",
    "founder": {
      "@type": "Person",
      "name": "Michael Carestia"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Legal Drive",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New York"
      },
      {
        "@type": "State", 
        "name": "New Jersey"
      }
    ],
    "serviceType": [
      "Personal Injury Law",
      "Medical Malpractice",
      "Car Accident Law",
      "Slip and Fall Law", 
      "Trucking Accident Law",
      "Sexual Harassment Law",
      "Negligent Security Law",
      "Workers' Compensation"
    ],
    "priceRange": "Free Consultation",
    "paymentAccepted": "Contingency Fee",
    "openingHours": [
      "Mo-Fr 09:00-18:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Legal Consultation"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "After my car accident, I was overwhelmed with medical bills and insurance hassles. Carestia Law took care of everything and got me a settlement far beyond what I expected."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/carestialaw",
      "https://www.linkedin.com/company/carestia-law",
      "https://twitter.com/carestialaw"
    ]
  };
}

export function generatePracticeAreaSchema(practiceArea: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `${practiceArea.name} - Carestia Law`,
    "description": practiceArea.description,
    "url": practiceArea.url,
    "serviceType": practiceArea.name,
    "provider": {
      "@type": "LegalService",
      "name": "Carestia Law",
      "telephone": "+1-404-844-2799",
      "url": BASE_URL
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "New York"
      },
      {
        "@type": "State",
        "name": "New Jersey"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${practiceArea.name} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Consultation"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "url": article.url,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": article.author || "Carestia Law"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Carestia Law",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/images/logo.png`
      }
    },
    "image": article.image || `${BASE_URL}/images/og-default.jpg`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };
}

// SEO validation helpers
export function validateMetadata(metadata: Metadata): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Title validation
  if (!metadata.title) {
    errors.push('Title is required');
  } else if (typeof metadata.title === 'string' && metadata.title.length > 60) {
    errors.push('Title should be 60 characters or less');
  }
  
  // Description validation
  if (!metadata.description) {
    errors.push('Description is required');
  } else if (metadata.description.length > 160) {
    errors.push('Description should be 160 characters or less');
  } else if (metadata.description.length < 120) {
    errors.push('Description should be at least 120 characters for optimal SEO');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Keywords helpers
export const PRACTICE_AREA_KEYWORDS = {
  'personal-injury': [
    'personal injury attorney',
    'accident lawyer', 
    'injury compensation',
    'personal injury law firm',
    'injury lawyer near me'
  ],
  'medical-malpractice': [
    'medical malpractice lawyer',
    'medical negligence attorney',
    'hospital malpractice',
    'doctor malpractice',
    'medical error lawyer'
  ],
  'car-accidents': [
    'car accident lawyer',
    'auto accident attorney', 
    'vehicle collision lawyer',
    'car crash attorney',
    'auto insurance claims'
  ],
  'slip-and-fall': [
    'slip and fall lawyer',
    'premises liability attorney',
    'trip and fall accident',
    'property accident lawyer'
  ],
  'trucking-accidents': [
    'truck accident lawyer',
    'commercial vehicle attorney',
    'semi-truck accident',
    'trucking accident law firm'
  ],
  'sexual-harassment': [
    'sexual harassment lawyer',
    'workplace harassment attorney',
    'employment discrimination',
    'hostile work environment'
  ],
  'negligent-security': [
    'negligent security lawyer',
    'inadequate security attorney',
    'property crime lawyer',
    'security negligence'
  ],
  'workers-compensation': [
    'workers compensation lawyer',
    'workplace injury attorney',
    'workers comp benefits',
    'job injury lawyer'
  ]
};

// URL helpers
export function generateCanonicalUrl(path: string): string {
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function generateSitemapUrls() {
  const baseUrls = [
    { url: BASE_URL, priority: 1.0, changefreq: 'daily' },
    { url: `${BASE_URL}/practice-areas`, priority: 0.9, changefreq: 'weekly' },
    { url: `${BASE_URL}/contact`, priority: 0.9, changefreq: 'monthly' },
    { url: `${BASE_URL}/testimonials`, priority: 0.7, changefreq: 'weekly' },
  ];

  const practiceAreaUrls = Object.keys(PRACTICE_AREA_KEYWORDS).map(slug => ({
    url: `${BASE_URL}/practice-areas/${slug}`,
    priority: 0.8,
    changefreq: 'weekly'
  }));

  return [...baseUrls, ...practiceAreaUrls];
} 