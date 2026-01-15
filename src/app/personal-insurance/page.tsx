import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Insurance | Zeno Insurance Agency',
  description: 'Comprehensive personal insurance coverage including auto, home, life, renters, motorcycle, boat, and more. Serving all of California.',
};

const insuranceTypes = [
  {
    id: 'auto',
    title: 'Auto Insurance',
    description: 'We emphasize balanced protection rather than just the lowest premiums. Not knowing what gaps might be lurking in your coverage can end up costing you far more in the long run. Let our agents help you understand your options and find the right coverage for your needs.',
    image: '/images/shutterstock_2149499793-scaled.jpg',
  },
  {
    id: 'homeowners',
    title: 'Homeowners Insurance',
    description: 'Essential protection for California homeowners. Our experienced agents help you navigate location-specific policy options and identify potential coverage gaps to ensure your most valuable investment is properly protected.',
    image: '/images/GettyImages-1270066435.jpg',
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future with comprehensive life coverage. We partner with major national carriers to address both your immediate and long-term family financial needs.',
    image: '/images/httpselements.envato.comtop-view-of-lawyer-and-woman-holding-paper-cut-fam-G9ZA4CM.jpg',
  },
  {
    id: 'motorcycle',
    title: 'Motorcycle Insurance',
    description: 'Coverage for street bikes, cruisers, and off-road vehicles. We offer protection for customizations and seasonal adjustments to ensure your ride is covered year-round.',
    image: '/images/38.jpg',
  },
  {
    id: 'boat',
    title: 'Boat Owners Insurance',
    description: 'Physical damage and liability coverage for wooden, metal, and fiberglass hull vessels. Whether you own a small fishing boat or a larger watercraft, we have coverage options for you.',
    image: '/images/boat-insurance1-1030x674-1-e1663582882207.jpg',
  },
  {
    id: 'renters',
    title: 'Renters Insurance',
    description: 'Affordable personal property protection with potential bundling discounts. Protect your belongings and get liability coverage without breaking the bank.',
    image: '/images/httpselements.envato.comconcept-of-housing-for-family-QNX596A.jpg',
  },
  {
    id: 'classic-car',
    title: 'Classic Car Insurance',
    description: 'Through our Hagerty partnership, we offer "Guaranteed Value" coverage with no depreciation on total loss claims. Perfect for collectors and classic car enthusiasts.',
    image: '/images/classic-cars-2021-08-26-15-36-42-utc-1.jpg',
  },
  {
    id: 'rv',
    title: 'RV / Motor Home Insurance',
    description: 'Protection for your home on wheels wherever the road takes you. Comprehensive coverage for recreational vehicles of all sizes.',
    image: '/images/49.jpg',
  },
  {
    id: 'health',
    title: 'Health/Medigap Insurance',
    description: 'Through our HealthCompare partnership, we help you navigate healthcare plan selection. Find the right Medicare supplement or health insurance plan for your needs.',
    image: '/images/patient-talking-to-doctor-in-the-background-chart-in-the-foreground.webp',
  },
  {
    id: 'disability',
    title: 'Disability Insurance',
    description: 'Income replacement beyond state benefits through major carriers. Protect your earning potential and maintain your lifestyle if you become unable to work.',
    image: '/images/httpselements.envato.commedical-insurance-4C6ZZA5-1.jpg',
  },
  {
    id: 'long-term-care',
    title: 'Long Term Care Insurance',
    description: 'Home health, nursing, and hospice coverage through carriers like Mutual of Omaha. Plan for the future and protect your assets with comprehensive long-term care coverage.',
    image: '/images/mcap-blog-apr2021_6e79844.jpg',
  },
  {
    id: 'special-event',
    title: 'Special Event Insurance',
    description: 'Per-day liability coverage ($1 million+) for parties, weddings, and events. Protect yourself from unexpected incidents and enjoy your special occasions worry-free.',
    image: '/images/GettyImages-1270066435.jpg',
  },
];

export default function PersonalInsurance() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/shutterstock_1102115744-scaled-e1679941725141.jpg"
          alt="Personal Insurance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F3E54]/80"></div>
        <div className="container-max relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Personal Insurance</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive coverage options to protect what matters most to you and your family.
          </p>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid gap-16">
            {insuranceTypes.map((insurance, index) => (
              <div
                key={insurance.id}
                id={insurance.id}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={insurance.image}
                      alt={insurance.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-grow w-full lg:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F3E54] mb-4">{insurance.title}</h2>
                  <p className="text-lg text-[#718096] mb-6">{insurance.description}</p>
                  <Link href="/contact" className="btn-primary inline-block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F3E54]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Protected?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation. Our consultations take about 8 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-[#0F3E54] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wider">
              Request a Consultation
            </Link>
            <a href="tel:+16264631413" className="inline-block border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#0F3E54] transition-colors uppercase tracking-wider">
              Call (626) 463-1413
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
