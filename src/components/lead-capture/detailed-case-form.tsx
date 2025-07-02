import React, { useState } from 'react';
import { Calculator, DollarSign, Shield, Clock, AlertTriangle, MapPin } from 'lucide-react';

interface DetailedCaseFormProps {
  placement?: 'page' | 'modal' | 'sidebar';
  showProgressBar?: boolean;
}

export function DetailedCaseForm({ placement = 'page', showProgressBar = true }: DetailedCaseFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Accident Details
    accidentDate: '',
    accidentTime: '',
    accidentLocation: '',
    accidentCity: 'Atlanta',
    accidentZip: '',
    accidentType: '',
    accidentDescription: '',
    weatherConditions: '',
    roadConditions: '',
    
    // Injury Information
    injured: '',
    injuryTypes: [] as string[],
    medicalTreatment: '',
    hospitalName: '',
    stillTreating: '',
    medicalExpenses: '',
    futureExpensesExpected: '',
    
    // Vehicle & Insurance
    vehicleDamage: '',
    vehicleTotalLoss: '',
    atFault: '',
    policeReport: '',
    citationIssued: '',
    witnesses: '',
    
    // Employment Impact
    missedWork: '',
    timeOffWork: '',
    annualIncome: '',
    canReturnToWork: '',
    
    // Legal Status
    hasAttorney: '',
    contactedInsurance: '',
    givenStatement: '',
    settlementOffered: '',
    settlementAmount: '',
    
    // Additional Information
    additionalInfo: '',
    hearAboutUs: '',
    preferredContact: 'phone',
    bestTimeToCall: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { title: 'Contact Info', fields: 4 },
    { title: 'Accident Details', fields: 8 },
    { title: 'Injuries & Medical', fields: 7 },
    { title: 'Legal & Financial', fields: 6 }
  ];

  const calculateProgress = () => {
    const totalFields = steps.reduce((sum, step) => sum + step.fields, 0);
    const completedFields = Object.values(formData).filter(value => 
      Array.isArray(value) ? value.length > 0 : value !== ''
    ).length;
    return Math.round((completedFields / totalFields) * 100);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    // Calculate lead score based on responses
    const leadScore = calculateLeadScore();
    
    try {
      const response = await fetch('/api/leads/detailed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'detailed-case-evaluation',
          placement,
          timestamp: new Date().toISOString(),
          leadScore,
          estimatedCaseValue: estimateCaseValue(),
          urgencyLevel: determineUrgency(),
          progressPercent: calculateProgress()
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Trigger lead processing pipeline
        const leadData = await response.json();
        await fetch('/api/leads/process', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ leadId: leadData.id })
        });
      }
    } catch (error) {
      console.error('Lead submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateLeadScore = (): number => {
    let score = 0;
    
    // Timing score (more recent = higher score)
    if (formData.accidentDate === 'today' || formData.accidentDate === 'yesterday') score += 20;
    else if (formData.accidentDate === 'this-week') score += 15;
    else if (formData.accidentDate === 'last-week') score += 10;
    
    // Injury score
    if (formData.injured === 'yes') score += 25;
    if (formData.medicalTreatment === 'emergency-room' || formData.medicalTreatment === 'hospital') score += 15;
    if (formData.stillTreating === 'yes') score += 10;
    
    // Case value indicators
    if (formData.medicalExpenses === 'over-50000') score += 20;
    else if (formData.medicalExpenses === '25000-50000') score += 15;
    else if (formData.medicalExpenses === '10000-25000') score += 10;
    
    // Employment impact
    if (formData.missedWork === 'yes') score += 10;
    if (formData.timeOffWork === 'several-months' || formData.timeOffWork === 'still-unable') score += 15;
    
    // Legal urgency
    if (formData.hasAttorney === 'no') score += 10;
    if (formData.settlementOffered === 'yes') score += 15;
    
    return Math.min(score, 100);
  };

  const estimateCaseValue = (): string => {
    // Simplified case value estimation logic
    let baseValue = 0;
    
    // Medical expenses multiplier
    const medExpenses = formData.medicalExpenses;
    if (medExpenses === 'over-50000') baseValue = 150000;
    else if (medExpenses === '25000-50000') baseValue = 100000;
    else if (medExpenses === '10000-25000') baseValue = 50000;
    else if (medExpenses === '5000-10000') baseValue = 25000;
    else if (medExpenses === '1000-5000') baseValue = 10000;
    
    // Injury type multiplier
    if (formData.injuryTypes.includes('brain-injury') || formData.injuryTypes.includes('spinal-cord')) {
      baseValue *= 3;
    } else if (formData.injuryTypes.includes('broken-bones') || formData.injuryTypes.includes('surgery-required')) {
      baseValue *= 2;
    }
    
    // Lost wages impact
    if (formData.missedWork === 'yes' && formData.timeOffWork === 'several-months') {
      baseValue *= 1.5;
    }
    
    if (baseValue >= 100000) return '$100,000+';
    else if (baseValue >= 50000) return '$50,000-$100,000';
    else if (baseValue >= 25000) return '$25,000-$50,000';
    else if (baseValue >= 10000) return '$10,000-$25,000';
    else return 'Under $10,000';
  };

  const determineUrgency = (): 'high' | 'medium' | 'low' => {
    if (formData.settlementOffered === 'yes' || 
        formData.accidentDate === 'today' || 
        formData.accidentDate === 'yesterday' ||
        formData.injuryTypes.includes('brain-injury')) {
      return 'high';
    }
    if (formData.injured === 'yes' && formData.hasAttorney === 'no') {
      return 'medium';
    }
    return 'low';
  };

  if (submitted) {
    const estimatedValue = estimateCaseValue();
    const leadScore = calculateLeadScore();
    
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calculator className="h-10 w-10 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Case Evaluation Complete!
        </h3>
        
        <div className="bg-white border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Your Case Summary</h4>
          
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-blue-50 p-4 rounded">
              <h5 className="font-semibold text-blue-800 mb-2">Estimated Case Value</h5>
              <p className="text-2xl font-bold text-blue-600">{estimatedValue}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded">
              <h5 className="font-semibold text-purple-800 mb-2">Case Strength</h5>
              <p className="text-2xl font-bold text-purple-600">
                {leadScore >= 80 ? 'Excellent' : leadScore >= 60 ? 'Strong' : leadScore >= 40 ? 'Good' : 'Fair'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-2">⚡ What Happens Next?</h4>
          <ul className="text-left text-yellow-700 space-y-1">
            <li>• We're matching you with 2-3 qualified attorneys</li>
            <li>• You'll receive a detailed case analysis via email</li>
            <li>• An attorney will contact you within 2 hours</li>
            <li>• Free consultation to discuss your legal options</li>
          </ul>
        </div>
        
        <p className="text-green-700 text-sm">
          Check your email for immediate resources and expect a call from an experienced Atlanta car accident attorney soon.
        </p>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(404) 555-0123"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Accident Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">When did the accident occur? *</label>
                <select
                  required
                  value={formData.accidentDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeframe</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="this-week">This week</option>
                  <option value="last-week">Last week</option>
                  <option value="this-month">This month</option>
                  <option value="over-month">Over a month ago</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time of accident</label>
                <select
                  value={formData.accidentTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, accidentTime: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (6AM-12PM)</option>
                  <option value="afternoon">Afternoon (12PM-6PM)</option>
                  <option value="evening">Evening (6PM-10PM)</option>
                  <option value="night">Night (10PM-6AM)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Where did the accident happen? *</label>
              <input
                type="text"
                required
                value={formData.accidentLocation}
                onChange={(e) => setFormData(prev => ({ ...prev, accidentLocation: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Street address or intersection"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={formData.accidentCity}
                  onChange={(e) => setFormData(prev => ({ ...prev, accidentCity: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={formData.accidentZip}
                  onChange={(e) => setFormData(prev => ({ ...prev, accidentZip: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="30309"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type of accident *</label>
              <select
                required
                value={formData.accidentType}
                onChange={(e) => setFormData(prev => ({ ...prev, accidentType: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select accident type</option>
                <option value="rear-end">Rear-end collision</option>
                <option value="side-impact">Side-impact (T-bone)</option>
                <option value="head-on">Head-on collision</option>
                <option value="intersection">Intersection accident</option>
                <option value="pedestrian">Pedestrian accident</option>
                <option value="hit-and-run">Hit and run</option>
                <option value="multi-vehicle">Multi-vehicle accident</option>
                <option value="single-vehicle">Single vehicle accident</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brief description of what happened</label>
              <textarea
                value={formData.accidentDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, accidentDescription: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the accident in a few sentences..."
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Injuries & Medical Treatment</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Were you or anyone else injured? *</label>
              <div className="grid grid-cols-3 gap-2">
                {['Yes', 'No', 'Unsure'].map((option) => (
                  <label key={option} className="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="injured"
                      value={option.toLowerCase()}
                      checked={formData.injured === option.toLowerCase()}
                      onChange={(e) => setFormData(prev => ({ ...prev, injured: e.target.value }))}
                      className="mr-2"
                      required
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {formData.injured === 'yes' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Types of injuries (select all that apply)</label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Whiplash/neck injury',
                      'Back injury',
                      'Head/brain injury',
                      'Broken bones',
                      'Cuts/lacerations',
                      'Spinal cord injury',
                      'Internal injuries',
                      'Surgery required',
                      'Other'
                    ].map((injury) => (
                      <label key={injury} className="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                        <input
                          type="checkbox"
                          checked={formData.injuryTypes.includes(injury.toLowerCase().replace(/[^a-z]/g, '-'))}
                          onChange={(e) => {
                            const value = injury.toLowerCase().replace(/[^a-z]/g, '-');
                            setFormData(prev => ({
                              ...prev,
                              injuryTypes: e.target.checked
                                ? [...prev.injuryTypes, value]
                                : prev.injuryTypes.filter(t => t !== value)
                            }));
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm">{injury}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Did you receive medical treatment?</label>
                  <select
                    value={formData.medicalTreatment}
                    onChange={(e) => setFormData(prev => ({ ...prev, medicalTreatment: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select treatment type</option>
                    <option value="emergency-room">Emergency room</option>
                    <option value="hospital">Hospital stay</option>
                    <option value="urgent-care">Urgent care</option>
                    <option value="doctor-visit">Doctor visit</option>
                    <option value="physical-therapy">Physical therapy</option>
                    <option value="no-treatment">No treatment yet</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated medical expenses so far</label>
                  <select
                    value={formData.medicalExpenses}
                    onChange={(e) => setFormData(prev => ({ ...prev, medicalExpenses: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="over-50000">Over $50,000</option>
                  </select>
                </div>
              </>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal & Financial Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Do you currently have an attorney? *</label>
              <div className="grid grid-cols-2 gap-2">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="hasAttorney"
                      value={option.toLowerCase()}
                      checked={formData.hasAttorney === option.toLowerCase()}
                      onChange={(e) => setFormData(prev => ({ ...prev, hasAttorney: e.target.value }))}
                      className="mr-2"
                      required
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Have you been offered a settlement?</label>
              <div className="grid grid-cols-2 gap-2">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="settlementOffered"
                      value={option.toLowerCase()}
                      checked={formData.settlementOffered === option.toLowerCase()}
                      onChange={(e) => setFormData(prev => ({ ...prev, settlementOffered: e.target.value }))}
                      className="mr-2"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {formData.settlementOffered === 'yes' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Settlement amount offered</label>
                <select
                  value={formData.settlementAmount}
                  onChange={(e) => setFormData(prev => ({ ...prev, settlementAmount: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select range</option>
                  <option value="under-5000">Under $5,000</option>
                  <option value="5000-15000">$5,000 - $15,000</option>
                  <option value="15000-50000">$15,000 - $50,000</option>
                  <option value="over-50000">Over $50,000</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Did you miss work due to the accident?</label>
              <div className="grid grid-cols-2 gap-2">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="missedWork"
                      value={option.toLowerCase()}
                      checked={formData.missedWork === option.toLowerCase()}
                      onChange={(e) => setFormData(prev => ({ ...prev, missedWork: e.target.value }))}
                      className="mr-2"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred contact method</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'phone', label: 'Phone call' },
                  { value: 'email', label: 'Email' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={formData.preferredContact === option.value}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                      className="mr-2"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional information</label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any additional details about your case..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* Progress Bar */}
      {showProgressBar && (
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
            </span>
            <span className="text-sm text-gray-600">
              {calculateProgress()}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="p-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Free Case Evaluation
          </h2>
          <p className="text-gray-600">
            Get a detailed assessment of your case value and legal options
          </p>
        </div>

        <form onSubmit={currentStep === steps.length ? handleSubmit : undefined}>
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-md font-medium ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-2 bg-green-600 text-white rounded-md font-bold hover:bg-green-700 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </span>
                ) : (
                  'Get My Case Evaluation'
                )}
              </button>
            )}
          </div>
        </form>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>Completely Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 