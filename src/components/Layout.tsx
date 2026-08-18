import type { ReactNode } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-18">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
}: {
  label: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-navy/70" />
      <div className="container-abm py-24 lg:py-32">
        <p className="label-abm animate-fade-in">{label}</p>
        <h1 className="animate-fade-in mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-in mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-abm py-20 text-center lg:py-28">
        <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
          Let's Build Better Together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/70">
          Tell us what your project needs. Our team can help with product sourcing, material
          selection and reliable supply.
        </p>
        <a
          href="/contact"
          className="arrow-move mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-background hover:text-navy"
        >
          Request a Quote
          <span className="arrow inline-block">→</span>
        </a>
      </div>
    </section>
  );
}
