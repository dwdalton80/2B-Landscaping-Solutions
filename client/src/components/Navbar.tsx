/* ============================================================
   Navbar — Oklahoma Craftsman Design
   Sticky top nav, forest green background on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.22_0.07_145)] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
        >
          <picture>
            <source srcSet="/manus-storage/logo-mobile_8d28475a.webp" media="(max-width: 640px)" type="image/webp" />
            <source srcSet="/manus-storage/logo-optimized_d414109b.webp" type="image/webp" />
            <img
              src="/manus-storage/logo-optimized_d414109b.webp"
              alt="2B Landscaping Logo"
              className="h-10 sm:h-12 md:h-14 w-auto flex-shrink-0"
              loading="eager"
            />
          </picture>
          <span className="font-display font-bold text-xs sm:text-sm md:text-base text-white leading-none block">
            Landscaping
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-body font-500 text-white/90 hover:text-[oklch(0.85_0.10_75)] transition-colors duration-200 text-sm tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[oklch(0.72_0.12_75)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Phone */}
        <a
          href="tel:5809162686"
          className="hidden md:flex items-center gap-2 bg-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.80_0.12_75)] text-[oklch(0.18_0.05_55)] font-body font-semibold px-4 py-2 rounded transition-colors duration-200 text-sm"
        >
          <Phone className="w-4 h-4" />
          (580) 916-2686
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.22_0.07_145)] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="block py-3 text-white/90 hover:text-[oklch(0.85_0.10_75)] font-body text-base border-b border-white/10 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:5809162686"
            className="mt-3 flex items-center gap-2 bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.05_55)] font-semibold px-4 py-3 rounded justify-center"
          >
            <Phone className="w-4 h-4" />
            (580) 916-2686
          </a>
        </div>
      )}
    </header>
  );
}
