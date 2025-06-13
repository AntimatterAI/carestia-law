import React from 'react';
import Link from 'next/link';
import { ModernLayout } from '@/components/layout';
import { BreadcrumbContainer, Breadcrumb, type BreadcrumbItem } from '@/components/ui/breadcrumb';
import { CheckCircle, Phone, MessageCircle, ArrowRight, Scale, Shield, Users, Award } from 'lucide-react';
import { PracticeAreaData } from '@/data/practice-areas';

interface PracticeAreaTemplateProps {
  practiceArea: PracticeAreaData;
  structuredData?: object;
}

export function PracticeAreaTemplate({ practiceArea, structuredData }: PracticeAreaTemplateProps) {
  const Icon = practiceArea.icon;
  
  // Generate breadcrumbs
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Practice Areas', href: '/practice-areas' },
    { label: practiceArea.title, href: `/practice-areas/${practiceArea.slug}`, isCurrentPage: true }
  ];

  return (
    <>
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      
      <ModernLayout>
        <main role="main" aria-label={`${practiceArea.title} Legal Services`}>
          
          {/* Breadcrumb Navigation */}
          <BreadcrumbContainer>
            <Breadcrumb items={breadcrumbs} />
          </BreadcrumbContainer>
          
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-gold-rich/20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-rich/10 to-gold-warm/15"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-gold-rich/5"></div>
            
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-rich to-gold-warm rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-gold-rich font-semibold text-lg">Expert Legal Representation</div>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="block">{practiceArea.title}</span>
                      <span className="block text-gold-rich text-3xl md:text-4xl lg:text-5xl font-medium mt-4">
                        Legal Services
                      </span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                      {practiceArea.shortDescription}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <MessageCircle className="mr-3 h-6 w-6" />
                      Free Consultation
                    </Link>
                    
                    <Link 
                      href="tel:4048442799" 
                      className="inline-flex items-center justify-center px-10 py-5 border-2 border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-black font-bold text-lg rounded-lg transition-all duration-300"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Call (404) 844-2799
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gold-champagne to-gold-rich rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-gold-rich/20 border-2 border-gold-rich rounded-full flex items-center justify-center mx-auto mb-6">
                        <Scale className="w-12 h-12 text-black" />
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-gold-rich">Expert Legal Advocacy</h3>
                      <p className="text-sm opacity-80 text-gold-rich">Dedicated to your success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-3 gap-16">
                
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  
                  {/* About This Practice Area */}
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-black leading-tight">
                      About {practiceArea.title}
                      <span className="block text-gold-rich text-2xl font-medium mt-2">Cases</span>
                    </h2>
                    
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p>{practiceArea.fullDescription}</p>
                    </div>
                  </div>
                  
                  {/* Key Points */}
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-black">
                      How We Can <span className="text-gold-rich">Help You</span>
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {practiceArea.keyPoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="w-6 h-6 text-gold-rich" />
                          </div>
                          <p className="text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* FAQ Section */}
                  {practiceArea.faqSection.length > 0 && (
                    <div className="space-y-8">
                      <h3 className="text-3xl font-bold text-black">
                        Frequently Asked <span className="text-gold-rich">Questions</span>
                      </h3>
                      
                      <div className="space-y-6">
                        {practiceArea.faqSection.map((faq, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-8">
                            <h4 className="text-xl font-bold text-black mb-4">{faq.question}</h4>
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sidebar */}
                <div className="space-y-8">
                  
                  {/* Contact Card */}
                  <div className="bg-black text-white rounded-xl p-8">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold-rich to-gold-warm rounded-full flex items-center justify-center mx-auto">
                        <Phone className="w-8 h-8 text-black" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
                        <p className="text-gray-300">Contact us today for your free consultation</p>
                      </div>
                      
                      <div className="space-y-4">
                        <Link 
                          href="/contact" 
                          className="block w-full bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold py-4 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                        >
                          Schedule Consultation
                        </Link>
                        
                        <Link 
                          href="tel:4048442799" 
                          className="block w-full border-2 border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-black font-bold py-4 rounded-lg transition-all duration-300 text-center"
                        >
                          Call (404) 844-2799
                        </Link>
                      </div>
                      
                      <div className="text-center text-gray-400 text-sm">
                        Available 24/7 • Free Consultation
                      </div>
                    </div>
                  </div>
                  
                  {/* Why Choose Us */}
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-black mb-6">Why Choose Carestia Law</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Award className="w-6 h-6 text-gold-rich mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-black">Proven Results</h4>
                          <p className="text-gray-600 text-sm">15+ years of experience</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-6 h-6 text-gold-rich mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-black">Client Focused</h4>
                          <p className="text-gray-600 text-sm">Personalized attention</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Shield className="w-6 h-6 text-gold-rich mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-black">No Fee Unless We Win</h4>
                          <p className="text-gray-600 text-sm">Contingency fee basis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Related Practice Areas */}
                  {practiceArea.relatedAreas.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-xl p-8">
                      <h3 className="text-xl font-bold text-black mb-6">Related Practice Areas</h3>
                      
                      <div className="space-y-3">
                        {practiceArea.relatedAreas.map((area, index) => (
                          <Link 
                            key={index}
                            href={area.href}
                            className="flex items-center justify-between p-3 text-gray-700 hover:text-gold-rich hover:bg-gold-champagne/20 rounded-lg transition-all duration-300 group"
                          >
                            <span className="font-medium">{area.title}</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Do not Wait to Protect
                  <span className="block text-gold-rich">Your Rights</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Every day matters in {practiceArea.title.toLowerCase()} cases. Contact our experienced legal team 
                  today for a free consultation and let us fight for the compensation you deserve.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Your Free Consultation
                  </Link>
                  
                  <Link 
                    href="tel:4048442799" 
                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-black font-bold text-lg rounded-lg transition-all duration-300"
                  >
                    Call (404) 844-2799
                  </Link>
                </div>
                
                <div className="text-center text-gray-400">
                  <p className="text-sm">Available 24/7 • Free Consultation • No Obligation</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ModernLayout>
    </>
  );
} 