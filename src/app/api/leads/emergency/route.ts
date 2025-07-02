import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Lead scoring interface
interface LeadData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  accidentDate: string;
  injured: string;
  urgentHelp?: boolean;
  formType: string;
  placement: string;
  timestamp: string;
  urgencyScore: number;
  ipAddress?: string;
  userAgent?: string;
}

interface ProcessedLead extends LeadData {
  id: string;
  leadScore: number;
  caseValueEstimate: string;
  urgencyLevel: 'high' | 'medium' | 'low';
  status: 'new' | 'contacted' | 'qualified' | 'sold' | 'rejected';
  assignedAttorney?: string;
  notes: string[];
  createdAt: string;
  updatedAt: string;
}

// Utility functions for lead processing
function calculateLeadScore(data: LeadData): number {
  let score = 0;
  
  // Timing score (more recent = higher value)
  switch (data.accidentDate) {
    case 'today':
    case 'yesterday':
      score += 25;
      break;
    case 'this-week':
      score += 20;
      break;
    case 'last-week':
      score += 15;
      break;
    case 'this-month':
      score += 10;
      break;
    default:
      score += 5;
  }
  
  // Injury score (injured = higher value)
  if (data.injured === 'yes') {
    score += 30;
  } else if (data.injured === 'unsure') {
    score += 15;
  }
  
  // Urgency score
  if (data.urgentHelp) {
    score += 20;
  }
  
  // Form placement score (emergency forms = higher intent)
  switch (data.placement) {
    case 'hero':
      score += 15;
      break;
    case 'popup':
      score += 10;
      break;
    default:
      score += 5;
  }
  
  // Base urgency score from form
  score += data.urgencyScore || 0;
  
  return Math.min(score, 100);
}

function estimateCaseValue(data: LeadData): string {
  const score = calculateLeadScore(data);
  
  if (score >= 80) return '$50,000+';
  if (score >= 60) return '$25,000-$50,000';
  if (score >= 40) return '$10,000-$25,000';
  if (score >= 20) return '$5,000-$10,000';
  return 'Under $5,000';
}

function determineUrgencyLevel(data: LeadData): 'high' | 'medium' | 'low' {
  const score = calculateLeadScore(data);
  
  if (data.urgentHelp || 
      data.accidentDate === 'today' || 
      data.accidentDate === 'yesterday' ||
      score >= 80) {
    return 'high';
  }
  
  if (data.injured === 'yes' || score >= 50) {
    return 'medium';
  }
  
  return 'low';
}

async function saveToDatabase(lead: ProcessedLead): Promise<boolean> {
  try {
    // In a real implementation, this would save to your database
    // For now, we'll simulate database operations
    
    // Example with Supabase
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert([lead]);
    
    // Example with MongoDB
    // await mongodb.collection('leads').insertOne(lead);
    
    // Example with PostgreSQL
    // await db.query('INSERT INTO leads (...) VALUES (...)', lead);
    
    console.log('Lead saved to database:', lead.id);
    return true;
  } catch (error) {
    console.error('Database save error:', error);
    return false;
  }
}

async function triggerLeadProcessing(lead: ProcessedLead): Promise<void> {
  try {
    // 1. Send to CRM (HubSpot, Salesforce, etc.)
    await sendToCRM(lead);
    
    // 2. Send automated email response
    await sendAutoEmail(lead);
    
    // 3. Trigger attorney matching for urgent cases
    if (lead.urgencyLevel === 'high') {
      await triggerUrgentMatching(lead);
    }
    
    // 4. Send SMS notification if phone provided
    await sendSMSNotification(lead);
    
    // 5. Add to email marketing automation
    await addToEmailSequence(lead);
    
  } catch (error) {
    console.error('Lead processing error:', error);
  }
}

