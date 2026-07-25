import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section id="about" aria-label="About us" className="py-20 lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="left">
          <SectionTitle eyebrow="About Us" title="About Cross Bridge Shipping" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              Cross Bridge Shipping L.L.C. is a Dubai-based logistics company offering a full range of
              shipping and supply chain solutions, from first mile to final delivery.
            </p>
            <p>
              We are committed to providing reliable, efficient and cost-effective services to
              businesses around the world, backed by a team that treats every shipment like its own.
            </p>
          </div>
          <Button href="#why-choose-us" variant="outline" icon={ArrowRight} className="mt-8">
            Read More
          </Button>
        </FadeIn>

        <FadeIn direction="right" className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 z-0 hidden h-full w-full rounded-3xl border-4 border-secondary-500 sm:block"
          />
          <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl shadow-primary-900/15">
            <Image
              src="https://images.unsplash.com/photo-1773126378915-793b5c48fb38?q=80&w=1400&auto=format&fit=crop"
              alt="Shipping containers and a truck at a busy logistics terminal"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 520px, (min-width: 640px) 80vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
