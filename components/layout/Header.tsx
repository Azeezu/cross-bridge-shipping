"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header>
      <div
        className={cn(
          "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm transition-shadow duration-300",
          isScrolled ? "border-primary-900/5 shadow-[0_4px_24px_-8px_rgba(11,31,58,0.15)]" : "border-transparent",
        )}
      >
        <Container className="flex mh-[4.8rem] items-center justify-between md:h-24">
          <a href="#home" aria-label="Cross Bridge Shipping — Home" className="shrink-0">
            {/* <Logo variant="dark" /> */}
            <Logo variant="dark" />
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative inline-flex items-center px-4 py-2 text-sm font-semibold transition-colors",
                        isActive ? "text-secondary-600" : "text-primary-900 hover:text-secondary-600",
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          "absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-secondary-500 transition-transform duration-200",
                          isActive && "scale-x-100",
                        )}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#contact" size="md" icon={ArrowRight} className="hidden lg:inline-flex">
              Get Quote
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex size-11 items-center justify-center rounded-lg text-primary-900 transition-colors hover:bg-primary-50 lg:hidden"
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </Container>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[4.5rem] z-40 origin-top border-b border-primary-900/5 bg-white shadow-xl transition-all duration-300 ease-out md:top-20 lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-semibold transition-colors",
                activeHash === link.href
                  ? "bg-secondary-50 text-secondary-600"
                  : "text-primary-900 hover:bg-primary-50",
              )}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" onClick={closeMenu} icon={ArrowRight} className="mt-3 justify-center">
            Get Quote
          </Button>
        </Container>
      </div>

      {isMenuOpen && (
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          onClick={closeMenu}
          className="fixed inset-0 z-30 bg-primary-950/40 backdrop-blur-[2px] lg:hidden"
        />
      )}
    </header>
  );
}
