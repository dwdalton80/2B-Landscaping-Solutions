import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { setOGTags, getOGTags } from "./og-tags";

describe("OG Tags Utility", () => {
  beforeEach(() => {
    // Clear all meta tags before each test
    document.querySelectorAll("meta[property^='og:']").forEach((tag) => tag.remove());
    document.querySelectorAll("meta[name^='twitter:']").forEach((tag) => tag.remove());
  });

  afterEach(() => {
    // Clean up after each test
    document.querySelectorAll("meta[property^='og:']").forEach((tag) => tag.remove());
    document.querySelectorAll("meta[name^='twitter:']").forEach((tag) => tag.remove());
  });

  it("should set OG tags for homepage", () => {
    setOGTags("/");

    const titleTag = document.querySelector('meta[property="og:title"]');
    const descTag = document.querySelector('meta[property="og:description"]');
    const imageTag = document.querySelector('meta[property="og:image"]');
    const typeTag = document.querySelector('meta[property="og:type"]');

    expect(titleTag?.getAttribute("content")).toContain("2B Landscaping");
    expect(descTag?.getAttribute("content")).toContain("Transform your outdoor space");
    expect(imageTag?.getAttribute("content")).toContain("og-preview-home.jpg");
    expect(typeTag?.getAttribute("content")).toBe("website");
  });

  it("should set OG tags for services page", () => {
    setOGTags("/services");

    const titleTag = document.querySelector('meta[property="og:title"]');
    const descTag = document.querySelector('meta[property="og:description"]');
    const imageTag = document.querySelector('meta[property="og:image"]');

    expect(titleTag?.getAttribute("content")).toContain("Our Services");
    expect(descTag?.getAttribute("content")).toContain("landscaping services");
    expect(imageTag?.getAttribute("content")).toContain("og-preview-services.jpg");
  });

  it("should set OG tags for gallery page", () => {
    setOGTags("/gallery");

    const titleTag = document.querySelector('meta[property="og:title"]');
    const descTag = document.querySelector('meta[property="og:description"]');
    const imageTag = document.querySelector('meta[property="og:image"]');

    expect(titleTag?.getAttribute("content")).toContain("Project Gallery");
    expect(descTag?.getAttribute("content")).toContain("portfolio");
    expect(imageTag?.getAttribute("content")).toContain("og-preview-gallery.jpg");
  });

  it("should set Twitter Card meta tags", () => {
    setOGTags("/");

    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    expect(twitterCard?.getAttribute("content")).toBe("summary_large_image");
    expect(twitterTitle?.getAttribute("content")).toContain("2B Landscaping");
    expect(twitterDesc?.getAttribute("content")).toBeTruthy();
    expect(twitterImage?.getAttribute("content")).toBeTruthy();
  });

  it("should allow custom tag overrides", () => {
    setOGTags("/", {
      title: "Custom Title",
      description: "Custom Description",
    });

    const titleTag = document.querySelector('meta[property="og:title"]');
    const descTag = document.querySelector('meta[property="og:description"]');

    expect(titleTag?.getAttribute("content")).toBe("Custom Title");
    expect(descTag?.getAttribute("content")).toBe("Custom Description");
  });

  it("should get OG tags for a page", () => {
    const tags = getOGTags("/");

    expect(tags.title).toContain("2B Landscaping");
    expect(tags.description).toBeTruthy();
    expect(tags.image).toContain("og-preview");
    expect(tags.url).toBeTruthy();
    expect(tags.type).toBe("website");
  });

  it("should update existing meta tags instead of duplicating", () => {
    setOGTags("/");
    const countBefore = document.querySelectorAll('meta[property="og:title"]').length;

    setOGTags("/services");
    const countAfter = document.querySelectorAll('meta[property="og:title"]').length;

    expect(countBefore).toBe(1);
    expect(countAfter).toBe(1);
  });

  it("should set og:url correctly", () => {
    setOGTags("/");

    const urlTag = document.querySelector('meta[property="og:url"]');
    expect(urlTag?.getAttribute("content")).toContain("2blandscapingsolutions.com");
  });

  it("should set og:site_name correctly", () => {
    setOGTags("/");

    const siteNameTag = document.querySelector('meta[property="og:site_name"]');
    expect(siteNameTag?.getAttribute("content")).toBe("2B Landscaping");
  });
});
