/* ============================================================
   GallerySection — Oklahoma Craftsman Design
   Masonry-style photo grid with hover captions
   Click to open full-size image in modal
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import ImageModal from "./ImageModal";

const RETAINING_WALL_IMG = "/manus-storage/IMG_3344_ee731dce.PNG";
const LAWN_CARE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_lawn_care-LtBfYjKFirKQnydPLnTRnc.webp";
const LANDSCAPE_DESIGN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_landscape_design-WjNbJhkGrifXBVVZ3zmuAG.webp";
const SPRINKLER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/service_sprinkler-HgRzTY6bGy97te8ireADur.webp";
const HERO_IMG = "/manus-storage/IMG_3341_d38d8cf6.JPG";

// Unsplash landscaping images for gallery variety
const CHRISTMAS_LIGHTS_IMG = "/manus-storage/594910348_1409381290979522_1381582364583980021_n_188a2a98.webp";
const CUSTOM_WALL_IMG = "/manus-storage/484870302_1197614712156182_8826142775724406335_n_f119768d.jpg";
const WALKWAY_IMG = "/manus-storage/83882309_3397071477034882_4546240625325899776_n_8759ed07.jpg";

const galleryItems = [
  { src: HERO_IMG, caption: "Residential Landscape Design", tall: true },
  { src: RETAINING_WALL_IMG, caption: "Stone Retaining Wall", tall: false },
  { src: LAWN_CARE_IMG, caption: "Professional Lawn Care", tall: false },
  { src: LANDSCAPE_DESIGN_IMG, caption: "Custom Landscape Design", tall: true },
  { src: SPRINKLER_IMG, caption: "Irrigation System", tall: false },
  { src: CHRISTMAS_LIGHTS_IMG, caption: "Christmas Light Installation", tall: false },
  { src: CUSTOM_WALL_IMG, caption: "Custom Wall Design", tall: false },
  { src: WALKWAY_IMG, caption: "Stone Walkway", tall: false },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-[oklch(0.97_0.015_80)]" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-14">
          <span className="font-body text-sm font-semibold tracking-widest text-[oklch(0.72_0.12_75)] uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
            Project Gallery
          </h2>
          <p className="font-body text-lg text-[oklch(0.45_0.04_55)] max-w-2xl mx-auto">
            Browse a selection of our recent landscaping projects across Durant
            and the surrounding communities of Bryan County. Click any image to view full-size.
          </p>
          <div className="w-16 h-1 bg-[oklch(0.72_0.12_75)] mx-auto mt-6 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`fade-up relative group overflow-hidden rounded-lg cursor-pointer ${
                item.tall ? "row-span-2" : "row-span-1"
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[oklch(0.22_0.07_145)]/0 group-hover:bg-[oklch(0.22_0.07_145)]/75 transition-all duration-300 flex items-end p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-display text-white font-semibold text-sm">
                    {item.caption}
                  </p>
                  <p className="font-body text-white/70 text-xs mt-1">
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook CTA */}
        <div className="fade-up text-center mt-10">
          <a
            href="https://www.facebook.com/2blandscaping/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[oklch(0.28_0.08_145)] text-[oklch(0.28_0.08_145)] hover:bg-[oklch(0.28_0.08_145)] hover:text-white font-body font-semibold px-6 py-3 rounded transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            See More on Facebook
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        image={galleryItems[selectedIndex]?.src || null}
        caption={galleryItems[selectedIndex]?.caption || ""}
        onClose={() => setModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
