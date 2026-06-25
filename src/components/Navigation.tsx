"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";

const links = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-line/60"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primaria"
        className="container-wide flex items-center justify-between h-16"
      >
        <Link
          href="/"
          className="font-display font-bold text-brand-deep text-base sm:text-xl md:text-[22px] tracking-tight whitespace-nowrap"
          aria-label="Life Design Cards, home"
        >
          Life Design Cards
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-ui text-sm text-[#1A1A1A]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button href="#starter-kit" size="md" className="whitespace-nowrap">
            <span aria-hidden className="hidden sm:inline">→</span>
            Prendi il KIT
          </Button>
        </div>
      </nav>
    </header>
  );
}
