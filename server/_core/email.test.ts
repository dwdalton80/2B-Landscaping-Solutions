import { describe, it, expect } from "vitest";
import { formatContactEmailHtml, EmailOptions } from "./email";

describe("Email Service", () => {
  describe("formatContactEmailHtml", () => {
    it("should format contact form data as HTML email", () => {
      const data = {
        name: "John Smith",
        email: "john@example.com",
        phone: "(580) 123-4567",
        service: "Landscape Design",
        message: "I would like a quote for my backyard.",
      };

      const html = formatContactEmailHtml(data);

      expect(html).toContain("New Estimate Request");
      expect(html).toContain("John Smith");
      expect(html).toContain("john@example.com");
      expect(html).toContain("(580) 123-4567");
      expect(html).toContain("Landscape Design");
      expect(html).toContain("I would like a quote for my backyard.");
    });

    it("should handle missing optional fields", () => {
      const data = {
        name: "Jane Doe",
        email: "jane@example.com",
        message: "Please contact me about your services.",
      };

      const html = formatContactEmailHtml(data);

      expect(html).toContain("Jane Doe");
      expect(html).toContain("jane@example.com");
      expect(html).toContain("Please contact me about your services.");
    });

    it("should escape HTML special characters", () => {
      const data = {
        name: "John <Script>",
        email: "test@example.com",
        message: 'I want "quotes" & <tags>',
      };

      const html = formatContactEmailHtml(data);

      expect(html).not.toContain("<Script>");
      expect(html).toContain("&lt;Script&gt;");
      expect(html).toContain("&quot;");
      expect(html).toContain("&amp;");
    });

    it("should convert newlines to HTML line breaks", () => {
      const data = {
        name: "Test User",
        email: "test@example.com",
        message: "Line 1\nLine 2\nLine 3",
      };

      const html = formatContactEmailHtml(data);

      expect(html).toContain("Line 1<br>Line 2<br>Line 3");
    });
  });
});
