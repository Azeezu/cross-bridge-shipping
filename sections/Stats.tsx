import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section aria-label="Company statistics" className="relative z-10">
      <Container className="-mt-16 sm:-mt-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-2xl bg-white p-6 shadow-xl shadow-primary-900/10 ring-1 ring-primary-900/5 sm:grid-cols-3 sm:gap-0 sm:p-8">
          {STATS.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.08}
              className={cn(
                "flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left",
                index > 0 && "sm:border-l sm:border-primary-900/10 sm:pl-6",
              )}
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-900">
                <stat.icon className="size-6" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-2xl font-extrabold text-primary-900 sm:text-3xl">
                  {stat.value}
                </span>
                <span className="block text-sm text-ink-soft">{stat.label}</span>
              </span>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
