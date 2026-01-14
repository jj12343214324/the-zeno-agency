'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FAQ() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src="/images/faq-1.png"
          alt="Frequently Asked Questions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0F3E54]/80"></div>
        <div className="container-max relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200">Do you have any questions?</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {/* Info Message */}
            <div className="bg-[#0F3E54]/5 border border-[#0F3E54]/20 rounded-lg p-6 mb-12 text-center">
              <svg className="w-12 h-12 text-[#0F3E54] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-semibold text-[#0F3E54] mb-2">
                We&apos;re happy to answer any of your questions
              </h2>
              <p className="text-[#718096]">
                We reply to most inquiries within two hours. We will definitely get back to you by the next business day.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0F3E54] mb-6">Common Topics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/personal-insurance" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#0F3E54]/10 transition-colors group">
                  <svg className="w-6 h-6 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-[#0F3E54] group-hover:text-[#00224F] font-medium">Personal Insurance</span>
                </Link>
                <Link href="/commercial-insurance" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#0F3E54]/10 transition-colors group">
                  <svg className="w-6 h-6 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[#0F3E54] group-hover:text-[#00224F] font-medium">Commercial Insurance</span>
                </Link>
                <Link href="/contact" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#0F3E54]/10 transition-colors group">
                  <svg className="w-6 h-6 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-[#0F3E54] group-hover:text-[#00224F] font-medium">Contact Us</span>
                </Link>
                <Link href="/about-us" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-[#0F3E54]/10 transition-colors group">
                  <svg className="w-6 h-6 text-[#0F3E54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[#0F3E54] group-hover:text-[#00224F] font-medium">About Us</span>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#0F3E54] mb-6">Ask Your Question</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700">
                    We&apos;ve received your question and will get back to you within two hours during business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 btn-primary"
                  >
                    Ask Another Question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0F3E54] mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0F3E54] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                      placeholder="What is your question about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Your Question *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors resize-none bg-white"
                      placeholder="Type your question here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Question'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0F3E54]">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to Talk?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Call us directly and speak with one of our experienced agents. Our consultations take about 8 minutes.
          </p>
          <a href="tel:+16264631413" className="inline-block bg-white text-[#0F3E54] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors uppercase tracking-wider">
            Call (626) 463-1413
          </a>
        </div>
      </section>
    </>
  );
}
