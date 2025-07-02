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
  "description": "Compassionate support and expert legal guidance for car accident victims in Atlanta. We understand what you're going through and we're here to help.",
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
        "text": "Take a deep breath. First, make sure you're safe and get medical help if needed. Call 911, take photos if you can, exchange information with the other driver, and contact your insurance. Don't admit fault or sign anything yet. We're here to guide you through every step."
      }
    },
    {
      "@type": "Question",
      "name": "I'm scared to talk to a lawyer. Will they pressure me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We understand that fear. The attorneys we work with are different - they listen first and only offer help if it's truly right for you. Most offer free consultations with no pressure, so you can get answers without any commitment."
      }
    },
    {
      "@type": "Question",
      "name": "How long do I have to take action after my accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Georgia, you generally have 2 years to file a lawsuit, but it's important to start gathering evidence and talking to lawyers much sooner. Insurance companies work fast, and evidence can disappear quickly. The sooner you get help, the better we can protect your rights."
      }
    },
    {
      "@type": "Question",
      "name": "What can I get help with after my accident?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may be able to get help with medical bills, lost wages, car repairs, pain and suffering, and future medical care. Every situation is different, which is why it's worth talking to an experienced attorney about your specific situation - most consultations are completely free."
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
          <section className="py-24 relative overflow-hidden" aria-labelledby="immediate-support-heading">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50" />
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400" />
            
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                <div className="inline-flex items-center space-x-2 bg-red-100 border border-red-200 rounded-full px-6 py-3 mb-8">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-red-700 font-medium text-sm">We know this is overwhelming</span>
                </div>
                
                <h2 id="immediate-support-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Right Now, Everything Feels
                  <span className="block bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    Completely Overwhelming
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  Car accidents turn your world upside down in an instant. You're probably feeling scared, confused, 
                  angry, or lost right now. Those feelings are completely normal. Take a deep breath - 
                  we're going to help you figure this out, one step at a time.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Take Care of Yourself First",
                    description: "Your health and safety matter more than anything else. Get checked by a doctor even if you feel okay. Shock and adrenaline can hide serious injuries.",
                    color: "from-red-500 to-red-600",
                    bgColor: "bg-red-50",
                    borderColor: "border-red-200",
                    icon: "🏥"
                  },
                  {
                    step: "2", 
                    title: "Don't Let Them Take Advantage",
                    description: "Insurance companies will try to pressure you into quick settlements. You have rights, and we'll help you understand exactly what they are.",
                    color: "from-orange-500 to-orange-600",
                    bgColor: "bg-orange-50",
                    borderColor: "border-orange-200", 
                    icon: "🛡️"
                  },
                  {
                    step: "3",
                    title: "You Don't Have to Do This Alone", 
                    description: "Connect with attorneys who've helped hundreds of people in your exact situation. Most offer free consultations with no pressure.",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "bg-blue-50",
                    borderColor: "border-blue-200",
                    icon: "🤝"
                  },
                  {
                    step: "4",
                    title: "Focus on Getting Your Life Back",
                    description: "While you focus on healing and recovery, let experienced advocates handle the complicated legal stuff for you.",
                    color: "from-green-500 to-green-600", 
                    bgColor: "bg-green-50",
                    borderColor: "border-green-200",
                    icon: "💚"
                  }
                ].map((item, index) => (
                  <div key={index} className={`group relative ${item.bgColor} p-8 rounded-3xl shadow-lg border-2 ${item.borderColor} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-white to-gray-100 rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600">{item.step}</span>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="font-bold text-gray-900 text-xl mb-3 leading-tight">{item.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-center">{item.description}</p>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-20">
                <a 
                  href="/what-to-do-after-car-accident" 
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Show Me Exactly What to Do Next
                  <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-gray-600 mt-4 text-sm">Detailed step-by-step guide • Free to access • No signup required</p>
              </div>
            </div>
          </section>
          
          {/* Understanding Section */}
          <section className="py-24 bg-white relative overflow-hidden" aria-labelledby="understanding-heading">
            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30" />
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
                    <span className="text-blue-700 font-medium text-sm">We've been where you are</span>
                  </div>
                  
                  <h2 id="understanding-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
                    We Actually Understand 
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      What You're Going Through
                    </span>
                  </h2>
                  
                  <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      <p>
                        <strong className="text-gray-900">Your phone won't stop ringing</strong> with insurance adjusters 
                        who seem friendly but are actually trying to get you to say something that hurts your case.
                      </p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      <p>
                        <strong className="text-gray-900">Medical bills are piling up</strong> and you're worried about 
                        money while trying to recover from injuries that might be worse than you first thought.
                      </p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
                      <p>
                        <strong className="text-gray-900">You're missing work</strong> and losing income at the worst 
                        possible time, wondering if you can afford a lawyer or if you even need one.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">Here's what most people don't know:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-emerald-800"><strong>Most car accident lawyers work on contingency</strong> - meaning you pay nothing unless they win your case</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-emerald-800"><strong>Free consultations are standard</strong> - you can understand your rights and options without any pressure or cost</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="text-emerald-800"><strong>People with attorneys get 3-4x more compensation</strong> on average than those who handle it alone</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <a 
                      href="/understanding-your-rights" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Learn About Your Rights
                    </a>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative p-8 border-2 border-yellow-200 rounded-3xl bg-gradient-to-r from-yellow-50 to-orange-50">
                      <div className="flex items-center mb-6">
                        <div className="text-3xl mr-4">⚠️</div>
                        <h3 className="text-2xl font-bold text-yellow-800">Don't Make These Costly Mistakes</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          "Accepting the first settlement offer (usually 10-30% of what you deserve)",
                          "Giving recorded statements without legal advice",
                          "Admitting fault when you're not sure what happened",
                          "Waiting too long to seek medical attention",
                          "Trusting that insurance companies have your best interests at heart"
                        ].map((mistake, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <span className="text-red-500 font-bold text-xl flex-shrink-0 mt-1">×</span>
                            <span className="text-yellow-800 font-medium">{mistake}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative p-8 border-2 border-blue-200 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50">
                      <div className="flex items-center mb-6">
                        <div className="text-3xl mr-4">💙</div>
                        <h3 className="text-2xl font-bold text-blue-800">Remember: This Isn't Your Fault</h3>
                      </div>
                      <p className="text-blue-800 leading-relaxed text-lg">
                        You didn't ask for this to happen. You're not overreacting by seeking help. 
                        You deserve fair compensation for what you've been through. Taking care of yourself 
                        and your family is the most important thing right now - everything else can wait.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Connection Section */}
          <section className="py-24 relative overflow-hidden" aria-labelledby="connection-heading">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50" />
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400" />
            
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="text-center mb-20">
                <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
                  <span className="text-blue-700 font-medium text-sm">You deserve better than the runaround</span>
                </div>
                
                <h2 id="connection-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Connect with Attorneys Who 
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Actually Care About You
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  Not all attorneys are the same. We work exclusively with professionals who understand that 
                  you're a human being going through a traumatic experience, not just another case file.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-10 mb-20">
                {[
                  {
                    icon: "👂",
                    title: "They Actually Listen to You",
                    description: "These attorneys take time to understand your story, your pain, and your specific goals. You'll never feel rushed or unheard.",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: "⚔️", 
                    title: "They Fight Hard for You",
                    description: "Insurance companies have teams of lawyers working to pay you as little as possible. You need someone equally aggressive fighting for you.",
                    gradient: "from-purple-500 to-purple-600"
                  },
                  {
                    icon: "💰",
                    title: "They Get Life-Changing Results", 
                    description: "On average, people with attorneys receive 3-4 times more compensation than those who handle it alone. That difference can change your family's future.",
                    gradient: "from-green-500 to-green-600"
                  }
                ].map((feature, index) => (
                  <div key={index} className="group text-center">
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                        {feature.icon}
                      </div>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl transform scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border-4 border-transparent group-hover:border-blue-200 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Find the Right Attorney for You</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Get matched with experienced attorneys who specialize in cases like yours. 
                      Free consultations, no pressure, no upfront costs.
                    </p>
                    <a 
                      href="/find-attorney" 
                      className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Find My Attorney Now
                    </a>
                    <p className="text-gray-600 mt-3 text-sm text-center">Free consultations • No pressure • No upfront costs</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl border-4 border-transparent group-hover:border-purple-200 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Your Case First</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Use our AI-powered tool to organize your evidence and understand your case strength 
                      before talking to attorneys.
                    </p>
                    <a 
                      href="/ai-case-builder" 
                      className="inline-flex items-center justify-center w-full px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg"
                    >
                      Build My Case Now
                    </a>
                    <p className="text-gray-600 mt-3 text-sm text-center">Organize evidence • Get insights • Be prepared</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Success Stories Section */}
          <TestimonialsSection />
          
          {/* Contact Form Section */}
          <ContactFormSection />
          
          {/* Final Support Section */}
          <section className="py-24 relative overflow-hidden" aria-labelledby="support-heading">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 text-center">
              <h2 id="support-heading" className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                You Don't Have to Figure 
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  This Out Alone
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed font-light">
                Whether you need immediate guidance, want to understand your options, or you're ready to talk to an attorney, 
                real people are standing by to help you through this difficult time.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
                <a 
                  href="tel:4048442799" 
                  className="group relative inline-flex items-center justify-center px-10 py-6 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold rounded-2xl hover:from-gray-100 hover:to-white transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
                >
                  <span className="text-3xl mr-4">📞</span>
                  Call Us Right Now
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">(404) 844-2799</div>
                  <div className="text-blue-200 text-lg">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-1">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span>Live person answers 24/7</span>
                    </div>
                    <p className="text-sm opacity-80">No robots • No voicemail • Real help</p>
                  </div>
                </div>
              </div>
              
              <div className="inline-flex items-center space-x-4 text-blue-200 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Free to call</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No pressure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Confidential</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
}
