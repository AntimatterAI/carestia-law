import { ModernLayout } from '@/components/layout';
import { BreadcrumbContainer, Breadcrumb, type BreadcrumbItem } from '@/components/ui/breadcrumb';
import { generateMetadata, BASE_URL } from '@/lib/seo';
import { Award, Scale, Shield, Heart, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

// SEO Metadata for About Us page
export const metadata: Metadata = generateMetadata({
  title: 'About Us - Expert Legal Team | Carestia Law',
  description: 'Meet the experienced legal team at Carestia Law. Over two decades of dedicated service, 500+ cases won, and 98% client satisfaction. Learn about our commitment to justice.',
  keywords: [
    'about carestia law',
    'experienced attorneys',
    'legal team',
    'law firm history',
    'attorney background',
    'legal experience',
    'professional lawyers',
    'client focused law firm',
    'dedicated legal representation'
  ],
  path: '/about-us',
});

// Structured data for About Us page
const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Carestia Law",
  "description": "Learn about Carestia Law's experienced legal team, our history, and commitment to client success",
  "url": `${BASE_URL}/about-us`,
  "mainEntity": {
    "@type": "LegalService",
    "@id": `${BASE_URL}/#organization`,
    "name": "Carestia Law",
    "foundingDate": "1998",
    "founders": [
      {
        "@type": "Person",
        "name": "Michael Carestia",
        "jobTitle": "Founding Partner"
      }
    ],
    "description": "Expert legal representation with over two decades of courtroom success",
    "knowsAbout": [
      "Personal Injury Law",
      "Criminal Defense",
      "Civil Litigation",
      "Medical Malpractice",
      "Employment Law"
    ]
  }
};

// Team values data
const coreValues = [
  {
    icon: Scale,
    title: "Justice & Integrity",
    description: "We believe in fighting tirelessly for what's right, maintaining the highest ethical standards in every case we handle."
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description: "Every client receives personalized attention and compassionate support throughout their legal journey."
  },
  {
    icon: Shield,
    title: "Aggressive Advocacy",
    description: "We provide robust legal representation, protecting our clients' rights with unwavering determination."
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Our track record speaks for itself - over 500 successful cases and countless satisfied clients."
  }
];

// Statistics data
const firmStats = [
  { number: "25+", label: "Years of Experience", description: "Serving clients since 1998" },
  { number: "500+", label: "Cases Won", description: "Successful outcomes achieved" },
  { number: "98%", label: "Client Satisfaction", description: "Exceptional service rating" },
  { number: "$50M+", label: "Recovered", description: "In settlements and verdicts" }
];

// Breadcrumb items
const aboutBreadcrumbs: BreadcrumbItem[] = [
  { label: 'About Us', href: '/about-us', isCurrentPage: true }
];

