import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { EnquiryForm } from "@/sections/EnquiryForm";
import { WHY_CHOOSE_US_FEATURES } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why choose us"
      className="relative overflow-hidden bg-primary-900 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-primary-700/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full bg-secondary-500/10 blur-3xl"
      />

      <Container className="relative grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
        <FadeIn direction="left">
          <SectionTitle eyebrow="Why Choose Us" title="Delivering Excellence Every Time" tone="light" />
          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {WHY_CHOOSE_US_FEATURES.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary-400">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <h3 className="font-display text-base font-bold text-white">{feature.title}</h3>
                  <span className="mt-1 block text-sm leading-relaxed text-primary-100/75">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn direction="right">
          <EnquiryForm />
        </FadeIn>
      </Container>
    </section>
  );
}
