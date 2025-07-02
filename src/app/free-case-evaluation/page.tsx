import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { Calculator, DollarSign, Shield, Clock, CheckCircle, AlertTriangle, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Car Accident Case Evaluation | Get Your Case Value in Atlanta',
  description: 'Get a free evaluation of your Atlanta car accident case. Find out what your case may be worth and understand your legal options with no obligation.',
  keywords: [
    'free case evaluation',
    'car accident case value',
    'Atlanta case assessment',
    'accident settlement calculator',
    'case worth evaluation',
    'free legal consultation',
    'car accident compensation',
    'injury case evaluation'
  ],
  openGraph: {
    title: 'Free Car Accident Case Evaluation | Get Your Case Value',
    description: 'Get a free evaluation of your car accident case and understand your potential compensation.',
    type: 'website',
  },
};

const evaluationBenefits = [
  {
    icon: Calculator,
    title: 'Case Value Estimate',
    description: 'Get an estimated range of what your case could be worth'
  },
  {
    icon: Shield,
    title: 'Completely Free',
    description: 'No cost, no obligation, no pressure to hire anyone'
  },
  {
    icon: Clock,
    title: 'Fast Results',
    description: 'Get your evaluation within 24 hours of submission'
  },
  {
    icon: FileText,
    title: 'Expert Analysis',
    description: 'Reviewed by experienced car accident attorneys'
  }
];

const compensationTypes = [
  {
    type: 'Medical Expenses',
    description: 'Past and future medical bills related to your injuries',
    examples: ['Emergency room visits', 'Surgery costs', 'Physical therapy', 'Prescription medications', 'Medical equipment']
  },
  {
    type: 'Lost Wages',
    description: 'Income lost due to your injuries and recovery time',
    examples: ['Time off work', 'Reduced earning capacity', 'Lost overtime opportunities', 'Lost bonuses', 'Career advancement delays']
  },
  {
    type: 'Pain & Suffering',
    description: 'Compensation for physical pain and emotional distress',
    examples: ['Physical discomfort', 'Emotional trauma', 'Anxiety and depression', 'Loss of enjoyment', 'Ongoing pain']
  },
  {
    type: 'Property Damage',
    description: 'Damage to your vehicle and personal property',
    examples: ['Vehicle repair costs', 'Total loss value', 'Rental car expenses', 'Personal items damaged', 'Diminished value']
  }
];

const caseFactors = [
  'Severity of your injuries',
  'Medical treatment required',
  'Time missed from work',
  'Fault determination',
  'Insurance coverage available',
  'Long-term impact on your life',
  'Quality of evidence',
  'Witness statements'
];

export default function FreeCaseEvaluationPage() {
  return (
    <ModernLayout>
      <main id="main-content" role="main" aria-label="Free Car Accident Case Evaluation">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Free Car Accident 
                <span className="block text-yellow-300">Case Evaluation</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Find out what your Atlanta car accident case may be worth - completely free with no obligation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#evaluation-form"
                  className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors text-lg"
                >
                  Get My Free Evaluation
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
                Why Get a Case Evaluation?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Understanding your case value helps you make informed decisions about your legal options.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {evaluationBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compensation Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Types of Compensation Available
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Car accident victims may be entitled to various forms of compensation depending on their case.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {compensationTypes.map((comp, index) => (
                <div key={comp.type} className="bg-white rounded-lg p-8 shadow-md">
                  <div className="flex items-center mb-4">
                    <DollarSign className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-black">{comp.type}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{comp.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-600">Examples include:</p>
                    {comp.examples.map((example, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Factors Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Factors That Affect Your Case Value
              </h2>
              <p className="text-xl text-gray-700">
                Our evaluation considers multiple factors to provide you with an accurate case assessment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {caseFactors.map((factor, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-amber-50 border-l-4 border-amber-500">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-start">
              <AlertTriangle className="h-8 w-8 text-amber-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  Important: Time is Critical
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-amber-700 mb-2">Why Act Quickly:</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li>• Evidence can disappear quickly</li>
                      <li>• Witness memories fade over time</li>
                      <li>• Georgia has a 2-year statute of limitations</li>
                      <li>• Insurance companies act fast to minimize claims</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-700 mb-2">Act Now To:</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li>• Preserve crucial evidence</li>
                      <li>• Protect your legal rights</li>
                      <li>• Maximize your compensation</li>
                      <li>• Get expert legal guidance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Evaluation Form */}
        <section id="evaluation-form" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Get Your Free Case Evaluation
              </h2>
              <p className="text-xl text-gray-700">
                Complete this form to receive a comprehensive evaluation of your car accident case.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                {/* Contact Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Accident Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Accident Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        When did the accident occur? *
                      </label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Where did it happen? *
                      </label>
                      <input 
                        type="text" 
                        placeholder="City, State"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Briefly describe what happened *
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Describe the accident circumstances..."
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Injury Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Injury Information</h3>
                  
                  <div className="mb-6">
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
                        <input type="radio" name="injured" value="minor" className="mr-2" />
                        <span>Minor</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Did you receive medical treatment?
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select one</option>
                        <option value="emergency-room">Emergency Room</option>
                        <option value="hospital">Hospital Stay</option>
                        <option value="urgent-care">Urgent Care</option>
                        <option value="doctor-visit">Doctor Visit</option>
                        <option value="no-treatment">No Treatment</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Are you still receiving treatment?
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select one</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="completed">Treatment Completed</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Estimate of medical expenses so far
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option value="">Select range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-5000">$1,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000-25000">$10,000 - $25,000</option>
                      <option value="25000-50000">$25,000 - $50,000</option>
                      <option value="over-50000">Over $50,000</option>
                    </select>
                  </div>
                </div>

                {/* Work Impact */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Work Impact</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Did you miss work due to the accident?
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select one</option>
                        <option value="no">No time missed</option>
                        <option value="few-days">A few days</option>
                        <option value="1-2-weeks">1-2 weeks</option>
                        <option value="1-month">About 1 month</option>
                        <option value="several-months">Several months</option>
                        <option value="still-unable">Still unable to work</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Annual Income (optional)
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option value="">Select range</option>
                        <option value="under-30000">Under $30,000</option>
                        <option value="30000-50000">$30,000 - $50,000</option>
                        <option value="50000-75000">$50,000 - $75,000</option>
                        <option value="75000-100000">$75,000 - $100,000</option>
                        <option value="over-100000">Over $100,000</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Insurance Information */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Insurance Information</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Have you contacted the other driver's insurance?
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="contacted-insurance" value="yes" className="mr-2" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="contacted-insurance" value="no" className="mr-2" />
                        <span>No</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="contacted-insurance" value="unsure" className="mr-2" />
                        <span>Unsure</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Have you been offered a settlement?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="settlement-offered" value="yes" className="mr-2" />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="settlement-offered" value="no" className="mr-2" />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-bold text-purple-800">Your Information is Secure & Confidential</span>
                  </div>
                  <p className="text-purple-700 text-sm">
                    We protect your privacy and will only use your information to provide your case evaluation. 
                    This evaluation does not create an attorney-client relationship.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-purple-700 transition-colors text-lg"
                >
                  Get My Free Case Evaluation
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-8">
              What Happens After You Submit?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Expert Review</h3>
                <p className="text-gray-600">
                  Experienced attorneys review your case details and assess potential value
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Detailed Report</h3>
                <p className="text-gray-600">
                  Receive a comprehensive evaluation with case value estimates
                </p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">Next Steps</h3>
                <p className="text-gray-600">
                  Get connected with qualified attorneys if you choose to proceed
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ModernLayout>
  );
} 