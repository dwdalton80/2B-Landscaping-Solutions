import React, { useState } from "react";
import { useLocation } from "wouter";
import { Lamp, ArrowLeft, Phone } from "lucide-react";
import { setOGTags } from "@/lib/og-tags";
import { addSchemaMarkup } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ServiceRequestModal from "@/components/ServiceRequestModal";
import SocialShareButtons from "@/components/SocialShareButtons";
import Footer from "@/components/Footer";

const relatedServices = [
  { id: "landscape-design", name: "Landscape Design" },
  { id: "patios-hardscapes", name: "Patios & Hardscapes" },
  { id: "fountain-installation", name: "Fountain Installation" },
];

export default function OutdoorLightingService() {
  const [, navigate] = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    document.title = "Outdoor Landscape and Patio Lighting | 2B Landscaping";
    setOGTags("/services/outdoor-lighting");

    // Add Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Outdoor Landscape and Patio Lighting",
      description:
        "Professional outdoor lighting design and installation to enhance your landscape's beauty and functionality at night. From accent lighting to pathway illumination, we create stunning outdoor lighting solutions.",
      provider: {
        "@type": "LocalBusiness",
        name: "2B Landscaping",
        telephone: "(580) 916-2686",
      },
      areaServed: [
        { "@type": "City", name: "Durant" },
        { "@type": "City", name: "Bryan County" },
      ],
      serviceType: "Outdoor Lighting Installation",
    };
    addSchemaMarkup(serviceSchema);
  }, []);

  const handleRelatedServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <div className="min-h-screen bg-[oklch(0.97_0.015_80)] overflow-x-hidden">
        <Navbar />
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <button
              onClick={() => navigate("/services/outdoor-lighting")}
              className="flex items-center gap-2 text-[oklch(0.72_0.12_75)] hover:text-[oklch(0.28_0.08_145)] mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </button>

            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center">
                  <Lamp className="w-8 h-8 text-[oklch(0.18_0.07_145)]" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Outdoor Landscape and Patio Lighting
                </h1>
                <p className="text-lg text-[oklch(0.45_0.04_55)]">
                  Enhance your outdoor spaces with professional lighting design and installation
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
                  Service Overview
                </h2>
                <p className="text-[oklch(0.45_0.04_55)] mb-4 leading-relaxed">
                  Transform your outdoor environment after dark with professional landscape and patio lighting. Our expert designers create custom lighting solutions that enhance your property's beauty, improve safety, and extend your outdoor living season.
                </p>
                <p className="text-[oklch(0.45_0.04_55)] mb-4 leading-relaxed">
                  From subtle accent lighting that highlights architectural features to functional pathway and patio illumination, we design systems that perfectly complement your landscape design and meet your specific needs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[oklch(0.22_0.04_55)] mb-4">
                  What We Offer
                </h2>
                <ul className="space-y-3 text-[oklch(0.45_0.04_55)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-bold mt-1">•</span>
                    <span>Landscape accent lighting to highlight trees, shrubs, and hardscapes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-bold mt-1">•</span>
                    <span>Patio and deck lighting for outdoor entertaining spaces</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-bold mt-1">•</span>
                    <span>Pathway and step lighting for safety and navigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-bold mt-1">•</span>
                    <span>Architectural lighting for home facades and features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-bold mt-1">•</span>
                    <span>Energy-efficient LED lighting systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[oklch(0.72_0.12_75)] font-bold mt-1">•</span>
                    <span>Smart lighting controls and automation options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[oklch(0.97_0.015_80)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[oklch(0.22_0.04_55)] mb-10 text-center">
              Benefits of Professional Outdoor Lighting
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Enhanced Beauty
                </h3>
                <p className="text-[oklch(0.45_0.04_55)]">
                  Highlight your landscape's best features and create stunning visual effects that showcase your property's character and design.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Improved Safety
                </h3>
                <p className="text-[oklch(0.45_0.04_55)]">
                  Illuminate pathways, steps, and outdoor areas to prevent accidents and provide secure navigation around your property.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Extended Living
                </h3>
                <p className="text-[oklch(0.45_0.04_55)]">
                  Enjoy your outdoor spaces well into the evening with professionally designed lighting that creates ambiance and functionality.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Energy Efficiency
                </h3>
                <p className="text-[oklch(0.45_0.04_55)]">
                  LED lighting systems reduce energy consumption while providing superior brightness and color quality compared to traditional options.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Property Value
                </h3>
                <p className="text-[oklch(0.45_0.04_55)]">
                  Professional outdoor lighting increases curb appeal and can enhance your property's market value and perceived worth.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[oklch(0.22_0.04_55)] mb-3">
                  Smart Control
                </h3>
                <p className="text-[oklch(0.45_0.04_55)]">
                  Modern lighting systems offer automation and remote control options for convenient management and customization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[oklch(0.22_0.04_55)] mb-10 text-center">
              Our Lighting Design Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description:
                    "We meet with you to understand your vision, needs, and budget for outdoor lighting.",
                },
                {
                  step: "2",
                  title: "Design",
                  description:
                    "Our designers create a custom lighting plan that highlights your landscape's best features.",
                },
                {
                  step: "3",
                  title: "Installation",
                  description:
                    "Professional installation of all lighting fixtures and electrical systems with attention to detail.",
                },
                {
                  step: "4",
                  title: "Maintenance",
                  description:
                    "Ongoing support and maintenance to keep your lighting system operating at peak performance.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.72_0.12_75)] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[oklch(0.22_0.04_55)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.04_55)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[oklch(0.28_0.08_145)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Illuminate Your Outdoor Space?
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Let our expert designers create the perfect outdoor lighting solution for your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[oklch(0.72_0.12_75)] hover:bg-[oklch(0.65_0.12_75)] text-[oklch(0.18_0.07_145)] font-semibold px-8 py-4 rounded transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request a Free Consultation
              </button>
              <a
                href="tel:5809162686"
                className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[oklch(0.28_0.08_145)] font-semibold px-8 py-4 rounded transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call (580) 916-2686
              </a>
            </div>
          </div>
        </section>

        {/* Social Sharing */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h3 className="text-lg font-bold text-[oklch(0.22_0.04_55)] mb-4">
              Share This Service
            </h3>
            <SocialShareButtons
              title="Outdoor Landscape and Patio Lighting | 2B Landscaping"
              url={window.location.href}
            />
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-[oklch(0.97_0.015_80)]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[oklch(0.22_0.04_55)] mb-10 text-center">
              Related Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleRelatedServiceClick(service.id)}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[oklch(0.72_0.12_75)]"
                >
                  <h3 className="text-lg font-bold text-[oklch(0.22_0.04_55)] mb-2 group-hover:text-[oklch(0.28_0.08_145)]">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.04_55)] mb-4">
                    Explore how this service complements your outdoor lighting design.
                  </p>
                  <span className="text-sm font-semibold text-[oklch(0.72_0.12_75)]">
                    Learn More →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedService="outdoor-lighting"
        />
        <Footer />
      </div>
    </>
  );
}
