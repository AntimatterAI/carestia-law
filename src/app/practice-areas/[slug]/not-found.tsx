import Link from 'next/link';
import { ModernLayout } from '@/components/layout';
import { ArrowLeft, Search } from 'lucide-react';

export default function PracticeAreaNotFound() {
  return (
    <ModernLayout>
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-gold-rich to-gold-warm rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-black" />
            </div>
            
            <h1 className="text-3xl font-bold text-black mb-4">
              Practice Area Not Found
            </h1>
            
            <p className="text-gray-600 mb-8">
              We couldn't find the practice area you're looking for. It may have been moved or doesn't exist.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              href="/practice-areas"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-gold-rich to-gold-warm text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              View All Practice Areas
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-gold-rich text-gold-warm hover:bg-gold-rich hover:text-black font-bold rounded-lg transition-all duration-300"
            >
              Contact Us for Help
            </Link>
          </div>
        </div>
      </main>
    </ModernLayout>
  );
}
 