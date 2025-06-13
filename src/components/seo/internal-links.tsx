'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale, Heart, Stethoscope, Car, AlertTriangle, Truck, Shield, Camera, HardHat, Phone } from 'lucide-react';
import { PRACTICE_AREA_KEYWORDS } from '@/lib/seo';

// Define all practice areas for internal linking
export const PRACTICE_AREAS = [
  {
    title: 'Personal Injury',
    slug: 'personal-injury',
    icon: Heart,
    description: 'Comprehensive legal representation for accident victims',
    keywords: PRACTICE_AREA_KEYWORDS['personal-injury']
  },
  {
    title: 'Medical Malpractice',
    slug: 'medical-malpractice',
    icon: Stethoscope,
    description: 'Fighting for victims of medical negligence',
    keywords: PRACTICE_AREA_KEYWORDS['medical-malpractice']
  },
  {
    title: 'Car Accidents',
    slug: 'car-accidents',
    icon: Car,
    description: 'Maximum compensation for vehicle accident victims',
    keywords: PRACTICE_AREA_KEYWORDS['car-accidents']
  },
  {
    title: 'Slip and Fall',
    slug: 'slip-and-fall',
    icon: Scale,
    description: 'Premises liability and property accident claims',
    keywords: PRACTICE_AREA_KEYWORDS['slip-and-fall']
  },
  {
    title: 'Trucking Accidents',
    slug: 'trucking-accidents',
    icon: Truck,
    description: 'Complex commercial vehicle accident representation',
    keywords: PRACTICE_AREA_KEYWORDS['trucking-accidents']
  },
  {
    title: 'Sexual Harassment',
    slug: 'sexual-harassment',
    icon: Shield,
    description: 'Workplace harassment and discrimination cases',
    keywords: PRACTICE_AREA_KEYWORDS['sexual-harassment']
  },
  {
    title: 'Negligent Security',
    slug: 'negligent-security',
    icon: Camera,
    description: 'Inadequate security and premises liability',
    keywords: PRACTICE_AREA_KEYWORDS['negligent-security']
  },
  {
    title: 'Workers\' Compensation',
    slug: 'workers-compensation',
    icon: HardHat,
    description: 'Workplace injury and compensation claims',
    keywords: PRACTICE_AREA_KEYWORDS['workers-compensation']
  }
];

// Related content suggestions based on current page
interface RelatedLinksProps {
  currentSlug?: string;
  maxLinks?: number;
  showDescription?: boolean;
  className?: string;
}

export function RelatedPracticeAreas({ 
  currentSlug, 
  maxLinks = 3, 
  showDescription = true, 
  className = '' 
}: RelatedLinksProps) {
  // Filter out current page and get related areas
  const relatedAreas = PRACTICE_AREAS
    .filter(area => area.slug !== currentSlug)
    .slice(0, maxLinks);

  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Related Practice Areas
      </h3>
      <div className="space-y-4">
        {relatedAreas.map((area) => {
          const IconComponent = area.icon;
          return (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <IconComponent className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {area.title}
                </h4>
                {showDescription && (
                  <p className="text-sm text-gray-600 mt-1">
                    {area.description}
                  </p>
                )}
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Important site pages for internal linking
export const IMPORTANT_PAGES = [
  {
    title: 'Contact Us',
    href: '/contact',
    description: 'Get your free consultation today'
  },
  {
    title: 'Client Testimonials',
    href: '/testimonials',
    description: 'See what our clients say about us'
  },
  {
    title: 'Practice Areas',
    href: '/practice-areas',
    description: 'All our legal services'
  }
];

// Call-to-action internal links
interface CTALinksProps {
  variant?: 'horizontal' | 'vertical';
  showIcons?: boolean;
  className?: string;
}

export function CTAInternalLinks({ 
  variant = 'horizontal', 
  showIcons = true, 
  className = '' 
}: CTALinksProps) {
  const linkClass = variant === 'horizontal' 
    ? 'flex-1' 
    : 'w-full';

  const containerClass = variant === 'horizontal'
    ? 'flex space-x-4'
    : 'space-y-4';

  return (
    <div className={`${containerClass} ${className}`}>
      <Link
        href="/contact"
        className={`${linkClass} bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center inline-flex items-center justify-center space-x-2`}
      >
        {showIcons && <Phone className="h-5 w-5" />}
        <span>Free Consultation</span>
      </Link>
      
      <Link
        href="/practice-areas"
        className={`${linkClass} border border-gray-300 hover:border-yellow-600 text-gray-700 hover:text-yellow-600 px-6 py-3 rounded-lg font-medium transition-colors text-center inline-flex items-center justify-center space-x-2`}
      >
        {showIcons && <Scale className="h-5 w-5" />}
        <span>Our Services</span>
      </Link>
    </div>
  );
}

// Contextual internal links based on keywords
interface ContextualLinksProps {
  keywords: string[];
  currentPath: string;
  maxSuggestions?: number;
}

export function ContextualInternalLinks({ 
  keywords, 
  currentPath, 
  maxSuggestions = 4 
}: ContextualLinksProps) {
  // Find related practice areas based on keyword overlap
  const suggestions = PRACTICE_AREAS
    .filter(area => area.slug !== currentPath.split('/').pop())
    .map(area => ({
      ...area,
      relevanceScore: area.keywords.filter(keyword => 
        keywords.some(userKeyword => 
          keyword.toLowerCase().includes(userKeyword.toLowerCase()) ||
          userKeyword.toLowerCase().includes(keyword.toLowerCase())
        )
      ).length
    }))
    .filter(area => area.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, maxSuggestions);

  if (suggestions.length === 0) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
      <h4 className="text-sm font-medium text-blue-900 mb-3">
        You might also be interested in:
      </h4>
      <div className="space-y-2">
        {suggestions.map((suggestion) => (
          <Link
            key={suggestion.slug}
            href={`/practice-areas/${suggestion.slug}`}
            className="block text-sm text-blue-700 hover:text-blue-900 hover:underline"
          >
            • {suggestion.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Footer internal links for SEO
export function FooterInternalLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h4 className="font-semibold text-white mb-4">Practice Areas</h4>
        <ul className="space-y-2">
          {PRACTICE_AREAS.slice(0, 4).map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                {area.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-white mb-4">More Services</h4>
        <ul className="space-y-2">
          {PRACTICE_AREAS.slice(4).map((area) => (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                {area.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {IMPORTANT_PAGES.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Sidebar navigation for practice areas
export function PracticeAreaNavigation({ currentSlug }: { currentSlug?: string }) {
  return (
    <nav className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
      <h3 className="font-semibold text-gray-900 mb-4">All Practice Areas</h3>
      <ul className="space-y-2">
        {PRACTICE_AREAS.map((area) => {
          const IconComponent = area.icon;
          const isActive = area.slug === currentSlug;
          
          return (
            <li key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-yellow-600'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm font-medium">{area.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <Link
          href="/contact"
          className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Free Consultation
        </Link>
      </div>
    </nav>
  );
} 