"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

const productTypes = [
  { title: "Charts & Templates", desc: "Downloadable astrological charts, Kundli templates, and planetary position reference sheets for practice.", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" },
  { title: "Study Guides", desc: "Comprehensive PDF guides covering Vedic Astrology concepts, planetary effects, and remedial measures.", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
  { title: "Calculation Tools", desc: "Spreadsheets and tools for Dasha calculations, Ashtakavarga analysis, and transit tracking.", icon: "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" },
  { title: "Reference Materials", desc: "Quick-reference cards for Nakshatras, planetary dignities, aspect tables, and zodiac characteristics.", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" },
];

export default function ProductsContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-cosmic-600/[0.06] blur-[120px]" />
          <div className="absolute inset-0 star-field opacity-25" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <TextReveal><span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">Resources</span></TextReveal>
          <TextReveal delay={0.2}><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">Digital <span className="gold-text">Products</span></h1></TextReveal>
          <TextReveal delay={0.4}><p className="max-w-lg mx-auto text-cosmic-200/50 leading-relaxed">Premium digital resources including charts, guides, and tools for your astrological practice.</p></TextReveal>
        </div>
      </section>

      <section className="section-padding !pt-4">
        <div className="container-custom">
          <motion.div ref={gridRef} variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
            {productTypes.map((p) => (
              <motion.div key={p.title} variants={staggerItem}>
                <div className="astro-card-hover p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-astro-gold/10 border border-astro-gold/20 flex items-center justify-center text-astro-gold mb-4 group-hover:bg-astro-gold/15 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={p.icon} /></svg>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-astro-gold transition-colors">{p.title}</h3>
                  <p className="text-sm text-cosmic-200/40 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal>
            <div className="astro-card rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto gold-border">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-astro-gold/10 border border-astro-gold/20 flex items-center justify-center animate-glow-gold">
                <svg className="w-8 h-8 text-astro-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Products Coming Soon</h2>
              <p className="text-cosmic-200/40 leading-relaxed mb-8">We are preparing premium digital products for your astrological journey. Charts, guides, and tools crafted with care.</p>
              <MagneticButton><Link href="/blog" className="btn-primary text-sm"><span>Explore Free Content</span></Link></MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
