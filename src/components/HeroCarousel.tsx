'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
  {
    image: '/images/38.jpg',
    alt: 'Motorcycle',
  },
  {
    image: '/images/insure8-p6pjm2gbf5lto7d29d9es608oj13xkf37733qzp78w.jpg',
    alt: 'Insurance consultation',
  },
  {
    image: '/images/pexels-rodnae-productions-7821684.jpg',
    alt: 'Family protection',
  },
  {
    image: '/images/pexels-mikhail-nilov-7734591.jpg',
    alt: 'Business meeting',
  },
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
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content Box - Positioned on the left */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-max px-4 w-full">
          <div className="max-w-md md:max-w-lg bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-xl ml-0 md:ml-8 lg:ml-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#0F3E54] mb-4">
              We don&apos;t make a living selling policies...
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F3E54] mb-6">
              We earn a living protecting our clients.
            </h2>
            <p className="text-base md:text-lg text-[#718096] mb-8">
              Connect with us today and discover a better way to buy insurance. In about 8 minutes.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0F3E54] text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-[#00224F] transition-colors"
            >
              Connect
            </Link>

            {/* Hexagon pattern at bottom of white box */}
            <div className="mt-8 opacity-20">
              <Image
                src="/images/pattern-6.png"
                alt=""
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
