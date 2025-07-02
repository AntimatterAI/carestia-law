# Lead Management & CRM System for CarCrashAtl.com

## Overview

This document outlines a comprehensive lead capture, management, and sales system designed to convert website visitors into qualified leads and efficiently sell those leads to partner attorneys for maximum revenue generation.

## 1. LEAD CAPTURE FORM PLACEMENT & DESIGN

### **Strategic Form Placement**

#### **High-Intent Locations (Priority 1)**
1. **Homepage Hero Section**
   - Emergency form with urgency messaging
   - Placement: Above-the-fold, center
   - Trigger: Immediate visibility
   - Urgency Level: High

2. **Emergency Help Pages**
   - "What to Do After Car Accident" page
   - "Understanding Your Rights" page
   - Trigger: User seeking immediate help
   - Urgency Level: High

3. **Exit-Intent Popup**
   - Triggers when user attempts to leave site
   - Offer: "Wait! Get Free Legal Help"
   - Urgency Level: Medium

#### **Educational Locations (Priority 2)**
1. **Blog Article Sidebar**
   - Present on all blog posts
   - Context-aware messaging
   - Trigger: Content engagement
   - Urgency Level: Medium

2. **End of Blog Articles**
   - After providing valuable information
   - Natural transition to action
   - Urgency Level: Medium

3. **Resource Pages**
   - After checklist downloads
   - Following educational content
   - Urgency Level: Low-Medium

#### **Conversion Locations (Priority 3)**
1. **Dedicated Landing Pages**
   - "/find-attorney" - Full attorney matching form
   - "/free-case-evaluation" - Detailed case assessment
   - Urgency Level: Variable

2. **Sticky Sidebar Widget**
   - Persistent throughout site
   - Minimal form for quick capture
   - Urgency Level: Low

### **Form Design Principles**

#### **Progressive Disclosure Strategy**
- **Step 1:** Contact info (name, phone, email) - 30 seconds
- **Step 2:** Basic accident details - 60 seconds  
- **Step 3:** Injury information - 60 seconds
- **Step 4:** Legal/financial details - 90 seconds

#### **Visual Design Elements**
- **Urgency Colors:** Red for emergency, orange for medium, blue for general
- **Trust Indicators:** SSL badges, privacy statements, attorney badges
- **Social Proof:** "Join 1,000+ people who got help"
- **Progress Bars:** Show completion percentage
- **Mobile Optimization:** Single-column layout, large touch targets

#### **Conversion Optimization Features**
- **Smart Defaults:** Pre-fill Atlanta for location
- **Conditional Logic:** Show relevant fields based on previous answers
- **Real-time Validation:** Immediate feedback on form errors
- **Urgency Messaging:** Time-sensitive language
- **Multiple CTAs:** Different entry points for different user types

## 2. LEAD QUALIFICATION DATA FIELDS

