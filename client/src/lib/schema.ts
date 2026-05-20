/**
 * Schema Markup Utilities
 * Generates JSON-LD structured data for SEO
 * Supports LocalBusiness, Service, and Organization schemas
 */

export function addSchemaMarkup(schema: Record<string, any>) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * LocalBusiness Schema for 2B Landscaping
 * Helps Google understand business details for local search
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://2blandscapingsolutions.com",
    name: "2B Landscaping",
    description:
      "Professional landscaping services in Durant, Oklahoma. Lawn care, landscape design, retaining walls, hardscapes, and more.",
    url: "https://2blandscapingsolutions.com",
    telephone: "(580) 916-2686",
    email: "2b.landscaping@gmail.com",
    image:
      "https://2blandscapingsolutions.com/manus-storage/logo-optimized_d414109b.webp",
    logo: {
      "@type": "ImageObject",
      url: "https://2blandscapingsolutions.com/manus-storage/logo-optimized_d414109b.webp",
      width: 250,
      height: 250,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hwy 48/78",
      addressLocality: "Durant",
      addressRegion: "OK",
      postalCode: "74701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7349,
      longitude: -96.3888,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Durant",
      "@id": "https://en.wikipedia.org/wiki/Durant,_Oklahoma",
    },
    sameAs: ["https://www.facebook.com/2blandscaping/"],
    founder: {
      "@type": "Person",
      name: "Kyle Bourne",
    },
    foundingDate: "2010",
    numberOfEmployees: "5-10",
    knowsAbout: [
      "Lawn Care",
      "Landscape Design",
      "Retaining Walls",
      "Hardscapes",
      "Irrigation Systems",
      "Sod Installation",
      "Masonry",
    ],
  };
}

/**
 * Service Schema for landscaping services
 * Helps Google understand specific services offered
 */
export function getServiceSchema() {
  const services = [
    {
      name: "Lawn Care & Maintenance",
      description:
        "Regular mowing, edging, trimming, and seasonal clean-ups to keep your lawn looking its best year-round.",
    },
    {
      name: "Landscape Design",
      description:
        "Custom landscape designs that transform your outdoor space into a beautiful, functional environment tailored to your vision.",
    },
    {
      name: "Retaining Walls",
      description:
        "Expertly built stone and block retaining walls that combine structural integrity with natural beauty.",
    },
    {
      name: "Sprinkler Installation",
      description:
        "Professional irrigation system design and installation to keep your lawn and gardens perfectly watered.",
    },
    {
      name: "Patios & Hardscapes",
      description:
        "Beautiful stone and paver patios, outdoor living spaces, and hardscape features built to last.",
    },
    {
      name: "Walkways & Paths",
      description:
        "Elegant stone and paver walkways that guide visitors through your property with style and safety.",
    },
    {
      name: "Sod Installation",
      description:
        "Fresh sod installation for instant lush, green lawns. We prepare the soil and lay sod for lasting results.",
    },
    {
      name: "Masonry",
      description:
        "Skilled masonry work including stone walls, decorative features, and structural elements for your property.",
    },
    {
      name: "Christmas Light Installation",
      description:
        "Professional holiday lighting design and installation to transform your home into a festive masterpiece.",
    },
    {
      name: "Fountain Installation",
      description:
        "Beautiful water features and fountains that add elegance and tranquility to your outdoor space.",
    },
    {
      name: "Pondscrapes",
      description:
        "Professional pond installation, maintenance, and cleaning to create a serene aquatic environment.",
    },
    {
      name: "Artificial Turf Installation",
      description:
        "High-quality artificial turf installation for a lush, low-maintenance lawn that looks beautiful year-round.",
    },
    {
      name: "Outdoor Landscape and Patio Lighting",
      description:
        "Professional outdoor lighting design and installation to enhance your landscape's beauty and functionality at night.",
    },
  ];

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "2B Landscaping",
      url: "https://2blandscapingsolutions.com",
      telephone: "(580) 916-2686",
    },
    areaServed: {
      "@type": "City",
      name: "Durant, OK",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://2blandscapingsolutions.com",
    },
  }));
}

/**
 * Organization Schema
 * Provides comprehensive organization information
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "2B Landscaping",
    url: "https://2blandscapingsolutions.com",
    logo: "https://2blandscapingsolutions.com/manus-storage/logo-optimized_d414109b.webp",
    description:
      "Professional landscaping company serving Durant, Oklahoma and Bryan County with expert lawn care, landscape design, and hardscape services.",
    sameAs: ["https://www.facebook.com/2blandscaping/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "(580) 916-2686",
      email: "2b.landscaping@gmail.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hwy 48/78",
      addressLocality: "Durant",
      addressRegion: "OK",
      postalCode: "74701",
      addressCountry: "US",
    },
  };
}

/**
 * BreadcrumbList Schema for navigation
 * Helps search engines understand site structure
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
