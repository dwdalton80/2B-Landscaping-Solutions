/* ============================================================
   HeroSection — Oklahoma Craftsman Design
   Full-viewport hero with diagonal bottom clip, dark overlay
   Photography-forward with bold Playfair Display heading
   ============================================================ */
import { ChevronDown, Phone, Star } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/hero_main-RVrQzWXfQspiWKdLdp59g5.webp";

export default function HeroSection() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
        marginBottom: "-4%",
        paddingBottom: "8%",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />

      {/* Gradient Overlay — dark on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[oklch(0.72_0.12_75)]/20 border border-[oklch(0.72_0.12_75)]/40 text-[oklch(0.85_0.10_75)] rounded-full px-4 py-1.5 text-sm font-body mb-6 backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 fill-current" />
            Serving Durant, OK &amp; Surrounding Areas Since 2010
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Crafting Beautiful{" "}
            <span className="text-[oklch(0.85_0.10_75)] italic">Outdoor</span>
            <br />
            Spaces You'll Love
          </h1>

          {/* Subheadline */}
          <p className="font-body text-base sm:text-lg md:text-xl text-white/85 mb-8 max-w-xl leading-relaxed">
            From lush lawns to stunning hardscapes — 2B Landscaping brings
            expert craftsmanship and local know-how to every project in
            Bryan County and beyond.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:5809162686"
              className="flex items-center justify-center sm:justify-start gap-2 bg-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.80_0.12_75)] text-[oklch(0.18_0.05_55)] font-body font-bold px-6 py-3 sm:py-3.5 rounded transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Phone className="w-5 h-5" />
              Call for a Free Quote
            </a>
            <button
              onClick={scrollToServices}
              className="flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-body font-semibold px-6 py-3 sm:py-3.5 rounded transition-all duration-200 hover:bg-white/10 text-sm sm:text-base backdrop-blur-sm"
            >
              View Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Completed" },
              { value: "100%", label: "Locally Owned" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-[oklch(0.85_0.10_75)]">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/70 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
