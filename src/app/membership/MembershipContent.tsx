"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

const benefits = [
  { title: "Premium Content", desc: "Access exclusive courses, webinars, and in-depth study materials not available to non-members.", icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
  { title: "Live Sessions", desc: "Join exclusive live Q&A sessions and interactive workshops with Acharya Prateek Bhola.", icon: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" },
  { title: "Community Access", desc: "Join a community of like-minded astrology enthusiasts for discussions and shared learning.", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { title: "Digital Resources", desc: "Download exclusive charts, guides, templates, and tools as part of your membership.", icon: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" },
];

export default function MembershipContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-astro-gold/[0.05] blur-[120px]" />
          <div className="absolute inset-0 star-field opacity-25" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <TextReveal><span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">Exclusive Access</span></TextReveal>
          <TextReveal delay={0.2}><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5"><span className="gold-text">Membership</span></h1></TextReveal>
          <TextReveal delay={0.4}><p className="max-w-lg mx-auto text-cosmic-200/50 leading-relaxed">Get exclusive access to premium content, live sessions, and community features. Flexible subscription options available.</p></TextReveal>
        </div>
      </section>

      <section className="section-padding !pt-4">
        <div className="container-custom">
          <ScrollReveal><h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Membership <span className="gold-text">Benefits</span></h2></ScrollReveal>

          <motion.div ref={gridRef} variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={staggerItem}>
                <div className="astro-card-hover p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-astro-gold/10 border border-astro-gold/20 flex items-center justify-center text-astro-gold mb-4 group-hover:bg-astro-gold/15 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={b.icon} /></svg>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-astro-gold transition-colors">{b.title}</h3>
                  <p className="text-sm text-cosmic-200/40 leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal>
            <motion.div whileHover={{ scale: 1.01 }} className="astro-card rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto gold-border">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-astro-gold to-astro-amber flex items-center justify-center animate-glow-gold">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <path d="M24 6L30 18L42 20L33 29L35 42L24 36L13 42L15 29L6 20L18 18L24 6Z" fill="#1E0038" fillOpacity="0.6" stroke="#1E0038" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Membership Plans Coming Soon</h2>
              <p className="text-cosmic-200/40 leading-relaxed mb-8">We are crafting exclusive membership plans with premium features. Stay tuned for flexible subscription options.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton><Link href="/blog" className="btn-primary text-sm"><span>Explore Free Content</span></Link></MagneticButton>
                <MagneticButton><Link href="/about" className="btn-secondary text-sm">Learn About Us</Link></MagneticButton>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
