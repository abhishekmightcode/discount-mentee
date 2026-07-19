export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  discount: string;
  color: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface OfferDetail {
  title: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  faqs: FAQ[];
}

export interface StudentFormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  university: string;
  course: string;
  year: string;
  applicationNo: string;
  rollNo: string;
  enrollmentNo: string;
  city: string;
  state: string;
  studentId: File | null;
  feeReceipt: File | null;
  confirmCorrect: boolean;
}
