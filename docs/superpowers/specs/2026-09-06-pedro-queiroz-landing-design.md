# Pedro Queiroz Landing Page Design

## Goal

Build a fast, mobile-first one-page portfolio site for Pedro Queiroz, a mobile video maker in Araguaina - TO, focused on converting visitors from Instagram and WhatsApp into quote requests.

## Visual Direction

Use the approved "cinema de bolso" direction, softened into an accessible local-service tone. The site should feel cinematic, warm, and professional without luxury distance: charcoal background, warm off-white text, amber accents, thin frame lines, subtle grain, and video-slot placeholders that show where real thumbnails will be added later.

## Content

The landing page includes Hero, Sobre, Servicos, Portfolio with exactly 4 project slots for now, Depoimentos, Contato with WhatsApp CTA, contact form, footer, privacy page, and custom 404. Editable copy must be marked with `[TEXTO: ...]` where Pedro needs to replace content later.

## Technical Design

Use Next.js App Router, TypeScript, Tailwind CSS, and Vercel-ready configuration. Keep the home page mostly server-rendered. Use client components only for cookie consent and the contact form. Provide a `/api/contact` endpoint that validates required fields, phone/email-like contact data, and a honeypot before forwarding to a configurable `CONTACT_FORM_ENDPOINT`.

## SEO, Privacy, and Infrastructure

Set `pt-BR`, local SEO metadata, Open Graph, robots, sitemap, JSON-LD, favicon/manifest assets, security headers, GA4 consent gate via `NEXT_PUBLIC_GA_ID`, and a short privacy policy. The README documents install, env vars, Vercel deploy, Registro.br/domain DNS, and HTTPS confirmation.

## Verification

Run automated tests for form validation and key content counts, then run lint/build. Manual QA should check mobile layout, links, WhatsApp prefilled text, form behavior with configured endpoint, privacy page, and 404.
