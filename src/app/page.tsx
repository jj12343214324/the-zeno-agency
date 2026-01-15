import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import WhyChooseUs from '@/components/WhyChooseUs';

const personalInsuranceTypes = [
  {
    title: 'Auto Insurance',
    image: '/images/shutterstock_2149499793-scaled.jpg',
    href: '/personal-insurance#auto',
  },
  {
    title: 'Homeowners Insurance',
    image: '/images/GettyImages-1270066435.jpg',
    href: '/personal-insurance#homeowners',
  },
  {
    title: 'Life Insurance',
    image: '/images/httpselements.envato.comtop-view-of-lawyer-and-woman-holding-paper-cut-fam-G9ZA4CM.jpg',
    href: '/personal-insurance#life',
  },
  {
    title: 'Motorcycle Insurance',
    image: '/images/iStock-922534328-scaled.jpg',
    href: '/personal-insurance#motorcycle',
  },
  {
    title: 'Boat Insurance',
    image: '/images/boat-insurance1-1030x674-1-e1663582882207.jpg',
    href: '/personal-insurance#boat',
  },
  {
    title: 'Classic Car Insurance',
    image: '/images/classic-cars-2021-08-26-15-36-42-utc-1.jpg',
    href: '/personal-insurance#classic-car',
  },
  {
    title: 'RV / Motor Home',
    image: '/images/49.jpg',
    href: '/personal-insurance#rv',
  },
  {
    title: 'Renters Insurance',
    image: '/images/shutterstock_1865153404-scaled.jpg',
    href: '/personal-insurance#renters',
  },
];

const commercialInsuranceTypes = [
  {
    title: 'Business Owners Package',
    image: '/images/insurance-policy-2021-10-16-21-45-01-utc-1.jpg',
    href: '/commercial-insurance#business-owners',
  },
  {
    title: 'Commercial Auto',
    image: '/images/car-rental-and-insurance-concept-young-salesman-r-2022-02-17-20-08-59-utc-1.jpg',
    href: '/commercial-insurance#commercial-auto',
  },
  {
    title: 'General Liability',
    image: '/images/lawsuit-settlement-amounts.jpg',
    href: '/commercial-insurance#general-liability',
  },
  {
    title: 'Surety Bonds',
    image: '/images/bond.jpg',
    href: '/commercial-insurance#surety-bonds',
  },
  {
    title: 'Workers Compensation',
    image: '/images/shutterstock_1734482543-scaled.jpg',
    href: '/commercial-insurance#workers-comp',
  },
  {
    title: 'Professional Liability',
    image: '/images/pexels-andrea-piacquadio-3760067.jpg',
    href: '/commercial-insurance#professional-liability',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section - Two overlapping images layout */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Overlapping images */}
            <div className="relative pb-20 md:pb-24">
              {/* Dot pattern behind images */}
              <div className="absolute -left-4 top-0 opacity-30 hidden md:block">
                <Image
                  src="/images/pattern-5.png"
                  alt=""
                  width={80}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Main image */}
              <div className="relative z-10 ml-0 md:ml-8">
                <div className="relative h-[280px] md:h-[350px] w-full md:w-[90%] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/38.jpg"
                    alt="Insurance consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute z-20 bottom-0 right-0 md:right-8 w-[60%] md:w-[50%]">
                <div className="relative h-[180px] md:h-[240px] rounded-lg overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/insure8-p6pjm2gbf5lto7d29d9es608oj13xkf37733qzp78w.jpg"
                    alt="Happy client"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="relative mt-8 lg:mt-0">
              {/* Dot pattern top right */}
              <div className="absolute -right-4 -top-4 opacity-30 hidden md:block">
                <Image
                  src="/images/pattern-5.png"
                  alt=""
                  width={60}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F3E54] mb-6 leading-tight">
                Let us do the work to find you great coverage through a great company at a great price.
              </h2>
              <p className="text-base md:text-lg text-[#718096] mb-8">
                Our experienced agents are trained to discover your unique needs and find you the best coverage for the best price. In about 8 minutes.
              </p>
              <Link
                href="/about-us"
                className="inline-block bg-[#0F3E54] text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-[#00224F] transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insurance Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-4">Personal Insurance</h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Protect what matters most with comprehensive personal insurance coverage tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {personalInsuranceTypes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 right-3 text-sm md:text-base font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/personal-insurance" className="btn-secondary">
              View All Personal Insurance
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Insurance Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-4">Commercial Insurance</h2>
            <p className="text-lg text-[#718096] max-w-2xl mx-auto">
              Protect your business with comprehensive coverage designed for California businesses.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {commercialInsuranceTypes.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <h3 className="absolute bottom-3 left-3 right-3 text-sm md:text-base font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/commercial-insurance" className="btn-secondary">
              View All Commercial Insurance
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CNA Partner */}
      <section className="py-8 bg-white">
        <div className="container-max flex justify-center">
          <Image
            src="/images/cna.png"
            alt="CNA Insurance"
            width={150}
            height={75}
            className="object-contain"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F3E54]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request a free, no-obligation consultation. Our experienced agents are standing by to exceed your service expectations.
          </p>
          <Link href="/contact#contact-form" className="inline-block bg-white text-[#0F3E54] px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-colors uppercase tracking-wider">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
