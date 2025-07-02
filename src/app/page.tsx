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
  "description": "Compassionate support and legal guidance for car accident victims in Atlanta. We're here to help you through this difficult time.",
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
      "name": "I just had a car accident in Atlanta. What should I do first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First, make sure you're safe and get medical help if needed. Call 911, take photos if you can, exchange information with the other driver, and contact your insurance. Don't admit fault or sign anything yet. We're here to guide you through every step."
      }
    },
    {
      "@type": "Question",
      "name": "Do I really need a lawyer for my car accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you were hurt, the other driver was at fault, or their insurance is giving you the runaround, a lawyer can help protect your rights and get you fair compensation. Most offer free consultations, so there's no risk in finding out your options."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to take action after my accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Georgia, you generally have 2 years to file a lawsuit, but it's important to start gathering evidence and talking to lawyers much sooner. Insurance companies work fast, and evidence can disappear quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What can I get compensation for after my accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may be able to get help with medical bills, lost wages, car repairs, pain and suffering, and future medical care. Every case is different, which is why it's worth talking to an experienced attorney about your specific situation."
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
        <main id="main-content" role="main" aria-label="Car Crashes in Atlanta - Help When You Need It Most">
          {/* Hero Section */}
          <HeroSection className="modern-hero-2025" />
          
          {/* Immediate Support Section */}
          <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50 border-t-4 border-orange-400" aria-labelledby="immediate-support-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="immediate-support-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  You're Going Through Something Terrible
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Car accidents are traumatic, confusing, and overwhelming. You're probably feeling scared, 
                  angry, or lost right now. That's completely normal. We're here to help you figure out what to do next.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-400 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-red-500 bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">1</span>
                    <h3 className="font-bold text-gray-900 text-lg">Take Care of Yourself</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">Your health comes first. Get checked by a doctor even if you feel okay. Shock can hide injuries.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-orange-500 bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">2</span>
                    <h3 className="font-bold text-gray-900 text-lg">Protect Your Rights</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">Don't let insurance companies pressure you. You have rights, and we'll help you understand them.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-400 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-blue-500 bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">3</span>
                    <h3 className="font-bold text-gray-900 text-lg">Get Expert Help</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">You don't have to face this alone. Connect with attorneys who've helped hundreds of people like you.</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-400 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-green-500 bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">4</span>
                    <h3 className="font-bold text-gray-900 text-lg">Focus on Healing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">Let the legal experts handle the complicated stuff while you focus on getting better.</p>
                </div>
              </div>
              
              <div className="text-center mt-16">
                <a 
                  href="/what-to-do-after-car-accident" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-lg"
                >
                  Show Me What to Do Next
                </a>
              </div>
            </div>
          </section>
          
          {/* Understanding Section */}
          <section className="py-20 bg-white" aria-labelledby="understanding-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 id="understanding-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    We Understand What 
                    <span className="block text-blue-600">You're Going Through</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      After a car accident, everything feels overwhelming. The other driver's insurance is calling constantly. 
                      You're getting bills from doctors. Your car is damaged. You might be missing work and losing income.
                    </p>
                    <p>
                      Meanwhile, you're trying to recover from injuries that might be more serious than you first thought. 
                      You're probably wondering: "What are my options? How do I protect myself? Can I afford a lawyer?"
                    </p>
                    <p className="font-semibold text-blue-700">
                      Here's the truth: You have more options than you think, and getting help doesn't have to cost you anything upfront.
                    </p>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start space-x-4">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <p className="text-gray-700">Most car accident lawyers work on contingency - no win, no fee</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <p className="text-gray-700">Free consultations to understand your rights with no pressure</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <span className="text-green-500 font-bold text-xl">✓</span>
                      <p className="text-gray-700">Experienced advocates who deal with insurance companies daily</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="/understanding-your-rights" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Learn About Your Rights
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">⚠️ Don't Make These Common Mistakes</h3>
                    <ul className="space-y-3 text-yellow-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">×</span>
                        <span>Accepting the first settlement offer (usually way too low)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">×</span>
                        <span>Giving recorded statements without a lawyer present</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">×</span>
                        <span>Admitting fault when you're not sure what happened</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3 font-bold">×</span>
                        <span>Waiting too long to get medical attention</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">💙 Remember: This Isn't Your Fault</h3>
                    <p className="text-blue-700 leading-relaxed">
                      You didn't ask for this to happen. You're not overreacting by seeking help. You deserve fair compensation 
                      for what you've been through. Taking care of yourself and your family is the most important thing right now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Help Connection Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50" aria-labelledby="connection-heading">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 id="connection-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Connect with People Who 
                  <span className="block text-blue-600">Actually Care About You</span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  We work with attorneys who understand that you're a person, not just a case number. 
                  They've helped hundreds of people in your exact situation get their lives back on track.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">They Listen to You</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These attorneys take time to understand your story, your pain, and your goals. 
                    You're not just another file on their desk.
                  </p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">They Fight for You</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Insurance companies try to pay as little as possible. These attorneys know their tricks 
                    and won't let you get taken advantage of.
                  </p>
                </div>
                
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">They Get Results</h3>
                  <p className="text-gray-700 leading-relaxed">
                    On average, people with attorneys get 3-4 times more compensation than those who handle it alone. 
                    That's life-changing money.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <a 
                    href="/find-attorney" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-lg w-full"
                  >
                    Find the Right Attorney for Me
                  </a>
                  <p className="text-gray-600 mt-3 text-sm">Free consultations • No pressure • No upfront costs</p>
                </div>
                <div className="text-center">
                  <a 
                    href="/ai-case-builder" 
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 text-lg w-full"
                  >
                    Build My Case Online First
                  </a>
                  <p className="text-gray-600 mt-3 text-sm">Organize your evidence • Get case insights • Be prepared</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Success Stories Section */}
          <TestimonialsSection />
          
          {/* Contact Form Section */}
          <ContactFormSection />
          
          {/* Support Section */}
          <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700" aria-labelledby="support-heading">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 id="support-heading" className="text-3xl md:text-4xl font-bold text-white mb-8">
                You Don't Have to Figure This Out Alone
              </h2>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Whether you need immediate guidance, want to understand your options, or you're ready to talk to an attorney, 
                we're here to help every step of the way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="tel:4048442799" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                >
                  <span className="text-2xl mr-3">📞</span>
                  Call Us Right Now
                </a>
                
                <div className="text-indigo-200 font-medium">
                  <p>(404) 844-2799</p>
                  <p className="text-sm">Available 24/7 • Someone is always here to help</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
}
