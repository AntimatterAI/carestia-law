import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { ratelimit } from '@/lib/ratelimit';

// TypeScript interface for form data
interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  caseType: string;
  message: string;
  preferredContact: 'phone' | 'email' | 'text';
  consentCommunications: boolean;
  honeypot: string;
  timestamp: string;
  userAgent: string;
  source: string;
}

// Zod validation schema
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Please enter a valid name'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email address too long'),
  phoneNumber: z
    .string()
    .regex(/^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, 'Please enter a valid phone number'),
  caseType: z
    .string()
    .min(1, 'Please select your case type')
    .refine((val) => [
      'personal-injury',
      'medical-malpractice',
      'car-accident',
      'slip-and-fall',
      'trucking-accident',
      'sexual-harassment',
      'negligent-security',
      'workers-compensation',
      'other'
    ].includes(val), 'Invalid case type'),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters')
    .max(2000, 'Message cannot exceed 2000 characters'),
  preferredContact: z
    .enum(['phone', 'email', 'text'])
    .refine((val) => ['phone', 'email', 'text'].includes(val), 'Invalid contact method'),
  consentCommunications: z
    .boolean()
    .refine((val) => val === true, 'You must consent to communications to proceed'),
  honeypot: z.string().optional(),
  timestamp: z.string().optional(),
  userAgent: z.string().optional(),
  source: z.string().optional(),
});

