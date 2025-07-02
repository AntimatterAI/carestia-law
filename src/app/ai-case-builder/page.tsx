import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { AICaseBuilder } from '@/components/sections/ai-case-builder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Case Builder - Build Your Car Accident Case | Car Crashes in Atlanta',
  description: 'Upload evidence, get AI-powered case analysis, and export professional reports. Build a stronger car accident case with our intelligent case builder tool.',
  keywords: [
    'AI case builder',
    'car accident case analysis',
    'evidence organizer',
    'case strength analysis',
    'legal document builder',
    'accident case evaluation',
    'settlement estimator',
    'case value calculator'
  ],
  openGraph: {
    title: 'AI Case Builder - Build Your Car Accident Case',
    description: 'Upload evidence, get AI analysis, and export professional reports for your car accident case.',
    type: 'website',
  },
};

// Structured data for AI Case Builder page
const aiCaseBuilderSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AI Case Builder",
  "description": "AI-powered tool to analyze car accident cases and generate professional reports",
  "url": "https://www.carcrashatl.com/ai-case-builder",
  "applicationCategory": "LegalApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Evidence upload and organization",
    "AI-powered case analysis",
    "Case strength scoring",
    "Settlement value estimation",
    "Professional report generation",
    "Document export functionality"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Car Crashes in Atlanta",
    "url": "https://www.carcrashatl.com"
  }
};

export default function AICaseBuilderPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiCaseBuilderSchema),
        }}
      />
      
      <ModernLayout>
        <main id="main-content" role="main" aria-label="AI Case Builder Tool">
          <AICaseBuilder />
          
          {/* Additional Information Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How the AI Case Builder Helps Your Case
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Accident Victims</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Organize all evidence in one secure location</li>
                    <li>• Understand your case strength before meeting attorneys</li>
                    <li>• Get estimated settlement value ranges</li>
                    <li>• Identify critical actions and deadlines</li>
                    <li>• Create professional case presentations</li>
                    <li>• Save time and improve attorney consultations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">For Attorneys</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Receive well-organized case information</li>
                    <li>• Review evidence quality before consultation</li>
                    <li>• Faster case evaluation and decision making</li>
                    <li>• Better prepared clients from day one</li>
                    <li>• Streamlined intake process</li>
                    <li>• Higher quality lead generation</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Privacy & Security</h3>
                <p className="text-blue-800">
                  Your information is processed locally and securely. We use industry-standard encryption 
                  and do not store your personal information or case details on our servers. All data 
                  remains under your control and can be deleted at any time.
                </p>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
} 