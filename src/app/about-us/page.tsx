import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Zeno Insurance Agency',
  description: 'Learn about Zeno Insurance Agency - an established insurance agency based in greater Los Angeles serving all of California.',
};

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/shutterstock_2145880147-scaled-e1680018332871.jpg"
          alt="About Zeno Insurance Agency"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F3E54]/80"></div>
        <div className="container-max relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-200">Protecting California families and businesses</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-6">Our Mission</h2>
            <p className="text-2xl text-[#0F3E54] font-semibold mb-6">
              &ldquo;We don&apos;t make a living selling policies... We earn a living protecting our clients.&rdquo;
            </p>
            <p className="text-lg text-[#718096]">
              At Zeno Insurance Agency, we believe in providing comprehensive protection tailored to each client&apos;s unique needs.
              Our experienced agents work with top-rated insurance carriers to ensure you get the best coverage at the best price.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/httpselements.envato.combusiness-meeting-and-teamwork-by-business-people-G4JTHB5-1.jpg"
                  alt="Zeno Agency Team Meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-6">
                We Are Zeno Insurance Agency
              </h2>
              <p className="text-lg text-[#718096] mb-6">
                We are an established insurance agency based in greater Los Angeles and serving all of California. We are a true independent insurance agency which means that we are able to represent a greater number of insurance companies than a typical &quot;captive&quot; agent.
              </p>
              <p className="text-lg text-[#718096] mb-6">
                This translates to our ability to deliver the broadest options to our clients – many times with better rates. We are proud of what we do. We are committed to helping our clients find the coverage they need at a price they can afford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#0F3E54]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F3E54] mb-2">Client-First</h3>
              <p className="text-[#718096]">We earn a living protecting our clients, not just selling policies.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#0F3E54]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F3E54] mb-2">Expert Guidance</h3>
              <p className="text-[#718096]">Our experienced agents help you find coverage that truly fits.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#0F3E54]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F3E54] mb-2">Quick & Easy</h3>
              <p className="text-[#718096]">Get covered in about 8 minutes with our streamlined process.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#0F3E54]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F3E54] mb-2">California Focus</h3>
              <p className="text-[#718096]">We understand the unique insurance needs of California.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F3E54]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover a better way to buy insurance. Our consultations take about 8 minutes and are completely free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-[#0F3E54] px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-colors uppercase tracking-wider">
              Request a Consultation
            </Link>
            <a href="tel:+16264631413" className="inline-block border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-[#0F3E54] transition-colors uppercase tracking-wider">
              Call (626) 463-1413
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
