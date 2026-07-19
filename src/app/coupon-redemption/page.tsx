"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import CouponPopup from "@/components/coupon/CouponPopup";

export default function CouponRedemptionPage() {
  const [checked, setChecked] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleRedeem = useCallback(() => {
    if (!checked) return;
    setPopupVisible(true);
  }, [checked]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <CouponPopup visible={popupVisible} onClose={() => setPopupVisible(false)} />
      <section className="min-h-screen bg-gray-50 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-border p-8 sm:p-10 shadow-sm text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6"
            >
              <svg viewBox="0 0 96 96" fill="none" className="w-full h-full">
                <rect x="8" y="28" width="80" height="56" rx="12" fill="#DBEAFE" />
                <rect x="8" y="28" width="80" height="20" rx="12" fill="#2563EB" />
                <circle cx="48" cy="38" r="6" fill="#F97316" />
                <rect x="20" y="56" width="56" height="4" rx="2" fill="#E2E8F0" />
                <rect x="20" y="64" width="40" height="4" rx="2" fill="#E2E8F0" />
                <rect x="20" y="72" width="48" height="4" rx="2" fill="#E2E8F0" />
              </svg>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              One Final Step Before Redeeming Your Coupon
            </h1>
            <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
              To ensure you can use your discount voucher successfully, please make sure that your personal or family Google account has been added and logged into your device.
            </p>

            <a
              href="https://accounts.google.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 gradient-blue text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98] mb-8"
            >
              Add / Sign in to Google
              <ExternalLink size={16} />
            </a>

            <p className="text-xs text-muted mb-8 max-w-md mx-auto">
              This opens Google&apos;s official sign-in page in a new tab. We do not access, store, or verify your Google account information in any way.
            </p>

            <div className="border-t border-border pt-6 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted text-left">
                  I have successfully added or logged into my Google account on this device.
                </span>
              </label>
            </div>

            <button
              onClick={handleRedeem}
              disabled={!checked}
              className={`w-full py-3.5 font-bold rounded-2xl transition-all active:scale-[0.98] ${
                checked
                  ? "gradient-orange text-white hover:shadow-lg hover:shadow-orange-500/25 cursor-pointer"
                  : "bg-gray-100 text-muted cursor-not-allowed"
              }`}
            >
              Redeem Coupon
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