async function sendToCRM(lead: ProcessedLead): Promise<void> {
  // HubSpot integration
  const hubspotData = {
    properties: {
      firstname: lead.firstName,
      lastname: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      lead_source: 'car_crash_website',
      accident_date: lead.accidentDate,
      injured: lead.injured,
      lead_score: lead.leadScore.toString(),
      case_value_estimate: lead.caseValueEstimate,
      urgency_level: lead.urgencyLevel,
      form_type: lead.formType,
      placement: lead.placement,
      notes: lead.notes.join('\n')
    }
  };
  
  try {
    const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hubspotData)
    });
    
    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.status}`);
    }
    
    console.log('Lead sent to HubSpot CRM');
  } catch (error) {
    console.error('CRM integration error:', error);
  }
}

async function sendAutoEmail(lead: ProcessedLead): Promise<void> {
  const emailContent = generateAutoEmailContent(lead);
  
  try {
    // Using SendGrid/Mailgun/AWS SES
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: lead.email,
        subject: 'Your Car Accident Case Information - Next Steps',
        html: emailContent.html,
        text: emailContent.text,
        templateId: 'auto-response-emergency'
      })
    });
    
    console.log('Auto-response email sent');
  } catch (error) {
    console.error('Email send error:', error);
  }
}

async function triggerUrgentMatching(lead: ProcessedLead): Promise<void> {
  try {
    // Find available attorneys based on:
    // - Location (Atlanta metro area)
    // - Practice area (car accidents)
    // - Availability
    // - Lead capacity
    // - Performance ratings
    
    const response = await fetch('/api/attorneys/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        leadId: lead.id,
        location: 'Atlanta',
        practiceArea: 'car_accident',
        urgency: 'high',
        caseValue: lead.caseValueEstimate,
        leadScore: lead.leadScore
      })
    });
    
    console.log('Urgent attorney matching triggered');
  } catch (error) {
    console.error('Attorney matching error:', error);
  }
}

async function sendSMSNotification(lead: ProcessedLead): Promise<void> {
  try {
    const message = `Hi ${lead.firstName}, thanks for submitting your car accident case. We're reviewing your information and an attorney will contact you within 2 hours. Check your email for immediate resources. Reply STOP to opt out.`;
    
    const response = await fetch('/api/sms/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: lead.phone,
        message,
        type: 'confirmation'
      })
    });
    
    console.log('SMS notification sent');
  } catch (error) {
    console.error('SMS send error:', error);
  }
}

async function addToEmailSequence(lead: ProcessedLead): Promise<void> {
  try {
    // Add to email marketing automation based on lead characteristics
    const sequenceType = lead.urgencyLevel === 'high' 
      ? 'emergency_sequence' 
      : lead.injured === 'yes' 
      ? 'injured_sequence'
      : 'general_sequence';
    
    const response = await fetch('/api/email/automation/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: lead.email,
        firstName: lead.firstName,
        sequence: sequenceType,
        leadData: {
          accidentDate: lead.accidentDate,
          injured: lead.injured,
          urgencyLevel: lead.urgencyLevel,
          caseValue: lead.caseValueEstimate
        }
      })
    });
    
    console.log('Added to email automation sequence');
  } catch (error) {
    console.error('Email automation error:', error);
  }
}

