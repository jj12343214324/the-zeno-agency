import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0A2E3F] text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Image
              src="/images/cropped-Zeno-Logo-Final.png"
              alt="Zeno Insurance Agency"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              We are an established insurance agency based in greater Los Angeles and serving all of California.
            </p>
            <div className="flex gap-4">
              <a href="https://www.yelp.com/biz/zeno-insurance-agency-pasadena" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.85 3.121c.239.715-.239 1.377-.18 1.59zm-3.703 5.74l-3.56-3.619c-.718-.73-.04-1.993.99-1.85l5.388.767c.532.076.887.568.82 1.106a9.05 9.05 0 01-1.602 3.615c-.406.55-1.306.703-2.036-.019zm-3.1-14.056l-.007 5.378c-.001 1.058-1.405 1.455-2.036.58L8.111 5.768a1.071 1.071 0 01.21-1.596 9.187 9.187 0 013.32-1.748c.727-.193 1.716.4 1.716 1.854zM4.627 9.903a9.12 9.12 0 011.603-3.615c.405-.549 1.305-.702 2.036.02l3.56 3.618c.717.73.039 1.993-.99 1.85l-5.389-.767a1.072 1.072 0 01-.82-1.106zm3.453 8.51l4.994-1.433c.96-.276 1.74.8 1.177 1.63l-2.905 4.308a1.071 1.071 0 01-1.596.206 9.192 9.192 0 01-1.85-3.12c-.238-.716.239-1.378.18-1.591z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/personal-insurance" className="text-gray-300 hover:text-white transition-colors">Personal Insurance</Link>
              </li>
              <li>
                <Link href="/commercial-insurance" className="text-gray-300 hover:text-white transition-colors">Commercial Insurance</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Pasadena, CA</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+16264631413" className="text-gray-300 hover:text-white transition-colors">(626) 463-1413</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:inquiry@TheZenoAgency.com" className="text-gray-300 hover:text-white transition-colors">inquiry@TheZenoAgency.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Zeno Insurance Agency Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
