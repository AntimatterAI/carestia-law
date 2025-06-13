import { ModernLayout } from '@/components/layout';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { BreadcrumbContainer, Breadcrumb, type BreadcrumbItem } from '@/components/ui/breadcrumb';
import { generateMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us - Free Legal Consultation',
  description: 'Contact Carestia Law for your free legal consultation. Experienced attorneys available 24/7 for personal injury, medical malpractice, and more in NY & NJ.',
  keywords: [
    'contact lawyer',
    'free consultation',
    'legal advice',
    'attorney consultation',
    'personal injury lawyer',
    'contact Carestia Law',
    'legal help',
    'law firm contact',
    '24/7 available'
  ],
  path: '/contact',
});

// Structured data for contact page
const contactPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Carestia Law",
  "description": "Contact page for Carestia Law - experienced attorneys providing free consultations",
  "url": "https://carestialaw.com/contact",
  "mainEntity": {
    "@type": "LegalService",
    "name": "Carestia Law",
    "telephone": "+1-404-844-2799",
    "email": "info@carestialaw.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": ["NY", "NJ"],
      "addressCountry": "US"
    },
    "availableLanguage": "English",
    "priceRange": "Free Consultation",
    "openingHours": [
      "Mo-Fr 09:00-18:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Legal Consultation"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  }
};

// Define breadcrumb items on server side
const contactBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Contact Us', href: '/contact', isCurrentPage: true }
];

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageStructuredData),
        }}
      />
      
      <ModernLayout>
        <main role="main" aria-label="Contact Carestia Law">
          <BreadcrumbContainer>
            <Breadcrumb items={contactBreadcrumbs} />
          </BreadcrumbContainer>
          <ContactFormSection />
          
          {/* Additional Information Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Why Choose Our Free Consultation?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our consultation is designed to give you clarity and peace of mind about your legal situation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Case Review</h3>
                  <p className="text-gray-600">We'll review the details of your case and assess its strength and potential value.</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Legal Options</h3>
                  <p className="text-gray-600">We'll explain your legal options and the best path forward for your situation.</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Timeline & Process</h3>
                  <p className="text-gray-600">We'll outline the expected timeline and walk you through our proven legal process.</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-2xl">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">Next Steps</h3>
                  <p className="text-gray-600">If we're a good fit, we'll discuss next steps. No pressure, no obligation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Common questions about our consultation process and legal services.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Is the consultation really free?
                  </h3>
                  <p className="text-gray-700">
                    Yes, absolutely. Our initial consultation is completely free with no hidden fees or obligations. 
                    We believe everyone deserves access to legal advice to understand their rights and options.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    How long does the consultation take?
                  </h3>
                  <p className="text-gray-700">
                    Most consultations take 30-60 minutes, depending on the complexity of your case. 
                    We take the time needed to thoroughly understand your situation and provide meaningful advice.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Do I need to bring anything to the consultation?
                  </h3>
                  <p className="text-gray-700">
                    Bring any relevant documents such as medical records, police reports, insurance correspondence, 
                    or photos related to your case. Don't worry if you don't have everything – we can help you gather documents later.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    What if I'm not sure if I have a case?
                  </h3>
                  <p className="text-gray-700">
                    That's exactly why we offer free consultations. Many people aren't sure if they have a valid legal claim. 
                    We'll evaluate your situation and give you an honest assessment of your options.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-black mb-3">
                    How much do your services cost?
                  </h3>
                  <p className="text-gray-700">
                    We work on a contingency fee basis for most cases, which means you pay nothing unless we win. 
                    Our fees come from the settlement or judgment, not from your pocket. We'll explain all costs upfront during your consultation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Trust & Security Section */}
          <section className="py-16 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Your Information is Safe & Secure
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We take your privacy seriously and maintain the highest standards of confidentiality.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Encrypted Communication</h3>
                  <p className="text-gray-300">All form submissions are encrypted and transmitted securely.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">⚖️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Attorney-Client Privilege</h3>
                  <p className="text-gray-300">Your consultation is protected by attorney-client privilege.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold">📝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Confidential Records</h3>
                  <p className="text-gray-300">We maintain strict confidentiality of all client information.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
} 