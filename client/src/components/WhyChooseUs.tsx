/* ============================================================
   WhyChooseUs — Oklahoma Craftsman Design
   Stats and trust signals on warm parchment background
   ============================================================ */
import { useEffect, useRef } from "react";
import { Shield, ThumbsUp, DollarSign, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Full liability coverage on every project. Your property is protected and you can hire with confidence.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description:
      "We stand behind our work. If you're not satisfied, we'll make it right — that's our promise.",
  },
  {
    icon: DollarSign,
    title: "Fair, Honest Pricing",
    description:
      "Transparent estimates with no hidden fees. You'll know exactly what you're paying before we start.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "We're your neighbors. As a Durant-based business, we're invested in making our community beautiful.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "oklch(0.93 0.025 80)",
        clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        marginTop: "-4%",
        marginBottom: "-4%",
        paddingTop: "calc(8% + 3rem)",
        paddingBottom: "calc(8% + 3rem)",
      }}
      ref={sectionRef}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-14">
          <span className="font-body text-sm font-semibold tracking-widest text-[oklch(0.38_0.09_145)] uppercase mb-3 block">
            Why 2B Landscaping
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
            The Local Difference
          </h2>
          <p className="font-body text-lg text-[oklch(0.45_0.04_55)] max-w-2xl mx-auto">
            When you hire 2B Landscaping, you're supporting a local family business
            that cares about your property as much as you do.
          </p>
          <div className="w-16 h-1 bg-[oklch(0.72_0.12_75)] mx-auto mt-6 rounded-full" />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="fade-up bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-[oklch(0.88_0.025_80)]"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[oklch(0.28_0.08_145)] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[oklch(0.85_0.10_75)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[oklch(0.22_0.04_55)] mb-2">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-[oklch(0.45_0.04_55)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="fade-up bg-[oklch(0.28_0.08_145)] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "15+", label: "Years in Business" },
            { value: "500+", label: "Happy Customers" },
            { value: "8", label: "Services Offered" },
            { value: "100%", label: "Local & Proud" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-4xl font-bold text-[oklch(0.85_0.10_75)] mb-1">
                {stat.value}
              </div>
              <div className="font-body text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
