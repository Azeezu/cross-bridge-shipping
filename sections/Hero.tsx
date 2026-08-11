"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

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
    <section id="home" aria-label="Introduction" className="relative">
      <div className="relative isolate overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Container ship and cargo aircraft against the Dubai skyline at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        {/* Keeps the navy headline legible over the bright sky on the left. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-white/85 via-white/45 to-transparent"
        />

        <Container className="relative pb-40 pt-20 sm:pb-48 sm:pt-24 lg:pb-56 lg:pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="max-w-2xl"
          >
            <motion.span
              variants={item}
              className="block font-display text-sm font-semibold uppercase tracking-[0.22em] text-secondary-600 sm:text-base"
            >
              Connecting Markets
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-primary-900 sm:text-5xl lg:text-6xl"
            >
              Delivering Trust
            </motion.h1>

            <motion.span
              variants={item}
              aria-hidden="true"
              className="mt-6 block h-0.5 w-28 rounded-full bg-secondary-500"
            />

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-ink sm:text-lg"
            >
              {SITE_CONFIG.legalName} is a premier freight forwarding and logistics solutions
              provider, connecting businesses worldwide through seamless and reliable shipping
              services.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#services" size="lg" icon={ArrowRight}>
                Our Services
              </Button>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                icon={ArrowRight}
                className="bg-white/80 backdrop-blur-sm"
              >
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Service strip — overlaps the banner, mirroring the live site. */}
      <Container className="relative -mt-32 pb-12 lg:-mt-40">
        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-primary-100 shadow-2xl shadow-primary-900/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex gap-3 bg-white p-5">
              <Icon className="size-7 shrink-0 text-secondary-500" aria-hidden="true" />
              <div>
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-primary-900">
                  {title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{description}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
