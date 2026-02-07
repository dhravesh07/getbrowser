"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Webinars", href: "/webinars" },
  { name: "Products", href: "/products" },
  { name: "Membership", href: "/membership" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-sky-deep/90 backdrop-blur-xl border-b border-astro-gold/10"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="relative z-10 flex items-center gap-2.5 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full border border-astro-gold/30 group-hover:border-astro-gold/60 transition-colors duration-500" />
              <div className="absolute inset-[3px] rounded-full border border-astro-gold/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#F5A623" fillOpacity="0.8" />
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <line key={angle} x1="12" y1="2" x2="12" y2="5" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${angle} 12 12)`} />
                  ))}
                </svg>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold gold-text tracking-tight">Ankyotissh</span>
              <span className="hidden sm:block text-[9px] text-astro-gold/40 tracking-[0.15em] uppercase -mt-0.5">Vedic Astrology</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="px-4 py-2 text-sm text-cosmic-200/60 hover:text-astro-gold transition-colors duration-300 rounded-lg hover:bg-astro-gold/[0.04]">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/courses" className="btn-primary text-xs !px-6 !py-2.5">
              <span>Get Started</span>
            </Link>
          </div>

          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Toggle menu">
            <motion.span animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-astro-gold/80" />
            <motion.span animate={isMobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="block w-6 h-[2px] bg-astro-gold/80" />
            <motion.span animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-astro-gold/80" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 lg:hidden" style={{ background: "linear-gradient(180deg, #0F0A2E 0%, #1A1145 50%, #130D3A 100%)" }}>
            <div className="absolute inset-0 star-field opacity-40" />
            <motion.nav initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col items-center justify-center h-full gap-2 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05 }}>
                  <Link href={link.href} onClick={() => setIsMobileOpen(false)} className="block px-8 py-3 text-2xl font-medium text-cosmic-200/80 hover:text-astro-gold transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-6">
                <Link href="/courses" onClick={() => setIsMobileOpen(false)} className="btn-primary">
                  <span>Get Started</span>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
