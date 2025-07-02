import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Accident Legal Blog | Atlanta Accident News & Tips',
  description: 'Expert insights, legal tips, and news about car accidents in Atlanta. Learn your rights, understand Georgia laws, and stay informed about car accident legal matters.',
  keywords: [
    'Atlanta car accident blog',
    'car accident legal tips',
    'Georgia accident news',
    'car crash legal advice',
    'Atlanta traffic safety',
    'auto accident law blog',
    'injury law insights',
    'car accident resources'
  ],
  openGraph: {
    title: 'Car Accident Legal Blog | Atlanta Accident News & Tips',
    description: 'Expert insights and legal tips about car accidents in Atlanta.',
    type: 'website',
  },
};

// This would typically come from your CMS or database
const featuredPosts = [
  {
    id: 1,
    title: 'What to Do Immediately After a Car Accident in Atlanta: A Complete Step-by-Step Guide',
    excerpt: 'The first few minutes after a car accident can determine the success of your insurance claim and potential lawsuit. Learn the critical steps every Atlanta driver needs to know.',
    slug: 'what-to-do-immediately-after-car-accident-atlanta',
    category: 'Emergency Guide',
    readTime: '8 min read',
    publishDate: '2024-12-15',
    featured: true,
    image: '/images/blog/car-accident-scene.jpg'
  },
  {
    id: 2,
    title: 'Understanding Georgia\'s Comparative Negligence Law: How Fault Affects Your Car Accident Claim',
    excerpt: 'Georgia follows a modified comparative negligence rule that can significantly impact your compensation. Learn how fault determination works and what it means for your claim.',
    slug: 'georgia-comparative-negligence-law-car-accident-claims',
    category: 'Legal Insights',
    readTime: '10 min read',
    publishDate: '2024-12-10',
    featured: true,
    image: '/images/blog/georgia-law.jpg'
  },
  {
    id: 3,
    title: 'Hidden Injuries from Car Accidents: Why You Should Always See a Doctor',
    excerpt: 'Some car accident injuries don\'t show symptoms immediately but can cause long-term problems. Learn about delayed symptoms and why immediate medical attention is crucial.',
    slug: 'hidden-injuries-car-accidents-delayed-symptoms',
    category: 'Health & Safety',
    readTime: '7 min read',
    publishDate: '2024-12-05',
    featured: false,
    image: '/images/blog/hidden-injuries.jpg'
  }
];

const categories = [
  { name: 'Emergency Guide', count: 12 },
  { name: 'Legal Insights', count: 18 },
  { name: 'Health & Safety', count: 15 },
  { name: 'Insurance Tips', count: 20 },
  { name: 'Atlanta Traffic', count: 8 },
  { name: 'Case Studies', count: 10 }
];

const recentPosts = [
  {
    title: 'Top 5 Most Dangerous Intersections in Atlanta for Car Accidents',
    slug: 'dangerous-intersections-atlanta-car-accidents',
    publishDate: '2024-12-12',
    category: 'Atlanta Traffic'
  },
  {
    title: 'How to Deal with Uninsured Drivers in Georgia',
    slug: 'dealing-with-uninsured-drivers-georgia',
    publishDate: '2024-12-08',
    category: 'Insurance Tips'
  },
  {
    title: 'The Real Cost of Car Accidents: Beyond Medical Bills',
    slug: 'real-cost-car-accidents-beyond-medical-bills',
    publishDate: '2024-12-03',
    category: 'Legal Insights'
  },
  {
    title: 'Winter Driving Safety Tips for Atlanta Roads',
    slug: 'winter-driving-safety-tips-atlanta',
    publishDate: '2024-11-28',
    category: 'Health & Safety'
  }
];

export default function BlogPage() {
  return (
    <ModernLayout>
      <main id="main-content" role="main" aria-label="Car Accident Legal Blog">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Car Accident Legal 
                <span className="block text-yellow-300">Blog & Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Expert insights, legal tips, and the latest news about car accidents in Atlanta and throughout Georgia
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input 
                    type="text" 
                    placeholder="Search articles..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Essential reading for anyone involved in a car accident in Atlanta
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Main Featured Post */}
              {featuredPosts[0] && (
                <div className="lg:col-span-2">
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div className="h-64 md:h-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                          <span className="text-white text-lg font-medium">Featured Article Image</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="flex items-center mb-4">
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                            {featuredPosts[0].category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" />
                            {featuredPosts[0].readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                          {featuredPosts[0].title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {featuredPosts[0].excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(featuredPosts[0].publishDate).toLocaleDateString()}
                          </div>
                          
                          <Link 
                            href={`/blog/${featuredPosts[0].slug}`}
                            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}
              
              {/* Secondary Featured Posts */}
              {featuredPosts.slice(1, 3).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                    <span className="text-white font-medium">Article Image</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories and Recent Posts */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Categories */}
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Categories</h2>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link 
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                    >
                      <div className="flex items-center">
                        <Tag className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="font-medium text-gray-800">{category.name}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-black mb-6">Recent Articles</h2>
                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <article key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center mb-3">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-black mb-3">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </article>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Link 
                    href="/blog/all"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Articles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Informed About Car Accident Law
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get our latest articles and legal insights delivered to your inbox weekly
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
              <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactFormSection />
      </main>
    </ModernLayout>
  );
} 