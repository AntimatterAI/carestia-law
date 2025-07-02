'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { 
  Phone, 
  ArrowRight,
  Shield,
  Heart,
  CheckCircle,
  Clock,
  Users,
  Star,
  ChevronDown,
  AlertTriangle,
  MessageCircle,
  MapPin
} from 'lucide-react';

// Dynamic imports for mobile optimization
const Image = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
});

interface HeroSectionProps {
  backgroundImage?: string;
  className?: string;
}

const urgentSteps = [
  {
    icon: AlertTriangle,
    title: 'Right Now',
    subtitle: 'Safety First',
    description: 'Check for injuries, move to safety, call 911 if needed',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    urgent: true
  },
  {
    icon: Shield,
    title: 'Next 24 Hours',
    subtitle: 'Protect Yourself',
    description: 'Document everything, call police, contact insurance',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    urgent: false
  },
  {
    icon: Heart,
    title: 'This Week',
    subtitle: 'Get Support',
    description: 'See a doctor, connect with an attorney, focus on healing',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    urgent: false
  }
];

const trustMetrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Families We\'ve Helped',
    sublabel: 'Real people, real stories',
    color: 'text-blue-400'
  },
  {
    icon: Star,
    value: '4.9★',
    label: 'Client Rating',
    sublabel: 'Based on 200+ reviews',
    color: 'text-yellow-400'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Always Here',
    sublabel: 'When you need us most',
    color: 'text-emerald-400'
  }
];

export function HeroSection({ backgroundImage, className = '' }: HeroSectionProps) {
  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        
        {/* Overlay patterns */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-indigo-600/20 to-transparent" />
        </div>
        
        {/* Optional background image */}
        {backgroundImage && (
          <Suspense fallback={null}>
            <Image
              src={backgroundImage}
              alt="Professional legal support"
              fill
              priority={false}
              className="object-cover opacity-5"
              sizes="100vw"
              quality={60}
              loading="lazy"
            />
          </Suspense>
        )}
        
        {/* Animated elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Emotional Impact */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Urgent Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-red-500/20 border border-red-400/50 rounded-full px-6 py-3 mb-8">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
              <span className="text-red-200 font-medium">Just had an accident? Take a deep breath. You're going to be okay.</span>
            </div>

            {/* Main Headline with Better Typography */}
            <div className="space-y-6 mb-8">
              <h1 id="hero-heading" className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                You're Not
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Fighting This
                </span>
                <span className="block text-white/90">Alone</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl font-light">
                Right now, everything feels overwhelming and scary. We get it. We've helped over 500 families 
                through this exact situation, and we're here to guide you through every single step.
              </p>
            </div>

            {/* Trust Indicators with Better Design */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
              <div className="flex items-center space-x-2 text-emerald-300">
                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">No pressure, ever</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-300">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Free guidance 24/7</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Real people who care</span>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/what-to-do-after-car-accident"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Heart className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                I Need Help Right Now
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/find-attorney"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Find My Attorney
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Emergency Contact - Enhanced */}
            <div className="relative p-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm mb-1">Emergency? Someone is standing by:</p>
                  <a 
                    href="tel:4048442799" 
                    className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300"
                  >
                    (404) 844-2799
                  </a>
                  <p className="text-white/60 text-xs mt-1">Available right now • Real person answers</p>
                </div>
                <div className="text-right">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  </div>
                  <p className="text-white/80 text-xs font-medium">LIVE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Action Steps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* What to Do Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl" />
              <div className="relative p-8 border border-white/20 rounded-3xl">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    What You Need to Do
                  </h2>
                  <p className="text-blue-200 text-sm">
                    Step by step, we'll get through this together
                  </p>
                </div>
                
                <div className="space-y-6">
                  {urgentSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div 
                        key={step.title} 
                        className={`relative p-5 rounded-2xl border transition-all duration-300 hover:scale-105 ${step.bgColor} ${step.borderColor}`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-bold text-white text-lg">{step.subtitle}</h3>
                              {step.urgent && (
                                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                  URGENT
                                </span>
                              )}
                            </div>
                            <p className="text-white/70 text-sm font-medium mb-1">{step.title}</p>
                            <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-8 text-center">
                  <Link
                    href="/what-to-do-after-car-accident"
                    className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors font-medium group"
                  >
                    Get the complete step-by-step guide
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {trustMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div 
                    key={metric.label} 
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="relative p-4 text-center border border-white/20 rounded-2xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-white/20 to-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className={`h-5 w-5 ${metric.color}`} />
                      </div>
                      <div className={`text-2xl font-bold mb-1 ${metric.color}`}>{metric.value}</div>
                      <div className="text-white text-sm font-medium mb-1">{metric.label}</div>
                      <div className="text-white/60 text-xs">{metric.sublabel}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Proof */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl" />
              <div className="relative p-6 border border-emerald-500/30 rounded-2xl">
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white font-medium text-center mb-3 italic">
                  "I was so scared and confused after my accident. They walked me through everything 
                  and made me feel like I wasn't alone. I got way more than I expected."
                </blockquote>
                <div className="text-center">
                  <p className="text-emerald-300 text-sm font-medium">- Maria S.</p>
                  <p className="text-emerald-400/80 text-xs">Car accident victim, Atlanta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/60 text-sm mb-3">See how we can help you</p>
          <div className="flex flex-col items-center">
            <ChevronDown className="h-6 w-6 text-white/60 animate-bounce" />
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
} 