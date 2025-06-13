'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema, BASE_URL } from '@/lib/seo';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export function Breadcrumb({ items, className = '', showHome = true }: BreadcrumbProps) {
  // Prepare breadcrumb data for structured data
  const breadcrumbData = showHome 
    ? [{ name: 'Home', url: BASE_URL }, ...items.map(item => ({ name: item.label, url: `${BASE_URL}${item.href}` }))]
    : items.map(item => ({ name: item.label, url: `${BASE_URL}${item.href}` }));

  const structuredData = generateBreadcrumbSchema(breadcrumbData);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <nav 
        aria-label="Breadcrumb navigation" 
        className={`breadcrumb-nav ${className}`}
        role="navigation"
      >
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {showHome && (
            <>
              <li>
                <Link 
                  href="/" 
                  className="flex items-center hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded"
                  aria-label="Go to homepage"
                >
                  <Home className="h-4 w-4 mr-1" aria-hidden="true" />
                  <span className="sr-only sm:not-sr-only">Home</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </li>
            </>
          )}
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <React.Fragment key={item.href}>
                <li>
                  {isLast || item.isCurrentPage ? (
                    <span 
                      className="text-gray-900 font-medium"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link 
                      href={item.href}
                      className="hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
                
                {!isLast && (
                  <li>
                    <ChevronRight className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// Helper function to generate common breadcrumb patterns
export function generatePracticeAreaBreadcrumbs(practiceAreaName: string, practiceAreaSlug: string): BreadcrumbItem[] {
  return [
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: practiceAreaName, href: `/practice-areas/${practiceAreaSlug}`, isCurrentPage: true }
  ];
}

export function generateContactBreadcrumbs(): BreadcrumbItem[] {
  return [
    { label: 'Contact Us', href: '/contact', isCurrentPage: true }
  ];
}

export function generateTestimonialsBreadcrumbs(): BreadcrumbItem[] {
  return [
    { label: 'Client Testimonials', href: '/testimonials', isCurrentPage: true }
  ];
}

// Breadcrumb wrapper component with consistent styling
export function BreadcrumbContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gray-50 py-4 border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
} 