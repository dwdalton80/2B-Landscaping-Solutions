/**
 * Open Graph Meta Tags Manager
 * Dynamically sets OG meta tags for social media sharing
 */

export interface OGMetaTags {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
  siteName?: string;
}

// Force fresh deployment - cache buster
const DEFAULT_OG_TAGS: OGMetaTags = {
  title: "2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK",
  description:
    "Professional landscaping services in Durant, OK. Lawn care, design, hardscapes & more. 15+ years serving Bryan County.",
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/facebook-preview-2b-landscaping-v2-mgyY2gJDeiMF3j4UiPSYku.webp",
  url: "https://2blandscapingsolutions.com/",
  type: "website",
  siteName: "2B Landscaping",
};

const PAGE_OG_TAGS: Record<string, Partial<OGMetaTags>> = {
  "/": {
    title: "2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK",
    description:
      "Transform your outdoor space with expert landscaping services in Durant, Oklahoma. 15+ years of professional lawn care, hardscapes, landscape design, and more. Free estimates!",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/facebook-preview-2b-landscaping-v2-mgyY2gJDeiMF3j4UiPSYku.webp",
    type: "website",
  },
  "/services": {
    title: "Our Services | 2B Landscaping",
    description:
      "Explore our comprehensive landscaping services: lawn care, landscape design, retaining walls, patios, sprinkler systems, artificial turf, fountains, and more.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/og-preview-services.jpg",
    type: "website",
  },
  "/gallery": {
    title: "Project Gallery | 2B Landscaping",
    description:
      "View our portfolio of completed landscaping projects across Durant and Bryan County. See the quality and craftsmanship we bring to every project.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/og-preview-gallery.jpg",
    type: "website",
  },
  "/about": {
    title: "About 2B Landscaping | Locally Owned & Operated",
    description:
      "Learn about 2B Landscaping, a family-owned business serving Durant, OK since 2010. Discover our commitment to quality craftsmanship and community.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/og-preview-about.jpg",
    type: "website",
  },
  "/contact": {
    title: "Get a Free Estimate | 2B Landscaping",
    description:
      "Ready to transform your outdoor space? Contact 2B Landscaping today for a free, no-obligation estimate. Serving Durant and Bryan County, OK.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/og-preview-contact.jpg",
    type: "website",
  },
  "/services/lawn-care": {
    title: "Professional Lawn Care Services in Durant, OK | 2B Landscaping",
    description: "Expert lawn care & maintenance in Durant, OK. Mowing, fertilization, weed control, aeration & more. 15+ years experience. Free estimates!",
    type: "website",
  },
  "/services/landscape-design": {
    title: "Custom Landscape Design in Durant, OK | 2B Landscaping",
    description: "Professional landscape design services in Durant, Oklahoma. Transform your outdoor space with custom designs. Free consultation!",
    type: "website",
  },
  "/services/retaining-walls": {
    title: "Retaining Wall Installation in Durant, OK | 2B Landscaping",
    description: "Expert retaining wall installation in Durant, OK. Stone & block walls for erosion control. Durable, beautiful construction. Free estimates!",
    type: "website",
  },
  "/services/patios-hardscapes": {
    title: "Patio & Hardscape Installation in Durant, OK | 2B Landscaping",
    description: "Beautiful stone patios & hardscapes in Durant, Oklahoma. Expert outdoor living spaces. Increase property value. Free estimates!",
    type: "website",
  },
  "/services/sprinkler-installation": {
    title: "Sprinkler System Installation in Durant, OK | 2B Landscaping",
    description: "Professional sprinkler system design & installation in Durant, OK. Efficient irrigation solutions. Free estimates!",
    type: "website",
  },
  "/services/sod-installation": {
    title: "Sod Installation in Durant, OK | 2B Landscaping",
    description: "Fresh sod installation for instant green lawns in Durant, Oklahoma. Professional soil preparation. Lasting results. Free estimates!",
    type: "website",
  },
  "/services/artificial-turf": {
    title: "Artificial Turf Installation in Durant, OK | 2B Landscaping",
    description: "Premium artificial turf installation in Durant, OK. Low-maintenance lawn solutions. Year-round green appearance. Free estimates!",
    type: "website",
  },
  "/services/walkways": {
    title: "Walkway & Path Installation in Durant, OK | 2B Landscaping",
    description: "Elegant stone & paver walkways in Durant, Oklahoma. Professional path installation for beauty & safety. Free estimates!",
    type: "website",
  },
  "/services/masonry": {
    title: "Masonry Services in Durant, OK | 2B Landscaping",
    description: "Expert masonry work in Durant, Oklahoma. Stone walls, decorative features & structural elements. Quality craftsmanship. Free estimates!",
    type: "website",
  },
  "/services/fountain-installation": {
    title: "Fountain Installation in Durant, OK | 2B Landscaping",
    description: "Beautiful water features & fountains in Durant, OK. Add elegance & tranquility to your landscape. Free estimates!",
    type: "website",
  },
  "/services/pond-scrapes": {
    title: "Pond Installation & Maintenance in Durant, OK | 2B Landscaping",
    description: "Professional pond design & installation in Durant, Oklahoma. Create serene water features. Expert maintenance. Free estimates!",
    type: "website",
  },
  "/services/christmas-lights": {
    title: "Christmas Light Installation in Durant, OK | 2B Landscaping",
    description: "Professional holiday lighting design & installation in Durant, OK. Transform your home into a festive masterpiece. Energy-efficient LED!",
    type: "website",
  },
  "/services/irrigation-installation": {
    title: "Irrigation System Installation in Durant, OK | 2B Landscaping",
    description: "Professional irrigation system design & installation in Durant, Oklahoma. Keep your landscape perfectly watered. Free estimates!",
    type: "website",
  },
};

