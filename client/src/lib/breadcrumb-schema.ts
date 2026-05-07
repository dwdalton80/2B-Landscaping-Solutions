/**
 * Generate BreadcrumbList schema markup for SEO
 * Helps search engines understand site structure and improves breadcrumb display in search results
 */
export function getBreadcrumbSchema(breadcrumbs: Array<{ label: string; path: string }>) {
  const baseUrl = "https://2blandscapingsolutions.com";
  
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.label,
    "item": `${baseUrl}${crumb.path}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement,
  };
}
