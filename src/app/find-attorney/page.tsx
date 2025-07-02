import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Search, CheckCircle, Star, Phone, MessageCircle, Clock, Award, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find the Best Atlanta Car Accident Attorney | Free Attorney Matching',
  description: 'Get matched with top-rated Atlanta car accident attorneys. Free consultations, no win no fee, and proven results. Find your attorney in minutes.',
  keywords: [
    'Atlanta car accident attorney',
    'find car accident lawyer',
    'Atlanta personal injury attorney',
    'car crash lawyer Atlanta',
    'auto accident attorney Georgia',
    'best car accident lawyer Atlanta',
    'free attorney consultation',
    'contingency fee lawyer'
  ],
  openGraph: {
    title: 'Find the Best Atlanta Car Accident Attorney | Free Matching',
    description: 'Get matched with experienced Atlanta car accident attorneys. Free consultations available.',
    type: 'website',
  },
};

const attorneyBenefits = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Our network attorneys have recovered over $100M for clients',
    stat: '$100M+ Recovered'
  },
  {
    icon: Star,
    title: 'Top-Rated Attorneys',
    description: 'Only attorneys with excellent client reviews and results',
    stat: '4.8+ Star Rating'
  },
  {
    icon: Shield,
    title: 'No Win, No Fee',
    description: 'All attorneys work on contingency - no upfront costs',
    stat: '0% Upfront Cost'
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Get matched with attorneys who respond within 24 hours',
    stat: '24 Hour Response'
  }
];

const attorneyQualities = [
  'Experience with Georgia car accident laws',
  'Proven track record of successful settlements',
  'Excellent client reviews and testimonials',
  'Available for free consultations',
  'Works on contingency fee basis',
  'Specializes in car accident cases',
  'Trial experience when needed',
  'Local knowledge of Atlanta courts'
];

const steps = [
  {
    number: 1,
    title: 'Tell Us About Your Case',
    description: 'Complete our simple form with details about your accident'
  },
  {
    number: 2,
    title: 'Get Matched',
    description: 'We match you with qualified attorneys in your area'
  },
  {
    number: 3,
    title: 'Free Consultation',
    description: 'Speak with attorneys and choose the best fit for your case'
  }
];

export default function FindAttorneyPage() {
  return (
    <ModernLayout>
      <main id="main-content" role="main" aria-label="Find Atlanta Car Accident Attorney">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Find the Right 
                <span className="block text-yellow-300">Atlanta Car Accident Attorney</span>
              </h1>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Get matched with experienced attorneys who have recovered millions for car accident victims in Atlanta
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#attorney-form"
                  className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors text-lg"
                >
                  Get Matched Now - It's Free
                </a>
                <a 
                  href="#how-it-works"
                  className="border-2 border-yellow-400 text-yellow-300 font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors text-lg"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Why Use Our Attorney Network?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We've carefully selected only the most qualified and successful car accident attorneys in Atlanta.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {attorneyBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-4">{benefit.description}</p>
                    <div className="text-2xl font-bold text-green-600">{benefit.stat}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Getting matched with the right attorney for your case is simple and completely free.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Attorney Qualities Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                What Makes Our Attorneys Different?
              </h2>
              <p className="text-xl text-gray-700">
                We only work with attorneys who meet our strict standards for experience, results, and client satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {attorneyQualities.map((quality, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{quality}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-16 bg-red-50 border-l-4 border-red-500">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-6">
              ⚠️ Don't Wait - Time is Critical
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-red-700 mb-2">Evidence Disappears</h3>
                <p className="text-gray-700">Security footage, skid marks, and witness memories fade quickly</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-red-700 mb-2">Insurance Tactics</h3>
                <p className="text-gray-700">Insurance companies move fast to minimize your claim</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-red-700 mb-2">Legal Deadlines</h3>
                <p className="text-gray-700">Georgia has strict time limits for filing claims</p>
              </div>
            </div>
            <a 
              href="#attorney-form"
              className="bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Get Connected Now - It's Free
            </a>
          </div>
        </section>

        {/* Attorney Matching Form */}
        <section id="attorney-form" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Get Matched with an Attorney
              </h2>
              <p className="text-xl text-gray-700">
                Tell us about your case and we'll connect you with the best attorney for your situation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    When did the accident occur? *
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Were you injured? *
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="injured" value="yes" className="mr-2" />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="injured" value="no" className="mr-2" />
                      <span>No</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="injured" value="unsure" className="mr-2" />
                      <span>Unsure</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Briefly describe what happened *
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your accident..."
                    required
                  ></textarea>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-bold text-green-800">Your Information is Secure</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    We protect your privacy and only share your information with qualified attorneys who can help your case.
                  </p>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-700 transition-colors text-lg"
                >
                  Get Matched with Attorneys - FREE
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section Alternative */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prefer to Speak with Someone?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Call our attorney matching hotline and speak with a specialist who can help you find the right attorney.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:4048442799"
                className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-700 transition-colors text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (404) 844-2799
              </a>
              <span className="text-gray-400 flex items-center justify-center">
                Available 24/7 for Emergencies
              </span>
            </div>
          </div>
        </section>
      </main>
    </ModernLayout>
  );
} 