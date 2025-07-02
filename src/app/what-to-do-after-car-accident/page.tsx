import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { CheckCircle, AlertTriangle, Phone, Camera, FileText, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do After a Car Accident in Atlanta | Complete Checklist',
  description: 'Essential steps to take immediately after a car accident in Atlanta. Protect your rights and maximize your claim with our comprehensive accident checklist.',
  keywords: [
    'car accident checklist Atlanta',
    'what to do after car accident',
    'car accident steps Georgia',
    'Atlanta accident procedures',
    'post accident checklist',
    'car crash guide Atlanta',
    'accident documentation',
    'Georgia car accident laws'
  ],
  openGraph: {
    title: 'What to Do After a Car Accident in Atlanta | Complete Checklist',
    description: 'Essential steps to take immediately after a car accident in Atlanta.',
    type: 'website',
  },
};

const emergencySteps = [
  {
    icon: AlertTriangle,
    title: 'Ensure Safety First',
    description: 'Move to a safe location if possible. Turn on hazard lights.',
    details: [
      'Check yourself and passengers for injuries',
      'Move vehicles out of traffic if safe to do so',
      'Turn on hazard lights and set up flares if available',
      'Call 911 immediately if anyone is injured'
    ]
  },
  {
    icon: Phone,
    title: 'Call 911',
    description: 'Always call police, even for minor accidents.',
    details: [
      'Report the accident location clearly',
      'Request police and medical assistance if needed',
      'Stay on the line until help arrives',
      'Do not admit fault or discuss details over the phone'
    ]
  },
  {
    icon: Camera,
    title: 'Document the Scene',
    description: 'Take comprehensive photos and gather information.',
    details: [
      'Photo all vehicles from multiple angles',
      'Capture license plates, driver licenses, and insurance cards',
      'Document the accident scene and road conditions',
      'Get contact info from witnesses'
    ]
  },
  {
    icon: FileText,
    title: 'Contact Insurance',
    description: 'Report the accident to your insurance company.',
    details: [
      'Call your insurance company as soon as possible',
      'Provide only factual information',
      'Do not admit fault or speculate about causes',
      'Keep detailed records of all communications'
    ]
  }
];

const importantReminders = [
  'Never leave the scene of an accident',
  'Do not admit fault or apologize',
  'Seek medical attention even if you feel fine',
  'Keep all accident-related documents',
  'Contact an attorney before giving recorded statements',
  'Be wary of quick settlement offers'
];

export default function WhatToDoAfterCarAccidentPage() {
  return (
    <ModernLayout>
      <main id="main-content" role="main" aria-label="What to Do After a Car Accident in Atlanta">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                What to Do After a 
                <span className="block text-yellow-300">Car Accident in Atlanta</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
                Follow this essential checklist to protect your rights and maximize your potential compensation
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Action Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Immediate Action Steps
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                These steps should be taken immediately at the accident scene to protect yourself legally and physically.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {emergencySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="bg-gray-50 rounded-lg p-8 border-l-4 border-red-500">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-red-600">STEP {index + 1}</span>
                        <h3 className="text-xl font-bold text-black">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Important Reminders */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                ⚠️ Critical Reminders
              </h2>
              <p className="text-xl text-gray-700">
                Keep these important points in mind during and after your accident
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {importantReminders.map((reminder, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{reminder}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* After the Accident Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                After Leaving the Scene
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Important steps to take in the hours and days following your accident
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Seek Medical Attention</h3>
                      <p className="text-gray-700">Even if you feel fine, see a doctor within 24-48 hours. Some injuries don't show symptoms immediately.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Contact an Attorney</h3>
                      <p className="text-gray-700">Consult with an experienced Atlanta car accident attorney before giving any recorded statements to insurance companies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Keep Detailed Records</h3>
                      <p className="text-gray-700">Maintain a file with all accident-related documents, medical records, and correspondence.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Avoid Early Settlement</h3>
                      <p className="text-gray-700">Don't accept the first offer from insurance companies. They often undervalue claims significantly.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-black mb-6">Downloadable Checklist</h3>
                <p className="text-gray-700 mb-8">
                  Print this emergency checklist and keep it in your glove compartment for quick reference.
                </p>
                <div className="space-y-4">
                  <a 
                    href="/resources/car-accident-checklist"
                    className="block w-full bg-red-600 text-white font-bold py-4 px-6 rounded-lg text-center hover:bg-red-700 transition-colors"
                  >
                    📋 Download Emergency Checklist (PDF)
                  </a>
                  <a 
                    href="/find-attorney"
                    className="block w-full border-2 border-red-600 text-red-600 font-bold py-4 px-6 rounded-lg text-center hover:bg-red-600 hover:text-white transition-colors"
                  >
                    👨‍💼 Find an Attorney Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactFormSection />
      </main>
    </ModernLayout>
  );
} 