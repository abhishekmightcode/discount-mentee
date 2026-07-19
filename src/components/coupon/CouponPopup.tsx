"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, X, Sparkles } from "lucide-react";
import Confetti from "@/components/ui/Confetti";
import Toast from "@/components/ui/Toast";

interface CouponPopupProps {
  visible: boolean;
  onClose: () => void;
  brand?: string;
  code?: string;
}

export default function CouponPopup({
  visible,
  onClose,
  brand = "Amazon",
  code = "AMZ499-X8G7-KLM2",
}: CouponPopupProps) {
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setToastVisible(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setToastVisible(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  return (
    <>
      <Confetti active={visible} />
      <Toast
        message="Coupon copied successfully!"
        type="success"
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
                <p className="text-muted">Your coupon is ready</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 border border-blue-100 mb-6">
                <p className="text-sm font-medium text-muted mb-1">{brand} Discount Voucher</p>
                <p className="text-xs text-muted mb-4">Coupon Code</p>
                <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-border">
                  <code className="text-lg font-bold tracking-wider text-primary">{code}</code>
                  <button
                    onClick={handleCopy}
                    className={`p-2 rounded-lg transition-all ${
                      copied
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-gray-100 text-muted hover:bg-primary-light hover:text-primary"
                    }`}
                    aria-label="Copy coupon code"
                  >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3.5 gradient-blue text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
