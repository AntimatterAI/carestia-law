import React from 'react';
import { ModernLayout } from '@/components/layout/modern-layout';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { Calendar, Clock, Share2, Phone, Camera, FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What to Do Immediately After a Car Accident in Atlanta: Complete Step-by-Step Guide',
  description: 'The first few minutes after a car accident can determine the success of your insurance claim. Learn the critical steps every Atlanta driver needs to know to protect their rights.',
  keywords: [
    'what to do after car accident Atlanta',
    'car accident steps Georgia',
    'Atlanta car accident procedure',
    'car crash checklist',
    'accident scene safety',
    'car accident documentation',
    'Atlanta traffic accident',
    'Georgia car accident laws'
  ],
  openGraph: {
    title: 'What to Do Immediately After a Car Accident in Atlanta: Complete Guide',
    description: 'Critical steps to take in the first few minutes after a car accident in Atlanta.',
    type: 'article',
  },
};

export default function BlogPost() {
  return (
    <ModernLayout>
      <main id="main-content" role="main" aria-label="Blog Post">
        
        {/* Article Header */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-6">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Emergency Guide
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              What to Do Immediately After a Car Accident in Atlanta: A Complete Step-by-Step Guide
            </h1>
            
            <div className="flex items-center gap-6 text-red-100">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min read</span>
              </div>
              <button className="flex items-center hover:text-white transition-colors">
                <Share2 className="h-4 w-4 mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                The moments immediately following a car accident in Atlanta can be chaotic, frightening, and overwhelming. However, the actions you take in these critical first few minutes can significantly impact your safety, your insurance claim, and any potential legal action. Whether you're dealing with a minor fender-bender on Peachtree Street or a serious collision on I-285, following the right steps can protect your rights and maximize your compensation.
              </p>
              
              <p className="text-gray-700">
                According to the Georgia Department of Transportation, there were over 400,000 traffic crashes in Georgia in 2023, with Metro Atlanta accounting for a significant portion of these incidents. With Atlanta's notorious traffic congestion and rapidly changing weather conditions, knowing exactly what to do after an accident isn't just helpful—it's essential for every driver in the city.
              </p>
            </div>

            {/* Step-by-Step Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-8">The Critical First Steps: Your Accident Action Plan</h2>
              
              {/* Step 1 */}
              <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <h3 className="text-2xl font-bold text-red-800">Ensure Safety First - Check for Injuries</h3>
                </div>
                
                <p className="text-red-700 mb-4">
                  Your immediate priority is safety. Before anything else, check yourself and your passengers for injuries. Even if you feel fine, adrenaline can mask pain and symptoms of serious injuries.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">✓ DO:</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Take a moment to assess how you feel</li>
                      <li>• Check all passengers carefully</li>
                      <li>• Call 911 immediately if anyone is injured</li>
                      <li>• Stay calm and speak slowly</li>
                      <li>• Don't move seriously injured people</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">✗ DON'T:</h4>
                    <ul className="space-y-1 text-red-700">
                      <li>• Ignore pain or discomfort</li>
                      <li>• Move someone with a head/neck injury</li>
                      <li>• Leave injured people alone</li>
                      <li>• Assume you're "fine" because you can walk</li>
                      <li>• Panic or rush your assessment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-8 mb-8 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <h3 className="text-2xl font-bold text-orange-800">Move to Safety and Secure the Scene</h3>
                </div>
                
                <p className="text-orange-700 mb-4">
                  If vehicles are drivable and injuries are minor, move cars out of traffic. On busy Atlanta roads like I-75 or the Connector, this step can prevent secondary accidents.
                </p>
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Atlanta-Specific Safety Tips:</h4>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• Use hazard lights immediately - Atlanta drivers move fast</li>
                    <li>• If on I-285 or I-85, get to the shoulder if possible</li>
                    <li>• Set up flares or triangles 200+ feet behind your vehicle</li>
                    <li>• Be extra cautious during rush hour (7-9 AM, 4-7 PM)</li>
                    <li>• Watch for aggressive drivers who may not slow down</li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-8 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <h3 className="text-2xl font-bold text-blue-800">Call 911 and Report the Accident</h3>
                </div>
                
                <p className="text-blue-700 mb-4">
                  In Georgia, you're required to report any accident involving injury, death, or property damage over $500. Given Atlanta's cost of living, this includes virtually all accidents.
                </p>
                
                <div className="bg-white p-4 rounded border border-blue-200 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">What to Tell the 911 Operator:</h4>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Your exact location (street names, landmarks, mile markers)</li>
                    <li>• Number of vehicles involved</li>
                    <li>• Whether anyone appears injured</li>
                    <li>• If vehicles are blocking traffic</li>
                    <li>• If hazardous materials are spilled</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-100 border border-yellow-300 p-3 rounded">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> Even if the other driver suggests not calling police, call anyway. A police report provides crucial documentation for insurance and legal purposes.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-green-50 border-l-4 border-green-500 p-8 mb-8 rounded-r-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                  <h3 className="text-2xl font-bold text-green-800">Document Everything Thoroughly</h3>
                </div>
                
                <p className="text-green-700 mb-4">
                  Your smartphone is your best tool for documenting the accident. Take comprehensive photos and gather all necessary information while the scene is fresh.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <Camera className="h-5 w-5 mr-2" />
                      Photos to Take:
                    </h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• All vehicles from multiple angles</li>
                      <li>• Damage close-ups and wide shots</li>
                      <li>• License plates (both vehicles)</li>
                      <li>• Street signs and traffic signals</li>
                      <li>• Skid marks, debris, road conditions</li>
                      <li>• Injuries (if visible and appropriate)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Information to Collect:
                    </h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Driver's name, address, phone number</li>
                      <li>• Insurance company and policy number</li>
                      <li>• Driver's license number</li>
                      <li>• Vehicle make, model, year, color</li>
                      <li>• Vehicle VIN (if accessible)</li>
                      <li>• Witness names and contact information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Critical Don'ts */}
            <div className="bg-red-100 border border-red-300 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Critical Don'ts: What NOT to Do at the Scene
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-800 mb-3">Never Say These Things:</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• "I'm sorry" or "It was my fault"</li>
                    <li>• "I didn't see you" or "I wasn't paying attention"</li>
                    <li>• "I was going too fast"</li>
                    <li>• "I'm fine" (you may not be)</li>
                    <li>• Speculation about what happened</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-800 mb-3">Never Do These Things:</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Leave the scene before police arrive</li>
                    <li>• Sign anything except a ticket</li>
                    <li>• Accept a quick cash settlement</li>
                    <li>• Move seriously injured people</li>
                    <li>• Get into arguments or confrontations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* After the Police Arrive */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">When Police Arrive: What to Expect</h2>
              
              <p className="text-gray-700 mb-6">
                Atlanta Police Department or Georgia State Patrol officers will investigate the accident and create an official report. This report is crucial for insurance claims and any legal proceedings.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">When Talking to Police:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-blue-700 font-medium mb-2">DO:</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Be honest and factual</li>
                      <li>• Stick to what you know for certain</li>
                      <li>• Answer direct questions clearly</li>
                      <li>• Provide your insurance information</li>
                      <li>• Ask for the report number</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-700 font-medium mb-2">DON'T:</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Admit fault or blame yourself</li>
                      <li>• Speculate about causes</li>
                      <li>• Argue with the other driver</li>
                      <li>• Sign anything you don't understand</li>
                      <li>• Leave before getting report info</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* After Leaving the Scene */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">Critical Steps After Leaving the Accident Scene</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                    Seek Medical Attention Immediately
                  </h3>
                  <p className="text-gray-700">
                    Even if you feel fine, see a doctor within 24-48 hours. Some injuries like whiplash, concussions, and soft tissue damage don't show symptoms immediately. In Atlanta, consider these options:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                    <li>• Grady Memorial Hospital (Level 1 Trauma Center)</li>
                    <li>• Emory University Hospital</li>
                    <li>• Piedmont Atlanta Hospital</li>
                    <li>• Your primary care physician</li>
                    <li>• Urgent care centers for minor injuries</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                    Contact Your Insurance Company
                  </h3>
                  <p className="text-gray-700">
                    Report the accident to your insurance company as soon as possible, ideally within 24 hours. Provide factual information but avoid admitting fault.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
                    <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                    Consider Consulting an Attorney
                  </h3>
                  <p className="text-yellow-700 mb-3">
                    If you were injured, if fault is disputed, or if the insurance company is being difficult, consider consulting with an experienced Atlanta car accident attorney. Many offer free consultations.
                  </p>
                  <p className="text-sm text-yellow-600">
                    <strong>When to definitely call an attorney:</strong> Serious injuries, disputed fault, multiple vehicles, commercial vehicles, uninsured drivers, or insurance claim denials.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-black mb-6">Common Mistakes That Can Hurt Your Case</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-3">Waiting Too Long to Seek Medical Care</h3>
                  <p className="text-red-700 text-sm">
                    Insurance companies use gaps in medical treatment to argue that injuries weren't serious or weren't caused by the accident.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-3">Accepting Quick Settlement Offers</h3>
                  <p className="text-red-700 text-sm">
                    Initial offers are often far below fair value. Insurance companies hope you'll accept quickly before understanding the full extent of your injuries.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-3">Giving Recorded Statements</h3>
                  <p className="text-red-700 text-sm">
                    While you must cooperate with your own insurance company, you're not required to give recorded statements to the other driver's insurer without an attorney present.
                  </p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-3">Posting on Social Media</h3>
                  <p className="text-red-700 text-sm">
                    Avoid posting about the accident, your injuries, or activities on social media. Insurance companies monitor social media to contradict injury claims.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-green-50 p-8 rounded-lg border border-green-200 mb-12">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Remember: You Have Rights</h2>
              <p className="text-green-700 mb-4">
                Being in a car accident in Atlanta can be overwhelming, but remember that you have rights. You have the right to medical treatment, fair compensation for your injuries and damages, and legal representation to protect your interests.
              </p>
              <p className="text-green-700">
                Following these steps immediately after an accident can make the difference between a smooth insurance process and a prolonged legal battle. When in doubt, prioritize your safety and health, document everything, and don't hesitate to seek professional legal advice.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Need Legal Help After Your Atlanta Car Accident?
              </h3>
              <p className="mb-6">
                If you've been in a car accident in Atlanta, don't face the insurance companies alone. 
                Get connected with experienced local attorneys who can protect your rights and maximize your compensation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/find-attorney"
                  className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Find an Attorney Now
                </Link>
                <Link 
                  href="/free-case-evaluation"
                  className="border-2 border-yellow-400 text-yellow-300 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  Get Free Case Evaluation
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/georgia-comparative-negligence-law-car-accident-claims" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-black mb-2">Understanding Georgia's Comparative Negligence Law</h3>
                <p className="text-gray-600 text-sm">Learn how fault determination affects your compensation in Georgia car accident claims.</p>
              </Link>
              
              <Link href="/blog/hidden-injuries-car-accidents-delayed-symptoms" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-black mb-2">Hidden Injuries from Car Accidents</h3>
                <p className="text-gray-600 text-sm">Why you should always see a doctor after an accident, even if you feel fine.</p>
              </Link>
              
              <Link href="/understanding-your-rights" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-black mb-2">Know Your Rights After a Car Accident</h3>
                <p className="text-gray-600 text-sm">Complete guide to your legal rights as a car accident victim in Georgia.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactFormSection />
      </main>
    </ModernLayout>
  );
} 