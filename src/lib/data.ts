import { Brand, Category, Feature, FAQ, OfferDetail } from "./types";

export const brands: Brand[] = [
  { id: "1", name: "Amazon", slug: "amazon-offer", description: "Exclusive student discounts on electronics, books, and more.", discount: "40%", color: "#FF9900", icon: "A" },
  { id: "2", name: "Flipkart", slug: "flipkart-offer", description: "Special student pricing on gadgets, fashion, and daily essentials.", discount: "50%", color: "#2874F0", icon: "F" },
  { id: "3", name: "Myntra", slug: "myntra-offer", description: "Student-exclusive fashion deals on top brands.", discount: "30%", color: "#E40046", icon: "M" },
  { id: "4", name: "AJIO", slug: "ajio-offer", description: "Premium fashion discounts curated for students.", discount: "35%", color: "#E91E63", icon: "A" },
  { id: "5", name: "Nykaa", slug: "nykaa-offer", description: "Beauty and wellness products at student-friendly prices.", discount: "25%", color: "#FC2779", icon: "N" },
  { id: "6", name: "Adidas", slug: "adidas-offer", description: "Sportswear and sneakers with exclusive student pricing.", discount: "20%", color: "#000000", icon: "A" },
  { id: "7", name: "Puma", slug: "puma-offer", description: "Athletic gear and lifestyle wear at special rates.", discount: "20%", color: "#E63946", icon: "P" },
  { id: "8", name: "Croma", slug: "croma-offer", description: "Tech gadgets and electronics for student budgets.", discount: "15%", color: "#1A1A2E", icon: "C" },
];

export const categories: Category[] = [
  { id: "1", name: "Shopping", icon: "ShoppingBag", color: "#3B82F6" },
  { id: "2", name: "Fashion", icon: "Shirt", color: "#EC4899" },
  { id: "3", name: "Electronics", icon: "Smartphone", color: "#8B5CF6" },
  { id: "4", name: "Lifestyle", icon: "Heart", color: "#F43F5E" },
  { id: "5", name: "Education", icon: "GraduationCap", color: "#10B981" },
  { id: "6", name: "Food", icon: "UtensilsCrossed", color: "#F59E0B" },
  { id: "7", name: "Travel", icon: "Plane", color: "#06B6D4" },
  { id: "8", name: "Entertainment", icon: "Clapperboard", color: "#F97316" },
];

export const features: Feature[] = [
  { id: "1", title: "Student Exclusive Programs", description: "Access deals available only to verified students from partner brands.", icon: "GraduationCap" },
  { id: "2", title: "Secure Verification", description: "Your academic documents are verified securely with privacy-first processing.", icon: "ShieldCheck" },
  { id: "3", title: "Premium Brand Offers", description: "Curated discounts from India's most trusted brands across every category.", icon: "Award" },
  { id: "4", title: "Fast Application Process", description: "Complete your verification in minutes and start saving immediately.", icon: "Zap" },
  { id: "5", title: "Trusted Platform", description: "Thousands of students trust Discount Mentee for their shopping needs.", icon: "Users" },
];

export const homeFAQs: FAQ[] = [
  { id: "1", question: "Who can apply?", answer: "Any student currently enrolled in a recognized college, university, or educational institution in India can apply for student verification." },
  { id: "2", question: "How does verification work?", answer: "You submit your academic details and a valid student ID. Our team reviews your documents and verifies your student status within 24-48 hours." },
  { id: "3", question: "How long does approval take?", answer: "Most applications are reviewed within 24-48 hours. You will receive an email notification once your verification is complete." },
  { id: "4", question: "How do I redeem my coupon?", answer: "Once verified, visit the coupon redemption page, complete the final step, and your unique coupon code will be revealed." },
];

