import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PracticeAreaTemplate } from '@/components/sections/practice-area-template';
import { getPracticeAreaBySlug, getAllPracticeAreaSlugs } from '@/data/practice-areas';

interface PracticeAreaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all practice areas
export async function generateStaticParams() {
  const slugs = getAllPracticeAreaSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each practice area page
export async function generateMetadata({ params }: PracticeAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const practiceArea = getPracticeAreaBySlug(slug);
  
  if (!practiceArea) {
    return {
      title: 'Practice Area Not Found | Carestia Law',
      description: 'The requested practice area page could not be found.',
    };
  }

  const pageTitle = `${practiceArea.title} Attorney | Carestia Law`;
  const pageDescription = practiceArea.shortDescription;
  const pageUrl = `https://www.carcrashatl.com/practice-areas/${slug}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      practiceArea.title.toLowerCase(),
      `${practiceArea.title.toLowerCase()} lawyer`,
      `${practiceArea.title.toLowerCase()} attorney`,
      'legal representation',
      'personal injury',
      'compensation',
      'free consultation',
      'experienced attorney',
      'carestia law'
    ].join(', '),
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: 'Carestia Law',
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: `${practiceArea.title} Attorney - Carestia Law`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/images/og-default.jpg'],
      creator: '@CarestiaLaw',
      site: '@CarestiaLaw'
    },
    alternates: {
      canonical: pageUrl
    }
  };
}

export default async function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const { slug } = await params;
  const practiceArea = getPracticeAreaBySlug(slug);
  
  if (!practiceArea) {
    notFound();
  }

  // Basic structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": practiceArea.title,
    "description": practiceArea.fullDescription,
    "provider": {
      "@type": "LegalService",
      "name": "Carestia Law",
      "telephone": "(404) 844-2799"
    }
  };

  return (
    <PracticeAreaTemplate 
      practiceArea={practiceArea} 
      structuredData={structuredData}
    />
  );
} 