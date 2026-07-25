# public/images

Currently empty — every image on the site is either loaded from Unsplash's
CDN (hero, about, contact — see `lib/constants.ts` and each section file for
the exact URLs) or generated at build time from code (favicon, Open Graph
image). The site logo is coded as well (`components/ui/Logo.tsx`).

Drop static assets in here if you'd rather self-host any of the above —
for example the original `logo.png`, once you have it — and reference them
with `next/image` (e.g. `<Image src="/images/logo.png" ... />`).