// Email service integration
async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Format case type for display
    const formatCaseType = (caseType: string) => {
      return caseType
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission - Carestia Law</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #000; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #374151; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #fbbf24; }
          .urgent { background: #fef2f2; border-left-color: #ef4444; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
          .meta { background: #e5e7eb; padding: 15px; border-radius: 4px; margin-top: 20px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">🚨 New Contact Form Submission</h1>
            <p style="margin: 5px 0 0 0;">Carestia Law - Potential Client Inquiry</p>
          </div>
          
          <div class="content">
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${data.fullName}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address:</div>
              <div class="value">
                <a href="mailto:${data.email}" style="color: #0ea5e9; text-decoration: none;">
                  ${data.email}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number:</div>
              <div class="value">
                <a href="tel:${data.phoneNumber.replace(/[^\d]/g, '')}" style="color: #0ea5e9; text-decoration: none;">
                  ${data.phoneNumber}
                </a>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Case Type:</div>
              <div class="value" style="font-weight: 600; color: #dc2626;">
                ${formatCaseType(data.caseType)}
              </div>
            </div>
            
            <div class="field">
              <div class="label">Preferred Contact Method:</div>
              <div class="value">${data.preferredContact.charAt(0).toUpperCase() + data.preferredContact.slice(1)}</div>
            </div>
            
            <div class="field">
              <div class="label">Case Details:</div>
              <div class="value" style="white-space: pre-wrap; max-height: 200px; overflow-y: auto;">
                ${data.message}
              </div>
            </div>
            
            <div class="field urgent">
              <div class="label">⚡ Action Required:</div>
              <div class="value">
                <strong>Response needed within 24 hours</strong><br>
                Contact method: ${data.preferredContact}<br>
                Case priority: ${data.caseType === 'personal-injury' || data.caseType === 'medical-malpractice' ? 'HIGH' : 'NORMAL'}
              </div>
            </div>
            
            <div class="meta">
              <strong>Submission Details:</strong><br>
              Timestamp: ${new Date(data.timestamp || Date.now()).toLocaleString()}<br>
              User Agent: ${data.userAgent?.substring(0, 100) || 'Unknown'}...<br>
              Source: ${data.source || 'contact-form'}<br>
              Consent Given: ✅ Yes
            </div>
          </div>
          
          <div class="footer">
            <p>This email was generated from the Carestia Law contact form.</p>
            <p>Please respond to the client within 24 hours at their preferred contact method.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Auto-reply email to client
    const clientEmailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Contacting Carestia Law</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #000; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
          .contact-info { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #fbbf24; }
          .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0 0 10px 0;">Thank You, ${data.fullName}!</h1>
            <p style="margin: 0; font-size: 18px;">Your message has been received</p>
          </div>
          
          <div class="content">
            <p>Thank you for contacting Carestia Law regarding your ${formatCaseType(data.caseType)} case. We understand how important your legal matter is to you, and we're here to help.</p>
            
            <h3>What Happens Next?</h3>
            <ul>
              <li><strong>Response Time:</strong> We will contact you within 24 hours</li>
              <li><strong>Contact Method:</strong> We'll reach out via ${data.preferredContact} as requested</li>
              <li><strong>Free Consultation:</strong> Your initial consultation is completely free</li>
              <li><strong>No Obligation:</strong> You're under no obligation to hire us</li>
            </ul>
            
            <div class="contact-info">
              <h3>Need Immediate Assistance?</h3>
              <p><strong>Phone:</strong> <a href="tel:4048442799" style="color: #0ea5e9;">(404) 844-2799</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@carestialaw.com" style="color: #0ea5e9;">info@carestialaw.com</a></p>
              <p><strong>Emergency:</strong> Available 24/7 for urgent legal matters</p>
            </div>
            
            <p>Our experienced attorneys have successfully handled over 500 cases and recovered more than $50 million for our clients. We work on a contingency fee basis, which means you pay nothing unless we win your case.</p>
            
            <a href="tel:4048442799" class="button">Call Us Now: (404) 844-2799</a>
          </div>
          
          <div class="footer">
            <p>This is an automated confirmation. Please do not reply to this email.</p>
            <p>© ${new Date().getFullYear()} Carestia Law. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send emails using your preferred email service
    // This example uses a placeholder - implement with your email service (SendGrid, Mailgun, etc.)
    
    if (process.env.NODE_ENV === 'production') {
      // Production email sending logic
      // Replace with your actual email service implementation
      
      // Example with SendGrid:
      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      // await sgMail.send({
      //   to: 'intake@carestialaw.com',
      //   from: 'noreply@carestialaw.com',
      //   subject: `New Contact Form: ${formatCaseType(data.caseType)} - ${data.fullName}`,
      //   html: emailHTML,
      // });
      
      // await sgMail.send({
      //   to: data.email,
      //   from: 'info@carestialaw.com',
      //   subject: 'Thank you for contacting Carestia Law',
      //   html: clientEmailHTML,
      // });
    } else {
      // Development mode - log emails instead of sending
      console.log('=== EMAIL TO FIRM ===');
      console.log(`To: intake@carestialaw.com`);
      console.log(`Subject: New Contact Form: ${formatCaseType(data.caseType)} - ${data.fullName}`);
      console.log('Body:', emailHTML);
      
      console.log('\n=== AUTO-REPLY TO CLIENT ===');
      console.log(`To: ${data.email}`);
      console.log(`Subject: Thank you for contacting Carestia Law`);
      console.log('Body:', clientEmailHTML);
    }

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

// Database logging function
async function logSubmission(data: ContactFormData, ip: string): Promise<string> {
  try {
    // Generate a submission ID
    const submissionId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // In production, save to your database
    // Example with Prisma:
    // await prisma.contactSubmission.create({
    //   data: {
    //     id: submissionId,
    //     fullName: data.fullName,
    //     email: data.email,
    //     phoneNumber: data.phoneNumber,
    //     caseType: data.caseType,
    //     message: data.message,
    //     preferredContact: data.preferredContact,
    //     consentCommunications: data.consentCommunications,
    //     ipAddress: ip,
    //     userAgent: data.userAgent,
    //     source: data.source,
    //     timestamp: new Date(data.timestamp || Date.now()),
    //   },
    // });
    
    // For development, just log to console
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Submission ID:', submissionId);
    console.log('Data:', JSON.stringify(data, null, 2));
    console.log('IP Address:', ip);
    console.log('=====================================');
    
    return submissionId;
  } catch (error) {
    console.error('Database logging failed:', error);
    throw new Error('Failed to log submission');
  }
}

// Main API handler
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting and logging
    const clientIP = request.ip || 
                    request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';

    // Rate limiting - max 3 submissions per hour per IP
    if (process.env.NODE_ENV === 'production') {
      const { success } = await ratelimit.limit(clientIP);
      if (!success) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Too many submissions. Please try again later.' 
          },
          { status: 429 }
        );
      }
    }

    // Parse request body
    const body = await request.json();
    
    // Validate data
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data. Please check your inputs and try again.',
          errors: validationResult.error.issues
        },
        { status: 400 }
      );
    }

    const data = validationResult.data as ContactFormData;

    // Spam protection - check honeypot
    if (data.honeypot && data.honeypot.trim() !== '') {
      // Silent fail for bots
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your submission. We will contact you soon.' 
        }
      );
    }

    // Additional spam checks
    const spamIndicators = [
      data.message.toLowerCase().includes('seo'),
      data.message.toLowerCase().includes('marketing'),
      data.message.toLowerCase().includes('website'),
      data.message.includes('http://'),
      data.message.includes('https://'),
      data.fullName.length < 2 || data.fullName.length > 50,
      data.message.length < 10,
    ];

    const spamScore = spamIndicators.filter(Boolean).length;
    if (spamScore >= 3) {
      console.log('Potential spam detected:', { data, spamScore, clientIP });
      // Still process but flag for review
    }

    // Log submission to database
    const submissionId = await logSubmission(data, clientIP);

    // Send emails
    const emailSent = await sendEmail(data);
    if (!emailSent) {
      console.error('Email sending failed for submission:', submissionId);
      // Continue processing even if email fails
    }

    // Analytics tracking
    console.log('=== ANALYTICS EVENT ===');
    console.log('Event: contact_form_submit');
    console.log('Case Type:', data.caseType);
    console.log('Preferred Contact:', data.preferredContact);
    console.log('======================');

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission! We will contact you within 24 hours to discuss your case.',
        submissionId
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          'Pragma': 'no-cache'
        }
      }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again or call us directly at (404) 844-2799.'
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
} 