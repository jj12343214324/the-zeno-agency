'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const heroSlides = [
  {
    image: '/images/shutterstock_1061540957-scaled.jpg',
    alt: 'Family',
  },
  {
    image: '/images/business-meeting-and-teamwork-by-business-people-REGXPAZ.jpg',
    alt: 'Business meeting',
  },
  {
    image: '/images/shutterstock_388719088-scaled.jpg',
    alt: 'Auto',
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
    <section style={{ position: 'relative', height: '650px', overflow: 'hidden' }}>
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            transition: 'opacity 1s ease-in-out',
            opacity: index === currentSlide ? 1 : 0,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content Box */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        <div className="container-max px-4 w-full">
          <div
            style={{
              maxWidth: '500px',
              backgroundColor: 'white',
              padding: '48px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#0F3E54', marginBottom: '16px', lineHeight: '1.2' }}>
              We don&apos;t make a living selling policies...
            </h1>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#0F3E54', marginBottom: '24px', lineHeight: '1.2' }}>
              We earn a living protecting our clients.
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#718096', marginBottom: '32px' }}>
              Connect with us today and discover a better way to buy insurance. In about 8 minutes.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#0F3E54',
                color: 'white',
                padding: '16px 32px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Connect
            </Link>

            <div style={{ marginTop: '32px', opacity: 0.2 }}>
              <Image
                src="/images/pattern-6.png"
                alt=""
                width={200}
                height={60}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