### **Tier 1: Essential Contact Information (Required)**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)", 
  "phone": "string (required, validated)",
  "email": "string (required, validated)",
  "preferredContact": "phone|email|text"
}
```

### **Tier 2: Accident Details (High Value)**
```json
{
  "accidentDate": "today|yesterday|this-week|last-week|this-month|over-month",
  "accidentTime": "morning|afternoon|evening|night",
  "accidentLocation": "string (street/intersection)",
  "accidentCity": "string (default: Atlanta)",
  "accidentZip": "string",
  "accidentType": "rear-end|side-impact|head-on|intersection|pedestrian|hit-run|multi-vehicle|single-vehicle",
  "accidentDescription": "text",
  "weatherConditions": "clear|rain|snow|fog|other",
  "roadConditions": "dry|wet|icy|construction|poor"
}
```

### **Tier 3: Injury & Medical Information (Case Value)**
```json
{
  "injured": "yes|no|unsure (required)",
  "injuryTypes": ["whiplash", "back-injury", "brain-injury", "broken-bones", "cuts", "spinal-cord", "internal", "surgery-required"],
  "injurySeverity": "minor|moderate|severe|life-threatening",
  "medicalTreatment": "emergency-room|hospital|urgent-care|doctor-visit|physical-therapy|no-treatment",
  "hospitalName": "string",
  "stillTreating": "yes|no|unknown",
  "medicalExpenses": "under-1000|1000-5000|5000-10000|10000-25000|25000-50000|over-50000",
  "futureExpensesExpected": "yes|no|unknown",
  "medicalInsurance": "yes|no|unknown"
}
```

### **Tier 4: Vehicle & Insurance Details (Liability)**
```json
{
  "vehicleDamage": "minor|moderate|severe|total-loss",
  "vehicleDriveable": "yes|no|unknown",
  "vehicleValue": "under-10000|10000-25000|25000-50000|over-50000",
  "atFault": "yes|no|disputed|unknown",
  "policeReport": "yes|no|unknown",
  "policeReportNumber": "string",
  "citationIssued": "yes-to-me|yes-to-other|no|unknown",
  "witnesses": "yes|no|unknown",
  "otherDriverInsured": "yes|no|unknown",
  "hasInsurance": "yes|no",
  "insuranceCompany": "string",
  "policyNumber": "string"
}
```

### **Tier 5: Employment Impact (Lost Wages)**
```json
{
  "employed": "yes|no|self-employed|retired|student",
  "missedWork": "yes|no|not-applicable",
  "timeOffWork": "none|few-days|1-2-weeks|1-month|several-months|still-unable",
  "annualIncome": "under-30000|30000-50000|50000-75000|75000-100000|over-100000|prefer-not-to-say",
  "canReturnToWork": "yes|no|with-restrictions|unknown",
  "jobType": "office|physical|driving|other"
}
```

### **Tier 6: Legal Status (Urgency & Competition)**
```json
{
  "hasAttorney": "yes|no|consulting",
  "attorneyName": "string",
  "contactedInsurance": "mine|theirs|both|neither",
  "givenStatement": "yes|no|unknown",
  "settlementOffered": "yes|no",
  "settlementAmount": "under-5000|5000-15000|15000-50000|over-50000|prefer-not-to-say",
  "settlementDeadline": "date",
  "legalDeadlines": "none|filing-deadline|settlement-deadline|court-date"
}
```

### **Tier 7: Lead Source & Behavior (Marketing)**
```json
{
  "leadSource": "organic|paid-search|social|referral|direct|email",
  "referralSource": "string",
  "hearAboutUs": "google|facebook|friend|tv-ad|radio|other",
  "pagesVisited": "array",
  "timeOnSite": "number (seconds)",
  "formPlacement": "hero|sidebar|popup|blog|landing-page",
  "urgencyIndicators": "array",
  "deviceType": "desktop|mobile|tablet",
  "ipAddress": "string",
  "userAgent": "string"
}
```

### **Tier 8: Additional Qualifying Information**
```json
{
  "additionalInfo": "text",
  "concerns": "medical-bills|lost-wages|pain|insurance-problems|legal-deadlines",
  "bestTimeToCall": "morning|afternoon|evening|anytime",
  "languagePreference": "english|spanish|other",
  "specialCircumstances": "drunk-driver|commercial-vehicle|pedestrian|government-vehicle",
  "priorAccidents": "yes|no",
  "criminalCharges": "yes|no|unknown"
}
```

## 3. BACKEND CRM SYSTEM ARCHITECTURE

### **Database Schema Design**

#### **Leads Table**
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Contact Information
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  preferred_contact VARCHAR(20) DEFAULT 'phone',
  
  -- Lead Scoring & Classification
  lead_score INTEGER DEFAULT 0,
  case_value_estimate VARCHAR(50),
  urgency_level VARCHAR(20) DEFAULT 'low',
  lead_quality VARCHAR(20) DEFAULT 'unqualified',
  
  -- Status Tracking
  status VARCHAR(50) DEFAULT 'new',
  disposition VARCHAR(100),
  assigned_attorney_id UUID,
  
  -- Accident Details (JSONB for flexibility)
  accident_details JSONB,
  injury_details JSONB,
  legal_details JSONB,
  employment_details JSONB,
  
  -- Lead Source & Attribution
  lead_source VARCHAR(100),
  form_placement VARCHAR(100),
  referral_source VARCHAR(255),
  landing_page VARCHAR(255),
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  
  -- Technical Details
  ip_address INET,
  user_agent TEXT,
  device_type VARCHAR(50),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  contacted_at TIMESTAMP,
  qualified_at TIMESTAMP,
  sold_at TIMESTAMP,
  
  -- Notes & Communication
  notes TEXT[],
  
  -- Privacy & Compliance
  consent_given BOOLEAN DEFAULT false,
  privacy_policy_accepted BOOLEAN DEFAULT false,
  
  CONSTRAINT valid_status CHECK (status IN ('new', 'contacted', 'qualified', 'sold', 'rejected', 'duplicate')),
  CONSTRAINT valid_urgency CHECK (urgency_level IN ('low', 'medium', 'high', 'emergency'))
);
```

