import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { HeroSection } from '@/components/sections/hero-section';
import { PracticeAreasSection } from '@/components/sections/practice-areas-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { generateLocalBusinessSchema } from '@/lib/seo';

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
        <main id="main-content" role="main" aria-label="Carestia Law - Expert Legal Representation">
          {/* Hero Section - Critical above-the-fold content */}
          <HeroSection className="modern-hero-2025" />
          
          {/* Practice Areas Section - Lazy loaded */}
          <PracticeAreasSection />
          
          {/* About Section - Optimized inline content */}
          <section className="py-24 bg-white below-the-fold" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Experienced Legal Advocates 
                  <span className="block text-amber-700">Fighting for Your Rights</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  For over two decades, Carestia Law has provided exceptional legal representation 
                  with unwavering commitment to achieving the best possible outcomes for our clients.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black" aria-hidden="true">15+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Years of Experience</h3>
                  <p className="text-gray-700">Decades of courtroom success and legal expertise</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black" aria-hidden="true">500+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Successful Cases</h3>
                  <p className="text-gray-700">Proven track record of favorable outcomes</p>
                </div>
                
                <div className="text-center p-6 md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black" aria-hidden="true">24/7</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Always Available</h3>
                  <p className="text-gray-700">Emergency legal support when you need it most</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/about-us" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-describedby="learn-more-description"
                >
                  Learn More About Our Firm
                </a>
                <p id="learn-more-description" className="sr-only">
                  Learn more about Carestia Law's history, experience, and commitment to clients
                </p>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section - Social proof */}
          <TestimonialsSection />
          
          {/* Contact Form Section - Lead generation */}
          <ContactFormSection />
          
          {/* Emergency Contact Section */}
          <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 below-the-fold" aria-labelledby="emergency-heading">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 id="emergency-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Legal Help Right Now?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Don't wait. Legal matters are time-sensitive. Contact us immediately for urgent legal assistance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:4048442799" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600"
                  aria-label="Call Carestia Law emergency line at 4 0 4 8 4 4 2 7 9 9"
                >
                  <span className="text-lg">📞</span>
                  <span className="ml-2">Call (404) 844-2799</span>
                </a>
                
                <span className="text-white/80 font-medium">Available 24/7 for Emergencies</span>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
}
