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
    <section className="relative h-[550px] md:h-[600px] lg:h-[650px]">
      {/* Background Images using CSS background */}
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

      {/* Content Box - overlaying the background */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container-max px-4">
          <div className="max-w-[500px] bg-white p-8 md:p-12 shadow-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-[#0F3E54] mb-4 leading-tight">
              We don&apos;t make a living selling policies...
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0F3E54] mb-6 leading-tight">
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
