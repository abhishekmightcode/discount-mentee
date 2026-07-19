"use client";

import { motion } from "framer-motion";
import MultiStepForm from "@/components/forms/MultiStepForm";
import { ShieldCheck } from "lucide-react";

export default function StudentVerificationPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <section className="bg-gray-50 min-h-screen py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-10"
          >
            <div className="w-14 h-14 rounded-2xl gradient-blue flex items-center justify-center mx-auto mb-4 shadow-md">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Student Verification</h1>
            <p className="text-muted max-w-md mx-auto">
              Verify your student details to unlock exclusive discounts from top brands
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm"
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
