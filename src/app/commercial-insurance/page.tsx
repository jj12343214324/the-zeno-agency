import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Insurance | Zeno Insurance Agency',
  description: 'Comprehensive commercial insurance coverage including business owners packages, commercial auto, and workplace benefits. Serving California businesses.',
};

const insuranceTypes = [
  {
    id: 'business-owners',
    title: 'Business Owners Package',
    description: 'We understand that protecting your business from operational disruptions is crucial. Through our partnerships with carriers like The Hartford and Travelers, we provide coverages tailored to your commercial clients\' unique needs. Our CyberSuite offering is recommended to protect against modern digital threats that every business faces.',
    image: '/images/httpselements.envato.combusiness-meeting-and-teamwork-by-business-people-G4JTHB5-1.jpg',
  },
  {
    id: 'commercial-auto',
    title: 'Commercial Auto',
    description: 'Whether your business owns a single vehicle or an entire fleet, we have coverage options to protect your commercial vehicles. Our commercial auto insurance addresses liability risks and helps companies maintain adequate protection as their operational needs evolve.',
    image: '/images/car-rental-and-insurance-concept-young-salesman-r-2022-02-17-20-08-59-utc-1.jpg',
  },
  {
    id: 'general-liability',
    title: 'General Liability',
    description: 'General liability insurance protects your business from third-party claims of bodily injury, property damage, and personal injury. This essential coverage shields your business from lawsuits and financial losses.',
    image: '/images/httpselements.envato.commedical-insurance-4C6ZZA5-1.jpg',
  },
  {
    id: 'surety-bonds',
    title: 'Surety Bonds',
    description: 'Surety bonds provide a guarantee that your business will fulfill its contractual obligations. We offer various bond types including license bonds, contract bonds, and court bonds to meet your business needs.',
    image: '/images/7-examples-of-teamwork-collaboration-in-the-workplace-featured-image.png',
  },
  {
    id: 'workers-comp',
    title: 'Workers Compensation',
    description: 'Workers compensation insurance provides coverage for employees who are injured or become ill on the job. This coverage helps pay for medical expenses, lost wages, and rehabilitation costs.',
    image: '/images/mcap-blog-apr2021_6e79844.jpg',
  },
  {
    id: 'professional-liability',
    title: 'Professional Liability',
    description: 'Also known as Errors & Omissions (E&O) insurance, professional liability coverage protects your business from claims of negligence, mistakes, or failure to perform professional services.',
    image: '/images/patient-talking-to-doctor-in-the-background-chart-in-the-foreground.webp',
  },
  {
    id: 'workplace-benefits',
    title: 'Workplace Benefits',
    description: 'We provide voluntary employee benefit programs featuring payroll-deducted premiums for critical illness, disability, cancer, and accident coverage. A key advantage is that all of your employees can be covered regardless of their health status.',
    image: '/images/httpselements.envato.comhappy-family-at-home-LLVD2LX.jpg',
  },
];

export default function CommercialInsurance() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/httpselements.envato.combusiness-meeting-and-teamwork-by-business-people-G4JTHB5-1.jpg"
          alt="Commercial Insurance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F3E54]/80"></div>
        <div className="container-max relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Insurance</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive business coverage designed for California businesses with changing coverage needs.
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
            Protect Your Business Today
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
