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

const DEFAULT_OG_TAGS: OGMetaTags = {
  title: "2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK",
  description:
    "Transform your outdoor space with expert landscaping services in Durant, Oklahoma. 15+ years of professional lawn care, hardscapes, landscape design, and more. Free estimates!",
  image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/facebook-preview-2b-landscaping-2rnfVR5kPtj5okvV54H8DQ.webp",
  url: "https://2blandscapingsolutions.com/",
  type: "website",
  siteName: "2B Landscaping",
};

const PAGE_OG_TAGS: Record<string, Partial<OGMetaTags>> = {
  "/": {
    title: "2B Landscaping | Professional Lawn Care & Landscape Design in Durant, OK",
    description:
      "Transform your outdoor space with expert landscaping services in Durant, Oklahoma. 15+ years of professional lawn care, hardscapes, landscape design, and more. Free estimates!",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663585381002/i5QjDX2qxD7AFjjNdVDudk/facebook-preview-2b-landscaping-2rnfVR5kPtj5okvV54H8DQ.webp",
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
