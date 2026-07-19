"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";
import { ajioOffer } from "@/lib/data";

export default function AJIOOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="AJIO" offer={ajioOffer} color="#E91E63" />
    </motion.div>
  );
}
