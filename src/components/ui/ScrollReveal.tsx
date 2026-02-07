"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import { fadeUp, fadeIn, slideInLeft, slideInRight, scaleUp, sectionReveal } from "@/lib/animations";

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" | "section";

const animationMap: Record<AnimationType, Variants> = {
  fadeUp,
  fadeIn,
  slideLeft: slideInLeft,
  slideRight: slideInRight,
  scaleUp,
  section: sectionReveal,
};

interface ScrollRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  className = "",
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      variants={animationMap[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
