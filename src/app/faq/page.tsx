'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqItems = [
  {
    question: 'How quickly can I get coverage?',
    answer: 'In most cases coverage can be bound by phone on the same day by speaking with one of our agents. Documents can be electronically signed via email and payments can be made using any major credit card or by electronic check.',
  },
  {
    question: 'How much down payment will be required?',
    answer: 'This depends upon which type of policy you want. Different carriers have different down payment requirements. However, nearly every policy we offer allows for either 1/12th or 1/6th down payment to get coverage started. There are never any premium financing or interest charges.',
  },
  {
    question: 'How can I file a claim?',
    answer: 'You can file a claim by calling our office during business hours and one of our agents can assist you. Depending upon which type of claim you need to file you may be able to get 24/7 service directly from your carrier. If you are insured with us and you need to file an auto insurance claim you can call (626)304-2607 any day and any time.',
  },
  {
    question: 'How much is your broker fee?',
    answer: 'We do things differently here at The Zeno Agency. We are in the business of protecting our customers and, when we collect money from our clients, all of it is applied to insurance premium. WE DO NOT CHARGE BROKER FEES. Not for helping you with a new policy and not for servicing your existing policy.',
  },
  {
    question: "How do I know that I'm getting the right coverage?",
    answer: 'Our agents are rigorously trained to get all of the information needed to ensure that you are protected at the level to which you are most comfortable. It is impossible to insure against every possible contingency. So, we can help you decide which coverages are most important to you and find you the carrier with the financial strength and premiums to match your unique needs. We can accomplish this in about 8 minutes.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
          src="/images/shutterstock_286217429-scaled.jpg"
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

      {/* FAQ Accordion Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#0F3E54] font-semibold mb-2">// FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-8">
              Frequently asked<br />questions
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border-l-4 border-[#4A7DFF]">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full bg-[#4A7DFF] text-white p-4 md:p-5 flex justify-between items-center text-left font-semibold text-base md:text-lg hover:bg-[#3A6DEF] transition-colors"
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="bg-white p-4 md:p-6 border border-gray-200 border-t-0">
                      <p className="text-[#718096]">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#0F3E54] font-semibold mb-2">// Message us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-4">
              do you have any questions?
            </h2>
            <p className="text-[#718096] mb-8">
              We are happy to answer any of your questions. We reply to most inquiries within two hours. We will definitely get back to you by the next business day.
            </p>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#0F3E54] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors bg-white"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#0F3E54] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F3E54] focus:border-transparent transition-colors resize-none bg-white"
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
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
                    'SUBMIT'
                  )}
                </button>
              </form>
            )}
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
