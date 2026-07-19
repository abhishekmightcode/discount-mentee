"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";

const nikeOffer = {
  title: "Nike Student Athlete Discount",
  description: "Unlock exclusive student pricing on Nike's latest sportswear, sneakers, and athletic gear. Train harder, save smarter.",
  eligibility: [
    "Currently enrolled in a recognized Indian university or college",
    "Valid student ID card required for verification",
    "Must complete Discount Mentee student verification",
    "One coupon per verified student account",
  ],
  benefits: [
    "Up to 25% off on select Nike products",
    "Exclusive access to member-only drops",
    "Special pricing on training and running gear",
    "Free shipping on eligible orders",
    "Early access to new collections and collaborations",
  ],
  faqs: [
    { id: "f1", question: "Can I use this with Nike member offers?", answer: "Yes, student discounts can be combined with Nike member benefits for extra savings." },
    { id: "f2", question: "Does this apply to all Nike products?", answer: "The discount applies to most Nike products. Some limited editions and collaborations may be excluded." },
    { id: "f3", question: "How do I redeem my Nike coupon?", answer: "Copy the coupon code and apply it at checkout on Nike's official website or app." },
  ],
};

export default function NikeOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Nike" offer={nikeOffer} color="#000000" image="/images/nike-logo-large.jpg" />
    </motion.div>
  );
}
