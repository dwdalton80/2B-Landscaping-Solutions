import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImage {
  before: string;
  after: string;
  title: string;
  description?: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  projects: ProjectImage[];
}

const galleryData: ServiceCategory[] = [
  {
    id: "lawn-care",
    name: "Lawn Care & Maintenance",
    projects: [
      {
        before: "/manus-storage/lawncarebefore_8d33d706.jpg",
        after: "/manus-storage/lawncareafter_5fd54c09.jpg",
        title: "Complete Lawn Restoration",
        description: "Bare ground transformed into lush, healthy lawn with professional landscaping",
      },
    ],
  },
  {
    id: "landscape-design",
    name: "Landscape Design",
    projects: [
      {
        before: "/manus-storage/Landscapebefore_5d266747.jpg",
        after: "/manus-storage/LandscapeAfter_801cb607.jpg",
        title: "Modern Landscape Design",
        description: "Contemporary landscape with hardscape features",
      },
    ],
  },
  {
    id: "retaining-walls",
    name: "Retaining Walls",
    projects: [
      {
        before: "/manus-storage/retainingwallbefore_3b2f43ad.jpg",
        after: "/manus-storage/retainingwallafter_b55109f4.jpg",
        title: "Stone Retaining Wall",
        description: "Professional stone wall installation",
      },
    ],
  },
];

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg cursor-col-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img src={after} alt={`${title} - After`} className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (Overlay) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img src={before} alt={`${title} - Before`} className="w-full h-full object-cover" />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
          <div className="flex gap-1">
            <ChevronLeft className="w-4 h-4 text-[oklch(0.28_0.08_145)]" />
            <ChevronRight className="w-4 h-4 text-[oklch(0.28_0.08_145)]" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm font-semibold">
        After
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState(galleryData[0].id);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const activeData = galleryData.find((cat) => cat.id === activeCategory);
  const currentProject = activeData?.projects[currentProjectIndex];

  const handlePrevious = () => {
    if (activeData) {
      setCurrentProjectIndex((prev) => (prev === 0 ? activeData.projects.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (activeData) {
      setCurrentProjectIndex((prev) => (prev === activeData.projects.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest text-[oklch(0.72_0.12_75)] uppercase mb-3 block">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
            Before & After Gallery
          </h2>
          <p className="font-body text-base sm:text-lg text-[oklch(0.45_0.04_55)] max-w-2xl mx-auto">
            See the transformations we've created for our clients. Drag the slider to compare before and after photos.
          </p>
          <div className="w-16 h-1 bg-[oklch(0.72_0.12_75)] mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {galleryData.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentProjectIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-[oklch(0.72_0.12_75)] text-white shadow-lg"
                  : "bg-gray-100 text-[oklch(0.22_0.04_55)] hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Display */}
        {currentProject && (
          <div className="max-w-4xl mx-auto">
            {/* Before/After Slider */}
            <BeforeAfterSlider before={currentProject.before} after={currentProject.after} title={currentProject.title} />

            {/* Project Info */}
            <div className="mt-8 text-center">
              <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.04_55)] mb-2">{currentProject.title}</h3>
              {currentProject.description && (
                <p className="font-body text-[oklch(0.45_0.04_55)] mb-6">{currentProject.description}</p>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-[oklch(0.72_0.12_75)] text-white hover:bg-[oklch(0.65_0.12_75)] transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Project Counter */}
                <span className="font-body text-sm text-[oklch(0.45_0.04_55)]">
                  {currentProjectIndex + 1} / {activeData?.projects.length}
                </span>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-[oklch(0.72_0.12_75)] text-white hover:bg-[oklch(0.65_0.12_75)] transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {activeData?.projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentProjectIndex ? "bg-[oklch(0.72_0.12_75)] w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
