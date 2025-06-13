import React from 'react';
import { ModernHeader } from './modern-header';
import { Footer } from './footer';
import { cn } from '@/lib/utils';

interface ModernLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerProps?: {
    monogram?: string;
    firmName?: string;
    contactNumber?: string;
    sticky?: boolean;
  };
}

export function ModernLayout({ children, className, headerProps }: ModernLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ModernHeader {...headerProps} />
      <main className={cn('flex-1', className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
} 