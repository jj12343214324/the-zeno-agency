'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
}

const animations = {
  'fade-up': {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  },
  'slide-left': {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  'slide-right': {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  'scale': {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
  },
  'fade': {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
};

export default function ScrollAnimation({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
}: ScrollAnimationProps) {
  const { initial, whileInView } = animations[animation];

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
