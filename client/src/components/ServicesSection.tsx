/* ============================================================
   ServicesSection — Oklahoma Craftsman Design
   Staggered card grid with hover photo reveals
   ============================================================ */
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Sprout, Layers, Droplets, Hammer, Footprints, Shovel, TreePine, Wrench, Lightbulb, Waves, Fish, Grid3x3 } from "lucide-react";

const LAWN_CARE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_lawn_care-LtBfYjKFirKQnydPLnTRnc.webp";
const LANDSCAPE_DESIGN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_landscape_design-WjNbJhkGrifXBVVZ3zmuAG.webp";
const RETAINING_WALL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_retaining_wall-mGSERXMZhtZqA9EoVGfFbh.webp";
const SPRINKLER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_sprinkler-HgRzTY6bGy97te8ireADur.webp";

const services = [
  {
    id: "lawn-care",
    icon: Sprout,
    title: "Lawn Care & Maintenance",
    description:
      "Regular mowing, edging, trimming, and seasonal clean-ups to keep your lawn looking its best year-round.",
    image: null,
    featured: false,
  },
  {
    id: "landscape-design",
    icon: TreePine,
    title: "Landscape Design",
    description:
      "Custom landscape designs that transform your outdoor space into a beautiful, functional environment tailored to your vision.",
    image: null,
    featured: false,
  },
  {
    id: "retaining-walls",
    icon: Hammer,
    title: "Retaining Walls",
    description:
      "Expertly built stone and block retaining walls that combine structural integrity with natural beauty.",
    image: null,
    featured: false,
  },
  {
    id: "irrigation-installation",
    icon: Droplets,
    title: "Sprinkler Installation",
    description:
      "Professional irrigation system design and installation to keep your lawn and gardens perfectly watered.",
    image: null,
    featured: false,
  },
  {
    id: "patios-hardscapes",
    icon: Layers,
    title: "Patios & Hardscapes",
    description:
      "Beautiful stone and paver patios, outdoor living spaces, and hardscape features built to last.",
    image: null,
    featured: false,
  },
  {
    id: "walkways-paths",
    icon: Footprints,
    title: "Walkways & Paths",
    description:
      "Elegant stone and paver walkways that guide visitors through your property with style and safety.",
    image: null,
    featured: false,
  },
  {
    id: "sod-installation",
    icon: Shovel,
    title: "Sod Installation",
    description:
      "Fresh sod installation for instant lush, green lawns. We prepare the soil and lay sod for lasting results.",
    image: null,
    featured: false,
  },
  {
    id: "masonry",
    icon: Wrench,
    title: "Masonry",
    description:
      "Skilled masonry work including stone walls, decorative features, and structural elements for your property.",
    image: null,
    featured: false,
  },
  {
    id: "christmas-lights",
    icon: Lightbulb,
    title: "Christmas Light Installation",
    description:
      "Professional holiday lighting design and installation to transform your home into a festive masterpiece with beautiful, energy-efficient LED lights.",
    image: null,
    featured: false,
  },
  {
    id: "fountain-installation",
    icon: Waves,
    title: "Fountain Installation",
    description:
      "Beautiful water features and fountains that add elegance and tranquility to your outdoor space.",
    image: null,
    featured: false,
  },
  {
    id: "pond-scrapes",
    icon: Fish,
    title: "Pond Scrapes",
    description:
      "Professional pond installation, maintenance, and cleaning to create a serene aquatic environment.",
    image: null,
    featured: false,
  },
  {
    id: "artificial-turf",
    icon: Grid3x3,
    title: "Artificial Turf Installation",
    description:
      "High-quality artificial turf installation for a lush, low-maintenance lawn that looks beautiful year-round.",
    image: null,
    featured: false,
  },
];

function ServiceCard({ service, index, onServiceClick }: { service: typeof services[0]; index: number; onServiceClick: (id: string) => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={cardRef}
      className="fade-up group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image or gradient background */}
      {service.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-4">
            <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
              <Icon className="w-5 h-5 text-[oklch(0.18_0.07_145)]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="h-16 bg-gradient-to-br from-[oklch(0.28_0.08_145)] to-[oklch(0.38_0.09_145)] flex items-end px-4 pb-3">
          <div className="w-10 h-10 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
            <Icon className="w-5 h-5 text-[oklch(0.18_0.07_145)]" />
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5 cursor-pointer" onClick={() => onServiceClick(service.id)}>
        <h3 className="font-display text-base sm:text-lg font-semibold text-[oklch(0.22_0.04_55)] mb-2 group-hover:text-[oklch(0.28_0.08_145)] transition-colors">
          {service.title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-[oklch(0.45_0.04_55)] leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[oklch(0.72_0.12_75)] group-hover:w-full transition-all duration-300" />
    </div>
  );
}

export default function ServicesSection() {
  const [, navigate] = useLocation();
  const titleRef = useRef<HTMLDivElement>(null);

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-[oklch(0.97_0.015_80)] relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="fade-up text-center mb-14">
          <span className="font-body text-sm font-semibold tracking-widest text-[oklch(0.72_0.12_75)] uppercase mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
            Our Services
          </h2>
          <p className="font-body text-base sm:text-lg text-[oklch(0.45_0.04_55)] max-w-2xl mx-auto">
            From routine lawn maintenance to complete landscape transformations, we bring
            craftsmanship and care to every job — no project too small.
          </p>
          <div className="w-16 h-1 bg-[oklch(0.72_0.12_75)] mx-auto mt-6 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} onServiceClick={handleServiceClick} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="tel:5809162686"
            className="inline-flex items-center gap-2 bg-[oklch(0.28_0.08_145)] hover:bg-[oklch(0.38_0.09_145)] text-white font-body font-semibold px-8 py-4 rounded transition-all duration-200 shadow-lg hover:shadow-xl text-base"
          >
            Get a Free Estimate — Call (580) 916-2686
          </a>
        </div>
      </div>
    </section>
  );
}
