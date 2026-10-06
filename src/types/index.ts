export interface PilotSubmission {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string;
}

export interface PlatformCapability {
  id: number;
  name: string;
  description: string;
  group: 'A' | 'B' | 'C' | 'D';
  groupName: string;
  isPlanned?: boolean;
}

export interface PricingCardData {
  id: string;
  title: string;
  price: string;
  billingBasis: string;
  description: string;
  buttonText: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
