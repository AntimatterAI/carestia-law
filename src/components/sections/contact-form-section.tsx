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
    reset
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
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Thank You for Contacting Us!
            </h2>
            <p className="text-lg text-green-700 mb-8">
              {submissionMessage || 'Your message has been received. We will contact you within 24 hours to discuss your case.'}
            </p>
            <div className="space-y-4 text-green-600">
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Response within 24 hours</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Your information is secure and confidential</span>
              </div>
            </div>
            <Button
              onClick={() => setSubmissionState('idle')}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white"
            >
              Submit Another Case
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white" aria-label="Contact Form">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-yellow-600 text-yellow-700">
            Free Consultation
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Get Your Free Legal Consultation
            <span className="block text-yellow-600">Start Your Case Today</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't wait to get the legal help you need. Fill out our secure contact form and we'll reach out 
            within 24 hours to discuss your case and legal options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              
              {/* Honeypot */}
              <input
                type="text"
                {...register('honeypot')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className={`pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                    {...register('fullName', { 
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email', { 
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className={`pl-10 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                    {...register('phoneNumber', { 
                      required: 'Phone number is required'
                    })}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Case Type */}
              <div>
                <Label htmlFor="caseType" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Case Type <span className="text-red-500">*</span>
                </Label>
                <select
                  id="caseType"
                  className={`w-full px-3 py-2 border rounded-md ${errors.caseType ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('caseType', { required: 'Please select your case type' })}
                >
                  {caseTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.caseType && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.caseType.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                  Case Details <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Textarea
                    id="message"
                    placeholder="Please describe your case..."
                    rows={6}
                    className={`pl-10 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    {...register('message', { 
                      required: 'Please describe your case',
                      minLength: { value: 10, message: 'Please provide at least 10 characters' }
                    })}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <Label className="text-sm font-semibold text-gray-700 mb-3 block">
                  Preferred Contact Method <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'phone', label: 'Phone Call', icon: Phone },
                    { value: 'email', label: 'Email', icon: Mail },
                    { value: 'text', label: 'Text Message', icon: MessageSquare }
                  ].map(({ value, label, icon: Icon }) => (
                    <label key={value} className="relative cursor-pointer">
                      <input
                        type="radio"
                        value={value}
                        {...register('preferredContact')}
                        className="sr-only"
                      />
                      <div className="border-2 border-gray-300 rounded-lg p-4 text-center hover:border-yellow-400 transition-colors">
                        <Icon className="h-6 w-6 mx-auto mb-2 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">{label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1"
                  {...register('consentCommunications', { 
                    required: 'You must consent to communications to proceed' 
                  })}
                />
                <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                  I consent to receive communications from Carestia Law regarding my legal matter. 
                  This consent allows the firm to contact me via my preferred method to discuss my case.
                </Label>
              </div>
              {errors.consentCommunications && (
                <p className="text-red-500 text-sm flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  {errors.consentCommunications.message}
                </p>
              )}

              {/* Error State */}
              {submissionState === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-700">{submissionMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending Your Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send My Free Consultation Request
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-black">Phone</p>
                    <a href="tel:4048442799" className="text-yellow-600 hover:text-yellow-700">
                      (404) 844-2799
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-black">Email</p>
                    <a href="mailto:info@carcrashatl.com" className="text-yellow-600 hover:text-yellow-700">
                      info@carcrashatl.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-bold text-black mb-2">Free Consultation</h4>
              <p className="text-gray-700">
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