function generateAutoEmailContent(lead: ProcessedLead): { html: string; text: string } {
  const text = `
Hi ${lead.firstName},

Thank you for reaching out to Car Crashes in Atlanta. We've received your information and are already working to connect you with qualified attorneys in your area.

Your Case Summary:
- Accident Date: ${lead.accidentDate}
- Estimated Case Value: ${lead.caseValueEstimate}
- Priority Level: ${lead.urgencyLevel.toUpperCase()}

What Happens Next:
1. We're matching you with 2-3 qualified Atlanta car accident attorneys
2. An attorney will contact you within ${lead.urgencyLevel === 'high' ? '1 hour' : '2-4 hours'}
3. You'll receive a free consultation to discuss your legal options
4. No obligation - you choose if you want to work with an attorney

Important Resources:
- Download our Car Accident Checklist: https://www.carcrashatl.com/resources/checklist
- Know Your Rights Guide: https://www.carcrashatl.com/understanding-your-rights
- What NOT to Say to Insurance: https://www.carcrashatl.com/insurance-tips

Emergency Numbers:
- If you need immediate medical attention: Call 911
- Georgia Poison Control: 1-800-222-1222
- Georgia State Patrol: *GSP (*477)

Remember:
- Don't sign anything from insurance companies without consulting an attorney
- Keep all medical records and accident documentation
- Avoid posting about your accident on social media

Questions? Reply to this email or call our emergency line: (404) 844-2799

Best regards,
The Car Crashes in Atlanta Team

This email was sent because you requested help with your car accident case. Your privacy is protected and your information will only be shared with qualified attorneys.
  `;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Car Accident Case Information</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px;">
    <h1 style="margin: 0; font-size: 24px;">Car Crashes in Atlanta</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Legal Resource for Car Accident Help</p>
  </div>
  
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h2 style="color: #1e40af; margin-top: 0;">Hi ${lead.firstName},</h2>
    <p>Thank you for reaching out to Car Crashes in Atlanta. We've received your information and are already working to connect you with qualified attorneys in your area.</p>
  </div>
  
  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #dc2626; margin-top: 0;">🚗 Your Case Summary</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Accident Date:</strong></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;">${lead.accidentDate}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6;"><strong>Estimated Case Value:</strong></td>
        <td style="padding: 8px 0; border-bottom: 1px solid #f3f4f6; color: #059669; font-weight: bold;">${lead.caseValueEstimate}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0;"><strong>Priority Level:</strong></td>
        <td style="padding: 8px 0;">
          <span style="background: ${lead.urgencyLevel === 'high' ? '#dc2626' : lead.urgencyLevel === 'medium' ? '#d97706' : '#059669'}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; text-transform: uppercase;">
            ${lead.urgencyLevel}
          </span>
        </td>
      </tr>
    </table>
  </div>
  
  <div style="background: #ecfdf5; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #065f46; margin-top: 0;">✅ What Happens Next</h3>
    <ol style="color: #064e3b; margin: 0; padding-left: 20px;">
      <li>We're matching you with 2-3 qualified Atlanta car accident attorneys</li>
      <li>An attorney will contact you within <strong>${lead.urgencyLevel === 'high' ? '1 hour' : '2-4 hours'}</strong></li>
      <li>You'll receive a free consultation to discuss your legal options</li>
      <li>No obligation - you choose if you want to work with an attorney</li>
    </ol>
  </div>
  
  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #1e40af; margin-top: 0;">📚 Important Resources</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 10px 0;"><a href="https://www.carcrashatl.com/resources/checklist" style="color: #1e40af; text-decoration: none;">📋 Download our Car Accident Checklist</a></li>
      <li style="margin: 10px 0;"><a href="https://www.carcrashatl.com/understanding-your-rights" style="color: #1e40af; text-decoration: none;">⚖️ Know Your Rights Guide</a></li>
      <li style="margin: 10px 0;"><a href="https://www.carcrashatl.com/insurance-tips" style="color: #1e40af; text-decoration: none;">🛡️ What NOT to Say to Insurance</a></li>
    </ul>
  </div>
  
  <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #dc2626; margin-top: 0;">🚨 Emergency Numbers</h3>
    <ul style="color: #991b1b; margin: 0; padding-left: 20px;">
      <li>If you need immediate medical attention: <strong>Call 911</strong></li>
      <li>Georgia Poison Control: <strong>1-800-222-1222</strong></li>
      <li>Georgia State Patrol: <strong>*GSP (*477)</strong></li>
    </ul>
  </div>
  
  <div style="background: #fffbeb; border: 1px solid #fed7aa; border-radius: 8px; padding: 20px; margin: 20px 0;">
    <h3 style="color: #92400e; margin-top: 0;">⚠️ Important Reminders</h3>
    <ul style="color: #92400e; margin: 0; padding-left: 20px;">
      <li>Don't sign anything from insurance companies without consulting an attorney</li>
      <li>Keep all medical records and accident documentation</li>
      <li>Avoid posting about your accident on social media</li>
    </ul>
  </div>
  
  <div style="text-align: center; margin: 30px 0;">
    <a href="tel:4048442799" style="background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">📞 Emergency Line: (404) 844-2799</a>
  </div>
  
  <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
    <p><strong>Best regards,<br>The Car Crashes in Atlanta Team</strong></p>
    <p style="margin-top: 20px; font-size: 12px;">
      This email was sent because you requested help with your car accident case. Your privacy is protected and your information will only be shared with qualified attorneys.
    </p>
  </div>

</body>
</html>
  `;

  return { html, text };
}

export async function POST(request: NextRequest) {
  try {
    const headersList = headers();
    const ipAddress = headersList.get('x-forwarded-for') || 
                     headersList.get('x-real-ip') || 
                     request.ip || 
                     'unknown';
    const userAgent = headersList.get('user-agent') || 'unknown';
    
    const body = await request.json() as LeadData;
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.phone || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create processed lead object
    const processedLead: ProcessedLead = {
      ...body,
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      leadScore: calculateLeadScore(body),
      caseValueEstimate: estimateCaseValue(body),
      urgencyLevel: determineUrgencyLevel(body),
      status: 'new',
      notes: [`Lead submitted via ${body.formType} form on ${body.placement}`],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ipAddress,
      userAgent
    };
    
    // Save to database
    const saved = await saveToDatabase(processedLead);
    if (!saved) {
      return NextResponse.json(
        { error: 'Database save failed' },
        { status: 500 }
      );
    }
    
    // Trigger background processing (don't wait for completion)
    triggerLeadProcessing(processedLead).catch(console.error);
    
    // Return success response
    return NextResponse.json({
      success: true,
      id: processedLead.id,
      leadScore: processedLead.leadScore,
      caseValueEstimate: processedLead.caseValueEstimate,
      urgencyLevel: processedLead.urgencyLevel,
      message: 'Lead processed successfully'
    });
    
  } catch (error) {
    console.error('Emergency lead API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 