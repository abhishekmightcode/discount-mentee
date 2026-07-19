"use client";

import { motion } from "framer-motion";
import { Feature } from "@/lib/types";
import * as Icons from "lucide-react";

export default function FeatureCard({ feature, index = 0 }: { feature: Feature; index?: number }) {
  const IconComponent = (Icons as any)[feature.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-2xl bg-white border border-border hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center mb-4 shadow-md">
        {IconComponent ? (
          <IconComponent size={22} className="text-white" />
        ) : (
          <span className="text-white font-bold text-lg">{feature.icon[0]}</span>
        )}
      </div>
      <h3 className="font-bold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}
