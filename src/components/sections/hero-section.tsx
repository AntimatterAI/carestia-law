'use client';

import React, { useEffect, useState } from 'react';
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
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Immediate load for better performance
    setIsLoaded(true);
    
    // Trigger animations after component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    // Observe all animatable elements
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Modern CSS Animations - 2025 Design System */}
      <style jsx>{`
        .hero-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-animate.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-animate:nth-child(1) { transition-delay: 0.1s; }
        .hero-animate:nth-child(2) { transition-delay: 0.3s; }
        .hero-animate:nth-child(3) { transition-delay: 0.5s; }
        .hero-animate:nth-child(4) { transition-delay: 0.7s; }
        .hero-animate:nth-child(5) { transition-delay: 0.9s; }
        
        .btn-modern-primary {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          font-weight: bold;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
          border: none;
        }
        
        .btn-modern-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.4);
          background: linear-gradient(135deg, #FFED4E 0%, #FFB84D 100%);
        }
        
        .btn-modern-secondary {
          background: transparent;
          color: #FFD700;
          border: 2px solid #FFD700;
          font-weight: bold;
          padding: 1rem 2rem;
          border-radius: 0.75rem;
          font-size: 1.125rem;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(10px);
        }
        
        .btn-modern-secondary:hover {
          background: #FFD700;
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 215, 0, 0.3);
        }
        
        .trust-card-modern {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 1rem;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .trust-card-modern:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 215, 0, 0.5);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.2);
        }
        
        .gold-gradient-text {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .modern-scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          animation: gentle-pulse 3s ease-in-out infinite;
          pointer-events: none;
          margin-top: 2rem;
        }
        
        .scroll-chevron {
          animation: scroll-bounce 2s ease-in-out infinite;
        }
        
        @keyframes gentle-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes scroll-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        
        .scroll-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-background-modern {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          position: relative;
        }
        
        .hero-background-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 215, 0, 0.08) 50%, transparent 100%);
          pointer-events: none;
        }
        
        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-animate,
          .trust-card-modern,
          .btn-modern-primary,
          .btn-modern-secondary {
            transition: none !important;
            animation: none !important;
            transform: none !important;
          }
        }
        
        /* Ensure scroll indicator doesn't overlap with content */
        @media (max-height: 700px) {
          .modern-scroll-indicator {
            display: none;
          }
        }
      `}</style>

      <section 
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
        aria-label="Hero section - Expert Legal Representation"
        role="banner"
      >
        {/* Modern Background System */}
        <div className="absolute inset-0 z-0">
          <div className="hero-background-modern absolute inset-0" />
          <div className="hero-pattern" />
          
          {/* Optional Professional Image Background */}
          {backgroundImage && (
            <div className="relative w-full h-full">
              <Image
                src={backgroundImage}
                alt="Professional legal office representing excellence in law"
                fill
                priority
                className={`object-cover transition-opacity duration-1000 ${
                  isLoaded ? 'opacity-30' : 'opacity-0'
                }`}
                sizes="100vw"
                quality={85}
              />
            </div>
          )}
          
          {/* Enhanced Text Readability Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        {/* Hero Content - Modern 2025 Layout */}
        <div className="relative z-10 container max-w-7xl mx-auto px-4 py-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Main Content - Bold Typography & Clear Hierarchy */}
            <div className="space-y-8">
              {/* Modern Headlines with Personality */}
              <div className={`space-y-6 hero-animate ${isVisible ? 'visible' : ''}`}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block">Expert Legal</span>
                  <span className="block gold-gradient-text">Representation</span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-gray-200 font-medium leading-relaxed">
                  Decades of Courtroom Success
                </p>
              </div>

              {/* Clear Value Proposition */}
              <div className={`space-y-6 hero-animate ${isVisible ? 'visible' : ''}`}>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  When you need experienced legal representation, choose attorneys who combine 
                  decades of courtroom success with personalized attention to your unique case. 
                  We fight tirelessly for the justice and compensation you deserve.
                </p>
                
                <div className="flex items-center space-x-3 text-gold-rich">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                  <span className="text-lg font-semibold">Licensed in New York & New Jersey</span>
                </div>
              </div>

              {/* Modern CTA Buttons - Bold Design */}
              <div className={`flex flex-col sm:flex-row gap-6 hero-animate ${isVisible ? 'visible' : ''}`}>
                <Link href="/contact" className="btn-modern-primary inline-flex items-center justify-center">
                  <MessageCircle className="mr-3 h-6 w-6" aria-hidden="true" />
                  Get Your Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
                </Link>
                
                <Link href="tel:4048442799" className="btn-modern-secondary inline-flex items-center justify-center">
                  <Phone className="mr-3 h-6 w-6" aria-hidden="true" />
                  Call (404) 844-2799
                </Link>
              </div>

              {/* Trust Badge with Modern Design */}
              <div className={`pt-6 hero-animate ${isVisible ? 'visible' : ''}`}>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Scale className="h-6 w-6 text-gold-rich" aria-hidden="true" />
                  <span className="text-lg">Available 24/7 for Emergency Legal Matters</span>
                </div>
              </div>
            </div>

            {/* Modern Trust Indicators */}
            <div className="space-y-8 scroll-animate">
              <h2 className="text-3xl font-bold text-white text-center lg:text-left">
                Why Choose <span className="gold-gradient-text">Carestia Law</span>
              </h2>
              
              <div className="space-y-6">
                {trustIndicators.map((indicator, index) => {
                  const Icon = indicator.icon;
                  return (
                    <div key={indicator.label} className="scroll-animate">
                      <div className="trust-card-modern p-8">
                        <div className="flex items-center space-x-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-gold-rich to-gold-warm rounded-xl flex items-center justify-center">
                              <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-3xl font-bold gold-gradient-text mb-2">
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
                    </div>
                  );
                })}
              </div>

              {/* Additional Modern CTA Card */}
              <div className="pt-4 scroll-animate">
                <div className="trust-card-modern p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Don't Wait - <span className="gold-gradient-text">Act Now</span>
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

        {/* Fixed Scroll Indicator - Better Positioning */}
        <div className="modern-scroll-indicator">
          <div className="flex flex-col items-center space-y-2 text-gold-rich">
            <span className="text-sm font-medium tracking-wide">Scroll to Learn More</span>
            <div className="scroll-chevron">
              <ChevronDown className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 