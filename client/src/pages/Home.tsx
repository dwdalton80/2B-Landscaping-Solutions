/* ============================================================
   Home Page — 2B Landscaping
   Oklahoma Craftsman Design System
   Sections: Hero → Services → About → WhyChooseUs → Gallery → Contact → Footer
   ============================================================ */
import React from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { setOGTags } from "@/lib/og-tags";
import { addSchemaMarkup, getLocalBusinessSchema, getOrganizationSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Schema markup is added in useEffect for better performance
export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  // Set SEO title, Open Graph tags, and schema markup
  React.useEffect(() => {
    document.title = "2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK";
    setOGTags("/");
    
    // Add LocalBusiness schema for local SEO
    addSchemaMarkup(getLocalBusinessSchema());
    
    // Add Organization schema
    addSchemaMarkup(getOrganizationSchema());
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[oklch(0.97_0.015_80)] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      </div>
    </>
  );
}
