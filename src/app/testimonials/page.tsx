import { ModernLayout } from '@/components/layout';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - Success Stories | Carestia Law',
  description: 'Read real testimonials from our satisfied clients. See how Carestia Law helped them win their cases and get the compensation they deserved.',
  keywords: [
    'client testimonials',
    'success stories',
    'legal reviews',
    'client satisfaction',
    'case results',
    'lawyer reviews',
    'Carestia Law reviews',
    'personal injury testimonials',
    'legal client feedback'
  ],
  openGraph: {
    title: 'Client Testimonials - Success Stories | Carestia Law',
    description: 'Read real testimonials from our satisfied clients who received justice and compensation.',
    type: 'website',
  },
};

// Structured data for testimonials page
const testimonialsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Client Testimonials - Carestia Law",
  "description": "Real testimonials from satisfied clients who received justice and compensation through Carestia Law.",
  "url": "https://carestialaw.com/testimonials",
  "mainEntity": {
    "@type": "Review",
    "name": "Client Reviews for Carestia Law",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "5"
    }
  }
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsStructuredData),
        }}
      />
      
      <ModernLayout>
        <main role="main" aria-label="Client Testimonials">
          <TestimonialsSection />
          
          {/* Additional testimonials info section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-black mb-6">
                Why Our Clients Choose Us
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Personal Attention</h3>
                  <p className="text-gray-600">Every client receives direct access to experienced attorneys, not paralegals.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">No Fees Unless We Win</h3>
                  <p className="text-gray-600">We work on contingency, so you pay nothing unless we secure a favorable outcome.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Proven Results</h3>
                  <p className="text-gray-600">Over $50 million recovered for clients with a 98% success rate.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
} 