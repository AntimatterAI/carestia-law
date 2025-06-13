'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Send, 
  Check, 
  AlertTriangle, 
  Loader2, 
  Phone, 
  Mail, 
  MessageSquare,
  Clock,
  Shield,
  User,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// TypeScript types
interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  caseType: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'text';
  consentCommunications: boolean;
  honeypot: string; // Spam protection
}

interface FormSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
}

// Case type options
const caseTypes = [
  { value: '', label: 'Select Your Case Type' },
  { value: 'personal-injury', label: 'Personal Injury' },
  { value: 'medical-malpractice', label: 'Medical Malpractice' },
  { value: 'car-accident', label: 'Car Accident' },
  { value: 'slip-and-fall', label: 'Slip and Fall' },
  { value: 'trucking-accident', label: 'Trucking Accident' },
  { value: 'sexual-harassment', label: 'Sexual Harassment' },
  { value: 'negligent-security', label: 'Negligent Security' },
  { value: 'workers-compensation', label: 'Workers\' Compensation' },
  { value: 'other', label: 'Other Legal Matter' }
];

// Validation rules
const validationRules = {
  fullName: {
    required: 'Full name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    },
    maxLength: {
      value: 50,
      message: 'Name cannot exceed 50 characters'
    },
    pattern: {
      value: /^[a-zA-Z\s\-']+$/,
      message: 'Please enter a valid name'
    }
  },
  email: {
    required: 'Email address is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address'
    }
  },
  phoneNumber: {
    required: 'Phone number is required',
    pattern: {
      value: /^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/,
      message: 'Please enter a valid phone number'
    }
  },
  caseType: {
    required: 'Please select your case type'
  },
  message: {
    required: 'Please describe your case',
    minLength: {
      value: 10,
      message: 'Please provide at least 10 characters'
    },
    maxLength: {
      value: 2000,
      message: 'Message cannot exceed 2000 characters'
    }
  },
  preferredContact: {
    required: 'Please select your preferred contact method'
  },
  consentCommunications: {
    required: 'You must consent to communications to proceed'
  }
};

