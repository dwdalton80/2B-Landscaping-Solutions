/* ============================================================
   AboutSection — Oklahoma Craftsman Design
   Split layout: text left, image right with diagonal clip
   ============================================================ */
import { useEffect, useRef } from "react";
import { CheckCircle, MapPin, Calendar, Heart } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/hero_main-RVrQzWXfQspiWKdLdp59g5.webp";

const highlights = [
  "Locally owned & operated in Durant, OK",
  "Serving Bryan County and surrounding areas",
  "Full lawn care and maintenance services",
  "Irrigation, sod, hardscapes & masonry",
  "No job too small — we treat every project with care",
  "Free estimates on all projects",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, oklch(0.28 0.08 145) 0%, oklch(0.22 0.07 145) 100%)",
        clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        marginTop: "-4%",
        marginBottom: "-4%",
        paddingTop: "calc(8% + 4rem)",
        paddingBottom: "calc(8% + 4rem)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto relative z-10" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="fade-up">
              <span className="font-body text-sm font-semibold tracking-widest text-[oklch(0.85_0.10_75)] uppercase mb-3 block">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Rooted in Durant,{" "}
                <span className="italic text-[oklch(0.85_0.10_75)]">
                  Growing
                </span>{" "}
                Since 2010
              </h2>
            </div>

            <div className="fade-up">
              <p className="font-body text-lg text-white/85 mb-4 leading-relaxed">
                2B Landscaping is a small, locally owned and operated business
                proudly serving the Durant, Oklahoma community and surrounding
                areas. Founded by Kyle Bourne, we've been transforming
                properties across Bryan County for over 15 years.
              </p>
              <p className="font-body text-base text-white/75 mb-8 leading-relaxed">
                We believe every property deserves professional care, which is
                why we offer a complete range of landscaping services — from
                routine lawn maintenance to full landscape design and
                hardscape construction. Our commitment is simple: quality
                craftsmanship, honest pricing, and a job done right.
              </p>
            </div>

            {/* Highlights */}
            <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[oklch(0.72_0.12_75)] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>

            {/* Info badges */}
            <div className="fade-up flex flex-wrap gap-4">
              {[
                { icon: MapPin, label: "Durant, OK 74701" },
                { icon: Calendar, label: "Est. 2010" },
                { icon: Heart, label: "Family Owned" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm"
                >
                  <Icon className="w-4 h-4 text-[oklch(0.85_0.10_75)]" />
                  <span className="font-body text-sm text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="fade-up relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={HERO_IMG}
                alt="Beautiful landscaping work by 2B Landscaping in Durant, OK"
                className="w-full h-[420px] object-cover"
              />
              {/* Amber accent border */}
              <div className="absolute inset-0 rounded-2xl ring-4 ring-[oklch(0.72_0.12_75)]/30" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.05_55)] rounded-xl p-4 shadow-xl">
              <div className="font-display text-3xl font-bold leading-none">15+</div>
              <div className="font-body text-xs font-semibold mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