/**
 * Set Open Graph meta tags for a specific page
 * @param path - The page path (e.g., '/', '/services', '/gallery')
 * @param customTags - Optional custom tags to override defaults
 */
export function setOGTags(path: string, customTags?: Partial<OGMetaTags>) {
  const pageTags = PAGE_OG_TAGS[path] || {};
  const tags = {
    ...DEFAULT_OG_TAGS,
    ...pageTags,
    ...customTags,
  };

  // Update or create meta tags
  updateMetaTag("og:title", tags.title);
  updateMetaTag("og:description", tags.description);
  updateMetaTag("og:image", tags.image);
  updateMetaTag("og:image:width", "1200");
  updateMetaTag("og:image:height", "630");
  updateMetaTag("og:image:type", "image/webp");
  updateMetaTag("og:url", tags.url);
  updateMetaTag("og:type", tags.type || "website");
  updateMetaTag("og:site_name", tags.siteName || "2B Landscaping");

  // Also update standard meta tags for better SEO
  updateMetaTag("description", tags.description, "name");
  updateMetaTag("twitter:title", tags.title, "name");
  updateMetaTag("twitter:description", tags.description, "name");
  updateMetaTag("twitter:image", tags.image, "name");
  updateMetaTag("twitter:image:alt", tags.title, "name");
  updateMetaTag("twitter:card", "summary_large_image", "name");
}

/**
 * Helper function to update or create a meta tag
 * Supports both property and name attributes for different meta tag types
 */
function updateMetaTag(
  name: string,
  content: string,
  attribute: "property" | "name" = "property"
) {
  // Remove existing tag if it exists to avoid duplicates
  const existing = document.querySelector(`meta[${attribute}="${name}"]`);
  if (existing) {
    existing.remove();
  }

  // Create and append new tag
  const tag = document.createElement("meta");
  tag.setAttribute(attribute, name);
  tag.content = content;
  document.head.appendChild(tag);
}

/**
 * Get the current page's OG tags
 */
export function getOGTags(path: string): OGMetaTags {
  const pageTags = PAGE_OG_TAGS[path] || {};
  return {
    ...DEFAULT_OG_TAGS,
    ...pageTags,
  };
}
