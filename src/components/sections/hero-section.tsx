'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Shield,
  Heart,
  CheckCircle,
  Clock,
  Users,
  Star,
  ChevronDown
} from 'lucide-react';

// Dynamic imports for mobile optimization
const Image = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
});

interface HeroSectionProps {
  backgroundImage?: string;
  className?: string;
}

const quickHelp = [
  {
    icon: Shield,
    title: 'Stay Safe',
    description: 'Move to safety, check for injuries, call 911',
    urgent: true
  },
  {
    icon: Phone,
    title: 'Get Help',
    description: 'Call police, document everything, contact us',
    urgent: false
  },
  {
    icon: Heart,
    title: 'Find Peace',
    description: 'Let experienced attorneys handle the rest',
    urgent: false
  }
];

const trustStats = [
  {
    icon: Users,
    value: '500+',
    label: 'Families Helped',
    description: 'Real people, real results'
  },
  {
    icon: Star,
    value: '98%',
    label: 'Success Rate',
    description: 'We fight and we win'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Always Available',
    description: 'When you need us most'
  }
];

export function HeroSection({ backgroundImage, className = '' }: HeroSectionProps) {
  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {backgroundImage && (
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />}>
            <Image
              src={backgroundImage}
              alt="Professional legal support"
              fill
              priority={false}
              className="object-cover opacity-10"
              sizes="100vw"
              quality={60}
              loading="lazy"
            />
          </Suspense>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-blue-800/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Message */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Urgent Badge */}
            <div className="inline-flex items-center space-x-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-red-200">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Just had an accident? You're not alone.</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Don't Face This
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Alone
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Car accidents are overwhelming. We'll guide you through every step and connect you with attorneys who truly care about your recovery.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm">Free guidance</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm">No pressure</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm">Available 24/7</span>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/what-to-do-after-car-accident"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 text-lg group"
              >
                <Heart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                I Need Help Now
              </Link>
              <Link
                href="/find-attorney"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-200 text-lg group"
              >
                Find My Attorney
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Emergency Contact */}
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm">Emergency? Call now:</p>
                  <a 
                    href="tel:4048442799" 
                    className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    (404) 844-2799
                  </a>
                </div>
                <div className="text-white/60 text-sm text-right">
                  <p>Available</p>
                  <p className="font-semibold">24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Help & Stats */}
          <div className="space-y-8">
            
            {/* Quick Help Steps */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                What to Do Right Now
              </h2>
              <div className="space-y-6">
                {quickHelp.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.title} 
                      className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-200 ${
                        step.urgent 
                          ? 'bg-red-500/20 border border-red-400/30' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        step.urgent 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/20 text-blue-200'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1">{step.title}</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                      </div>
                      {step.urgent && (
                        <div className="text-red-400 text-xs font-medium">URGENT</div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 text-center">
                <Link
                  href="/what-to-do-after-car-accident"
                  className="inline-flex items-center text-white hover:text-yellow-400 transition-colors font-medium"
                >
                  View complete checklist
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4">
              {trustStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label} 
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-200 font-medium mb-1">{stat.label}</div>
                    <div className="text-xs text-blue-300">{stat.description}</div>
                  </div>
                );
              })}
            </div>

            {/* Social Proof */}
            <div className="text-center p-6 bg-green-500/10 rounded-lg border border-green-400/20">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white font-medium mb-1">
                "They helped me when I felt completely lost"
              </p>
              <p className="text-green-200 text-sm">
                - Sarah M., Atlanta resident
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white/60 text-sm mb-2">Learn more about your options</p>
          <ChevronDown className="h-6 w-6 text-white/60 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
} 