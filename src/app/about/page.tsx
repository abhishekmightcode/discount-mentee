"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Users, Target } from "lucide-react";

const stats = [
  { label: "Active Students", value: "10K+" },
  { label: "Partner Brands", value: "50+" },
  { label: "Coupons Redeemed", value: "25K+" },
  { label: "Avg. Savings", value: "35%" },
];

export default function AboutPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Discount Mentee</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We help Indian students save money on their favorite brands through verified student discount programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-border text-center hover:shadow-lg transition-all"
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-blue bg-clip-text text-transparent">{stat.value}</p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: GraduationCap, title: "Our Mission", desc: "To make quality products and services affordable for every student in India by bridging the gap between brands and student communities." },
            { icon: ShieldCheck, title: "Secure & Trusted", desc: "We prioritize your privacy. Student data is verified securely and never shared with third parties without consent." },
            { icon: Users, title: "Community First", desc: "Built by students, for students. Our platform grows with feedback from thousands of verified student members." },
            { icon: Target, title: "Best Savings", desc: "We partner directly with brands to bring you exclusive discounts that aren't available to the general public." },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-border hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl gradient-blue flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
