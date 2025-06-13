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
    formState: { errors, isSubmitting, isValid, touchedFields },
    reset,
    watch,
    setValue
  } = useForm<ContactFormData>({
    mode: 'onChange',
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

  // Watch form values for character counting
  const messageValue = watch('message') || '';
  const phoneValue = watch('phoneNumber') || '';

  // Phone number formatting
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setValue('phoneNumber', formattedPhoneNumber);
  };

  // Form submission handler
  const onSubmit = async (data: ContactFormData) => {
    // Spam protection check
    if (data.honeypot) {
      return; // Silent fail for bots
    }

    setSubmissionState('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
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

  // Success state component
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
    <>
      {/* CSS Animations */}
      <style jsx>{`
        .form-field {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .form-field:focus-within {
          transform: translateY(-2px);
        }
        
        .form-input {
          transition: all 0.3s ease;
          border: 2px solid #e5e7eb;
        }
        
        .form-input:focus {
          border-color: #fbbf24;
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.1);
          outline: none;
        }
        
        .form-input.error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        
        .form-input.valid {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        .error-message {
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeInUp 0.3s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .char-counter {
          transition: color 0.3s ease;
        }
        
        .char-counter.warning {
          color: #f59e0b;
        }
        
        .char-counter.error {
          color: #ef4444;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .form-field,
          .form-input,
          .error-message {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

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
                
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Full Name */}
                <div className="form-field">
                  <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className={`form-input pl-10 ${errors.fullName ? 'error' : touchedFields.fullName && !errors.fullName ? 'valid' : ''}`}
                      {...register('fullName', validationRules.fullName)}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                  </div>
                  {errors.fullName && (
                    <p id="fullName-error" className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="form-field">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className={`form-input pl-10 ${errors.email ? 'error' : touchedFields.email && !errors.email ? 'valid' : ''}`}
                      {...register('email', validationRules.email)}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="form-field">
                  <Label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      className={`form-input pl-10 ${errors.phoneNumber ? 'error' : touchedFields.phoneNumber && !errors.phoneNumber ? 'valid' : ''}`}
                      {...register('phoneNumber', validationRules.phoneNumber)}
                      aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                      aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p id="phoneNumber-error" className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Case Type */}
                <div className="form-field">
                  <Label htmlFor="caseType" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Case Type <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="caseType"
                    className={`form-input w-full ${errors.caseType ? 'error' : touchedFields.caseType && !errors.caseType ? 'valid' : ''}`}
                    {...register('caseType', validationRules.caseType)}
                    aria-invalid={errors.caseType ? 'true' : 'false'}
                    aria-describedby={errors.caseType ? 'caseType-error' : undefined}
                  >
                    {caseTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.caseType && (
                    <p id="caseType-error" className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {errors.caseType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="form-field">
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Case Details <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Textarea
                      id="message"
                      placeholder="Please describe your case, including relevant details about the incident, injuries, and any other important information..."
                      rows={6}
                      className={`form-input pl-10 resize-none ${errors.message ? 'error' : touchedFields.message && !errors.message ? 'valid' : ''}`}
                      {...register('message', validationRules.message)}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : 'message-counter'}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p id="message-error" className="error-message text-red-500 text-sm flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        {errors.message.message}
                      </p>
                    ) : (
                      <div></div>
                    )}
                    <span 
                      id="message-counter"
                      className={`char-counter text-sm ${
                        messageValue.length > 1800 ? 'error' : 
                        messageValue.length > 1500 ? 'warning' : 
                        'text-gray-500'
                      }`}
                    >
                      {messageValue.length}/2000
                    </span>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div className="form-field">
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
                          {...register('preferredContact', validationRules.preferredContact)}
                          className="sr-only"
                        />
                        <div className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg hover:border-yellow-400 transition-colors peer-checked:border-yellow-400 peer-checked:bg-yellow-50">
                          <Icon className="h-6 w-6 text-gray-600 mb-2" />
                          <span className="text-sm font-medium text-gray-700">{label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.preferredContact && (
                    <p className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {errors.preferredContact.message}
                    </p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="form-field">
                  <div className="flex items-start">
                    <input
                      id="consentCommunications"
                      type="checkbox"
                      className="form-input mt-1 mr-3 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                      {...register('consentCommunications', validationRules.consentCommunications)}
                    />
                    <Label htmlFor="consentCommunications" className="text-sm text-gray-600 cursor-pointer">
                      I consent to receive communications from Carestia Law regarding my case inquiry. 
                      I understand this consent is not required to receive legal services. <span className="text-red-500">*</span>
                    </Label>
                  </div>
                  {errors.consentCommunications && (
                    <p className="error-message text-red-500 text-sm mt-1 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-1" />
                      {errors.consentCommunications.message}
                    </p>
                  )}
                </div>

                {/* Error State Message */}
                {submissionState === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-red-700">{submissionMessage}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !isValid}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submissionState === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Your Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Get My Free Consultation
                    </>
                  )}
                </Button>

                {/* Security Notice */}
                <div className="text-center text-sm text-gray-500 flex items-center justify-center">
                  <Shield className="h-4 w-4 mr-1" />
                  Your information is secure and confidential
                </div>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Why Choose Us */}
              <Card className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <h3 className="text-2xl font-bold text-black mb-6">Why Choose Carestia Law?</h3>
                <div className="space-y-4">
                  {[
                    'Free, no-obligation consultation',
                    'No fees unless we win your case',
                    '15+ years of experience',
                    '500+ successful cases',
                    '$50M+ recovered for clients',
                    'Personalized attention from experienced attorneys'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-yellow-600 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Contact Methods */}
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Other Ways to Reach Us</h3>
                <div className="space-y-6">
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Call Us</div>
                      <a href="tel:4048442799" className="text-yellow-600 hover:text-yellow-700 font-medium">
                        (404) 844-2799
                      </a>
                      <div className="text-sm text-gray-600">Available 24/7 for emergencies</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Email Us</div>
                      <a href="mailto:info@carestialaw.com" className="text-yellow-600 hover:text-yellow-700 font-medium">
                        info@carestialaw.com
                      </a>
                      <div className="text-sm text-gray-600">We respond within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-black">Office Hours</div>
                      <div className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</div>
                      <div className="text-sm text-gray-600">Weekend consultations available</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Emergency Notice */}
              <Card className="p-6 bg-red-50 border-red-200">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Emergency Legal Situation?</h4>
                    <p className="text-red-700 text-sm mb-3">
                      If you're facing an urgent legal matter, don't wait. Call us immediately at (404) 844-2799.
                    </p>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white"
                      asChild
                    >
                      <a href="tel:4048442799">Call Now</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 