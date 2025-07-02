import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import Link from 'next/link';
import { 
  FileText, 
  Shield, 
  Phone, 
  Heart, 
  Brain, 
  Car, 
  Scale, 
  Stethoscope,
  Calendar,
  MapPin,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const resourceCategories = [
  {
    title: "Immediate Help",
    description: "What to do right now if you've been in an accident",
    icon: AlertTriangle,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    resources: [
      {
        title: "Emergency Action Steps",
        href: "/what-to-do-after-car-accident",
        description: "Step-by-step guide for the first hours after your accident",
        internal: true
      },
      {
        title: "24/7 Emergency Hotline",
        href: "tel:4048442799",
        description: "Call (404) 844-2799 for immediate assistance",
        internal: false
      },
      {
        title: "Free Case Evaluation",
        href: "/free-case-evaluation", 
        description: "Get your case reviewed by experts for free",
        internal: true
      }
    ]
  },
  {
    title: "Know Your Rights",
    description: "Understanding your legal rights and options in Georgia",
    icon: Scale,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    resources: [
      {
        title: "Your Legal Rights Guide",
        href: "/understanding-your-rights",
        description: "Comprehensive guide to your rights after a car accident",
        internal: true
      },
      {
        title: "Georgia Traffic Laws",
        href: "/blog",
        description: "Understanding Georgia's comparative negligence laws",
        internal: true
      },
      {
        title: "Insurance Company Tactics",
        href: "/blog",
        description: "How to protect yourself from insurance tricks",
        internal: true
      }
    ]
  },
  {
    title: "Build Your Case",
    description: "Tools and resources to strengthen your case",
    icon: Brain,
    color: "from-purple-500 to-purple-600", 
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    resources: [
      {
        title: "AI Case Builder",
        href: "/ai-case-builder",
        description: "Organize your evidence and build your case online",
        internal: true
      },
      {
        title: "Evidence Checklist", 
        href: "/what-to-do-after-car-accident",
        description: "What evidence to collect and how to preserve it",
        internal: true
      },
      {
        title: "Medical Documentation",
        href: "/blog",
        description: "How to properly document your injuries and treatment",
        internal: true
      }
    ]
  },
  {
    title: "Find Expert Help",
    description: "Connect with attorneys and medical professionals",
    icon: Heart,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50", 
    borderColor: "border-green-200",
    resources: [
      {
        title: "Find an Attorney",
        href: "/find-attorney",
        description: "Get matched with experienced car accident attorneys",
        internal: true
      },
      {
        title: "Medical Care Providers",
        href: "/blog",
        description: "Find doctors who specialize in car accident injuries",
        internal: true
      },
      {
        title: "About Our Approach",
        href: "/about-us",
        description: "How we help car accident victims get justice",
        internal: true
      }
    ]
  }
];

const quickLinks = [
  { name: "What to Do After an Accident", href: "/what-to-do-after-car-accident", icon: FileText },
  { name: "Understanding Your Rights", href: "/understanding-your-rights", icon: Shield },
  { name: "AI Case Builder", href: "/ai-case-builder", icon: Brain },
  { name: "Find an Attorney", href: "/find-attorney", icon: Scale },
  { name: "Free Case Evaluation", href: "/free-case-evaluation", icon: CheckCircle },
  { name: "Blog & Articles", href: "/blog", icon: FileText }
];

const emergencyContacts = [
  { name: "Emergency Services", number: "911", description: "Police, Fire, Medical Emergency" },
  { name: "Our 24/7 Hotline", number: "(404) 844-2799", description: "Legal help and guidance" },
  { name: "Georgia State Patrol", number: "404-624-7000", description: "Non-emergency accident reports" },
  { name: "Poison Control", number: "1-800-222-1222", description: "Medical emergencies" }
];

export default function ResourcesPage() {
  return (
    <ModernLayout>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Resources for Car Accident Victims
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about protecting your rights, building your case, 
                and getting the help you deserve after a car accident in Atlanta.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
              <p className="text-gray-600 text-lg">Jump directly to the information you need most</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.name}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Resource Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've organized everything you need to know into easy-to-follow categories. 
                Start wherever makes sense for your situation.
              </p>
            </div>

            <div className="space-y-12">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className={`relative ${category.bgColor} rounded-3xl p-8 border-2 ${category.borderColor}`}>
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-700 text-lg">{category.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {category.resources.map((resource) => (
                        <Link
                          key={resource.title}
                          href={resource.href}
                          className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {resource.title}
                            </h4>
                            {resource.internal ? (
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                            ) : (
                              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 bg-red-50 border-t-4 border-red-400">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Contacts</h2>
              <p className="text-gray-600 text-lg">Keep these numbers handy - you never know when you might need them</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyContacts.map((contact) => (
                <div key={contact.name} className="bg-white p-6 rounded-xl border border-red-200 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{contact.name}</h3>
                  <a 
                    href={`tel:${contact.number.replace(/[^\d]/g, '')}`}
                    className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors block mb-2"
                  >
                    {contact.number}
                  </a>
                  <p className="text-gray-600 text-sm">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't navigate this alone. Our team is available 24/7 to help you understand your options 
              and connect you with the right resources for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:4048442799"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call (404) 844-2799
              </Link>
              <Link
                href="/free-case-evaluation"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg"
              >
                Free Case Review
                <ArrowRight className="h-5 w-5 ml-3" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </ModernLayout>
  );
} 