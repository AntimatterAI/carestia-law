'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { practiceAreasData } from '@/data/practice-areas';

export function PracticeAreasSection() {
  return (
    <section 
      id="practice-areas" 
      className="py-16 lg:py-24 bg-white"
      aria-label="Our Practice Areas"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-yellow-600 text-yellow-700">
            Areas of Practice
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Comprehensive Legal
            <span className="block text-amber-700">Representation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced attorneys provide expert legal representation across multiple practice areas, 
            fighting tirelessly to protect your rights and secure the compensation you deserve.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreasData.map((area, index) => {
            const Icon = area.icon;
            
            return (
              <div key={area.slug} className="practice-card">
                <Card className="h-full bg-white hover:bg-gray-50/50 transition-colors duration-300 relative overflow-hidden">
                  <div className="p-8 h-full flex flex-col">
                    

                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-gray-600" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold text-black leading-tight">
                        {area.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {area.shortDescription}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-gray-700 hover:text-black font-medium group"
                        asChild
                      >
                        <Link href={`/practice-areas/${area.slug}`}>
                          <span>{area.title} Details</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">
            Don't See Your Case Type?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We handle a wide variety of legal matters. Contact us today to discuss your specific situation 
            and learn how we can help protect your rights and interests.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-8 py-4"
              asChild
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black font-bold px-8 py-4"
              asChild
            >
              <Link href="tel:4048442799">
                Call (404) 844-2799
              </Link>
            </Button>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8">
                            <Scale className="h-12 w-12 text-amber-700 mx-auto mb-4" />
            <blockquote className="text-lg font-medium text-gray-800 mb-4">
              We believe every client deserves personalized attention and aggressive representation. 
              Your case is our priority, and your success is our commitment.
            </blockquote>
            <cite className="text-yellow-700 font-semibold">— The Carestia Law Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
} 