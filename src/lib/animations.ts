"use client";

import { Variants } from "framer-motion";

// Core scroll-triggered animation variants
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: delay * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: delay * 0.15,
      ease: "easeOut",
    },
  }),
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: delay * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: delay * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: delay * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const heroTextReveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: delay * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export const parallaxScroll = (offset: number = 50) => ({
  y: [-offset, offset],
  transition: {
    ease: "linear",
  },
});

export const magneticHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Scroll-triggered section reveal
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

// Card flip/tilt animation
export const cardTilt: Variants = {
  rest: { rotateX: 0, rotateY: 0 },
  hover: {
    rotateX: -5,
    rotateY: 5,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Typing cursor blink
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

// Counter animation helper
export const counterSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
};
