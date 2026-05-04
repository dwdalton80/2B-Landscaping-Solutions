import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  addSchemaMarkup,
  getLocalBusinessSchema,
  getServiceSchema,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from "./schema";

describe("Schema Markup Utilities", () => {
  beforeEach(() => {
    // Clear any existing script tags
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
  });

  afterEach(() => {
    // Clean up after each test
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
  });

  describe("addSchemaMarkup", () => {
    it("should add schema markup to document head", () => {
      const schema = { "@context": "https://schema.org", "@type": "Organization", name: "Test" };
      addSchemaMarkup(schema);

      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      expect(scripts.length).toBe(1);
      expect(scripts[0].textContent).toContain('"name":"Test"');
    });

    it("should add multiple schema markups", () => {
      const schema1 = { "@type": "Organization", name: "Test1" };
      const schema2 = { "@type": "LocalBusiness", name: "Test2" };

      addSchemaMarkup(schema1);
      addSchemaMarkup(schema2);

      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      expect(scripts.length).toBe(2);
    });
  });

  describe("getLocalBusinessSchema", () => {
    it("should return valid LocalBusiness schema", () => {
      const schema = getLocalBusinessSchema();

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("LocalBusiness");
      expect(schema.name).toBe("2B Landscaping");
      expect(schema.telephone).toBe("(580) 916-2686");
      expect(schema.email).toBe("2b.landscaping@gmail.com");
    });

    it("should include address information", () => {
      const schema = getLocalBusinessSchema();

      expect(schema.address).toBeDefined();
      expect(schema.address.addressLocality).toBe("Durant");
      expect(schema.address.addressRegion).toBe("OK");
      expect(schema.address.postalCode).toBe("74701");
    });

    it("should include opening hours", () => {
      const schema = getLocalBusinessSchema();

      expect(schema.openingHoursSpecification).toBeDefined();
      expect(Array.isArray(schema.openingHoursSpecification)).toBe(true);
      expect(schema.openingHoursSpecification.length).toBeGreaterThan(0);
    });

    it("should include geo coordinates", () => {
      const schema = getLocalBusinessSchema();

      expect(schema.geo).toBeDefined();
      expect(schema.geo["@type"]).toBe("GeoCoordinates");
      expect(schema.geo.latitude).toBe(33.7349);
      expect(schema.geo.longitude).toBe(-96.3888);
    });

    it("should include services offered", () => {
      const schema = getLocalBusinessSchema();

      expect(schema.knowsAbout).toBeDefined();
      expect(Array.isArray(schema.knowsAbout)).toBe(true);
      expect(schema.knowsAbout).toContain("Lawn Care");
      expect(schema.knowsAbout).toContain("Landscape Design");
    });
  });

  describe("getServiceSchema", () => {
    it("should return array of service schemas", () => {
      const services = getServiceSchema();

      expect(Array.isArray(services)).toBe(true);
      expect(services.length).toBe(12);
    });

    it("should include all required service fields", () => {
      const services = getServiceSchema();

      services.forEach((service) => {
        expect(service["@context"]).toBe("https://schema.org");
        expect(service["@type"]).toBe("Service");
        expect(service.name).toBeDefined();
        expect(service.description).toBeDefined();
        expect(service.provider).toBeDefined();
      });
    });

    it("should include specific services", () => {
      const services = getServiceSchema();
      const serviceNames = services.map((s) => s.name);

      expect(serviceNames).toContain("Lawn Care & Maintenance");
      expect(serviceNames).toContain("Landscape Design");
      expect(serviceNames).toContain("Retaining Walls");
      expect(serviceNames).toContain("Fountain Installation");
    });
  });

  describe("getOrganizationSchema", () => {
    it("should return valid Organization schema", () => {
      const schema = getOrganizationSchema();

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("Organization");
      expect(schema.name).toBe("2B Landscaping");
      expect(schema.url).toBe("https://2blandscapingsolutions.com");
    });

    it("should include contact information", () => {
      const schema = getOrganizationSchema();

      expect(schema.contactPoint).toBeDefined();
      expect(schema.contactPoint.telephone).toBe("(580) 916-2686");
      expect(schema.contactPoint.email).toBe("2b.landscaping@gmail.com");
    });

    it("should include social media links", () => {
      const schema = getOrganizationSchema();

      expect(schema.sameAs).toBeDefined();
      expect(Array.isArray(schema.sameAs)).toBe(true);
      expect(schema.sameAs).toContain("https://www.facebook.com/2blandscaping/");
    });
  });

  describe("getBreadcrumbSchema", () => {
    it("should return valid BreadcrumbList schema", () => {
      const items = [
        { name: "Home", url: "https://example.com" },
        { name: "Services", url: "https://example.com/services" },
      ];

      const schema = getBreadcrumbSchema(items);

      expect(schema["@context"]).toBe("https://schema.org");
      expect(schema["@type"]).toBe("BreadcrumbList");
      expect(schema.itemListElement).toBeDefined();
    });

    it("should include correct positions", () => {
      const items = [
        { name: "Home", url: "https://example.com" },
        { name: "Services", url: "https://example.com/services" },
        { name: "Gallery", url: "https://example.com/gallery" },
      ];

      const schema = getBreadcrumbSchema(items);

      expect(schema.itemListElement[0].position).toBe(1);
      expect(schema.itemListElement[1].position).toBe(2);
      expect(schema.itemListElement[2].position).toBe(3);
    });

    it("should map items correctly", () => {
      const items = [
        { name: "Home", url: "https://example.com" },
        { name: "Services", url: "https://example.com/services" },
      ];

      const schema = getBreadcrumbSchema(items);

      expect(schema.itemListElement[0].name).toBe("Home");
      expect(schema.itemListElement[0].item).toBe("https://example.com");
      expect(schema.itemListElement[1].name).toBe("Services");
      expect(schema.itemListElement[1].item).toBe("https://example.com/services");
    });
  });
});
