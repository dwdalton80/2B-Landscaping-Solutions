import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { addSchemaMarkup } from "@/lib/schema";

/**
 * FAQ Section with Schema Markup
 * Design: Oklahoma Craftsman
 * - Accordion-style FAQ with smooth animations
 * - FAQPage schema for enhanced search visibility
 * - Warm amber accents with professional styling
 */

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve Durant, Bryan County, and surrounding areas in Oklahoma. Our team is familiar with the local climate, soil conditions, and landscaping preferences of the region, allowing us to provide tailored solutions for your property.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We provide free, no-obligation estimates for all landscaping projects. We'll visit your property, discuss your vision, and provide a detailed quote. Contact us today to schedule your free consultation.",
  },
  {
    question: "What is your service area and do you travel?",
    answer:
      "Our primary service area is Durant and Bryan County, Oklahoma. We focus on this region to ensure quality service and quick response times. For projects outside our typical area, please contact us to discuss availability.",
  },
  {
    question: "How often should I water my lawn?",
    answer:
      "Watering frequency depends on your grass type, soil, and weather conditions. Generally, lawns need about 1-1.5 inches of water per week. During hot summers, you may need to water more frequently. We recommend watering early in the morning to reduce evaporation.",
  },
  {
    question: "What's the best time to plant trees and shrubs?",
    answer:
      "The ideal planting time varies by species, but generally spring and fall are best. These seasons provide cooler temperatures and more moisture, helping plants establish strong root systems. We can recommend the best plants and timing for your specific landscape.",
  },
  {
    question: "How do I maintain my landscape design?",
    answer:
      "Proper maintenance includes regular watering, mowing, pruning, and seasonal care. We offer maintenance packages tailored to your needs. Our team can provide specific care instructions for your plants and hardscapes to keep everything looking beautiful year-round.",
  },
  {
    question: "Do you handle snow removal?",
    answer:
      "Yes, we provide seasonal snow removal and ice management services during winter months. We can discuss service options and pricing for your property. Contact us before winter arrives to schedule your snow removal plan.",
  },
  {
    question: "Can you work with my existing landscape?",
    answer:
      "Absolutely! We specialize in working with existing landscapes. Whether you want to enhance what you have, remove and replace certain elements, or do a complete redesign, we can create a plan that works with your budget and vision.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  React.useEffect(() => {
    // Add FAQ schema markup for SEO
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
    addSchemaMarkup(faqSchema);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our landscaping services, maintenance, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-amber-300 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-amber-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 text-center border border-amber-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is ready to help! Contact us for more information or to schedule your free estimate.
          </p>
          <a
            href="tel:(580)916-2686"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
          >
            Call Us Today: (580) 916-2686
          </a>
        </div>
      </div>
    </section>
  );
}
