"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Phone, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pt-10 pb-24 sm:pt-14 lg:pb-32 lg:pt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 hidden size-[32rem] rounded-full bg-secondary-100/50 blur-3xl lg:block"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.span variants={item} className="section-eyebrow">
            Welcome to {SITE_CONFIG.legalName}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-primary-900 sm:text-5xl lg:text-[3.25rem]"
          >
            Reliable Shipping &amp; Logistics Solutions{" "}
            <span className="text-secondary-500">Worldwide</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            {SITE_CONFIG.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" size="lg" icon={ArrowRight}>
              Get Quote
            </Button>
            <Button href={SITE_CONFIG.phoneHref} variant="outline" size="lg" icon={Phone} iconPosition="left">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl shadow-primary-900/20">
            <Image
              src="https://images.unsplash.com/photo-1741792191212-60d22002bd1b?q=80&w=1600&auto=format&fit=crop"
              alt="Large container ship loaded with cargo at a busy port terminal"
              fill
              priority
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 80vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-primary-900/10 sm:flex">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
              <Users className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-lg font-bold text-primary-900">120+</span>
              <span className="block text-xs text-ink-soft">Global Partners</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
