import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Zeno Insurance Agency',
  description: 'Terms of Service for Zeno Insurance Agency. Review the terms and conditions for using our website and services.',
};

export default function Terms() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0F3E54] py-16">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-200">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4">Agreement to Terms</h2>
            <p className="text-[#718096] mb-6">
              By accessing or using the website of Zeno Insurance Agency Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) at thezenoagency.com, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Description of Services</h2>
            <p className="text-[#718096] mb-6">
              Zeno Insurance Agency is a licensed insurance agency serving California residents and businesses. We provide insurance consultation services and connect clients with insurance carriers to obtain coverage for personal and commercial insurance needs, including but not limited to auto, home, life, business, and specialty insurance products.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">User Eligibility</h2>
            <p className="text-[#718096] mb-6">
              You must be at least 18 years of age to use our services. By using our website, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into binding agreements.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Insurance Services Disclaimer</h2>
            <p className="text-[#718096] mb-4">
              Please understand the following regarding our services:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li><strong>Not Insurance Advice:</strong> Information provided on this website is for general informational purposes only and does not constitute insurance advice. Insurance needs vary by individual circumstances.</li>
              <li><strong>Not a Quote:</strong> Any information displayed on this website does not constitute an offer of insurance or a guaranteed quote. Actual quotes are subject to underwriting approval by insurance carriers.</li>
              <li><strong>Coverage Limitations:</strong> Insurance policies contain exclusions, limitations, and conditions. Please review your policy documents carefully or contact us for specific coverage questions.</li>
              <li><strong>Carrier Decisions:</strong> Insurance carriers have sole authority over underwriting decisions, policy terms, and claims handling. We act as an intermediary and cannot guarantee coverage or claims outcomes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Accuracy of Information</h2>
            <p className="text-[#718096] mb-6">
              When requesting quotes or applying for coverage, you agree to provide accurate, complete, and truthful information. Providing false or misleading information may result in policy cancellation, denial of claims, or other legal consequences. You are responsible for reviewing and verifying all information before submitting applications or binding coverage.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Website Use and Content</h2>
            <h3 className="text-xl font-semibold text-[#0F3E54] mb-3">Intellectual Property</h3>
            <p className="text-[#718096] mb-6">
              All content on this website, including text, graphics, logos, images, and software, is the property of Zeno Insurance Agency Inc. or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>

            <h3 className="text-xl font-semibold text-[#0F3E54] mb-3">Permitted Use</h3>
            <p className="text-[#718096] mb-4">
              You may use our website only for lawful purposes. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Engage in any activity that interferes with or disrupts the website</li>
              <li>Scrape, harvest, or collect information without permission</li>
              <li>Use automated systems or bots to access the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Third-Party Links and Services</h2>
            <p className="text-[#718096] mb-6">
              Our website may contain links to third-party websites or services, including insurance carrier websites and advertising platforms. We are not responsible for the content, privacy practices, or terms of service of these third-party sites. Your use of third-party websites is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Advertising and Marketing</h2>
            <p className="text-[#718096] mb-6">
              We may advertise our services through various platforms including Google Ads, Facebook, Instagram, and other digital advertising networks. By interacting with our advertisements or providing your contact information, you consent to receive communications about our insurance services. You may opt out of marketing communications at any time by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Limitation of Liability</h2>
            <p className="text-[#718096] mb-6">
              TO THE FULLEST EXTENT PERMITTED BY LAW, ZENO INSURANCE AGENCY INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF OUR WEBSITE OR SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
            </p>
            <p className="text-[#718096] mb-6">
              OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM YOUR USE OF THE WEBSITE OR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US, IF ANY, IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Disclaimer of Warranties</h2>
            <p className="text-[#718096] mb-6">
              THE WEBSITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Indemnification</h2>
            <p className="text-[#718096] mb-6">
              You agree to indemnify, defend, and hold harmless Zeno Insurance Agency Inc., its officers, directors, employees, agents, and affiliates from any claims, damages, losses, liabilities, and expenses (including attorneys&apos; fees) arising out of or related to your use of the website, violation of these Terms, or infringement of any third-party rights.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Governing Law and Dispute Resolution</h2>
            <p className="text-[#718096] mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles. Any disputes arising from these Terms or your use of our services shall be resolved in the state or federal courts located in Los Angeles County, California, and you consent to the personal jurisdiction of such courts.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Severability</h2>
            <p className="text-[#718096] mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Changes to Terms</h2>
            <p className="text-[#718096] mb-6">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Entire Agreement</h2>
            <p className="text-[#718096] mb-6">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Zeno Insurance Agency Inc. regarding your use of the website and services, and supersede all prior agreements and understandings.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Contact Information</h2>
            <p className="text-[#718096] mb-4">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-[#F5F7FA] p-6 rounded-lg">
              <p className="text-[#0F3E54] font-semibold mb-2">Zeno Insurance Agency Inc.</p>
              <p className="text-[#718096]">Pasadena, CA</p>
              <p className="text-[#718096]">Phone: <a href="tel:+16264631413" className="text-[#003478] hover:underline">(626) 463-1413</a></p>
              <p className="text-[#718096]">Email: <a href="mailto:inquiry@TheZenoAgency.com" className="text-[#003478] hover:underline">inquiry@TheZenoAgency.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