#### **Attorneys Table**
```sql
CREATE TABLE attorneys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Attorney Information
  name VARCHAR(200) NOT NULL,
  law_firm VARCHAR(200),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  license_number VARCHAR(100),
  
  -- Service Areas
  service_areas TEXT[], -- ['Atlanta', 'Marietta', 'Decatur']
  practice_areas TEXT[], -- ['car_accident', 'truck_accident', 'motorcycle']
  
  -- Capacity & Preferences
  max_leads_per_month INTEGER DEFAULT 10,
  current_lead_count INTEGER DEFAULT 0,
  lead_price_tier VARCHAR(20) DEFAULT 'standard',
  case_value_minimums JSONB, -- {'high': 50000, 'medium': 25000, 'low': 5000}
  
  -- Performance Metrics
  conversion_rate DECIMAL(5,2) DEFAULT 0,
  avg_case_value DECIMAL(12,2) DEFAULT 0,
  client_satisfaction DECIMAL(3,2) DEFAULT 0,
  response_time_avg INTEGER DEFAULT 0, -- minutes
  
  -- Billing & Payments
  payment_method VARCHAR(50),
  payment_schedule VARCHAR(50) DEFAULT 'monthly',
  outstanding_balance DECIMAL(10,2) DEFAULT 0,
  
  -- Status & Availability
  is_active BOOLEAN DEFAULT true,
  accepting_leads BOOLEAN DEFAULT true,
  emergency_availability BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### **Lead_Attorney_Assignments Table**
```sql
CREATE TABLE lead_attorney_assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  attorney_id UUID REFERENCES attorneys(id),
  
  -- Assignment Details
  assigned_at TIMESTAMP DEFAULT NOW(),
  assignment_type VARCHAR(50) DEFAULT 'automatic', -- automatic|manual|emergency
  assignment_priority INTEGER DEFAULT 1,
  
  -- Lead Price & Payment
  lead_price DECIMAL(8,2),
  payment_status VARCHAR(50) DEFAULT 'pending',
  payment_date TIMESTAMP,
  invoice_id VARCHAR(100),
  
  -- Attorney Response
  attorney_contacted_lead BOOLEAN DEFAULT false,
  contact_attempt_count INTEGER DEFAULT 0,
  first_contact_at TIMESTAMP,
  case_accepted BOOLEAN,
  rejection_reason VARCHAR(255),
  
  -- Performance Tracking
  response_time_minutes INTEGER,
  consultation_scheduled BOOLEAN DEFAULT false,
  consultation_date TIMESTAMP,
  case_signed BOOLEAN DEFAULT false,
  case_outcome VARCHAR(100),
  case_value DECIMAL(12,2),
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### **Lead Processing Workflow**

#### **Automated Lead Scoring Algorithm**
```javascript
function calculateLeadScore(leadData) {
  let score = 0;
  
  // Timing Score (0-25 points)
  const timingScores = {
    'today': 25,
    'yesterday': 22, 
    'this-week': 18,
    'last-week': 14,
    'this-month': 10,
    'over-month': 5
  };
  score += timingScores[leadData.accidentDate] || 0;
  
  // Injury Score (0-30 points)
  if (leadData.injured === 'yes') {
    score += 20;
    
    // Injury severity bonus
    const severityBonus = {
      'life-threatening': 10,
      'severe': 8,
      'moderate': 5,
      'minor': 2
    };
    score += severityBonus[leadData.injurySeverity] || 0;
  }
  
  // Medical Treatment Score (0-20 points)
  const treatmentScores = {
    'emergency-room': 15,
    'hospital': 20,
    'urgent-care': 10,
    'doctor-visit': 8,
    'physical-therapy': 12,
    'no-treatment': 0
  };
  score += treatmentScores[leadData.medicalTreatment] || 0;
  
  // Case Value Indicators (0-15 points)
  const expenseScores = {
    'over-50000': 15,
    '25000-50000': 12,
    '10000-25000': 8,
    '5000-10000': 5,
    '1000-5000': 2,
    'under-1000': 1
  };
  score += expenseScores[leadData.medicalExpenses] || 0;
  
  // Legal Urgency (0-10 points)
  if (leadData.settlementOffered === 'yes') score += 8;
  if (leadData.hasAttorney === 'no') score += 5;
  if (leadData.legalDeadlines !== 'none') score += 7;
  
  return Math.min(score, 100);
}
```

