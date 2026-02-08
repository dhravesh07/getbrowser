"use client";

import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: delay * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: delay * 0.12,
      ease: "easeOut",
    },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: delay * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: delay * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: delay * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      delay: delay * 0.18,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const magneticHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const cardTilt: Variants = {
  rest: { rotateX: 0, rotateY: 0 },
  hover: {
    rotateX: -3,
    rotateY: 3,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const cursorBlink: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "steps(2)",
    },
  },
};

export const counterSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
};
