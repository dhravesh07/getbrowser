"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

const seekerBenefits = [
  "Access to all blog articles",
  "Community discussion forums",
  "Free introductory resources",
  "Monthly newsletter",
];

const sadhakaBenefits = [
  "All courses and study materials",
  "Live webinar access with Q&A",
  "Exclusive in-depth content",
  "Priority support from Acharya",
  "Downloadable charts and guides",
  "Early access to new releases",
];

export default function MembershipContent() {
  const tiersRef = useRef<HTMLDivElement>(null);
  const tiersInView = useInView(tiersRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <span className="tag mb-5 block">Join Us</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment-light leading-[1.1] mb-6">
              Membership
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={2}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl">
          <ScrollReveal animation="fadeUp">
            <p className="text-parchment-muted text-lg leading-relaxed font-sans">
              Become part of a growing community of seekers and practitioners.
              Whether you are just beginning to explore Vedic Astrology or
              deepening an existing practice, membership gives you the structure,
              resources, and guidance to progress on your path.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="pb-24 md:pb-32">
        <div className="container-custom">
          <motion.div
            ref={tiersRef}
            variants={staggerContainer}
            initial="hidden"
            animate={tiersInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Seeker Tier */}
            <motion.div variants={staggerItem}>
              <div className="bg-void-surface border border-stone-faint/60 p-8 sm:p-10 h-full">
                <span className="text-parchment-faint text-sm font-sans uppercase tracking-wider block mb-4">
                  Free
                </span>
                <h3 className="text-2xl sm:text-3xl text-parchment mb-6">
                  Seeker
                </h3>
                <ul className="space-y-3">
                  {seekerBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="text-parchment-muted text-base font-sans leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-stone w-1 h-1 rounded-full bg-stone mt-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sadhaka Tier */}
            <motion.div variants={staggerItem}>
              <div className="bg-void-surface border border-stone-faint/60 border-l-2 border-l-saffron p-8 sm:p-10 h-full">
                <span className="text-saffron text-sm font-sans uppercase tracking-wider block mb-4">
                  Premium
                </span>
                <h3 className="text-2xl sm:text-3xl text-parchment mb-6">
                  Sadhaka
                </h3>
                <ul className="space-y-3">
                  {sadhakaBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="text-parchment-muted text-base font-sans leading-relaxed flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-saffron mt-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="container-custom text-center">
          <ScrollReveal animation="fadeUp">
            <MagneticButton>
              <button className="btn-primary">Join the Community</button>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
