import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { CONTACT_DETAILS, SITE_CONFIG } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" aria-label="Contact us" className="bg-surface-muted py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <FadeIn direction="left">
            <SectionTitle eyebrow="Get In Touch" title="We're Here to Help" />
            <ul className="mt-8 space-y-5">
              {CONTACT_DETAILS.map((detail) => {
                const row = (
                  <>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-900 text-secondary-400">
                      <detail.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
                        {detail.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-semibold text-primary-900">{detail.value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={detail.label}>
                    {detail.href ? (
                      <a href={detail.href} className="flex items-start gap-4 transition-opacity hover:opacity-80">
                        {row}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{row}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="overflow-hidden rounded-2xl shadow-lg shadow-primary-900/10">
            <iframe
              title={`${SITE_CONFIG.legalName} location on Google Maps`}
              src={SITE_CONFIG.mapEmbedSrc}
              className="h-72 w-full border-0 lg:h-full lg:min-h-[22rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </FadeIn>

          <FadeIn
            delay={0.2}
            className="relative h-72 overflow-hidden rounded-2xl shadow-lg shadow-primary-900/10 lg:h-full lg:min-h-[22rem]"
          >
            <Image
              src="https://images.unsplash.com/photo-1704716553676-4240c68ca57b?q=80&w=1200&auto=format&fit=crop"
              alt="Cargo ship docked at a port terminal at night"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
