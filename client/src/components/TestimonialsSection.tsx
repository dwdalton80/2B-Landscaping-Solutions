import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

/**
 * Testimonials Carousel Section
 * Design: Oklahoma Craftsman
 * - Warm amber accent color for star ratings
 * - Deep forest green backgrounds for testimonial cards
 * - Playfair Display headings with serif elegance
 * - Source Sans 3 body text for readability
 * - Interactive carousel with navigation and autoplay
 */

const testimonials = [
  {
    name: "Sarah Mitchell",
    project: "Complete Landscape Design & Installation",
    text: "Kyle and his team transformed our backyard from bare dirt into a stunning outdoor oasis. Their attention to detail and professionalism were exceptional. We couldn't be happier with the results!",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    project: "Retaining Wall & Hardscape",
    text: "We hired 2B Landscaping for a retaining wall project and were impressed from start to finish. They delivered exactly what they promised, on time and within budget. Highly recommended!",
    rating: 5,
  },
  {
    name: "Patricia Chen",
    project: "Lawn Care & Maintenance",
    text: "As a busy professional, I needed reliable lawn care. Kyle's team has been maintaining our property for over a year now, and our lawn has never looked better. Great service, fair pricing!",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    project: "Christmas Light Installation",
    text: "Our home looked absolutely beautiful with the professional Christmas light installation. Kyle's crew was efficient, careful with our property, and the results were stunning. Definitely hiring again next year!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay carousel every 5 seconds
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-700 font-semibold text-sm tracking-widest uppercase mb-3">
            What Our Clients Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Durant Homeowners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See why families and businesses across Bryan County choose 2B
            Landscaping for their outdoor projects.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-l-4 border-amber-600 min-h-[320px] flex flex-col justify-between">
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-amber-500 text-amber-500"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
              "{currentTestimonial.text}"
            </p>

            {/* Client Info */}
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900">
                {currentTestimonial.name}
              </p>
              <p className="text-sm text-amber-700 font-medium">
                {currentTestimonial.project}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-amber-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-gray-600">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to join our list of satisfied customers?
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
