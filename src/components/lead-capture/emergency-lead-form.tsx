import React, { useState } from 'react';
import { AlertTriangle, Phone, Shield, Clock } from 'lucide-react';

interface EmergencyLeadFormProps {
  placement?: 'hero' | 'sidebar' | 'popup' | 'inline';
  urgencyLevel?: 'high' | 'medium' | 'low';
}

export function EmergencyLeadForm({ placement = 'inline', urgencyLevel = 'high' }: EmergencyLeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    injured: '',
    urgentHelp: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Submit to CRM API
    try {
      const response = await fetch('/api/leads/emergency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'emergency',
          placement,
          timestamp: new Date().toISOString(),
          urgencyScore: urgencyLevel === 'high' ? 10 : urgencyLevel === 'medium' ? 7 : 5
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Trigger immediate attorney matching for high urgency
        if (urgencyLevel === 'high') {
          await fetch('/api/leads/urgent-match', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ leadId: await response.json().id })
          });
        }
      }
    } catch (error) {
      console.error('Lead submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-bold text-green-800 mb-2">
          Help is On the Way!
        </h3>
        <p className="text-green-700 mb-4">
          We've received your information and are matching you with qualified attorneys in your area.
        </p>
        <div className="bg-white border border-green-200 rounded p-3 text-sm text-green-600">
          <strong>Next Steps:</strong>
          <ul className="text-left mt-2 space-y-1">
            <li>• Check your email for immediate resources</li>
            <li>• An attorney will contact you within 2 hours</li>
            <li>• Keep all accident documentation ready</li>
          </ul>
        </div>
      </div>
    );
  }

  const getUrgencyColors = () => {
    switch (urgencyLevel) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-orange-500 bg-orange-50';
      default: return 'border-blue-500 bg-blue-50';
    }
  };

  const getUrgencyText = () => {
    switch (urgencyLevel) {
      case 'high': return { text: '🚨 Emergency Legal Help Needed', color: 'text-red-800' };
      case 'medium': return { text: '⚠️ Need Legal Guidance Soon', color: 'text-orange-800' };
      default: return { text: '💼 Free Legal Consultation', color: 'text-blue-800' };
    }
  };

  const urgencyText = getUrgencyText();

  return (
    <div className={`border-l-4 rounded-r-lg p-6 ${getUrgencyColors()}`}>
      
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className={`text-xl font-bold ${urgencyText.color} mb-2`}>
          {urgencyText.text}
        </h3>
        {urgencyLevel === 'high' && (
          <p className="text-red-700 text-sm font-medium">
            Don't wait - time is critical for your case
          </p>
        )}
        
        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Shield className="h-4 w-4 mr-1" />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        {/* Accident Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            When did the accident happen? *
          </label>
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
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Were you or anyone else injured? *
          </label>
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

        {/* Urgency Checkbox for High Priority */}
        {urgencyLevel === 'high' && (
          <div className="bg-red-100 border border-red-300 rounded p-3">
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.urgentHelp}
                onChange={(e) => setFormData(prev => ({ ...prev, urgentHelp: e.target.checked }))}
                className="mt-1 mr-2"
              />
              <span className="text-sm text-red-800">
                <strong>I need urgent legal help</strong> - I'm dealing with serious injuries, insurance pressure, or immediate legal deadlines
              </span>
            </label>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs text-gray-600">
          <Shield className="h-4 w-4 inline mr-1" />
          <strong>Your privacy is protected.</strong> We only share your information with qualified attorneys who can help your case. 
          This form does not create an attorney-client relationship.
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md font-bold text-white transition-colors ${
            urgencyLevel === 'high' 
              ? 'bg-red-600 hover:bg-red-700' 
              : urgencyLevel === 'medium'
              ? 'bg-orange-600 hover:bg-orange-700'
              : 'bg-blue-600 hover:bg-blue-700'
          } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Connecting You with Attorneys...
            </span>
          ) : urgencyLevel === 'high' ? (
            'Get Emergency Legal Help Now'
          ) : (
            'Get Matched with Attorneys - Free'
          )}
        </button>

        {urgencyLevel === 'high' && (
          <p className="text-center text-xs text-red-600 font-medium">
            🕒 Emergency cases receive priority matching within 30 minutes
          </p>
        )}
      </form>
    </div>
  );
} 