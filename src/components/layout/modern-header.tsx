'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface NavigationItem {
  name: string;
  href: string;
  submenu?: {
    name: string;
    href: string;
    description?: string;
  }[];
}

interface ModernHeaderProps {
  className?: string;
  monogram?: string;
  firmName?: string;
  contactNumber?: string;
  sticky?: boolean;
}

// ============================================================================
// NAVIGATION DATA
// ============================================================================

const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Emergency Help', href: '/what-to-do-after-car-accident' },
  { name: 'Know Your Rights', href: '/understanding-your-rights' },
  { name: 'AI Case Builder', href: '/ai-case-builder' },
  { name: 'Find Attorney', href: '/find-attorney' },
  { 
    name: 'Resources', 
    href: '/resources',
    submenu: [
      { name: 'Accident Checklist', href: '/resources/car-accident-checklist', description: 'Step-by-step guide for accident victims' },
      { name: 'Insurance Help', href: '/resources/insurance-faq', description: 'Common insurance questions answered' },
      { name: 'Georgia Laws', href: '/resources/georgia-traffic-laws', description: 'Know the laws that protect you' },
      { name: 'Legal Forms', href: '/resources/accident-report-forms', description: 'Required forms and documents' },
      { name: 'Injury Guide', href: '/resources/common-injuries', description: 'Car accident injury types and treatment' },
      { name: 'Medical Care', href: '/resources/medical-treatment-guide', description: 'Getting proper medical care' },
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

// ============================================================================
// MAIN HEADER COMPONENT
// ============================================================================

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  className,
  monogram = 'CA',
  firmName = 'Car Crashes in Atlanta',
  contactNumber = '(404) 844-2799',
  sticky = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection for header state changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    if (sticky) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sticky]);

  // Close mobile menu on escape key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const headerClasses = cn(
    'w-full z-40 transition-all duration-300',
    sticky ? 'fixed top-0 left-0 right-0' : 'relative',
    isScrolled 
      ? 'bg-black/95 backdrop-blur-md shadow-2xl' 
      : 'bg-black',
    className
  );

  return (
    <>
      {/* CSS Animations */}
      <style jsx>{`
        .header-scrolled {
          height: 60px;
        }
        
        .header-normal {
          height: 70px;
        }
        
        .logo-scrolled {
          width: 40px;
          height: 40px;
        }
        
        .logo-normal {
          width: 48px;
          height: 48px;
        }
        
        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
        }
        
        .mobile-menu.open {
          transform: translateX(0);
        }
        
        .mobile-menu-backdrop {
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }
        
        .mobile-menu-backdrop.open {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-menu-item {
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.3s ease-in-out;
        }
        
        .mobile-menu.open .mobile-menu-item {
          opacity: 1;
          transform: translateX(0);
        }
        
        .mobile-menu.open .mobile-menu-item:nth-child(1) { transition-delay: 0.1s; }
        .mobile-menu.open .mobile-menu-item:nth-child(2) { transition-delay: 0.2s; }
        .mobile-menu.open .mobile-menu-item:nth-child(3) { transition-delay: 0.3s; }
        .mobile-menu.open .mobile-menu-item:nth-child(4) { transition-delay: 0.4s; }
        .mobile-menu.open .mobile-menu-item:nth-child(5) { transition-delay: 0.5s; }
        
        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease-in-out;
        }
        
        .dropdown-parent:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .chevron-rotate {
          transition: transform 0.3s ease;
        }
        
        .dropdown-parent:hover .chevron-rotate {
          transform: rotate(180deg);
        }
      `}</style>

      <header className={cn(headerClasses, isScrolled ? 'header-scrolled' : 'header-normal')}>
        <div className="container max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group" aria-label="Car Crashes in Atlanta Homepage">
              <div className={cn(
                "bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300",
                isScrolled ? 'logo-scrolled' : 'logo-normal'
              )}>
                <span className={cn(
                  "text-black font-bold font-serif",
                  isScrolled ? 'text-lg' : 'text-xl'
                )}>{monogram}</span>
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "font-bold font-serif text-white group-hover:text-yellow-400 transition-colors duration-300",
                  isScrolled ? 'text-lg' : 'text-xl'
                )}>{firmName}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative dropdown-parent">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-white/90 hover:text-yellow-400 transition-colors duration-200 font-medium py-2"
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4 chevron-rotate" aria-hidden="true" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-yellow-400/20 rounded-lg shadow-2xl z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-white/80 hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200 text-sm"
                          >
                            <div className="font-medium">{subItem.name}</div>
                            {subItem.description && (
                              <div className="text-xs text-white/60 mt-1">{subItem.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Contact Button */}
              <Button
                variant="outline"
                size={isScrolled ? 'sm' : 'default'}
                className="hidden md:flex items-center space-x-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                asChild
              >
                <Link href={`tel:${contactNumber.replace(/[^\d]/g, '')}`} aria-label={`Call ${contactNumber}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span className="font-semibold">{contactNumber}</span>
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:text-yellow-400 hover:bg-yellow-400/10 transition-all duration-200"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={cn(
          "mobile-menu-backdrop fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden",
          isMobileMenuOpen ? 'open' : ''
        )}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div className={cn(
        "mobile-menu fixed top-0 right-0 h-full w-80 bg-black border-l border-yellow-400/20 z-50 lg:hidden overflow-y-auto",
        isMobileMenuOpen ? 'open' : ''
      )}>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-yellow-400/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center">
              <span className="font-serif font-bold text-black text-sm">{monogram}</span>
            </div>
            <span className="font-serif font-bold text-white">{firmName}</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-white hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu Content */}
        <nav className="p-6 space-y-2" aria-label="Mobile navigation">
          {navigationItems.map((item, index) => (
            <div key={item.name} className="mobile-menu-item">
              {item.submenu ? (
                <div className="space-y-2">
                  <div className="text-yellow-400 font-semibold text-lg py-2">{item.name}</div>
                  <div className="space-y-1 pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-white/80 hover:text-yellow-400 transition-colors duration-200 py-2 border-l-2 border-transparent hover:border-yellow-400 pl-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="font-medium">{subItem.name}</div>
                        {subItem.description && (
                          <div className="text-sm text-white/60 mt-1">{subItem.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200 py-3 border-b border-white/10 last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="p-6 border-t border-yellow-400/20 mt-auto">
          <Button
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold mb-4"
            asChild
          >
            <Link href={`tel:${contactNumber.replace(/[^\d]/g, '')}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call {contactNumber}
            </Link>
          </Button>
          <p className="text-center text-white/60 text-xs">
            Free Consultation Available 24/7
          </p>
        </div>
      </div>

      {/* Spacer for sticky header */}
      {sticky && (
        <div className={cn(
          "transition-all duration-300",
          isScrolled ? "h-14" : "h-16"
        )} />
      )}
    </>
  );
};

export default ModernHeader; 