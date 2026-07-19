"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Gift, CheckCircle } from "lucide-react";
import { OfferDetail } from "@/lib/types";

const icons = [Shield, Clock, Gift, CheckCircle];

export default function BrandOfferTemplate({
  brand,
  offer,
  color,
  image,
}: {
  brand: string;
  offer: OfferDetail;
  color: string;
  image: string;
}) {
  return (
    <div>
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.1)_0%,_transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 bg-white/10 backdrop-blur-sm border border-white/20 p-2 flex items-center justify-center shadow-lg">
              <Image
                src={image}
                alt={brand}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{offer.title}</h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">{offer.description}</p>
            <Link
              href="/student-verification"
              className="inline-flex items-center gap-2 px-7 py-3.5 gradient-orange text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 active:scale-95"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <OfferBlock title="Eligibility" items={offer.eligibility} delay={0} />
          <OfferBlock title="Benefits" items={offer.benefits} delay={0.1} />
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why This Offer?</h2>
            <p className="text-muted max-w-xl mx-auto">
              Designed to help students save more on what they love
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Verified Exclusively", desc: "Only for verified students", icon: Shield },
              { title: "Limited Time", desc: "Valid for 30 days from issue", icon: Clock },
              { title: "Premium Savings", desc: `Up to ${offer.eligibility[0].match(/\d+%/)?.[0] || "50%"} off`, icon: Gift },
              { title: "Easy Redemption", desc: "Simple copy-paste at checkout", icon: CheckCircle },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-border text-center hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">FAQs</h2>
        </motion.div>
        <div className="space-y-3">
          {offer.faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/student-verification"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 text-lg active:scale-95"
          >
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function OfferBlock({ title, items, delay }: { title: string; items: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 sm:p-8 rounded-2xl bg-white border border-border hover:shadow-lg transition-all"
    >
      <h2 className="text-xl font-bold mb-6">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-muted">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <h3 className="font-semibold mb-2">{faq.question}</h3>
      <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
    </div>
  );
}
