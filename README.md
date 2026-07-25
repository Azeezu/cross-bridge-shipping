# Cross Bridge Shipping — Website

Production-ready single-page marketing site for Cross Bridge Shipping L.L.C.,
built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm run start
```

## Project structure

```
app/                 Routes, layout, metadata, sitemap/robots, generated OG image & favicon
components/ui/        Button, Container, SectionTitle, FadeIn, Logo — generic, reusable
components/layout/    TopBar, Header, Footer, WhatsAppButton — page chrome
components/icons/     Hand-rolled social/brand SVGs (lucide-react ships no brand marks)
sections/             One component per homepage section (Hero, Stats, About, …)
lib/                  constants.ts (all site copy/data in one place) + small utils
types/                Shared TypeScript interfaces
public/images/        Drop static image assets here (see note below)
```

Every section pulls its copy, icons and links from `lib/constants.ts` — that's
the one file to edit for wording, phone/email/address, nav links, services,
stats, etc.

## Before you deploy — please check these

1. **Logo.** The uploaded logo file wasn't readable in the sandbox this was
   built in (it displayed inline in chat but wasn't saved to disk), so the
   wordmark in `components/ui/Logo.tsx` is a close hand-coded recreation —
   same lettering, layout and wave-arrow flourish, built from real text so
   it can be recolored for the dark footer. If you'd like the exact original
   file instead, drop it at `public/images/logo.png` and swap the `<Logo />`
   usages in `Header.tsx`/`Footer.tsx` for a `next/image` `<Image>` tag.
2. **Domain.** `SITE_CONFIG.url` in `lib/constants.ts` is set to
   `https://www.cbsdxb.com` as a placeholder (inferred from the reference
   screenshot's email domain). Update it to the real domain — it feeds the
   canonical URL, sitemap, and Open Graph tags.
3. **Social links.** `SOCIAL_LINKS` in `lib/constants.ts` currently point to
   `#`. Add the real Facebook/LinkedIn/Instagram profile URLs.
4. **Contact details.** Phone, email, address and the WhatsApp number in
   `SITE_CONFIG` are taken directly from the brief — double-check they're
   the real ones before launch.

## Notes on a few implementation choices

- **Images.** The hero, about and contact photos are real, free-license
  Unsplash photos, loaded directly from Unsplash's CDN via `next/image`
  (remote patterns are configured in `next.config.ts`). Swap any of them by
  changing the `src` in `sections/Hero.tsx`, `About.tsx`, or `Contact.tsx`.
- **Enquiry form.** Validates client-side only, as requested — there's no
  backend. `sections/EnquiryForm.tsx` simulates a submit; the `handleSubmit`
  function is where a real API route or email service would plug in.
- **Map.** The Contact section embeds Google Maps via a plain `output=embed`
  URL, so it works with no API key. Update the query in
  `SITE_CONFIG.mapEmbedSrc` once you have the exact address.
- **Favicon & OG image.** Both are generated at build time from code
  (`app/icon.tsx`, `app/opengraph-image.tsx`) — no design files required,
  and both are easy to restyle since they're just JSX + inline styles.

## Tech stack

Next.js 15.5 (App Router) · React 19 · TypeScript (strict mode) ·
Tailwind CSS v4 · Framer Motion · lucide-react
