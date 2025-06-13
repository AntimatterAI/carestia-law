import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin,
  ExternalLink,
  ArrowUpRight 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface LinkItem {
  name: string;
  href: string;
  external?: boolean;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday?: string;
  };
  mapUrl: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

const quickLinks: LinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Results', href: '/results' },
  { name: 'Our Attorneys', href: '/attorneys' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks: LinkItem[] = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Sitemap', href: '/sitemap' },
  { name: 'Accessibility', href: '/accessibility' },
];

const contactInfo: ContactInfo = {
  phone: '(555) 123-4567',
  email: 'info@carestialaw.com',
  address: {
    street: '123 Main Street, Suite 400',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  },
  hours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 2:00 PM',
    sunday: 'Sunday: By Appointment Only'
  },
  mapUrl: 'https://maps.google.com/?q=123+Main+Street+New+York+NY+10001'
};

const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com/carestialaw', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/carestialaw', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/carestialaw', icon: Linkedin },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const fullAddress = `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}`;

  return (
    <footer className="bg-black text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Firm Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-lg font-serif">CL</span>
                </div>
                <div>
                  <div className="text-xl font-bold font-serif text-white">
                    Carestia Law
                  </div>
                  <div className="text-sm text-yellow-400 font-medium">
                    Excellence in Legal Advocacy
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                Providing exceptional legal representation with personalized service and unwavering commitment to our clients' success. Your trusted partner in achieving justice.
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 border border-gray-700 hover:border-yellow-400/50"
                      asChild
                    >
                      <Link href={social.href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">Follow us on {social.name}</span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-yellow-400 font-bold text-lg">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm group flex items-center"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-yellow-400 font-bold text-lg">Contact Us</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <Link
                    href={contactInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm group-hover:underline"
                  >
                    <div>{contactInfo.address.street}</div>
                    <div>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</div>
                    <ExternalLink className="h-3 w-3 inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <Link
                  href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm hover:underline"
                >
                  {contactInfo.phone}
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm hover:underline"
                >
                  {contactInfo.email}
                </Link>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm space-y-1">
                  <div>{contactInfo.hours.weekdays}</div>
                  <div>{contactInfo.hours.saturday}</div>
                  {contactInfo.hours.sunday && <div>{contactInfo.hours.sunday}</div>}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="space-y-6">
            <h3 className="text-yellow-400 font-bold text-lg">Legal</h3>
            <div className="space-y-4">
              
              {/* Legal Links */}
              <nav aria-label="Legal links">
                <ul className="space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm group flex items-center"
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        <span>{link.name}</span>
                        {link.external && <ExternalLink className="h-3 w-3 ml-1" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Attorney Advertising Disclaimer */}
              <div className="text-xs text-gray-400 leading-relaxed space-y-2">
                <p className="font-semibold text-yellow-400">Attorney Advertising</p>
                <p>
                  Prior results do not guarantee a similar outcome. This website is for informational purposes only and does not constitute legal advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center lg:text-left">
              © {currentYear} Carestia Law. All rights reserved.
            </div>

            {/* Additional Legal Text */}
            <div className="text-xs text-gray-500 text-center lg:text-right max-w-md">
              Licensed to practice law in New York. Results may vary depending on your particular facts and legal circumstances.
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-bold text-lg">24/7 Emergency Legal Help</span>
            </div>
            <Button
              variant="ghost"
              className="text-black hover:bg-black/10 font-bold text-lg px-6 py-2 hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href={`tel:${contactInfo.phone.replace(/[^\d]/g, '')}`}>
                {contactInfo.phone}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
} 