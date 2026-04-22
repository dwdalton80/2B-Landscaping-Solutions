import { Star } from "lucide-react";

/**
 * Testimonials Section
 * Design: Oklahoma Craftsman
 * - Warm amber accent color for star ratings
 * - Deep forest green backgrounds for testimonial cards
 * - Playfair Display headings with serif elegance
 * - Source Sans 3 body text for readability
 * - Masonry-inspired card layout with varied heights
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
            See why families and businesses across Bryan County choose 2B Landscaping for their outdoor projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-l-4 border-amber-600 ${
                index === 0 ? "md:col-span-1" : ""
              }`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-amber-700 font-medium">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
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
