'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);

  const personalInsuranceItems = [
    { name: 'Auto Insurance', href: '/personal-insurance#auto' },
    { name: 'Homeowners Insurance', href: '/personal-insurance#homeowners' },
    { name: 'Life Insurance', href: '/personal-insurance#life' },
    { name: 'Motorcycle Insurance', href: '/personal-insurance#motorcycle' },
    { name: 'Boat Insurance', href: '/personal-insurance#boat' },
    { name: 'Renters Insurance', href: '/personal-insurance#renters' },
    { name: 'Classic Car Insurance', href: '/personal-insurance#classic-car' },
    { name: 'Pet Insurance', href: '/personal-insurance#pet' },
    { name: 'Long Term Care', href: '/personal-insurance#long-term-care' },
    { name: 'Disability Insurance', href: '/personal-insurance#disability' },
    { name: 'Health/Medigap', href: '/personal-insurance#health' },
    { name: 'Special Event Insurance', href: '/personal-insurance#special-event' },
  ];

  const commercialInsuranceItems = [
    { name: 'Business Owners Package', href: '/commercial-insurance#business-owners' },
    { name: 'Commercial Auto', href: '/commercial-insurance#commercial-auto' },
    { name: 'General Liability', href: '/commercial-insurance#general-liability' },
    { name: 'Surety Bonds', href: '/commercial-insurance#surety-bonds' },
    { name: 'Workers Compensation', href: '/commercial-insurance#workers-comp' },
    { name: 'Professional Liability', href: '/commercial-insurance#professional-liability' },
    { name: 'Workplace Benefits', href: '/commercial-insurance#workplace-benefits' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0F3E54] py-3">
        <div className="container-max flex flex-wrap justify-center md:justify-center items-center text-sm px-4 gap-6 md:gap-12">
          <a href="tel:+16264631413" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +(626) 463-1413
          </a>
          <a href="mailto:inquiry@TheZenoAgency.com" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            inquiry@TheZenoAgency.com
          </a>
          <div className="flex items-center gap-2 text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Pasadena, CA
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container-max py-4 px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/cropped-Zeno-Logo-Final.png"
                alt="Zeno Insurance Agency"
                width={200}
                height={60}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-[#0F3E54] hover:text-[#003478] font-medium transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="text-[#0F3E54] hover:text-[#003478] font-medium transition-colors">
                About Us
              </Link>

              {/* Personal Insurance Dropdown */}
              <div className="relative group">
                <button
                  className="text-[#0F3E54] hover:text-[#003478] font-medium transition-colors flex items-center gap-1"
                  onMouseEnter={() => setIsPersonalOpen(true)}
                  onMouseLeave={() => setIsPersonalOpen(false)}
                >
                  Personal Insurance
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] transition-all duration-200 ${isPersonalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  onMouseEnter={() => setIsPersonalOpen(true)}
                  onMouseLeave={() => setIsPersonalOpen(false)}
                >
                  <Link href="/personal-insurance" className="block px-4 py-2 text-[#0F3E54] hover:bg-[#0F3E54] hover:text-white transition-colors font-medium">
                    View All
                  </Link>
                  {personalInsuranceItems.map((item) => (
                    <Link key={item.name} href={item.href} className="block px-4 py-2 text-[#0F3E54] hover:bg-[#0F3E54] hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Commercial Insurance Dropdown */}
              <div className="relative group">
                <button
                  className="text-[#0F3E54] hover:text-[#003478] font-medium transition-colors flex items-center gap-1"
                  onMouseEnter={() => setIsCommercialOpen(true)}
                  onMouseLeave={() => setIsCommercialOpen(false)}
                >
                  Commercial Insurance
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] transition-all duration-200 ${isCommercialOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  onMouseEnter={() => setIsCommercialOpen(true)}
                  onMouseLeave={() => setIsCommercialOpen(false)}
                >
                  <Link href="/commercial-insurance" className="block px-4 py-2 text-[#0F3E54] hover:bg-[#0F3E54] hover:text-white transition-colors font-medium">
                    View All
                  </Link>
                  {commercialInsuranceItems.map((item) => (
                    <Link key={item.name} href={item.href} className="block px-4 py-2 text-[#0F3E54] hover:bg-[#0F3E54] hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/faq" className="text-[#0F3E54] hover:text-[#003478] font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-[#0F3E54] hover:text-[#003478] font-medium transition-colors">
                Contact
              </Link>
              <Link href="/contact" className="bg-[#0F3E54] text-white px-6 py-3 font-semibold uppercase tracking-wider hover:bg-[#00224F] transition-colors">
                Request a Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-[#0F3E54] hover:text-[#003478] font-medium">Home</Link>
                <Link href="/about-us" className="text-[#0F3E54] hover:text-[#003478] font-medium">About Us</Link>
                <Link href="/personal-insurance" className="text-[#0F3E54] hover:text-[#003478] font-medium">Personal Insurance</Link>
                <Link href="/commercial-insurance" className="text-[#0F3E54] hover:text-[#003478] font-medium">Commercial Insurance</Link>
                <Link href="/faq" className="text-[#0F3E54] hover:text-[#003478] font-medium">FAQ</Link>
                <Link href="/contact" className="text-[#0F3E54] hover:text-[#003478] font-medium">Contact</Link>
                <Link href="/contact" className="bg-[#0F3E54] text-white px-6 py-3 font-semibold uppercase tracking-wider text-center">
                  Request a Consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
