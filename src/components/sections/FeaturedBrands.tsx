"use client";

import { motion } from "framer-motion";
import BrandCard from "@/components/cards/BrandCard";
import { brands } from "@/lib/data";

export default function FeaturedBrands() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Brands</h2>
        <p className="text-muted max-w-xl mx-auto">
          Exclusive student discounts from India&apos;s most trusted brands
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand, i) => (
          <BrandCard key={brand.id} brand={brand} index={i} />
        ))}
      </div>
    </section>
  );
}
