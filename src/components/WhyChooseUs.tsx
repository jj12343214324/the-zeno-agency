'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const accordionItems = [
  {
    title: 'Experienced Agents who get to know YOU',
    content: [
      'At The Zeno Agency you are not just a policy number. We get to know you so we can properly protect you and the things you value.',
      'The training provided to our agents helps us provide value with each client interaction.',
      "We aren't just insurance agents. We are trusted advisors who try our best to keep our clients' best interest at heart.",
    ],
  },
  {
    title: 'Easy access to policies and live agents',
    content: [
      'Agents available by telephone 24/7.',
      'Phone/Tablet app for payments and policy/claim information.',
      'Your California agents are available during normal business hours via text message and email.',
    ],
  },
  {
    title: 'Industry Leading Claim Handling',
    content: [
      'Our strategic partnerships with top-tier carriers help us deliver award-winning claims service.',
      'Quick Photo Claim using our smartphone app settles claims quickly and gets you back on the road fast.',
      'Agency concierge standing by to help navigate challenges that can arise during the claim process.',
    ],
  },
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/49.jpg"
              alt="Why choose us"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="text-[#0F3E54] font-semibold mb-2">// Why Choose us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E54] mb-8 leading-tight">
              Why so many people love working with The Zeno Agency:
            </h2>

            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="border-l-4 border-[#0F3E54]"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full bg-[#0F3E54] text-white p-4 md:p-5 flex justify-between items-center text-left font-semibold text-base md:text-lg hover:bg-[#00224F] transition-colors"
                  >
                    <span>{item.title}</span>
                    <motion.svg
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 p-4 md:p-6 space-y-4">
                      {item.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-[#718096]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