export const amazonOffer: OfferDetail = {
  title: "Amazon Student Discount Program",
  description: "Get exclusive discounts on millions of products across Amazon India. From electronics to fashion, books to home essentials — enjoy special pricing available only for verified students.",
  eligibility: [
    "Currently enrolled in a recognized Indian university or college",
    "Valid student ID card or enrollment letter",
    "Must complete Discount Mentee student verification",
    "One coupon per verified student account",
  ],
  benefits: [
    "Up to 40% off on select electronics",
    "Special student pricing on Amazon Prime",
    "Exclusive deals on textbooks and academic supplies",
    "Early access to sale events",
    "No-cost EMI options on eligible purchases",
  ],
  faqs: [
    { id: "f1", question: "Can I use this with existing Amazon offers?", answer: "Yes, student discounts can often be combined with ongoing sale promotions for additional savings." },
    { id: "f2", question: "How long is the coupon valid?", answer: "The coupon code is valid for 30 days from the date of issuance." },
    { id: "f3", question: "Is this available for Prime members?", answer: "Yes, the student discount is available for all verified students regardless of Prime membership status." },
  ],
};

export const flipkartOffer: OfferDetail = {
  title: "Flipkart Student Savings Program",
  description: "Unlock exclusive student-only discounts on Flipkart. Shop the latest smartphones, laptops, fashion, and more at prices tailored for student budgets.",
  eligibility: [
    "Currently enrolled in a recognized Indian educational institution",
    "Valid student ID or bonafide certificate required",
    "Must complete Discount Mentee verification process",
    "Limited to one coupon per student",
  ],
  benefits: [
    "Up to 50% off on select smartphones and electronics",
    "Student-exclusive pricing on fashion and apparel",
    "Special discounts on laptops and accessories",
    "Free shipping on eligible orders",
    "Additional bank offers on student purchases",
  ],
  faqs: [
    { id: "f1", question: "Can I use Flipkart Axis Bank card with this?", answer: "Yes, you can combine student discounts with eligible bank card offers for maximum savings." },
    { id: "f2", question: "Is there a minimum order value?", answer: "No minimum order value is required. The discount applies to eligible products regardless of cart total." },
    { id: "f3", question: "How do I apply the coupon?", answer: "Copy the coupon code and paste it at checkout on Flipkart. The discount will reflect in your order summary." },
  ],
};

export const myntraOffer: OfferDetail = {
  title: "Myntra Student Fashion Pass",
  description: "Level up your style with student-exclusive discounts on Myntra. Access premium fashion brands, footwear, accessories, and more at special rates.",
  eligibility: [
    "Must be a verified student through Discount Mentee",
    "Valid college ID required for verification",
    "Open to undergraduate and postgraduate students",
    "Single-use coupon per verified account",
  ],
  benefits: [
    "Up to 30% off on top fashion brands",
    "Exclusive student access to end-of-season sales",
    "Special pricing on footwear and accessories",
    "Free Myntra Insider benefits",
    "Early access to brand drops and collaborations",
  ],
  faqs: [
    { id: "f1", question: "Does this work on all brands?", answer: "The discount applies to most brands on Myntra. Some premium/luxury brands may have exclusions." },
    { id: "f2", question: "Can I return items bought with the coupon?", answer: "Yes, standard Myntra return and exchange policies apply to all purchases made with the coupon." },
    { id: "f3", question: "Is the coupon reusable?", answer: "The coupon is valid for a single transaction only. Make sure to use it on your most wanted items." },
  ],
};

export const ajioOffer: OfferDetail = {
  title: "AJIO Student Style Rewards",
  description: "Discover student-only pricing on AJIO's curated collection. From streetwear to ethnic, accessories to home — style your life at special student prices.",
  eligibility: [
    "Currently enrolled as a student in India",
    "Valid student identification required",
    "Complete Discount Mentee verification",
    "One-time use per verified student",
  ],
  benefits: [
    "Up to 35% off on select fashion and lifestyle products",
    "Student-exclusive access to premium collections",
    "Special pricing on AJIO's private labels",
    "Free delivery on student orders",
    "Early access to seasonal sales and new arrivals",
  ],
  faqs: [
    { id: "f1", question: "Can I use this during a sale?", answer: "Yes, the student discount can be applied on top of sale prices on eligible items." },
    { id: "f2", question: "Do I need an AJIO account?", answer: "You will need an AJIO account to place your order. Create one for free on their website or app." },
    { id: "f3", question: "What if my coupon doesn't work?", answer: "Contact our support team and we'll help resolve any issues with your coupon code." },
  ],
};
