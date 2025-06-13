'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "After my car accident, I was overwhelmed with medical bills and insurance hassles. Carestia Law took care of everything and got me a settlement far beyond what I expected.",
    clientName: "Sarah M.",
    caseType: "Car Accident",
    outcome: "$425,000 Settlement",
    rating: 5,
    location: "Brooklyn, NY",
    initials: "SM"
  },
  {
    id: '2',
    quote: "The medical malpractice case seemed impossible, but these attorneys never gave up. They brought in the right experts and secured justice for my family.",
    clientName: "Robert T.",
    caseType: "Medical Malpractice",
    outcome: "$1.2M Verdict",
    rating: 5,
    location: "Manhattan, NY",
    initials: "RT"
  },
  {
    id: '3',
    quote: "I suffered a serious injury at work and was denied workers' comp benefits. Carestia Law fought the insurance company and got me everything I deserved.",
    clientName: "Maria L.",
    caseType: "Workers' Compensation",
    outcome: "$180,000 Recovery",
    rating: 5,
    location: "Newark, NJ",
    initials: "ML"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-yellow-600 text-yellow-700">
            Client Success Stories
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            What Our Clients Say
            <span className="block text-amber-700">About Their Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who received the justice and compensation they deserved.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-16">
          
          <Card className="p-8 md:p-12 text-center bg-white border border-gray-200 shadow-xl">
            
            {/* Quote Icon */}
            <div className="mb-8">
              <Quote className="h-16 w-16 mx-auto text-yellow-400" aria-hidden="true" />
            </div>
            
            {/* Star Rating */}
            <div className="flex justify-center mb-6" role="img" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
              {renderStars(currentTestimonial.rating)}
            </div>
            
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed mb-8 italic">
              "{currentTestimonial.quote}"
            </blockquote>
            
            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              
              {/* Client Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {currentTestimonial.initials}
                </span>
              </div>
              
              {/* Client Details */}
              <div className="text-center md:text-left">
                <div className="font-bold text-lg text-black">
                  {currentTestimonial.clientName}
                </div>
                <div className="text-amber-700 font-semibold">
                  {currentTestimonial.caseType}
                </div>
                <div className="text-gray-600 text-sm">
                  {currentTestimonial.location}
                </div>
              </div>
              
              {/* Case Outcome */}
              <div className="text-center">
                <Badge className="bg-green-100 text-green-800 border-green-300 font-bold">
                  {currentTestimonial.outcome}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </Button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center items-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-yellow-400' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">500+</div>
            <div className="text-gray-600">Cases Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">$50M+</div>
            <div className="text-gray-600">Recovered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait to get the legal help you need. Contact us today for your free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-8 py-4"
              asChild
            >
              <a href="/contact">
                Get Your Free Consultation
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4"
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
  );
} 