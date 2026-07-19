"use client";

import { motion } from "framer-motion";
import BrandOfferTemplate from "@/components/templates/BrandOfferTemplate";
import { myntraOffer } from "@/lib/data";

export default function MyntraOfferPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <BrandOfferTemplate brand="Myntra" offer={myntraOffer} color="#E40046" />
    </motion.div>
  );
}
