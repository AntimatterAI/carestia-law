import { ModernLayout } from '@/components/layout';
import { PracticeAreasSection } from '@/components/sections/practice-areas-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Areas - Expert Legal Representation | Carestia Law',
  description: 'Comprehensive legal services including personal injury, medical malpractice, car accidents, and more. Experienced attorneys fighting for your rights in Georgia.',
  keywords: [
    'practice areas',
    'legal services',
    'personal injury',
    'medical malpractice',
    'car accidents',
    'slip and fall',
    'trucking accidents',
    'sexual harassment',
    'negligent security',
    'workers compensation',
    'Georgia attorneys',
    'Atlanta lawyers'
  ],
  openGraph: {
    title: 'Practice Areas - Expert Legal Representation | Carestia Law',
    description: 'Comprehensive legal services with 15+ years experience. Free consultation available.',
    type: 'website',
  },
};

// Structured data for practice areas page
const practiceAreasStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Practice Areas - Carestia Law",
  "description": "Comprehensive legal services including personal injury, medical malpractice, and more.",
  "url": "https://carestialaw.com/practice-areas",
  "mainEntity": {
    "@type": "LegalService",
    "name": "Carestia Law Practice Areas",
    "serviceType": [
      "Personal Injury Law",
      "Medical Malpractice",
      "Car Accident Law",
      "Slip and Fall Law",
      "Trucking Accident Law",
      "Sexual Harassment Law",
      "Negligent Security Law",
      "Workers' Compensation"
    ]
  }
};

export default function PracticeAreasPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(practiceAreasStructuredData),
        }}
      />
      
      <ModernLayout>
        <main role="main" aria-label="Practice Areas">
          <PracticeAreasSection />
          
          {/* Modern CTA Section */}
          <section className="py-24 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready to Get Started?
                  <span className="block text-gold-rich">Your Legal Journey Begins Here</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Don't wait to get the legal help you need. Contact us today for your free consultation 
                  and let our experienced attorneys guide you through your legal challenges.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Schedule Free Consultation
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