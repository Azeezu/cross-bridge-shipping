"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" aria-label="Our process" className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Process"
          title="From Start to Finish, We've Got You Covered"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px 0px" }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute inset-x-[12.5%] top-8 hidden border-t-2 border-dashed border-secondary-400 sm:block"
          />

          <ol className="relative grid grid-cols-1 gap-y-12 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn
                as="li"
                key={step.number}
                delay={index * 0.15}
                className="flex flex-col items-center text-center"
              >
                <span className="relative flex size-16 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white shadow-lg shadow-primary-900/20">
                  <step.icon className="size-7" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-secondary-500 font-display text-[0.65rem] font-bold text-white ring-4 ring-white">
                    {step.number}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary-900">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </FadeIn>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
