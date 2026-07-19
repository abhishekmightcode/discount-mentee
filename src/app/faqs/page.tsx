"use client";

import { motion } from "framer-motion";
import { homeFAQs } from "@/lib/data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted">Everything you need to know about Discount Mentee</p>
          </div>
          <div className="space-y-3">
            {[...homeFAQs, ...homeFAQs].map((faq, i) => {
              const isOpen = openId === `faq-${i}`;
              return (
                <div key={`faq-${i}`} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenId(isOpen ? null : `faq-${i}`)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown size={18} className="text-muted" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-muted leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
