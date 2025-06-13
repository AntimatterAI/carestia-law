import dynamic from 'next/dynamic';
import { ModernLayout } from '@/components/layout';
import { generateMetadata, generateLocalBusinessSchema, BASE_URL } from '@/lib/seo';
import type { Metadata } from 'next';

// Dynamic imports for better performance - code splitting
const HeroSection = dynamic(() => import('@/components/sections/hero-section').then(mod => ({ default: mod.HeroSection })), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  )
});

const PracticeAreasSection = dynamic(() => import('@/components/sections/practice-areas-section').then(mod => ({ default: mod.PracticeAreasSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>
});

const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg"></div>
});

// SEO Metadata for Homepage
export const metadata: Metadata = generateMetadata({
  title: 'Expert Legal Representation - Carestia Law',
  description: 'Leading law firm providing expert legal representation with decades of courtroom success. Specializing in personal injury, criminal defense, and civil litigation.',
  keywords: [
    'expert lawyers',
    'legal representation',
    'personal injury attorney',
    'criminal defense lawyer',
    'civil litigation',
    'experienced attorneys',
    'courtroom success',
    'law firm',
    'legal services',
    'attorney consultation'
  ],
  path: '/',
});

// Organization Schema for SEO
const organizationSchema = generateLocalBusinessSchema();

// FAQ Schema for homepage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of legal cases do you handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle a wide range of legal matters including personal injury, criminal defense, civil litigation, family law, employment law, real estate law, business law, and estate planning."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free consultations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer free initial consultations for most case types. This allows us to evaluate your case and discuss your legal options without any upfront cost."
      }
    },
    {
      "@type": "Question",
      "name": "How much do your legal services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our fees vary depending on the type of case and complexity. For personal injury cases, we typically work on a contingency fee basis, meaning you pay nothing unless we win your case."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical case take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline varies greatly depending on the type and complexity of your case. During your consultation, we can provide a more specific timeline based on your particular situation."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ModernLayout>
        <main role="main" aria-label="Carestia Law - Expert Legal Representation">
          {/* Hero Section - Critical above-the-fold content */}
          <HeroSection className="modern-hero-2025" />
          
          {/* Practice Areas Section - Lazy loaded */}
          <PracticeAreasSection />
          
          {/* About Section - Optimized inline content */}
          <section className="py-24 bg-white below-the-fold" aria-label="About Carestia Law">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                      Dedicated Legal
                      <span className="block text-yellow-600">Excellence Since 1998</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      For over two decades, Carestia Law has been providing exceptional legal representation 
                      with a commitment to achieving the best possible outcomes for our clients.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-8">
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl">
                      <div className="text-xl md:text-3xl font-bold text-yellow-600 mb-1 md:mb-2">15+</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Years Experience</div>
                    </div>
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl">
                      <div className="text-xl md:text-3xl font-bold text-yellow-600 mb-1 md:mb-2">500+</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Cases Won</div>
                    </div>
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl">
                      <div className="text-xl md:text-3xl font-bold text-yellow-600 mb-1 md:mb-2">98%</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl">
                      <div className="text-xl md:text-3xl font-bold text-yellow-600 mb-1 md:mb-2">24/7</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Availability</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/contact" 
                      className="btn-modern-primary"
                    >
                      Schedule Consultation
                    </a>
                    <a 
                      href="/practice-areas" 
                      className="btn-modern-secondary"
                    >
                      View Practice Areas
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-center text-black">
                      <div className="w-24 h-24 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl">⚖️</span>
                      </div>
                      <p className="font-bold text-lg">Professional Excellence</p>
                      <p className="text-sm opacity-80">Dedicated Legal Representation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section - Lazy loaded */}
          <TestimonialsSection />
          
          {/* CTA Section - Optimized inline content */}
          <section className="py-24 bg-black text-white below-the-fold" aria-label="Contact Carestia Law">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready to Get Started?
                  <span className="block text-yellow-400">Your Legal Journey Begins Here</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Don't wait to protect your rights. Contact us today for a free consultation 
                  and let our experienced attorneys guide you through your legal challenges.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors duration-200"
                  >
                    Get Free Consultation
                  </a>
                  
                  <a 
                    href="tel:4048442799" 
                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg rounded-lg transition-colors duration-200"
                  >
                    Call (404) 844-2799
                  </a>
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="text-sm">Available 24/7 • Free Consultation • No Obligation</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
}