export default function AboutUsPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageStructuredData),
        }}
      />
      
      <ModernLayout>
        <main role="main" aria-label="About Carestia Law">
          
          {/* Breadcrumb Navigation */}
          <BreadcrumbContainer>
            <Breadcrumb items={aboutBreadcrumbs} />
          </BreadcrumbContainer>
          
          {/* Hero Section */}
          <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-rich/5 to-transparent"></div>
            
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="block">About</span>
                    <span className="block bg-gradient-to-r from-gold-rich to-gold-warm bg-clip-text text-transparent">
                      Carestia Law
                    </span>
                  </h1>
                  
                  <p className="text-2xl md:text-3xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
                    Excellence in Legal Representation Since 1998
                  </p>
                </div>
                
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  For over two decades, Carestia Law has been dedicated to providing exceptional legal representation 
                  with a commitment to achieving the best possible outcomes for our clients. Our experience, integrity, 
                  and personalized approach set us apart.
                </p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-20 bg-white" aria-label="Firm Statistics">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {firmStats.map((stat, index) => (
                  <div key={stat.label} className="text-center space-y-3">
                    <div className="text-4xl md:text-5xl font-bold text-gold-rich mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xl font-semibold text-black">
                      {stat.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-24 bg-gray-50" aria-label="Our Story">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                      Our Story
                      <span className="block text-gold-rich">& Mission</span>
                    </h2>
                    
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                      <p>
                        Founded in 1998, Carestia Law began with a simple yet powerful mission: to provide 
                        exceptional legal representation while treating every client with the respect, attention, 
                        and dedication they deserve.
                      </p>
                      
                      <p>
                        Over the years, we have built a reputation for excellence through our unwavering commitment 
                        to justice and our clients' best interests. Our team combines decades of courtroom experience 
                        with a deep understanding of the law and a genuine passion for helping people navigate their 
                        most challenging legal situations.
                      </p>
                      
                      <p>
                        Today, we continue to uphold the same values that founded our firm: integrity, excellence, 
                        and an uncompromising dedication to achieving the best possible outcomes for those we serve.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Schedule Consultation
                    </a>
                    <a 
                      href="/practice-areas" 
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-rich text-gold-warm hover:bg-gold-rich hover:text-black font-bold rounded-lg transition-all duration-300"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gold-champagne to-gold-rich rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-center text-black p-8">
                      <div className="w-24 h-24 bg-black/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Scale className="w-12 h-12" />
                      </div>
                      <h3 className="font-bold text-xl mb-2">Justice & Excellence</h3>
                      <p className="text-sm opacity-80">Our commitment to every client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-24 bg-white" aria-label="Our Core Values">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Our Core
                  <span className="block text-gold-rich">Values</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  These fundamental principles guide every decision we make and every case we handle, 
                  ensuring our clients receive the highest quality legal representation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="text-center space-y-6 p-6 md:p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 md:hover:from-gold-champagne/30 md:hover:to-gold-rich/30 md:transition-all md:duration-300 md:hover:shadow-lg">
                      <div className="w-20 h-20 bg-gradient-to-br from-gold-rich to-gold-warm rounded-xl flex items-center justify-center mx-auto">
                        <Icon className="w-10 h-10 text-black" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-black">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-24 bg-gray-50" aria-label="Why Choose Carestia Law">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                  Why Choose
                  <span className="block text-gold-rich">Carestia Law</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  When you're facing legal challenges, you need a team that combines experience, 
                  dedication, and a proven track record of success.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-gold-rich mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Proven Track Record</h3>
                      <p className="text-gray-600 leading-relaxed">
                        With over 500 successful cases and millions recovered for our clients, 
                        our results speak for themselves.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-gold-rich mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Personalized Attention</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every client receives direct access to our attorneys and personalized 
                        legal strategies tailored to their unique situation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-gold-rich mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">No Fee Unless We Win</h3>
                      <p className="text-gray-600 leading-relaxed">
                        For most cases, we work on a contingency basis, meaning you pay nothing 
                        unless we achieve a successful outcome.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-gold-rich mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">24/7 Availability</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Legal emergencies don't wait for business hours. We're available 
                        around the clock when you need us most.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-gold-rich mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Extensive Experience</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our team brings decades of combined legal experience across multiple 
                        practice areas and jurisdictions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-8 h-8 text-gold-rich mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">Free Consultation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We offer free initial consultations to evaluate your case and 
                        discuss your legal options with no obligation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-24 bg-black text-white" aria-label="Contact Carestia Law">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready to Work With
                  <span className="block text-gold-rich">Experienced Attorneys?</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Contact us today for a free consultation and discover how our experienced team 
                  can help you navigate your legal challenges with confidence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold text-lg rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Free Consultation
                  </a>
                  
                  <a 
                    href="tel:4048442799" 
                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-gold-rich text-gold-rich hover:bg-gold-rich hover:text-black font-bold text-lg rounded-lg transition-all duration-300"
                  >
                    Call (404) 844-2799
                  </a>
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