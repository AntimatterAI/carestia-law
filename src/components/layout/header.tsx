'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice-areas' },
  { name: 'Attorneys', href: '/attorneys' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

const contactInfo = {
  phone: '(555) 123-4567',
  email: 'info@carestialaw.com',
  address: '123 Main Street, City, State 12345',
};

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn('w-full bg-background border-b border-border', className)}>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-black text-gold-champagne py-2">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="text-gold-rich font-medium">
              Free Consultation Available
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-black font-serif">
              Carestia
              <span className="text-gold-rich">Law</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-gold-warm transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gold-rich text-black hover:bg-gold-warm transition-all duration-300"
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <Link href="/" className="flex items-center space-x-2">
                  <div className="text-xl font-bold text-black font-serif">
                    Carestia
                    <span className="text-gold-rich">Law</span>
                  </div>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-gold-warm transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gold-warm" />
                    <span className="text-sm">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gold-warm" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gold-warm mt-0.5" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Button
                  asChild
                  className="bg-gold-rich text-black hover:bg-gold-warm transition-all duration-300"
                >
                  <Link href="/contact">Get Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 