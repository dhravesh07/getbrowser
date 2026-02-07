"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const tabs = ["Upcoming", "Past", "All"];

export default function WebinarsContent() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-orange/8 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[100px]" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <TextReveal>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
              Live Sessions
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
              <span className="gradient-text">Webinars</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="max-w-lg mx-auto text-white/40 leading-relaxed">
              Join live interactive sessions on Vedic Astrology, Planetary
              Science, and Numerology. Get real-time insights from Acharya
              Prateek Bhola.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="pb-8">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                      : "bg-white/[0.04] text-white/40 border border-white/[0.08] hover:text-white/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding !pt-8">
        <div className="container-custom max-w-2xl mx-auto">
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card rounded-3xl p-10 md:p-14 text-center gradient-border"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </motion.div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                {activeTab === "Upcoming"
                  ? "Upcoming Sessions"
                  : activeTab === "Past"
                  ? "Past Sessions"
                  : "All Sessions"}
              </h2>
              <p className="text-white/40 leading-relaxed mb-8">
                Stay tuned for upcoming live webinars on Vedic Astrology and
                related topics. Follow us on social media for announcements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Link href="/blog" className="btn-primary text-sm">
                    <span>Explore Blog</span>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/courses" className="btn-secondary text-sm">
                    View Courses
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
