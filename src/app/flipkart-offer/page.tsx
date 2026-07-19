"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";
import { flipkartOffer } from "@/lib/data";

export default function FlipkartOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Flipkart" offer={flipkartOffer} color="#2874F0" image="/images/flipkart-logo-large.jpg" />
    </motion.div>
  );
}
