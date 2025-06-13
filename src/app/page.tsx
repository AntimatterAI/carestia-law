import { HeroSection } from '@/components/sections/hero-section';
import { PracticeAreasSection } from '@/components/sections/practice-areas-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ModernLayout } from '@/components/layout';
import { generateMetadata, generateLocalBusinessSchema, BASE_URL } from '@/lib/seo';
import type { Metadata } from 'next';

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
          {/* Hero Section - Modern 2025 Design */}
          <HeroSection 
            className="modern-hero-2025"
          />
          
          {/* Practice Areas Section */}
          <PracticeAreasSection />
          
          {/* About Section - Modern Minimalist */}
          <section className="py-24 bg-white" aria-label="About Carestia Law">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                      Dedicated Legal
                      <span className="block text-gold-rich">Excellence Since 1998</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      For over two decades, Carestia Law has been providing exceptional legal representation 
                      with a commitment to achieving the best possible outcomes for our clients.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-8">
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl md:transition-all md:duration-300 md:hover:shadow-lg md:hover:scale-105">
                      <div className="text-xl md:text-3xl font-bold text-gold-rich mb-1 md:mb-2">15+</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Years Experience</div>
                    </div>
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl md:transition-all md:duration-300 md:hover:shadow-lg md:hover:scale-105">
                      <div className="text-xl md:text-3xl font-bold text-gold-rich mb-1 md:mb-2">500+</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Cases Won</div>
                    </div>
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl md:transition-all md:duration-300 md:hover:shadow-lg md:hover:scale-105">
                      <div className="text-xl md:text-3xl font-bold text-gold-rich mb-1 md:mb-2">98%</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Client Satisfaction</div>
                    </div>
                    <div className="text-center p-3 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg md:rounded-xl md:transition-all md:duration-300 md:hover:shadow-lg md:hover:scale-105">
                      <div className="text-xl md:text-3xl font-bold text-gold-rich mb-1 md:mb-2">24/7</div>
                      <div className="text-gray-700 font-medium text-xs md:text-base">Availability</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Schedule Consultation
                    </a>
                    <a 
                      href="/practice-areas" 
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-rich text-gold-warm hover:bg-gold-rich hover:text-black font-bold rounded-lg transition-all duration-300"
                    >
                      View Practice Areas
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gold-champagne to-gold-rich rounded-2xl shadow-2xl flex items-center justify-center">
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
          
          {/* Testimonials Section */}
          <TestimonialsSection />
          
          {/* CTA Section - Bold Modern Design */}
          <section className="py-24 bg-black text-white" aria-label="Contact Carestia Law">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready to Get Started?
                  <span className="block text-gold-rich">Your Legal Journey Begins Here</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Don't wait to protect your rights. Contact us today for a free consultation 
                  and let our experienced attorneys guide you through your legal challenges.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Free Consultation
                  </a>
                  
                  <a 
                    href="tel:4048442799" 
                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-black font-bold text-lg rounded-lg transition-all duration-300"
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
