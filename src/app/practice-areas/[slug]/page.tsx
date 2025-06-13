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

  return {
    title: `${practiceArea.title} Attorney - Expert Legal Representation`,
    description: practiceArea.shortDescription,
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