"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";
import { amazonOffer } from "@/lib/data";

export default function AmazonOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Amazon" offer={amazonOffer} color="#FF9900" />
    </motion.div>
  );
}
