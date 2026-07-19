"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface OfferCardProps {
  title: string;
  items: string[];
  delay?: number;
}

export default function OfferCard({ title, items, delay = 0 }: OfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300"
    >
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full gradient-blue flex items-center justify-center shrink-0 mt-0.5">
              <Check size={10} className="text-white" />
            </div>
            <span className="text-sm text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
