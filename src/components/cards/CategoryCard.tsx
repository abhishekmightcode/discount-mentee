"use client";

import { motion } from "framer-motion";
import { Category } from "@/lib/types";
import * as Icons from "lucide-react";

export default function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const IconComponent = (Icons as any)[category.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-border hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 cursor-pointer"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: `${category.color}15` }}
      >
        {IconComponent ? (
          <IconComponent size={24} style={{ color: category.color }} />
        ) : (
          <span className="text-lg font-bold" style={{ color: category.color }}>
            {category.name[0]}
          </span>
        )}
      </div>
      <span className="text-sm font-semibold">{category.name}</span>
    </motion.div>
  );
}