#### **Attorney Matching Algorithm**
```javascript
function matchAttorneys(lead) {
  const eligibleAttorneys = attorneys.filter(attorney => {
    return attorney.is_active &&
           attorney.accepting_leads &&
           attorney.current_lead_count < attorney.max_leads_per_month &&
           attorney.service_areas.includes(lead.accident_city) &&
           attorney.case_value_minimums[lead.urgency_level] <= lead.estimated_value;
  });
  
  // Score attorneys based on:
  // - Response time (faster = higher score)
  // - Conversion rate (higher = higher score)  
  // - Current capacity (more available = higher score)
  // - Specialization match (exact match = higher score)
  
  return eligibleAttorneys
    .map(attorney => ({
      ...attorney,
      matchScore: calculateMatchScore(attorney, lead)
    }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 3); // Return top 3 matches
}
```

### **Lead Status Management**

#### **Status Flow**
1. **New** → Lead just submitted, automated scoring complete
2. **Contacted** → Attorney(s) have been notified and are attempting contact
3. **Qualified** → Attorney has spoken with lead and assessed case viability
4. **Sold** → Lead has signed with attorney (revenue generated)
5. **Rejected** → Lead rejected by attorney or doesn't qualify

#### **Automated Status Updates**
- **New → Contacted:** When lead is assigned to attorney(s)
- **Contacted → Qualified:** When attorney reports successful contact
- **Qualified → Sold:** When attorney reports signed retainer
- **Any → Rejected:** When attorney reports rejection with reason

### **Revenue Tracking & Billing**

#### **Pricing Tiers**
```javascript
const leadPricing = {
  'emergency': {
    'high_value': 800,    // $50k+ cases, today/yesterday
    'medium_value': 500,  // $25k+ cases, this week
    'standard': 300       // All other emergency cases
  },
  'high_priority': {
    'high_value': 600,    // $50k+ cases, recent
    'medium_value': 400,  // $25k+ cases
    'standard': 250       // Standard high priority
  },
  'standard': {
    'high_value': 400,    // $50k+ cases
    'medium_value': 250,  // $25k+ cases  
    'standard': 150       // All other cases
  }
};
```

#### **Payment Processing**
- **Billing Cycle:** Monthly invoices sent on 1st of each month
- **Payment Terms:** Net 15 days
- **Payment Methods:** ACH, credit card, wire transfer
- **Late Fees:** 1.5% per month on overdue balances
- **Credit System:** Attorneys can pre-pay for lead credits

## 4. AUTOMATED EMAIL RESPONSES

### **Email Sequence Strategy**

#### **Immediate Response (0 minutes)**
**Subject:** "Your Car Accident Case Information - Help is Coming"

**Content:**
- Thank you for submission
- Case summary with estimated value
- What happens next (timeline)
- Emergency resources and phone numbers
- Important "do's and don'ts"
- Attorney contact expectations

#### **Follow-up Sequence for Non-Responders**

**Day 1 (+4 hours):** "Time-Sensitive: Your Legal Rights Are at Risk"
- Emphasize statute of limitations
- Insurance company tactics warning
- Additional case resources
- Alternative contact options

**Day 2:** "Free Accident Checklist + Legal Updates"
- Downloadable checklist PDF
- Recent news about car accident laws
- Local attorney spotlights
- Client success stories

**Day 7:** "Still Need Help? Here Are Your Options"
- Alternative attorney options
- DIY legal resources
- Insurance claim tips
- Final assistance offer

#### **Post-Consultation Sequence**

**After Attorney Contact:** "How Did Your Consultation Go?"
- Feedback request
- Additional resources if needed
- Attorney evaluation survey
- Continued support offer

### **Email Templates**

