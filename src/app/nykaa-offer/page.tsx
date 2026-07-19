"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";

const offer = {
  title: "Nykaa Student Beauty Pass",
  description: "Discover exclusive student pricing on beauty, skincare, and wellness products from Nykaa. Look your best without breaking the bank.",
  eligibility: [
    "Currently enrolled in a recognized Indian university or college",
    "Valid student ID card required for verification",
    "Must complete Discount Mentee student verification",
    "One coupon per verified student account",
  ],
  benefits: [
    "Up to 25% off on select beauty and skincare products",
    "Student-exclusive access to flash sales",
    "Special pricing on premium beauty brands",
    "Free samples on student orders",
    "Early access to new launches and collaborations",
  ],
  faqs: [
    { id: "f1", question: "Can I use this during Nykaa sales?", answer: "Yes, the student discount can be applied on top of sale prices on eligible items." },
    { id: "f2", question: "Does this apply to all brands on Nykaa?", answer: "The discount applies to most brands. Some premium/luxury brands may have exclusions." },
    { id: "f3", question: "How do I redeem?", answer: "Copy the coupon code and apply it at checkout on Nykaa's website or app." },
  ],
};

export default function NykaaOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Nykaa" offer={offer} color="#FC2779" image="/images/nykaa-logo-large.jpg" />
    </motion.div>
  );
}
