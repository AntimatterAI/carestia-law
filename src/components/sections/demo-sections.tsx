'use client';

import React, { useEffect, useState } from 'react';
import { Scale, Users, Award, Shield, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
// Temporarily using inline styles until design-tokens.ts is fixed

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Initial animation trigger
    setTimeout(() => setIsVisible(true), 100);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '1,000+', label: 'Cases Won' },
    { number: '2,500+', label: 'Happy Clients' },
    { number: '95%', label: 'Success Rate' },
  ];

  return (
    <>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
        
        .fade-in.visible .stat-item:nth-child(1) { transition-delay: 0.1s; opacity: 1; transform: translateY(0); }
        .fade-in.visible .stat-item:nth-child(2) { transition-delay: 0.2s; opacity: 1; transform: translateY(0); }
        .fade-in.visible .stat-item:nth-child(3) { transition-delay: 0.3s; opacity: 1; transform: translateY(0); }
        .fade-in.visible .stat-item:nth-child(4) { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }
      `}</style>

      <section id="about" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`fade-in ${isVisible ? 'visible' : ''} grid lg:grid-cols-2 gap-12 items-center`}>
            {/* Content */}
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                About Our Firm
              </Badge>
              
              <h2 className="font-serif text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-black">
                Dedicated Legal Excellence Since 1998
              </h2>
              
              <p className="font-sans text-base lg:text-lg leading-relaxed">
                At Carestia Law, we combine decades of legal expertise with a personal touch that sets us apart. 
                Our commitment to our clients goes beyond winning cases—we're here to protect your rights, 
                your family, and your future.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced attorneys specializes in a wide range of practice areas, ensuring that 
                no matter what legal challenges you face, you have the expert representation you deserve.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stat-item text-center"
                  >
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="animate-on-scroll relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <Scale className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Professional Team Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================================================
// PRACTICE AREAS SECTION
// ============================================================================

export const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Users,
      title: 'Personal Injury',
      description: 'Comprehensive representation for accident victims and their families.',
      features: ['Car Accidents', 'Slip & Fall', 'Medical Malpractice', 'Wrongful Death'],
    },
    {
      icon: Shield,
      title: 'Criminal Defense',
      description: 'Aggressive defense for all criminal charges, from misdemeanors to felonies.',
      features: ['DUI Defense', 'Drug Charges', 'Violent Crimes', 'White Collar'],
    },
    {
      icon: Scale,
      title: 'Family Law',
      description: 'Compassionate guidance through family legal matters.',
      features: ['Divorce', 'Child Custody', 'Adoption', 'Domestic Relations'],
    },
    {
      icon: Award,
      title: 'Business Law',
      description: 'Complete legal solutions for businesses of all sizes.',
      features: ['Contract Law', 'Employment Issues', 'Business Formation', 'Litigation'],
    },
  ];

  return (
    <>
      <style jsx>{`
        .practice-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .practice-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .practice-card:hover {
          transform: translateY(-8px);
        }
        
        .practice-card:nth-child(1).animate-in { transition-delay: 0.1s; }
        .practice-card:nth-child(2).animate-in { transition-delay: 0.2s; }
        .practice-card:nth-child(3).animate-in { transition-delay: 0.3s; }
        .practice-card:nth-child(4).animate-in { transition-delay: 0.4s; }
      `}</style>

      <section id="practice-areas" className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-on-scroll text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Our Practice Areas
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-black">
              Comprehensive Legal Services
            </h2>
            <p className="font-sans text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              Our experienced attorneys provide expert representation across multiple practice areas, 
              ensuring comprehensive legal solutions for all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="practice-card animate-on-scroll group"
                >
                  <Card className="h-full p-6 border-yellow-200 hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-200 transition-colors">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-black mb-3">
                      {area.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {area.features.map((feature) => (
                        <li key={feature} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================================================
// RESULTS SECTION
// ============================================================================

export const ResultsSection = () => {
  const results = [
    { amount: '$2.5M', case: 'Personal Injury Settlement' },
    { amount: '$1.8M', case: 'Medical Malpractice Victory' },
    { amount: '$950K', case: 'Business Litigation Win' },
    { amount: '$750K', case: 'Car Accident Recovery' },
  ];

  return (
    <>
      <style jsx>{`
        .result-item {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.6s ease-out;
        }
        
        .result-item.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        
        .result-item:nth-child(1).animate-in { transition-delay: 0.1s; }
        .result-item:nth-child(2).animate-in { transition-delay: 0.2s; }
        .result-item:nth-child(3).animate-in { transition-delay: 0.3s; }
        .result-item:nth-child(4).animate-in { transition-delay: 0.4s; }
        
        .cta-button {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
          transition-delay: 0.6s;
        }
        
        .cta-button.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section id="results" className="py-16 lg:py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-on-scroll text-center mb-16">
            <Badge variant="outline" className="mb-6 border-yellow-400 text-yellow-400">
              Proven Results
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Fighting for Maximum Recovery
            </h2>
            <p className="font-sans text-base lg:text-lg leading-relaxed text-yellow-100 max-w-3xl mx-auto mt-6">
              Our track record speaks for itself. We've secured millions in settlements and verdicts 
              for our clients, ensuring they receive the compensation they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div
                key={result.case}
                className="result-item animate-on-scroll text-center"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-3">
                  {result.amount}
                </div>
                <div className="text-yellow-100 text-sm">
                  {result.case}
                </div>
              </div>
            ))}
          </div>

          <div className="cta-button animate-on-scroll text-center mt-12">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
            >
              View All Results
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['123 Main Street', 'Suite 456', 'City, State 12345'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: By Appointment'],
    },
  ];

  return (
    <>
      <style jsx>{`
        .contact-info {
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.6s ease-out;
        }
        
        .contact-info.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .contact-info:nth-child(1).animate-in { transition-delay: 0.1s; }
        .contact-info:nth-child(2).animate-in { transition-delay: 0.2s; }
        
        .contact-buttons {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
          transition-delay: 0.4s;
        }
        
        .contact-buttons.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .contact-form {
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.8s ease-out;
          transition-delay: 0.2s;
        }
        
        .contact-form.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section id="contact" className="py-16 lg:py-24 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="animate-on-scroll text-center mb-16">
            <Badge variant="outline" className="mb-6">
              Get In Touch
            </Badge>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-black">
              Ready to Discuss Your Case?
            </h2>
            <p className="font-sans text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              Don't wait to get the legal help you need. Contact us today for a free consultation 
              and let us fight for your rights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.title}
                    className="contact-info animate-on-scroll flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* CTA Buttons */}
              <div className="contact-buttons animate-on-scroll space-y-4 pt-8">
                <Button
                  size="lg"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                >
                  Call Now: (404) 844-2799
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-400 hover:text-black"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="contact-form animate-on-scroll lg:col-span-2">
              <Card className="p-8 border-yellow-200">
                <h3 className="text-xl font-semibold text-black mb-6">
                  Send Us a Message
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                    <div className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                  </div>
                  <div className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                  <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                  <div className="h-12 bg-yellow-100 rounded-lg animate-pulse" />
                </div>
                <p className="text-center text-gray-500 text-sm mt-6">
                  Contact form component will be implemented here
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 