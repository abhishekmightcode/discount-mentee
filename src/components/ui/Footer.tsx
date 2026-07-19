import Link from "next/link";
import { Mail, Send } from "lucide-react";

const footerLinks = {
  QuickLinks: [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/categories" },
    { label: "FAQs", href: "/faqs" },
    { label: "About", href: "/about" },
  ],
  Brands: [
    { label: "Amazon", href: "/amazon-offer" },
    { label: "Flipkart", href: "/flipkart-offer" },
    { label: "Myntra", href: "/myntra-offer" },
    { label: "AJIO", href: "/ajio-offer" },
  ],
  Support: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Student Verification", href: "/student-verification" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 gradient-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">DM</span>
              </div>
              <span className="font-bold text-lg">
                Discount <span className="text-primary">Mentee</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              India&apos;s student discount marketplace. Exclusive deals from top brands for verified students.
            </p>
            <div className="flex items-center gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all"
                  aria-label={s}
                >
                  <span className="text-xs font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Discount Mentee. Demo prototype.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-xl border border-border text-sm bg-white outline-none focus:ring-2 focus:ring-primary/20 w-48"
              aria-label="Newsletter email"
            />
            <button
              className="p-2 gradient-blue text-white rounded-xl hover:shadow-lg transition-all"
              aria-label="Subscribe"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
