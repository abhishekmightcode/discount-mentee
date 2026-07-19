"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { brands } from "@/lib/data";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const filtered = query.trim()
    ? brands.filter((b) => b.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 gap-2 transition-all duration-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:shadow-sm">
        <Search size={16} className="text-muted shrink-0" />
        <input
          type="text"
          placeholder="Search brands..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          className="bg-transparent border-none outline-none text-sm w-full text-foreground placeholder:text-muted"
          aria-label="Search brands"
        />
      </div>
      <AnimatePresence>
        {focused && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-border overflow-hidden z-50"
          >
            {filtered.length > 0 ? (
              filtered.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/${brand.slug}`}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-50 border border-border shrink-0">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      width={32}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{brand.name}</p>
                    <p className="text-xs text-muted">{brand.discount} Off</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-sm text-muted">
                No brands found for &quot;{query}&quot;
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
