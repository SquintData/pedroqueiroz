import { describe, expect, it } from "vitest";
import { finalWhatsappUrl, portfolioProjects, siteConfig } from "./site";

describe("site content", () => {
  it("starts with four portfolio project slots", () => {
    expect(portfolioProjects).toHaveLength(4);
  });

  it("uses Pedro's WhatsApp number in every CTA", () => {
    expect(siteConfig.whatsappNumber).toBe("5563992435592");
    expect(siteConfig.whatsappUrl).toContain("5563992435592");
    expect(finalWhatsappUrl).toContain("5563992435592");
  });

  it("includes the approved prefilled WhatsApp message", () => {
    expect(decodeURIComponent(finalWhatsappUrl)).toContain(
      "Olá, vi seu site e quero fazer um orçamento!"
    );
  });
});
