import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" aria-label="Our services" className="bg-surface-muted py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Services"
          title="Comprehensive Logistics Solutions"
          description="From origin to destination, we handle every mode and every mile with the same level of care."
          align="center"
          className="mx-auto max-w-2xl"
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <FadeIn as="li" key={service.title} delay={(index % 3) * 0.1} className="h-full">
              <div className="group h-full rounded-2xl border border-primary-900/5 bg-white p-7 shadow-sm shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary-900/10">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-900 transition-colors duration-300 group-hover:bg-secondary-500 group-hover:text-white">
                  <service.icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
                <span
                  aria-hidden="true"
                  className="mt-4 block h-0.5 w-8 rounded-full bg-secondary-500 transition-all duration-300 group-hover:w-14"
                />
              </div>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
