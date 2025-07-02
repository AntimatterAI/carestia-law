import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { HeroSection } from '@/components/sections/hero-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';

// Updated Schema for Car Crashes in Atlanta resource
const resourceSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Car Crashes in Atlanta",
  "url": "https://www.carcrashatl.com",
  "description": "Comprehensive resource for car accident victims in Atlanta. Get legal help, understand your rights, and find experienced attorneys.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.carcrashatl.com/find-attorney?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// FAQ Schema for car accident resource
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I do immediately after a car accident in Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First, ensure everyone's safety and call 911 if there are injuries. Then call the police to file a report, exchange information with other drivers, take photos of the scene, and contact your insurance company. Seek medical attention even if you feel fine, as some injuries may not be immediately apparent."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a lawyer for my car accident in Atlanta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not always required, having an experienced attorney can significantly increase your chances of receiving fair compensation, especially if there are serious injuries, disputed fault, or insurance company resistance. Many attorneys offer free consultations to evaluate your case."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to file a car accident claim in Georgia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Georgia, you generally have 2 years from the date of the accident to file a personal injury lawsuit. However, it's important to contact an attorney and your insurance company as soon as possible to protect your rights and preserve evidence."
      }
    },
    {
      "@type": "Question",
      "name": "What compensation can I receive for my Atlanta car accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Compensation may include medical expenses, lost wages, property damage, pain and suffering, and future medical costs. The amount depends on the severity of injuries, impact on your life, and the circumstances of the accident."
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
          __html: JSON.stringify(resourceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ModernLayout>
        <main id="main-content" role="main" aria-label="Car Crashes in Atlanta - Your Legal Resource">
          {/* Hero Section - Critical above-the-fold content */}
          <HeroSection className="modern-hero-2025" />
          
          {/* Immediate Help Section */}
          <section className="py-16 bg-red-50 border-t-4 border-red-500" aria-labelledby="immediate-help-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 id="immediate-help-heading" className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                  🚨 Just Had an Accident? Take These Steps Now
                </h2>
                <p className="text-xl text-red-700 max-w-3xl mx-auto">
                  The actions you take immediately after a car accident can significantly impact your case. Follow this checklist:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-red-600 bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                    <h3 className="font-bold text-gray-800">Ensure Safety</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Move to safety if possible. Call 911 if anyone is injured.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-red-600 bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                    <h3 className="font-bold text-gray-800">Call Police</h3>
                  </div>
                  <p className="text-gray-600 text-sm">File an official police report, even for minor accidents.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-red-600 bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                    <h3 className="font-bold text-gray-800">Document Everything</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Take photos, exchange information, get witness contacts.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-red-600 bg-red-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                    <h3 className="font-bold text-gray-800">Get Legal Help</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Contact an experienced attorney before talking to insurance.</p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="/what-to-do-after-car-accident" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  View Complete Accident Checklist
                </a>
              </div>
            </div>
          </section>
          
          {/* Find Attorney Section */}
          <section className="py-20 bg-white" aria-labelledby="find-attorney-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="find-attorney-heading" className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Connect with Top-Rated 
                  <span className="block text-blue-600">Atlanta Car Accident Attorneys</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Don't face insurance companies alone. Our network of experienced Atlanta car accident attorneys 
                  have recovered millions for accident victims. Get matched with the right lawyer for your case.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Proven Results</h3>
                  <p className="text-gray-700">Our attorneys have recovered over $100M for Atlanta accident victims</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">No Win, No Fee</h3>
                  <p className="text-gray-700">Most attorneys work on contingency - you pay nothing unless they win</p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">🕐</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">Free Consultations</h3>
                  <p className="text-gray-700">Get your case evaluated at no cost - most respond within 24 hours</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/find-attorney" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors duration-200 text-lg mr-4"
                >
                  Find My Attorney Now
                </a>
                <a 
                  href="/free-case-evaluation" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-200 text-lg"
                >
                  Free Case Evaluation
                </a>
              </div>
            </div>
          </section>
          
          {/* Know Your Rights Section */}
          <section className="py-20 bg-gray-50" aria-labelledby="rights-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 id="rights-heading" className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                    Know Your Rights After a 
                    <span className="block text-green-600">Car Accident in Atlanta</span>
                  </h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Insurance companies are not on your side. They profit by paying you as little as possible. 
                    Understanding your rights is the first step to getting fair compensation.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold text-lg mr-3">✓</span>
                      <p className="text-gray-700">Right to medical treatment and compensation for all medical expenses</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold text-lg mr-3">✓</span>
                      <p className="text-gray-700">Right to compensation for lost wages and future earning capacity</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold text-lg mr-3">✓</span>
                      <p className="text-gray-700">Right to pain and suffering compensation for physical and emotional trauma</p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 font-bold text-lg mr-3">✓</span>
                      <p className="text-gray-700">Right to legal representation without upfront costs</p>
                    </div>
                  </div>
                  
                  <a 
                    href="/understanding-your-rights" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-200"
                  >
                    Learn More About Your Rights
                  </a>
                </div>
                
                <div className="relative">
                  <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-black mb-4">⚠️ Insurance Company Tactics to Avoid</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">×</span>
                        <span>Quick settlement offers (often 10-20% of fair value)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">×</span>
                        <span>Recorded statements used against you later</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">×</span>
                        <span>Pressure to accept fault when you're not at fault</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">×</span>
                        <span>Denial of medical treatment recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Success Stories Section */}
          <TestimonialsSection />
          
          {/* Contact Form Section */}
          <ContactFormSection />
          
          {/* Emergency Contact Section */}
          <section className="py-16 bg-gradient-to-r from-red-600 to-red-700" aria-labelledby="emergency-heading">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 id="emergency-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Legal Help Right Now?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Don't wait. Every hour matters in car accident cases. Get connected with an experienced attorney immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/emergency-help" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg">🚨</span>
                  <span className="ml-2">Get Emergency Legal Help</span>
                </a>
                
                <span className="text-white/80 font-medium">Available 24/7 for Accident Victims</span>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
}
