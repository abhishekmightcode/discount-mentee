"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";

const offer = {
  title: "Puma Student Sports Rewards",
  description: "Level up your sportswear game with exclusive student pricing on Puma sneakers, apparel, and accessories.",
  eligibility: [
    "Currently enrolled in a recognized Indian university or college",
    "Valid student ID card required for verification",
    "Must complete Discount Mentee student verification",
    "One coupon per verified student account",
  ],
  benefits: [
    "Up to 20% off on select Puma products",
    "Student-exclusive pricing on sneakers and apparel",
    "Early access to new drops and collaborations",
    "Free shipping on eligible orders",
    "Access to student-only flash sales",
  ],
  faqs: [
    { id: "f1", question: "Can I use this with other Puma offers?", answer: "Yes, student discounts can be combined with ongoing Puma promotions." },
    { id: "f2", question: "Is this valid on all Puma products?", answer: "The discount applies to most Puma products. Some limited editions may be excluded." },
    { id: "f3", question: "How long is the coupon valid?", answer: "The coupon is valid for 30 days from the date of issuance." },
  ],
};

export default function PumaOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Puma" offer={offer} color="#E63946" image="/images/puma-logo-large.jpg" />
    </motion.div>
  );
}
