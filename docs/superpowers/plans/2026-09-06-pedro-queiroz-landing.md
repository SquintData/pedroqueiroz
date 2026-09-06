# Pedro Queiroz Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-ready Next.js portfolio landing page for Pedro Queiroz with 4 portfolio project placeholders, WhatsApp conversion, contact form, SEO, privacy, cookies, and documentation.

**Architecture:** The site uses App Router server components for static sections and metadata, with small client components for cookie consent and contact form interactivity. Shared data lives in typed modules so content, navigation, services, project slots, and testimonials remain easy to edit. Contact validation is isolated in a pure TypeScript module and reused by the API route.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Vitest, Testing Library, ESLint, Vercel.

---

### Task 1: Project Scaffold and Tests

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `src/lib/contact.test.ts`
- Create: `src/content/site.test.ts`

- [ ] **Step 1:** Add project configuration for Next.js, Tailwind, TypeScript, Vitest, and scripts: `dev`, `build`, `start`, `lint`, `test`.
- [ ] **Step 2:** Write failing tests for contact validation: valid submissions pass, honeypot blocks spam, missing required fields fail, invalid contact strings fail.
- [ ] **Step 3:** Write failing tests for site content: portfolio has exactly 4 project slots, WhatsApp URL uses number `5563992435592`, final CTA has the expected prefilled text.
- [ ] **Step 4:** Run `npm test`; expected failure is missing modules/functions because implementation is not present yet.

### Task 2: Shared Content and Contact Validation

**Files:**
- Create: `src/content/site.ts`
- Create: `src/lib/contact.ts`

- [ ] **Step 1:** Implement typed site content for nav, services, four portfolio projects, testimonials, WhatsApp links, Instagram link, email placeholder, and JSON-LD data.
- [ ] **Step 2:** Implement `validateContactPayload` with required fields, phone/email-like validation, service validation, message length, and honeypot handling.
- [ ] **Step 3:** Run `npm test`; expected result is passing unit tests.

### Task 3: App Shell, Pages, and UI Components

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/not-found.tsx`
- Create: `src/app/privacy/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/components/*.tsx`
- Create: `src/app/api/contact/route.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/app/og/route.tsx`

- [ ] **Step 1:** Build the server-rendered landing sections with mobile-first layout and the approved accessible cinematic style.
- [ ] **Step 2:** Build `CookieConsent` so GA loads only after accept, with reject stored locally.
- [ ] **Step 3:** Build `ContactForm` with client-side validation feedback and server submission to `/api/contact`.
- [ ] **Step 4:** Build the API route to validate, reject spam, and forward to `CONTACT_FORM_ENDPOINT` when configured.
- [ ] **Step 5:** Add privacy, 404, robots, sitemap, Open Graph image route, JSON-LD, and security headers.
- [ ] **Step 6:** Run `npm test`, `npm run lint`, and `npm run build`.

### Task 4: Public Assets and Documentation

**Files:**
- Create: `public/favicon.svg`
- Create: `public/favicon-16x16.png`
- Create: `public/favicon-32x32.png`
- Create: `public/apple-touch-icon.png`
- Create: `public/site.webmanifest`
- Create: `.env.example`
- Create: `README.md`

- [ ] **Step 1:** Add favicon assets and manifest.
- [ ] **Step 2:** Document environment variables, install commands, Vercel deploy, domain purchase/connection, Registro.br DNS, HTTPS confirmation, and QA checklist.
- [ ] **Step 3:** Run final verification: `npm test`, `npm run lint`, `npm run build`.