export function ContactFormSection() {
  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      caseType: '',
      message: '',
      preferredContact: 'phone',
      consentCommunications: false,
      honeypot: ''
    }
  });

  // Watch for form changes to provide real-time validation
  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return; // Spam protection

    setSubmissionState('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'contact-form'
        }),
      });

      const result: FormSubmissionResponse = await response.json();

      if (result.success) {
        setSubmissionState('success');
        setSubmissionMessage(result.message);
        reset();
        
        // Analytics tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: data.caseType,
            value: 1
          });
        }
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmissionState('error');
      setSubmissionMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    }
  };

  // Success state
  if (submissionState === 'success') {
    return (
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Thank You for Contacting Us!
            </h2>
            <p className="text-lg text-green-700 mb-8">
              {submissionMessage || 'Your message has been received. We will contact you within 24 hours to discuss your case.'}
            </p>
            <div className="space-y-4 text-green-600">
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2" aria-hidden="true" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2" aria-hidden="true" />
                <span>Your information is secure and confidential</span>
              </div>
            </div>
            <Button
              onClick={() => setSubmissionState('idle')}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-describedby="submit-another-description"
            >
              Submit Another Case
            </Button>
            <p id="submit-another-description" className="sr-only">
              Click to submit another legal consultation request
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-amber-600 text-amber-800 bg-amber-50">
            Free Consultation
          </Badge>
          <h2 id="contact-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Get Your Free Legal Consultation
            <span className="block text-amber-700">Start Your Case Today</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Don't wait to get the legal help you need. Fill out our secure contact form and we'll reach out 
            within 24 hours to discuss your case and legal options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-describedby="form-description">
              
              {/* Form Description */}
              <div id="form-description" className="sr-only">
                Complete this form to request a free legal consultation. All fields marked with an asterisk are required.
              </div>

              {/* Honeypot */}
              <input
                type="text"
                {...register('honeypot')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Full Name <span className="text-red-600" aria-label="required">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-500" aria-hidden="true" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className={`pl-10 ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-amber-500 focus:border-amber-500'}`}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    {...register('fullName', { 
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                </div>
                {errors.fullName && (
                  <p id="fullName-error" className="text-red-600 text-sm mt-1 flex items-center" role="alert">
                    <AlertTriangle className="h-4 w-4 mr-1" aria-hidden="true" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Email Address <span className="text-red-600" aria-label="required">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-500" aria-hidden="true" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={`pl-10 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-amber-500 focus:border-amber-500'}`}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : 'email-help'}
                    {...register('email', { 
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                </div>
                <p id="email-help" className="text-sm text-gray-600 mt-1">We'll use this to send you case updates</p>
                {errors.email && (
                  <p id="email-error" className="text-red-600 text-sm mt-1 flex items-center" role="alert">
                    <AlertTriangle className="h-4 w-4 mr-1" aria-hidden="true" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Phone Number <span className="text-red-600" aria-label="required">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-500" aria-hidden="true" />
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className={`pl-10 ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'focus:ring-amber-500 focus:border-amber-500'}`}
                    aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                    aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : 'phone-help'}
                    {...register('phoneNumber', { 
                      required: 'Phone number is required'
                    })}
                  />
                </div>
                <p id="phone-help" className="text-sm text-gray-600 mt-1">10-digit US phone number</p>
                {errors.phoneNumber && (
                  <p id="phoneNumber-error" className="text-red-600 text-sm mt-1 flex items-center" role="alert">
                    <AlertTriangle className="h-4 w-4 mr-1" aria-hidden="true" />
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Case Type */}
              <div>
                <Label htmlFor="caseType" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Case Type <span className="text-red-600" aria-label="required">*</span>
                </Label>
                <select
                  id="caseType"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                    errors.caseType 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-amber-500 focus:border-amber-500'
                  }`}
                  aria-invalid={errors.caseType ? 'true' : 'false'}
                  aria-describedby={errors.caseType ? 'caseType-error' : 'caseType-help'}
                  {...register('caseType', { required: 'Please select your case type' })}
                >
                  {caseTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <p id="caseType-help" className="text-sm text-gray-600 mt-1">Choose the category that best describes your legal matter</p>
                {errors.caseType && (
                  <p id="caseType-error" className="text-red-600 text-sm mt-1 flex items-center" role="alert">
                    <AlertTriangle className="h-4 w-4 mr-1" aria-hidden="true" />
                    {errors.caseType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-gray-800 mb-2 block">
                  Case Details <span className="text-red-600" aria-label="required">*</span>
                </Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-500" aria-hidden="true" />
                  <Textarea
                    id="message"
                    placeholder="Please describe your case..."
                    rows={6}
                    className={`pl-10 resize-none ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'focus:ring-amber-500 focus:border-amber-500'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : 'message-help'}
                    {...register('message', { 
                      required: 'Please describe your case',
                      minLength: { value: 10, message: 'Please provide at least 10 characters' }
                    })}
                  />
                </div>
                <p id="message-help" className="text-sm text-gray-600 mt-1">
                  Provide details about your situation ({watchedFields.message?.length || 0}/2000 characters)
                </p>
                {errors.message && (
                  <p id="message-error" className="text-red-600 text-sm mt-1 flex items-center" role="alert">
                    <AlertTriangle className="h-4 w-4 mr-1" aria-hidden="true" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <fieldset>
                <legend className="text-sm font-semibold text-gray-800 mb-3 block">
                  Preferred Contact Method <span className="text-red-600" aria-label="required">*</span>
                </legend>
                <div className="grid grid-cols-3 gap-4" role="radiogroup" aria-describedby="contact-method-help">
                  {[
                    { value: 'phone', label: 'Phone Call', icon: Phone },
                    { value: 'email', label: 'Email', icon: Mail },
                    { value: 'text', label: 'Text Message', icon: MessageSquare }
                  ].map(({ value, label, icon: Icon }) => (
                    <label key={value} className="relative cursor-pointer group">
                      <input
                        type="radio"
                        value={value}
                        {...register('preferredContact')}
                        className="sr-only"
                        aria-describedby={`contact-${value}-description`}
                      />
                      <div className="border-2 border-gray-300 rounded-lg p-4 text-center hover:border-amber-400 transition-colors group-focus-within:ring-2 group-focus-within:ring-amber-500 group-focus-within:ring-offset-2">
                        <Icon className="h-6 w-6 mx-auto mb-2 text-gray-600 group-hover:text-amber-600" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700">{label}</span>
                      </div>
                      <div id={`contact-${value}-description`} className="sr-only">
                        Select {label.toLowerCase()} as your preferred method of contact
                      </div>
                    </label>
                  ))}
                </div>
                <p id="contact-method-help" className="text-sm text-gray-600 mt-2">How would you like us to reach you?</p>
              </fieldset>

              {/* Consent */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                  aria-invalid={errors.consentCommunications ? 'true' : 'false'}
                  aria-describedby={errors.consentCommunications ? 'consent-error' : 'consent-help'}
                  {...register('consentCommunications', { 
                    required: 'You must consent to communications to proceed' 
                  })}
                />
                <div className="flex-1">
                  <Label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                    I consent to receive communications from Carestia Law regarding my legal matter. 
                    This consent allows the firm to contact me via my preferred method to discuss my case.
                  </Label>
                  <p id="consent-help" className="text-xs text-gray-600 mt-1">
                    Required for legal consultation and case communications
                  </p>
                </div>
              </div>
              {errors.consentCommunications && (
                <p id="consent-error" className="text-red-600 text-sm flex items-center" role="alert">
                  <AlertTriangle className="h-4 w-4 mr-1" aria-hidden="true" />
                  {errors.consentCommunications.message}
                </p>
              )}

              {/* Error State */}
              {submissionState === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" aria-hidden="true" />
                    <p className="text-red-700">{submissionMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 text-lg focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                aria-describedby="submit-button-help"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" aria-hidden="true" />
                    <span>Sending Your Message...</span>
                    <span className="sr-only">Please wait while we process your request</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                    Send My Free Consultation Request
                  </>
                )}
              </Button>
              <p id="submit-button-help" className="text-sm text-gray-600 text-center">
                Click to submit your free consultation request. We'll respond within 24 hours.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-amber-600" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-black">Phone</p>
                    <a 
                      href="tel:4048442799" 
                      className="text-amber-700 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
                      aria-label="Call Carestia Law at 4 0 4 8 4 4 2 7 9 9"
                    >
                      (404) 844-2799
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-amber-600" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <a 
                      href="mailto:info@carcrashatl.com" 
                      className="text-amber-700 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
                      aria-label="Email Carestia Law at info@carcrashatl.com"
                    >
                      info@carcrashatl.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h4 className="font-bold text-black mb-2">Free Consultation</h4>
              <p className="text-gray-800">
                All consultations are completely free and confidential. We'll review your case 
                and provide honest advice about your legal options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 