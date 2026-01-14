'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="absolute inset-0 flex items-center z-10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="max-w-sm bg-white p-6 shadow-xl">
            <h1 className="text-xl font-bold text-[#0F3E54] mb-2 leading-tight">
              We don&apos;t make a living selling policies...
            </h1>
            <h2 className="text-xl font-bold text-[#0F3E54] mb-3 leading-tight">
              We earn a living protecting our clients.
            </h2>
            <p className="text-sm text-[#718096] mb-4">
              Connect with us today and discover a better way to buy insurance. In about 8 minutes.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0F3E54] text-white px-5 py-2.5 font-semibold uppercase tracking-wider hover:bg-[#00224F] transition-colors text-xs"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
