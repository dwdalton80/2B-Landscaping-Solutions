/* ============================================================
   ImageModal — Lightbox for gallery images
   Click to open, ESC or click outside to close
   ============================================================ */
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  image: string | null;
  caption: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageModal({
  isOpen,
  image,
  caption,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative max-w-4xl max-h-[90vh] w-full mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2 z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src={image}
            alt={caption}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="mt-4 text-center">
            <p className="font-display text-xl font-semibold text-white">
              {caption}
            </p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-body font-medium px-4 py-2.5 rounded-lg transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={onNext}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-body font-medium px-4 py-2.5 rounded-lg transition-colors"
            aria-label="Next image"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Keyboard hint */}
        <p className="text-center text-white/50 text-xs mt-4 font-body">
          Press ESC to close • Use arrow keys to navigate
        </p>
      </div>
    </div>
  );
}
