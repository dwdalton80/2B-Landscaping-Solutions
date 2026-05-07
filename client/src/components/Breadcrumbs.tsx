import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { addSchemaMarkup } from "@/lib/schema";
import { getBreadcrumbSchema } from "@/lib/breadcrumb-schema";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function Breadcrumbs() {
  const [location] = useLocation();

  useEffect(() => {
    const breadcrumbs = getBreadcrumbs();
    if (breadcrumbs.length > 0) {
      addSchemaMarkup(getBreadcrumbSchema(breadcrumbs));
    }
  }, [location]);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Home", path: "/" },
    ];

    if (location === "/") {
      return [];
    }

    const segments = location.split("/").filter(Boolean);

    if (segments[0] === "services") {
      // Services breadcrumb links to home and scrolls to services section
      breadcrumbs.push({ label: "Services", path: "/#services" });

      if (segments[1]) {
        // Format service name from URL slug
        const serviceName = segments[1]
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        breadcrumbs.push({ label: serviceName, path: location });
      }
    } else if (segments[0] === "about") {
      breadcrumbs.push({ label: "About", path: "/about" });
    } else if (segments[0] === "gallery") {
      breadcrumbs.push({ label: "Gallery", path: "/gallery" });
    } else if (segments[0] === "contact") {
      breadcrumbs.push({ label: "Contact", path: "/contact" });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200 py-2" aria-label="Breadcrumb">
      <div className="container max-w-4xl px-4">
        <ol className="flex items-center gap-1.5 text-xs sm:text-sm overflow-x-auto">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-700 font-medium whitespace-nowrap" aria-current="page">{crumb.label}</span>
              ) : (
                <a
                  href={crumb.path}
                  className="text-amber-600 hover:text-amber-700 transition-colors whitespace-nowrap"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
