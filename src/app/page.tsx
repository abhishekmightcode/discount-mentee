"use client";

import HeroSection from "@/components/sections/HeroSection";
import FeaturedBrands from "@/components/sections/FeaturedBrands";
import CategoriesSection from "@/components/sections/CategoriesSection";
import WhyDiscountMentee from "@/components/sections/WhyDiscountMentee";
import FAQSection from "@/components/sections/FAQSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <HeroSection />
      <FeaturedBrands />
      <CategoriesSection />
      <WhyDiscountMentee />
      <FAQSection />
    </motion.div>
  );
}
