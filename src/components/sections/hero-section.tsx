'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
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

// Dynamic imports for mobile optimization
const Image = dynamic(() => import('next/image'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
});

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
      style={{
        // Mobile performance optimizations
        contain: 'layout style paint',
        willChange: 'auto',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      {/* Mobile-optimized Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {backgroundImage && (
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />}>
            <Image
              src={backgroundImage}
              alt="Professional legal office"
              fill
              priority={false} // Don't prioritize on mobile
              className="object-cover opacity-30"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              quality={60} // Lower quality for mobile
              loading="lazy"
            />
          </Suspense>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Hero Content - Mobile Optimized */}
      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Main Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              {/* Mobile-optimized typography */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Expert Legal</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Representation
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-medium leading-relaxed">
                Decades of Courtroom Success
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                When you need experienced legal representation, choose attorneys who combine 
                decades of courtroom success with personalized attention to your unique case.
              </p>
              
              <div className="flex items-center space-x-3 text-yellow-400">
                <Shield className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                <span className="text-base md:text-lg font-semibold">Licensed in Georgia</span>
              </div>
            </div>

            {/* Mobile-optimized CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link 
                href="/contact" 
                className="btn-modern-primary inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 transition-colors duration-200"
              >
                <MessageCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                Get Your Free Consultation
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              </Link>
              
              <Link 
                href="tel:4048442799" 
                className="btn-modern-secondary inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-lg border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black transition-colors duration-200"
              >
                <Phone className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                Call (404) 844-2799
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 md:pt-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Scale className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" aria-hidden="true" />
                <span className="text-base md:text-lg">Available 24/7 for Emergency Legal Matters</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Mobile Optimized */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left">
              Why Choose <span className="text-yellow-400">Carestia Law</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {trustIndicators.map((indicator) => {
                const Icon = indicator.icon;
                return (
                  <div 
                    key={indicator.label} 
                    className="trust-card bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4 md:p-8 hover:border-yellow-400/40 transition-colors duration-200"
                    style={{ contain: 'layout style' }} // Mobile optimization
                  >
                    <div className="flex items-center space-x-4 md:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 md:h-8 md:w-8 text-black" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 md:mb-2">
                          {indicator.value}
                        </div>
                        <div className="text-white font-semibold text-base md:text-lg mb-1">
                          {indicator.label}
                        </div>
                        <div className="text-gray-400 text-sm md:text-base">
                          {indicator.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional CTA - Mobile Optimized */}
            <div className="pt-4">
              <div className="trust-card bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-4 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                  Don't Wait - <span className="text-yellow-400">Act Now</span>
                </h3>
                <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                  Every day matters in legal cases. Get the representation you need today.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-modern-primary inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 transition-colors duration-200"
                >
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-yellow-400 hidden lg:flex flex-col items-center space-y-2">
        <span className="text-sm font-medium">Scroll to Learn More</span>
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
} 