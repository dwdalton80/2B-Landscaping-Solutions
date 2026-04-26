/* ============================================================
   ContactSection — Oklahoma Craftsman Design
   Split layout: contact info left, form right
   Warm parchment background with forest green accents
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Facebook, Clock, Send, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

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

  const sendEstimate = trpc.contact.sendEstimate.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEstimate.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      });
      setSubmitted(true);
      toast.success("Estimate request sent! We'll contact you soon.");
    } catch (error) {
      toast.error("Failed to send estimate request. Please try again or call us.");
      console.error("Error sending estimate:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[oklch(0.97_0.015_80)] relative"
      style={{
        clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)",
        marginTop: "-4%",
        paddingTop: "calc(8% + 4rem)",
      }}
      ref={sectionRef}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-14">
          <span className="font-body text-sm font-semibold tracking-widest text-[oklch(0.72_0.12_75)] uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
            Request a Free Estimate
          </h2>
          <p className="font-body text-lg text-[oklch(0.45_0.04_55)] max-w-2xl mx-auto">
            Ready to transform your outdoor space? Contact us today for a free,
            no-obligation estimate. We serve Durant and all of Bryan County.
          </p>
          <div className="w-16 h-1 bg-[oklch(0.72_0.12_75)] mx-auto mt-6 rounded-full" />
        </div>

        {/* Google Map */}
        <div className="fade-up mb-12 rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.4567890123456!2d-96.3857!3d33.9425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1b8c8c8c8c8d%3A0x8c8c8c8c8c8c8c8c!2sDurant%2C%20OK%2074701!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="fade-up">
              <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.04_55)] mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(580) 916-2686",
                    href: "tel:5809162686",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "2b.landscaping@gmail.com",
                    href: "mailto:2b.landscaping@gmail.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Hwy 48/78, Durant, OK 74701",
                    href: "https://maps.google.com/?q=Durant,+OK",
                  },
                  {
                    icon: Facebook,
                    label: "Facebook",
                    value: "facebook.com/2blandscaping",
                    href: "https://www.facebook.com/2blandscaping/",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[oklch(0.28_0.08_145)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-200">
                      <Icon className="w-5 h-5 text-white group-hover:text-[oklch(0.18_0.05_55)] transition-colors" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-[oklch(0.52_0.04_55)] uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      <div className="font-body text-base text-[oklch(0.28_0.08_145)] group-hover:text-[oklch(0.38_0.09_145)] font-medium transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="fade-up bg-[oklch(0.28_0.08_145)] rounded-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[oklch(0.85_0.10_75)]" />
                <h4 className="font-display text-lg font-semibold">Service Hours</h4>
              </div>
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between">
                  <span className="text-white/75">Monday – Friday</span>
                  <span className="font-medium">7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/75">Saturday</span>
                  <span className="font-medium">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/75">Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs text-white/60">
                Emergency services available — call for details
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 fade-up">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-white rounded-2xl shadow-md border border-[oklch(0.88_0.025_80)]">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.28_0.08_145)]/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-[oklch(0.28_0.08_145)]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.04_55)] mb-2">
                  Message Received!
                </h3>
                <p className="font-body text-[oklch(0.45_0.04_55)] max-w-sm">
                  Thank you for reaching out. We'll get back to you within 24
                  hours to discuss your project.
                </p>
                <p className="font-body text-sm text-[oklch(0.45_0.04_55)] mt-4">
                  Or call us directly:{" "}
                  <a href="tel:5809162686" className="text-[oklch(0.28_0.08_145)] font-semibold">
                    (580) 916-2686
                  </a>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-md border border-[oklch(0.88_0.025_80)] p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-sm font-semibold text-[oklch(0.35_0.04_55)] block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-[oklch(0.88_0.025_80)] rounded-lg px-4 py-2.5 font-body text-sm text-[oklch(0.22_0.04_55)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.28_0.08_145)]/30 focus:border-[oklch(0.28_0.08_145)] transition-all bg-[oklch(0.99_0.005_80)]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-semibold text-[oklch(0.35_0.04_55)] block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(580) 000-0000"
                      className="w-full border border-[oklch(0.88_0.025_80)] rounded-lg px-4 py-2.5 font-body text-sm text-[oklch(0.22_0.04_55)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.28_0.08_145)]/30 focus:border-[oklch(0.28_0.08_145)] transition-all bg-[oklch(0.99_0.005_80)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-semibold text-[oklch(0.35_0.04_55)] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-[oklch(0.88_0.025_80)] rounded-lg px-4 py-2.5 font-body text-sm text-[oklch(0.22_0.04_55)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.28_0.08_145)]/30 focus:border-[oklch(0.28_0.08_145)] transition-all bg-[oklch(0.99_0.005_80)]"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-semibold text-[oklch(0.35_0.04_55)] block mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-[oklch(0.88_0.025_80)] rounded-lg px-4 py-2.5 font-body text-sm text-[oklch(0.22_0.04_55)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.28_0.08_145)]/30 focus:border-[oklch(0.28_0.08_145)] transition-all bg-[oklch(0.99_0.005_80)]"
                  >
                    <option value="">Select a service...</option>
                    <option value="lawn-care">Lawn Care & Maintenance</option>
                    <option value="landscape-design">Landscape Design</option>
                    <option value="retaining-walls">Retaining Walls</option>
                    <option value="sprinkler">Sprinkler Installation</option>
                    <option value="patios">Patios & Hardscapes</option>
                    <option value="walkways">Walkways</option>
                    <option value="sod">Sod Installation</option>
                    <option value="masonry">Masonry</option>
                    <option value="christmas-lights">Christmas Light Installation</option>
                    <option value="other">Other / Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-sm font-semibold text-[oklch(0.35_0.04_55)] block mb-1.5">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project, property size, and any specific requirements..."
                    className="w-full border border-[oklch(0.88_0.025_80)] rounded-lg px-4 py-2.5 font-body text-sm text-[oklch(0.22_0.04_55)] focus:outline-none focus:ring-2 focus:ring-[oklch(0.28_0.08_145)]/30 focus:border-[oklch(0.28_0.08_145)] transition-all bg-[oklch(0.99_0.005_80)] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sendEstimate.isPending}
                  className="w-full flex items-center justify-center gap-2 bg-[oklch(0.28_0.08_145)] hover:bg-[oklch(0.38_0.09_145)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-body font-semibold py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-base"
                >
                  <Send className="w-4 h-4" />
                  {sendEstimate.isPending ? "Sending..." : "Send My Request"}
                </button>

                <p className="font-body text-xs text-[oklch(0.52_0.04_55)] text-center">
                  We typically respond within 24 hours. For urgent requests, call{" "}
                  <a href="tel:5809162686" className="text-[oklch(0.28_0.08_145)] font-medium">
                    (580) 916-2686
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
