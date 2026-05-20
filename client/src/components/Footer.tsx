/* ============================================================
   Footer — Oklahoma Craftsman Design
   Dark forest green footer with amber accents
   ============================================================ */
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const services = [
  "Lawn Care & Maintenance",
  "Landscape Design",
  "Retaining Walls",
  "Sprinkler Installation",
  "Patios & Hardscapes",
  "Walkways",
  "Sod Installation",
  "Masonry",
  "Fountain Installation",
  "Pondscrapes",
  "Artificial Turf Installation",
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(135deg, oklch(0.18 0.07 145) 0%, oklch(0.14 0.05 145) 100%)",
      }}
    >
      {/* Main Footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-shrink-0">
              <picture>
                <source srcSet="/manus-storage/logo-mobile_8d28475a.webp" media="(max-width: 640px)" type="image/webp" />
                <source srcSet="/manus-storage/logo-optimized_d414109b.webp" type="image/webp" />
                <img
                  src="/manus-storage/logo-optimized_d414109b.webp"
                  alt="2B Landscaping Logo"
                  className="h-10 sm:h-12 w-auto flex-shrink-0"
                  loading="eager"
                />
              </picture>
              <div className="min-w-0">
                <span className="font-display font-bold text-sm sm:text-base md:text-lg text-white leading-none block">
                  Landscaping
                </span>
                <span className="text-[oklch(0.85_0.10_75)] text-xs font-body">
                  Durant, Oklahoma
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-white/70 leading-relaxed mb-5">
              Locally owned and operated landscaping company serving Durant, OK
              and Bryan County since 2010. Quality craftsmanship on every project.
            </p>
            <a
              href="https://www.facebook.com/2blandscaping/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors"
            >
              <Facebook className="w-4 h-4" />
              Follow on Facebook
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-[oklch(0.85_0.10_75)] mb-4 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="font-body text-sm text-white/70 hover:text-[oklch(0.85_0.10_75)] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base font-semibold text-[oklch(0.85_0.10_75)] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-body text-sm text-white/70 hover:text-[oklch(0.85_0.10_75)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-[oklch(0.85_0.10_75)] mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:5809162686"
                className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-[oklch(0.85_0.10_75)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[oklch(0.72_0.12_75)] flex-shrink-0" />
                (580) 916-2686
              </a>
              <a
                href="mailto:2b.landscaping@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-white/70 hover:text-[oklch(0.85_0.10_75)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[oklch(0.72_0.12_75)] flex-shrink-0" />
                2b.landscaping@gmail.com
              </a>
              <div className="flex items-start gap-3 font-body text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[oklch(0.72_0.12_75)] flex-shrink-0 mt-0.5" />
                <span>Hwy 48/78<br />Durant, OK 74701</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:5809162686"
              className="mt-5 flex items-center justify-center gap-2 bg-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.80_0.12_75)] text-[oklch(0.18_0.05_55)] font-body font-bold px-4 py-3 rounded-lg transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call for a Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/50">
            &copy; {new Date().getFullYear()} 2B Landscaping. All rights reserved. Durant, OK.
          </p>
          <p className="font-body text-xs text-white/40">
            Serving Durant, Ardmore, Sherman, and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
