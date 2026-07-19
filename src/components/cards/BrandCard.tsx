"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Brand } from "@/lib/types";

export default function BrandCard({ brand, index = 0 }: { brand: Brand; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative bg-white rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 shadow-md"
          style={{ backgroundColor: brand.color }}
        >
          {brand.icon}
        </div>
        <div className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold mb-3">
          Up to {brand.discount} Off
        </div>
        <h3 className="text-lg font-bold mb-2">{brand.name}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{brand.description}</p>
        <Link
          href={`/${brand.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
        >
          View Offer
          <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
