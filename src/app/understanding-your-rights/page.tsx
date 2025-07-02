import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Shield, DollarSign, Clock, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Your Rights After a Car Accident in Georgia | Know Your Legal Options',
  description: 'Learn your legal rights after a car accident in Georgia. Understand compensation types, Georgia laws, and how to protect yourself from insurance company tactics.',
  keywords: [
    'car accident rights Georgia',
    'Atlanta car accident laws',
    'Georgia auto accident compensation',
    'car crash legal rights',
    'insurance company tactics',
    'Georgia statute of limitations',
    'car accident compensation types',
    'Atlanta personal injury rights'
  ],
  openGraph: {
    title: 'Understanding Your Rights After a Car Accident in Georgia',
    description: 'Learn your legal rights and options after a car accident in Georgia.',
    type: 'website',
  },
};

const yourRights = [
  {
    icon: DollarSign,
    title: 'Right to Fair Compensation',
    description: 'You deserve compensation for all damages and losses',
    details: [
      'Medical expenses (past and future)',
      'Lost wages and earning capacity',
      'Pain and suffering',
      'Property damage',
      'Rehabilitation costs',
      'Emotional distress'
    ]
  },
  {
    icon: Shield,
    title: 'Right to Legal Representation',
    description: 'You have the right to an attorney at no upfront cost',
    details: [
      'Most attorneys work on contingency fees',
      'No payment unless you win your case',
      'Attorney can handle insurance communications',
      'Legal protection from unfair tactics',
      'Expert evaluation of your case value',
      'Courtroom representation if needed'
    ]
  },
  {
    icon: Scale,
    title: 'Right to Refuse Quick Settlements',
    description: 'You can reject inadequate settlement offers',
    details: [
      'No obligation to accept first offers',
      'Right to negotiate fair compensation',
      'Time to understand full extent of injuries',
      'Right to seek second medical opinions',
      'Ability to pursue court action if needed',
      'Protection from pressure tactics'
    ]
  },
  {
    icon: Clock,
    title: 'Right to Take Time',
    description: 'You have time limits but should not be rushed',
    details: [
      '2 years statute of limitations in Georgia',
      'Time to discover full extent of injuries',
      'Right to gather all necessary evidence',
      'Opportunity to get proper medical treatment',
      'Time to evaluate all legal options',
      'No obligation to rush into decisions'
    ]
  }
];

const georgiaLaws = [
  {
    title: 'Modified Comparative Negligence',
    description: 'Georgia follows a 50% rule for fault determination',
    explanation: 'You can recover damages as long as you are less than 50% at fault. Your compensation will be reduced by your percentage of fault.'
  },
  {
    title: 'Statute of Limitations',
    description: '2 years to file a personal injury lawsuit',
    explanation: 'You have 2 years from the date of the accident to file a lawsuit. However, it\'s important to start the claims process immediately.'
  },
  {
    title: 'Minimum Insurance Requirements',
    description: 'Georgia requires minimum liability coverage',
    explanation: '$25,000 per person/$50,000 per accident for bodily injury, and $25,000 for property damage. Many drivers carry only minimum coverage.'
  },
  {
    title: 'At-Fault State',
    description: 'Georgia is an at-fault insurance state',
    explanation: 'The driver who caused the accident is responsible for damages. This is determined through investigation and evidence.'
  }
];

const insuranceTactics = [
  {
    tactic: 'Quick Settlement Offers',
    description: 'Offering immediate but low settlement amounts',
    protection: 'Don\'t accept any offers without consulting an attorney first'
  },
  {
    tactic: 'Recorded Statements',
    description: 'Requesting recorded statements to use against you',
    protection: 'You\'re only required to provide basic information to your own insurer'
  },
  {
    tactic: 'Claim Denials',
    description: 'Denying valid claims hoping you won\'t fight back',
    protection: 'Get legal help to properly appeal denied claims'
  },
  {
    tactic: 'Delaying Tactics',
    description: 'Intentionally delaying claim processing',
    protection: 'Set deadlines and follow up regularly on your claim status'
  },
  {
    tactic: 'Minimizing Injuries',
    description: 'Suggesting injuries are pre-existing or minor',
    protection: 'Get comprehensive medical documentation and expert opinions'
  },
  {
    tactic: 'Surveillance',
    description: 'Investigating your activities to contradict injury claims',
    protection: 'Be consistent with your injury limitations and follow medical advice'
  }
];

export default function UnderstandingYourRightsPage() {
  return (
    <ModernLayout>
      <main id="main-content" role="main" aria-label="Understanding Your Rights After a Car Accident">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Understanding Your 
                <span className="block text-yellow-300">Legal Rights in Georgia</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Know your rights and protect yourself after a car accident in Atlanta and throughout Georgia
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Your Fundamental Rights
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                As a car accident victim in Georgia, you have important legal rights that insurance companies hope you don't know about.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {yourRights.map((right) => {
                const Icon = right.icon;
                return (
                  <div key={right.title} className="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-500">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-black">{right.title}</h3>
                        <p className="text-gray-600">{right.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {right.details.map((detail, i) => (
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

        {/* Georgia Laws Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Important Georgia Laws
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Understanding Georgia's car accident laws can help you make informed decisions about your case.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {georgiaLaws.map((law, index) => (
                <div key={law.title} className="bg-white rounded-lg p-8 shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600 bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-black">{law.title}</h3>
                  </div>
                  <p className="text-gray-700 font-medium mb-3">{law.description}</p>
                  <p className="text-gray-600">{law.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Tactics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Common Insurance Company Tactics
                <span className="block text-red-600">and How to Protect Yourself</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Insurance companies use various tactics to minimize payouts. Here's how to recognize and counter them.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {insuranceTactics.map((item, index) => (
                <div key={item.tactic} className="border border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-red-700 mb-2">{item.tactic}</h3>
                      <p className="text-gray-700 mb-3">{item.description}</p>
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="text-green-800 font-medium">
                          <strong>Protection:</strong> {item.protection}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Get Legal Help */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              When Should You Contact an Attorney?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4">Immediately If:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">•</span>
                    You suffered serious injuries
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">•</span>
                    The other driver was clearly at fault
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">•</span>
                    Multiple vehicles were involved
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">•</span>
                    Someone died in the accident
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-600 mr-2">•</span>
                    You were blamed for the accident
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Consider Legal Help If:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Insurance offers seem low
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Your claim was denied
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    You're unsure about fault
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    You have ongoing medical treatment
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    You feel overwhelmed by the process
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/find-attorney"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors mr-4"
              >
                Find an Attorney Now
              </a>
              <a 
                href="/free-case-evaluation"
                className="inline-block border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Case Evaluation
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactFormSection />
      </main>
    </ModernLayout>
  );
} 