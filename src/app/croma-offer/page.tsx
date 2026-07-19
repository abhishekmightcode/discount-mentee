"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";

const offer = {
  title: "Croma Student Tech Savings",
  description: "Get student-friendly pricing on the latest gadgets, electronics, and home appliances from Croma. Tech smarter, spend less.",
  eligibility: [
    "Currently enrolled in a recognized Indian university or college",
    "Valid student ID card required for verification",
    "Must complete Discount Mentee student verification",
    "One coupon per verified student account",
  ],
  benefits: [
    "Up to 15% off on select electronics and gadgets",
    "Special student pricing on laptops and accessories",
    "Exclusive deals on smart home devices",
    "No-cost EMI options on eligible purchases",
    "Extended warranty at student rates",
  ],
  faqs: [
    { id: "f1", question: "Can I use this with bank offers?", answer: "Yes, student discounts can be combined with eligible bank card offers for maximum savings." },
    { id: "f2", question: "Is there a minimum order value?", answer: "No minimum order value is required for the student discount." },
    { id: "f3", question: "How do I redeem my Croma coupon?", answer: "Copy the coupon code and apply it at checkout on Croma's website or app." },
  ],
};

export default function CromaOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Croma" offer={offer} color="#1A1A2E" image="/images/croma.jpg" />
    </motion.div>
  );
}
