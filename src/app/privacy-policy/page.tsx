import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zeno Insurance Agency',
  description: 'Privacy Policy for Zeno Insurance Agency. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0F3E54] py-16">
        <div className="container-max px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4">Introduction</h2>
            <p className="text-[#718096] mb-6">
              Zeno Insurance Agency Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website thezenoagency.com, use our services, or interact with us through advertising platforms including Google Ads and Meta (Facebook/Instagram) advertising.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-[#0F3E54] mb-3">Personal Information</h3>
            <p className="text-[#718096] mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li>Request a quote or consultation</li>
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via phone, email, or other channels</li>
              <li>Interact with our advertisements on Google, Facebook, or Instagram</li>
            </ul>
            <p className="text-[#718096] mb-6">
              This information may include your name, email address, phone number, mailing address, insurance needs, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-[#0F3E54] mb-3">Automatically Collected Information</h3>
            <p className="text-[#718096] mb-4">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li>IP address and device identifiers</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or advertisement</li>
              <li>Click-through data from our advertisements</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-[#718096] mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li>To provide insurance quotes and services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send you information about our products and services</li>
              <li>To improve our website and services</li>
              <li>To personalize your experience</li>
              <li>To measure the effectiveness of our advertising campaigns</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Cookies and Tracking Technologies</h2>
            <p className="text-[#718096] mb-6">
              We use cookies, pixel tags, and similar tracking technologies to collect information about your browsing activities. This includes technologies from third-party advertising platforms such as:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li><strong>Google Analytics and Google Ads:</strong> We use Google&apos;s advertising and analytics services to measure ad performance and deliver relevant advertisements.</li>
              <li><strong>Meta Pixel (Facebook/Instagram):</strong> We use Meta&apos;s tracking pixel to measure ad effectiveness and create custom audiences for advertising.</li>
            </ul>
            <p className="text-[#718096] mb-6">
              You can control cookies through your browser settings. Please note that disabling cookies may affect your experience on our website.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Information Sharing and Disclosure</h2>
            <p className="text-[#718096] mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li><strong>Insurance Carriers:</strong> To obtain quotes and process applications</li>
              <li><strong>Service Providers:</strong> Third parties who perform services on our behalf</li>
              <li><strong>Advertising Partners:</strong> Google and Meta for advertising purposes</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="text-[#718096] mb-6">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Your Privacy Rights</h2>
            <p className="text-[#718096] mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal information</li>
              <li>Right to opt-out of certain data uses</li>
              <li>Right to data portability</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0F3E54] mb-3">California Residents (CCPA)</h3>
            <p className="text-[#718096] mb-6">
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt-out of the sale of personal information. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Opting Out of Targeted Advertising</h2>
            <p className="text-[#718096] mb-4">
              You can opt out of targeted advertising through the following methods:
            </p>
            <ul className="list-disc pl-6 text-[#718096] mb-6 space-y-2">
              <li><strong>Google:</strong> Visit <a href="https://adssettings.google.com" className="text-[#003478] hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
              <li><strong>Facebook/Instagram:</strong> Visit <a href="https://www.facebook.com/settings/?tab=ads" className="text-[#003478] hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
              <li><strong>Industry Opt-Out:</strong> Visit <a href="https://optout.aboutads.info" className="text-[#003478] hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Data Security</h2>
            <p className="text-[#718096] mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Data Retention</h2>
            <p className="text-[#718096] mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Children&apos;s Privacy</h2>
            <p className="text-[#718096] mb-6">
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Changes to This Privacy Policy</h2>
            <p className="text-[#718096] mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-[#0F3E54] mb-4 mt-8">Contact Us</h2>
            <p className="text-[#718096] mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
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
