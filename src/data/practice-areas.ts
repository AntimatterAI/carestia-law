import { Car, Truck, Bike, Heart, Shield, Scale, Dog, Stethoscope } from 'lucide-react';

export interface PracticeAreaData {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  faqSection: {
    question: string;
    answer: string;
  }[];
  relatedAreas: {
    title: string;
    href: string;
  }[];
  heroImage?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const practiceAreasData: PracticeAreaData[] = [
  {
    slug: 'car-accidents',
    title: 'Car Accidents',
    shortDescription: 'Expert legal representation for car accident victims. We fight aggressively with insurance companies to protect your rights and maximize your recovery.',
    fullDescription: 'Car accidents can cause damages and injuries that can disrupt your life. You have questions and we have answers. Is the insurance company making you a fair offer for your car? Are you entitled to a rental car? Should you call your own insurance company if the accident is not your fault? Should you call the police? How will you pay for your medical bills? Are you entitled to pain and suffering? Is the insurance company making a fair offer? We know the questions you have, and we know the answers. We will guide you through the process and deal aggressively with insurance companies to protect your rights and maximize your recovery. We used to work for the insurance companies. We know their playbook. Now, we work for you and use our experience to get you the best results possible.',
    icon: Car,
    keyPoints: [
      'Expert negotiation with insurance companies',
      'Maximizing compensation for medical bills and lost wages',
      'Handling property damage claims',
      'Securing rental car coverage',
      'Pain and suffering compensation',
      'No fee unless we win your case'
    ],
    faqSection: [
      {
        question: 'Should I call the police after a car accident?',
        answer: 'Yes, you should always call the police after a car accident, even if it seems minor. A police report provides official documentation of the incident and can be crucial for your insurance claim and any potential legal proceedings.'
      },
      {
        question: 'What if the insurance company offers me a settlement?',
        answer: 'Do not accept any settlement offers without consulting with an experienced attorney first. Insurance companies often make low initial offers hoping you will accept quickly. We can evaluate whether the offer is fair and fight for the compensation you truly deserve.'
      },
      {
        question: 'How long do I have to file a car accident claim?',
        answer: 'In most states, you have a limited time to file a personal injury claim after a car accident, typically 2-3 years. However, it is important to contact an attorney as soon as possible to preserve evidence and protect your rights.'
      }
    ],
    relatedAreas: [
      { title: 'Trucking Accidents', href: '/practice-areas/trucking-accidents' },
      { title: 'Motorcycle Accidents', href: '/practice-areas/motorcycle-accidents' },
      { title: 'Personal Injury', href: '/practice-areas/personal-injury' }
    ]
  },
  {
    slug: 'trucking-accidents',
    title: 'Trucking Accidents',
    shortDescription: 'Specialized legal representation for truck accident cases involving complex federal regulations and commercial insurance policies.',
    fullDescription: 'Accidents involving trucks involve special laws, rules and regulations that are not applicable in accidents involving only cars. Truck drivers and trucking companies are subject to stricter safety rules. Knowing these rules and regulations is extremely important, and most lawyers are not familiar with these laws. We are experienced in cases involving truck drivers and trucking companies. We know the issues to look for and the questions to ask that will maximize the value of a case involving trucks.',
    icon: Truck,
    keyPoints: [
      'Knowledge of federal trucking regulations',
      'Experience with commercial insurance policies',
      'Investigation of driver logs and maintenance records',
      'Expert reconstruction of truck accidents',
      'Understanding of commercial liability issues',
      'Maximum compensation for severe injuries'
    ],
    faqSection: [
      {
        question: 'What makes trucking accidents different from car accidents?',
        answer: 'Trucking accidents involve federal regulations, commercial insurance policies, and often result in more severe injuries due to the size and weight of commercial vehicles. Special rules govern truck drivers including hours of service, maintenance requirements, and licensing.'
      },
      {
        question: 'Who can be held liable in a truck accident?',
        answer: 'Multiple parties may be liable including the truck driver, trucking company, cargo loading company, truck manufacturer, or maintenance provider. Our investigation determines all potentially liable parties to maximize your compensation.'
      },
      {
        question: 'How much is my truck accident case worth?',
        answer: 'Truck accident cases often involve higher compensation due to severe injuries and multiple insurance policies. The value depends on your injuries, lost wages, medical expenses, and other damages. We fight to secure maximum compensation for all your losses.'
      }
    ],
    relatedAreas: [
      { title: 'Car Accidents', href: '/practice-areas/car-accidents' },
      { title: 'Wrongful Death', href: '/practice-areas/wrongful-death' },
      { title: 'Personal Injury', href: '/practice-areas/personal-injury' }
    ]
  },
  {
    slug: 'motorcycle-accidents',
    title: 'Motorcycle Accidents',
    shortDescription: 'Comprehensive legal support for motorcyclists injured due to others negligence, fighting bias and securing fair compensation.',
    fullDescription: 'A motorcyclist who suffers a serious injury as a result of somebody else negligence will likely need to bring a personal injury lawsuit to recover compensatory damages. The damages it may be appropriate to seek include medical expenses, out-of-pocket expenses, lost income, household services, vocational rehabilitation, disability, loss of enjoyment of activities, and pain and suffering. In motorcycle injury cases involving catastrophic injuries, it may be appropriate to retain multiple experts, including an accident reconstruction specialist, a medical expert, and an economist. We know the questions you have, and we know the answers. We will guide you through the process and deal aggressively with insurance companies to protect your rights and maximize your recovery.',
    icon: Bike,
    keyPoints: [
      'Overcoming motorcycle bias in legal proceedings',
      'Expert accident reconstruction services',
      'Comprehensive damage evaluation',
      'Vocational rehabilitation assessment',
      'Fighting for full compensation for catastrophic injuries',
      'Experienced trial attorneys for complex cases'
    ],
    faqSection: [
      {
        question: 'What if I was partially at fault for the motorcycle accident?',
        answer: 'Even if you were partially at fault, you may still be entitled to compensation. Many states follow comparative negligence laws, which means your compensation is reduced by your percentage of fault. We will work to minimize any fault attributed to you.'
      },
      {
        question: 'Why do I need a lawyer experienced in motorcycle accidents?',
        answer: 'Motorcycle accident cases face unique challenges including bias against motorcyclists and the severity of injuries. Our experience helps overcome these challenges and ensures you receive fair treatment from insurance companies and courts.'
      },
      {
        question: 'What damages can I recover in a motorcycle accident case?',
        answer: 'You may recover medical expenses, lost wages, pain and suffering, disability, loss of enjoyment of life, property damage, and in severe cases, vocational rehabilitation costs. We fight for compensation for all aspects of how the accident has affected your life.'
      }
    ],
    relatedAreas: [
      { title: 'Car Accidents', href: '/practice-areas/car-accidents' },
      { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
      { title: 'Wrongful Death', href: '/practice-areas/wrongful-death' }
    ]
  },
  {
    slug: 'medical-malpractice',
    title: 'Medical Malpractice',
    shortDescription: 'Holding healthcare professionals accountable for negligent medical care that causes injury or harm to patients.',
    fullDescription: 'Medical malpractice occurs when a hospital, doctor or other health care professional, through a negligent act or omission, causes an injury to a patient. The negligence might be the result of errors in diagnosis, treatment, aftercare or health management. Have you been injured from a treatment or medical procedure? Our experienced medical malpractice attorneys understand the complex medical and legal issues involved in these cases and work with medical experts to build strong cases for our clients.',
    icon: Stethoscope,
    keyPoints: [
      'Expert medical testimony and case evaluation',
      'Thorough investigation of medical records',
      'Experience with complex medical procedures',
      'Understanding of standard medical care protocols',
      'Compensation for medical expenses and ongoing care',
      'Fighting for accountability in healthcare'
    ],
    faqSection: [
      {
        question: 'What constitutes medical malpractice?',
        answer: 'Medical malpractice occurs when a healthcare provider deviates from the accepted standard of care, resulting in injury to the patient. This can include misdiagnosis, surgical errors, medication errors, birth injuries, or failure to diagnose serious conditions.'
      },
      {
        question: 'How long do I have to file a medical malpractice claim?',
        answer: 'Medical malpractice claims have strict time limits that vary by state, typically 1-3 years from when the malpractice was discovered. It is crucial to contact an attorney immediately if you suspect medical malpractice, as evidence must be preserved quickly.'
      },
      {
        question: 'Do I need medical experts for my case?',
        answer: 'Yes, medical malpractice cases require expert medical testimony to establish the standard of care and prove that it was breached. We work with qualified medical experts in the relevant specialties to build strong cases for our clients.'
      }
    ],
    relatedAreas: [
      { title: 'Wrongful Death', href: '/practice-areas/wrongful-death' },
      { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
      { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall' }
    ]
  },
  {
    slug: 'slip-and-fall',
    title: 'Slip & Fall / Premises Liability',
    shortDescription: 'Securing compensation for injuries caused by dangerous property conditions and negligent property maintenance.',
    fullDescription: 'Business owners and landowners have a legal duty to provide for the safety of their customers and invitees. If a hazardous condition caused you to become injured on the property of another, call us immediately. We are experienced in obtaining substantial recoveries against businesses that carelessly maintain their properties. Property owners must maintain safe conditions and warn of known hazards.',
    icon: Scale,
    keyPoints: [
      'Proving property owner negligence',
      'Investigating dangerous property conditions',
      'Documenting hazardous situations',
      'Understanding premises liability law',
      'Substantial recoveries against negligent businesses',
      'Fighting for full compensation for your injuries'
    ],
    faqSection: [
      {
        question: 'What do I need to prove in a slip and fall case?',
        answer: 'To succeed in a slip and fall case, you must prove that the property owner knew or should have known about the dangerous condition and failed to fix it or warn visitors. You must also show that this negligence caused your injuries.'
      },
      {
        question: 'What should I do immediately after a slip and fall accident?',
        answer: 'Seek medical attention immediately, report the incident to the property owner or manager, take photos of the hazard and your injuries, gather witness information, and contact an experienced premises liability attorney as soon as possible.'
      },
      {
        question: 'Can I still recover compensation if I was partially at fault?',
        answer: 'Depending on your state laws, you may still recover compensation even if you were partially at fault. Comparative negligence laws may reduce your recovery by your percentage of fault, but you may still be entitled to substantial compensation.'
      }
    ],
    relatedAreas: [
      { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
      { title: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
      { title: 'Wrongful Death', href: '/practice-areas/wrongful-death' }
    ]
  },
  {
    slug: 'wrongful-death',
    title: 'Wrongful Death',
    shortDescription: 'Compassionate legal support for families who have lost loved ones due to negligence or wrongful acts of others.',
    fullDescription: 'The unexpected loss of a family member is even more tragic when their death is caused by someone else careless, negligent or deliberately malicious behavior. While dealing with the death of a loved one is always difficult, doing so can become infinitely more complex when you try to set aside your devastation to deal with the legal aspects of filing a wrongful death lawsuit. Let us help you through the process during this troubling time.',
    icon: Heart,
    keyPoints: [
      'Compassionate legal guidance during difficult times',
      'Thorough investigation of the cause of death',
      'Fighting for maximum compensation for your family',
      'Understanding of wrongful death statutes',
      'Handling all legal aspects while you grieve',
      'Experience with complex wrongful death cases'
    ],
    faqSection: [
      {
        question: 'Who can file a wrongful death lawsuit?',
        answer: 'Typically, immediate family members such as spouses, children, and parents can file wrongful death claims. The specific rules vary by state, and in some cases, other dependents or the estate may be able to file a claim.'
      },
      {
        question: 'What damages can be recovered in a wrongful death case?',
        answer: 'Damages may include funeral and burial expenses, medical expenses prior to death, lost future earnings, loss of companionship and support, and pain and suffering. The specific damages available depend on state law and the circumstances of the case.'
      },
      {
        question: 'How long do I have to file a wrongful death claim?',
        answer: 'Wrongful death claims have strict time limits, typically 1-3 years from the date of death. It is important to contact an attorney as soon as possible to ensure your rights are protected and evidence is preserved.'
      }
    ],
    relatedAreas: [
      { title: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
      { title: 'Car Accidents', href: '/practice-areas/car-accidents' },
      { title: 'Trucking Accidents', href: '/practice-areas/trucking-accidents' }
    ]
  },
  {
    slug: 'dog-bite-injuries',
    title: 'Dog Bite Injuries',
    shortDescription: 'Legal representation for dog attack victims, holding pet owners accountable for their animals actions.',
    fullDescription: 'Being attacked and/or bitten by a dog is a scary situation, and it can be difficult to figure out if the owner is liable for any injuries, medical costs and other damages you sustain. Contacting our firm to handle your claim can be the differentiating factor in whether or not you are fairly compensated for a dog attack or dog bite injury. Dog owners have a responsibility to control their pets and prevent attacks.',
    icon: Dog,
    keyPoints: [
      'Understanding dog bite liability laws',
      'Proving owner negligence and responsibility',
      'Compensation for medical treatment and scarring',
      'Handling insurance company negotiations',
      'Fighting for fair compensation for trauma',
      'Experience with animal attack cases'
    ],
    faqSection: [
      {
        question: 'Is the dog owner automatically liable for my injuries?',
        answer: 'In many states, dog owners are strictly liable for injuries their dogs cause, regardless of the dog previous behavior. However, some states require proof of negligence. We will determine the applicable law and build the strongest case for your situation.'
      },
      {
        question: 'What if the dog has never bitten anyone before?',
        answer: 'In many jurisdictions, it does not matter if the dog has never bitten anyone before. Dog owners are responsible for controlling their pets and preventing attacks. The one bite rule has been abolished in many states in favor of strict liability laws.'
      },
      {
        question: 'Can I recover compensation for emotional trauma from a dog attack?',
        answer: 'Yes, dog attacks can cause significant emotional trauma, especially in children. You may be entitled to compensation for psychological counseling, pain and suffering, and other emotional damages in addition to medical expenses.'
      }
    ],
    relatedAreas: [
      { title: 'Personal Injury', href: '/practice-areas/personal-injury' },
      { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall' },
      { title: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' }
    ]
  },
  {
    slug: 'personal-injury',
    title: 'Personal Injury',
    shortDescription: 'Comprehensive legal representation for all types of personal injury cases caused by negligence and accidents.',
    fullDescription: 'We hope you never need to call us. Nobody wants to get into an accident or get injured. But accidents happen. When they do, call us at the Law Office of Michael P. Carestia, LLC. We handle injuries caused by all types of incidents and accidents. Our commitment to achieving outstanding results for our clients coupled with our experience means you will have the best legal representation available.',
    icon: Shield,
    keyPoints: [
      'Comprehensive personal injury representation',
      'Experience with all types of accident cases',
      'Commitment to outstanding results',
      'Thorough investigation of your case',
      'Fighting for maximum compensation',
      'No fee unless we win your case'
    ],
    faqSection: [
      {
        question: 'What types of personal injury cases do you handle?',
        answer: 'We handle all types of personal injury cases including car accidents, slip and falls, medical malpractice, dog bites, trucking accidents, motorcycle accidents, wrongful death, and any case where you were injured due to someone else negligence.'
      },
      {
        question: 'How much does it cost to hire a personal injury attorney?',
        answer: 'We work on a contingency fee basis, which means you pay no attorney fees unless we win your case. We advance all case expenses, and you only pay if we secure a favorable settlement or verdict for you.'
      },
      {
        question: 'How long will my personal injury case take?',
        answer: 'The length of your case depends on many factors including the complexity of your injuries, the willingness of insurance companies to negotiate fairly, and whether the case goes to trial. We work efficiently while ensuring we secure the best possible outcome for you.'
      }
    ],
    relatedAreas: [
      { title: 'Car Accidents', href: '/practice-areas/car-accidents' },
      { title: 'Medical Malpractice', href: '/practice-areas/medical-malpractice' },
      { title: 'Slip & Fall', href: '/practice-areas/slip-and-fall' }
    ]
  }
];

// Helper function to get practice area by slug
export function getPracticeAreaBySlug(slug: string): PracticeAreaData | undefined {
  return practiceAreasData.find(area => area.slug === slug);
}

// Helper function to get all practice area slugs for static generation
export function getAllPracticeAreaSlugs(): string[] {
  return practiceAreasData.map(area => area.slug);
} 