#### **Template 1: Emergency Response**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Your Car Accident Case - Emergency Response</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  
  <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 30px; text-align: center;">
    <h1 style="margin: 0; font-size: 24px;">🚨 Emergency Legal Response</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Car Crashes in Atlanta</p>
  </div>
  
  <div style="background: #fef2f2; border: 2px solid #fecaca; padding: 20px; margin: 20px 0;">
    <h2 style="color: #dc2626; margin-top: 0;">Hi {{firstName}},</h2>
    <p><strong>We've received your emergency request for legal help.</strong></p>
    <p>An experienced Atlanta car accident attorney will contact you within the next hour to discuss your case and protect your rights.</p>
  </div>
  
  <div style="background: white; border: 1px solid #e5e7eb; padding: 20px; margin: 20px 0;">
    <h3 style="color: #1f2937;">🚗 Your Case Summary</h3>
    <ul style="list-style: none; padding: 0;">
      <li><strong>Accident Date:</strong> {{accidentDate}}</li>
      <li><strong>Estimated Value:</strong> <span style="color: #059669; font-weight: bold;">{{caseValue}}</span></li>
      <li><strong>Priority Level:</strong> <span style="background: #dc2626; color: white; padding: 2px 8px; border-radius: 4px;">{{urgencyLevel}}</span></li>
    </ul>
  </div>
  
  <!-- Rest of email content... -->
  
</body>
</html>
```

#### **Template 2: Standard Response**
```html
<!-- Similar structure but with blue theme and less urgency -->
```

#### **Template 3: Follow-up Sequence**
```html
<!-- Educational content with resources and additional help -->
```

### **Email Personalization Variables**
```javascript
const emailVariables = {
  // Personal
  firstName: lead.firstName,
  lastName: lead.lastName,
  
  // Case Details  
  accidentDate: formatAccidentDate(lead.accidentDate),
  caseValue: lead.caseValueEstimate,
  urgencyLevel: lead.urgencyLevel.toUpperCase(),
  leadScore: lead.leadScore,
  
  // Location
  city: lead.accidentCity || 'Atlanta',
  state: 'Georgia',
  
  // Dynamic Content
  urgencyMessage: getUrgencyMessage(lead.urgencyLevel),
  contactTimeline: getContactTimeline(lead.urgencyLevel),
  relevantResources: getRelevantResources(lead),
  
  // Legal Information
  statuteOfLimitations: '2 years in Georgia',
  emergencyNumber: '(404) 844-2799',
  
  // Tracking
  emailId: generateEmailId(),
  leadId: lead.id,
  trackingPixel: generateTrackingPixel(lead.id)
};
```

### **Email Performance Tracking**
- **Open Rates:** Track email opens with pixel tracking
- **Click Rates:** Track clicks on all links and CTAs
- **Response Rates:** Track replies and phone calls
- **Conversion Rates:** Track from email to attorney consultation
- **Revenue Attribution:** Track from email to signed cases

## 5. IMPLEMENTATION REQUIREMENTS

### **Required Technology Stack**

#### **Core Platform**
- **Frontend:** Next.js 14+ with TypeScript
- **Backend:** Node.js with Express or Next.js API routes
- **Database:** PostgreSQL with Supabase or self-hosted
- **Authentication:** NextAuth.js or Supabase Auth

#### **CRM & Lead Management**
- **Primary CRM:** HubSpot Professional ($450/month)
- **Alternative:** Salesforce Essentials ($300/month)
- **Lead Scoring:** Custom algorithm + HubSpot automation
- **Data Warehouse:** PostgreSQL for detailed analytics

#### **Communication & Automation**
- **Email Service:** SendGrid ($14.95/month) or Mailgun
- **SMS Service:** Twilio ($20/month estimated usage)
- **Phone System:** Twilio Voice for call tracking
- **Marketing Automation:** HubSpot Marketing Hub

#### **Payment & Billing**
- **Payment Processing:** Stripe ($50/month + 2.9% fees)
- **Invoicing:** QuickBooks Online ($30/month)
- **Subscription Management:** Stripe Billing

#### **Analytics & Reporting**
- **Web Analytics:** Google Analytics 4 (free)
- **Form Analytics:** Hotjar ($32/month)
- **Call Tracking:** CallRail ($45/month)
- **Custom Dashboards:** Retool ($10/month)

### **Compliance & Security**
- **TCPA Compliance:** Lead consent tracking and documentation
- **GDPR/CCPA:** Privacy policy, data deletion, consent management
- **HIPAA Considerations:** Medical information encryption
- **Legal Advertising Rules:** Bar association compliance for attorney advertising

### **Expected ROI Metrics**
- **Lead Conversion Rate:** 15-25% (leads to consultations)
- **Attorney Signup Rate:** 25-35% (consultations to clients)  
- **Average Lead Value:** $300-600 per qualified lead
- **Monthly Lead Volume:** 200-500 leads (after 6 months)
- **Monthly Revenue:** $60K-300K (conservative estimate)

This comprehensive system provides a complete lead generation and management solution designed to maximize both lead quality and revenue per lead while maintaining compliance and providing excellent user experience. 