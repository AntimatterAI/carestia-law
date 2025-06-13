'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  caseType: string;
  outcome: string;
  rating: number;
  location: string;
  initials: string;
  backgroundGradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "After my car accident, I was overwhelmed with medical bills and insurance hassles. Carestia Law took care of everything and got me a settlement far beyond what I expected. They truly fought for me when I couldn't fight for myself.",
    clientName: "Sarah M.",
    caseType: "Car Accident",
    outcome: "$425,000 Settlement",
    rating: 5,
    location: "Brooklyn, NY",
    initials: "SM",
    backgroundGradient: "from-blue-500 to-purple-600"
  },
  {
    id: '2',
    quote: "The medical malpractice case seemed impossible, but these attorneys never gave up. They brought in the right experts, built a compelling case, and secured justice for my family. I'm forever grateful for their dedication.",
    clientName: "Robert T.",
    caseType: "Medical Malpractice",
    outcome: "$1.2M Verdict",
    rating: 5,
    location: "Manhattan, NY",
    initials: "RT",
    backgroundGradient: "from-green-500 to-teal-600"
  },
  {
    id: '3',
    quote: "I suffered a serious injury at work and was denied workers' comp benefits. Carestia Law fought the insurance company and got me everything I deserved. They made a difficult time much easier for my family.",
    clientName: "Maria L.",
    caseType: "Workers' Compensation",
    outcome: "$180,000 Recovery",
    rating: 5,
    location: "Newark, NJ",
    initials: "ML",
    backgroundGradient: "from-orange-500 to-red-600"
  },
  {
    id: '4',
    quote: "When I slipped and fell in a grocery store, I didn't think I had a case. These lawyers investigated thoroughly, proved the store's negligence, and secured a settlement that covered all my medical expenses and more.",
    clientName: "James K.",
    caseType: "Slip and Fall",
    outcome: "$95,000 Settlement",
    rating: 5,
    location: "Jersey City, NJ",
    initials: "JK",
    backgroundGradient: "from-purple-500 to-pink-600"
  },
  {
    id: '5',
    quote: "The truck accident left me with life-changing injuries. Carestia Law understood the complexity of my case, dealt with multiple insurance companies, and secured a settlement that ensures my family's future.",
    clientName: "David R.",
    caseType: "Trucking Accident",
    outcome: "$850,000 Settlement",
    rating: 5,
    location: "Queens, NY",
    initials: "DR",
    backgroundGradient: "from-indigo-500 to-blue-600"
  },
  {
    id: '6',
    quote: "Dealing with workplace harassment was incredibly difficult. The attorneys provided compassionate support while aggressively pursuing my case. They helped me get the justice and compensation I deserved.",
    clientName: "Jennifer S.",
    caseType: "Sexual Harassment",
    outcome: "$225,000 Settlement",
    rating: 5,
    location: "Hoboken, NJ",
    initials: "JS",
    backgroundGradient: "from-pink-500 to-rose-600"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      autoPlayRef.current = setInterval(nextTestimonial, 5000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevTestimonial();
      } else if (event.key === 'ArrowRight') {
        nextTestimonial();
      } else if (event.key === ' ') {
        event.preventDefault();
        toggleAutoPlay();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        .testimonial-carousel {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .testimonial-slide {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .testimonial-slide.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .testimonial-slide.prev {
          opacity: 0;
          transform: translateX(-30px);
        }
        
        .testimonial-slide.next {
          opacity: 0;
          transform: translateX(30px);
        }
        
        .quote-mark {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 4px rgba(251, 191, 36, 0.3);
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          border: 1px solid rgba(255, 212, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          border-color: rgba(255, 212, 0, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 212, 0, 0.1);
        }
        
        .nav-button {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 212, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .nav-button:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border-color: transparent;
          transform: scale(1.05);
        }
        
        .nav-button:hover svg {
          color: #000;
        }
        
        .progress-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(156, 163, 175, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .progress-dot.active {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          transform: scale(1.2);
          box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3);
        }
        
        .progress-dot:hover {
          background: rgba(251, 191, 36, 0.7);
          transform: scale(1.1);
        }
        
        .client-avatar {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover .client-avatar {
          transform: scale(1.05);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .testimonial-slide,
          .testimonial-card,
          .nav-button,
          .progress-dot,
          .client-avatar {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <section 
        id="testimonials" 
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
        aria-label="Client Testimonials"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-yellow-600 text-yellow-700">
              Client Success Stories
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              What Our Clients Say
              <span className="block text-yellow-600">About Their Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from real clients who received the justice and compensation they deserved. 
              Their success is our success.
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative max-w-4xl mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            
            {/* Main Testimonial Display */}
            <div 
              ref={carouselRef}
              className="testimonial-carousel relative overflow-hidden"
              role="region"
              aria-label="Client testimonials carousel"
              aria-live="polite"
            >
              {testimonials.map((testimonial, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === currentIndex - 1 || (currentIndex === 0 && index === testimonials.length - 1);
                const isNext = index === currentIndex + 1 || (currentIndex === testimonials.length - 1 && index === 0);
                
                return (
                  <div
                    key={testimonial.id}
                    className={`testimonial-slide ${isActive ? 'active' : isPrev ? 'prev' : isNext ? 'next' : ''} ${!isActive ? 'absolute inset-0' : ''}`}
                    aria-hidden={!isActive}
                  >
                    <Card className="testimonial-card p-8 md:p-12 text-center">
                      
                      {/* Quote Icon */}
                      <div className="mb-8">
                        <Quote className="quote-mark h-16 w-16 mx-auto" aria-hidden="true" />
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      {/* Client Info */}
                      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        
                        {/* Client Avatar */}
                        <div className={`client-avatar w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.backgroundGradient} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">
                            {testimonial.initials}
                          </span>
                        </div>
                        
                        {/* Client Details */}
                        <div className="text-center md:text-left">
                          <div className="font-bold text-lg text-black">
                            {testimonial.clientName}
                          </div>
                          <div className="text-yellow-600 font-semibold">
                            {testimonial.caseType}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {testimonial.location}
                          </div>
                        </div>
                        
                        {/* Case Outcome */}
                        <div className="text-center">
                          <Badge className="bg-green-100 text-green-800 border-green-300 font-bold">
                            {testimonial.outcome}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="nav-button absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="nav-button absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </Button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>

          {/* Auto-play Controls */}
          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black transition-all duration-300"
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="h-4 w-4 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Play
                </>
              )}
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Cases Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">$50M+</div>
              <div className="text-gray-600">Recovered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't wait to get the legal help you need. Contact us today for your free, 
              no-obligation consultation and let us fight for the justice you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="/contact">
                  Get Your Free Consultation
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4 transition-all duration-300"
                asChild
              >
                <a href="tel:4048442799">
                  Call (404) 844-2799
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 