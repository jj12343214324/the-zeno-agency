'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const heroSlides = [
  '/images/shutterstock_1061540957-scaled.jpg',
  '/images/business-meeting-and-teamwork-by-business-people-REGXPAZ.jpg',
  '/images/shutterstock_388719088-scaled.jpg',
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Content Box */}
      <div className="absolute inset-0 flex items-end md:items-center z-10 pb-8 md:pb-0">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-full md:max-w-lg bg-white p-5 md:p-10 shadow-xl rounded-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="text-lg md:text-3xl font-bold text-[#0F3E54] mb-2 md:mb-3 leading-tight"
            >
              We don&apos;t make a living selling policies...
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="text-lg md:text-3xl font-bold text-[#0F3E54] mb-3 md:mb-5 leading-tight"
            >
              We earn a living protecting our clients.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="text-sm md:text-base text-[#718096] mb-4 md:mb-6"
            >
              Connect with us today and discover a better way to buy insurance. In about 8 minutes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            >
              <Link
                href="/contact"
                className="inline-block bg-[#0F3E54] text-white px-6 md:px-8 py-3 md:py-4 font-semibold uppercase tracking-wider hover:bg-[#00224F] transition-colors text-xs md:text-sm"
              >
                Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
