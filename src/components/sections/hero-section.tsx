'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  Users, 
  Trophy, 
  Star, 
  ArrowRight,
  Shield,
  Scale,
  ChevronDown
} from 'lucide-react';

interface TrustIndicator {
  icon: React.ComponentType<any>;
  value: string;
  label: string;
  description: string;
}

interface HeroSectionProps {
  backgroundImage?: string;
  className?: string;
}

const trustIndicators: TrustIndicator[] = [
  {
    icon: Trophy,
    value: '15+',
    label: 'Years of Experience',
    description: 'Serving clients with dedication and expertise'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Cases Won',
    description: 'Successful outcomes for our clients'
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Exceptional service and results'
  }
];

export function HeroSection({ backgroundImage, className = '' }: HeroSectionProps) {
  return (
    <section 
      className={`hero-section relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Hero section - Expert Legal Representation"
      role="banner"
    >
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Professional legal office"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
            quality={75}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Expert Legal</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Representation
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 font-medium leading-relaxed">
                Decades of Courtroom Success
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                When you need experienced legal representation, choose attorneys who combine 
                decades of courtroom success with personalized attention to your unique case.
              </p>
              
              <div className="flex items-center space-x-3 text-yellow-400">
                <Shield className="h-6 w-6" aria-hidden="true" />
                <span className="text-lg font-semibold">Licensed in Georgia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contact" 
                className="btn-modern-primary inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-3 h-6 w-6" aria-hidden="true" />
                Get Your Free Consultation
                <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
              </Link>
              
              <Link 
                href="tel:4048442799" 
                className="btn-modern-secondary inline-flex items-center justify-center"
              >
                <Phone className="mr-3 h-6 w-6" aria-hidden="true" />
                Call (404) 844-2799
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="pt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Scale className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                <span className="text-lg">Available 24/7 for Emergency Legal Matters</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center lg:text-left">
              Why Choose <span className="text-yellow-400">Carestia Law</span>
            </h2>
            
            <div className="space-y-6">
              {trustIndicators.map((indicator) => {
                const Icon = indicator.icon;
                return (
                  <div key={indicator.label} className="trust-card bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 hover:border-yellow-400/40 transition-colors">
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-black" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">
                          {indicator.value}
                        </div>
                        <div className="text-white font-semibold text-lg mb-1">
                          {indicator.label}
                        </div>
                        <div className="text-gray-400">
                          {indicator.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional CTA */}
            <div className="pt-4">
              <div className="trust-card bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Don't Wait - <span className="text-yellow-400">Act Now</span>
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Every day matters in legal cases. Get the representation you need today.
                </p>
                <Link href="/contact" className="btn-modern-primary inline-flex items-center justify-center">
                  Schedule Your Consultation
                  <ArrowRight className="ml-3 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 hidden lg:flex flex-col items-center space-y-2">
        <span className="text-sm font-medium">Scroll to Learn More</span>
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
} 