import { describe, expect, it } from "vitest";
import { validateContactPayload } from "./contact";

const validPayload = {
  name: "Maria Silva",
  contact: "(63) 99243-5592",
  service: "reels",
  message: "Quero um orcamento para videos semanais.",
  company: ""
};

describe("validateContactPayload", () => {
  it("accepts a complete contact request", () => {
    const result = validateContactPayload(validPayload);

    expect(result.ok).toBe(true);
  });

  it("blocks honeypot spam submissions", () => {
    const result = validateContactPayload({ ...validPayload, company: "spam" });

    expect(result.ok).toBe(false);
    expect(result.errors.company).toContain("spam");
  });

  it("rejects missing required fields", () => {
    const result = validateContactPayload({
      name: "",
      contact: "",
      service: "",
      message: "",
      company: ""
    });

    expect(result.ok).toBe(false);
    expect(result.errors.name).toContain("nome");
    expect(result.errors.contact).toContain("telefone");
    expect(result.errors.service).toContain("servico");
    expect(result.errors.message).toContain("mensagem");
  });

  it("rejects contact values that are not phone or email-like", () => {
    const result = validateContactPayload({ ...validPayload, contact: "abc" });

    expect(result.ok).toBe(false);
    expect(result.errors.contact).toContain("telefone");
  });
});
