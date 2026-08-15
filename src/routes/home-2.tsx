import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Compass,
  HeadphonesIcon,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
} from "lucide-react";

import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { homeCategories, allBrands } from "@/data/catalog";
import heroImg from "@/assets/h2-hero.jpg";
import aboutImg from "@/assets/h2-about.jpg";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/home-2")({
  head: () => ({
    meta: [
      { title: "Home 2 | ABM Building Materials Supplier in the UAE" },
      {
        name: "description",
        content:
          "Alternative ABM homepage design: quality building materials, trusted brands and reliable supply solutions for contractors, developers and retailers across the UAE.",
      },
      { property: "og:title", content: "Home 2 | ABM Building Materials Supplier in the UAE" },
      {
        property: "og:description",
        content:
          "Quality building materials, trusted brands and reliable supply solutions across the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home2Page,
});

const trust = [
  { n: "01", label: "Quality Products" },
  { n: "02", label: "Reliable Supply" },
  { n: "03", label: "Expert Guidance" },
  { n: "04", label: "Timely Delivery" },
];

const services = [
  {
    n: "01",
    icon: Boxes,
    title: "Bulk & Retail Supply",
    text: "Materials for projects of different sizes, from individual requirements to larger developments.",
  },
  {
    n: "02",
    icon: Truck,
    title: "Timely Delivery",
    text: "Reliable logistics support to keep materials moving when your project needs them.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Custom Orders",
    text: "Special product sourcing based on specific client requirements.",
  },
  {
    n: "04",
    icon: Compass,
    title: "Expert Advice",
    text: "Practical guidance to help customers select suitable products and solutions.",
  },
];

const industries = [
  { title: "Contractors", text: "Project material supply and dependable sourcing support." },
  { title: "Real Estate Developers", text: "Reliable materials for development projects." },
  { title: "Retailers", text: "Wholesale supply and product sourcing." },
  { title: "DIY Homeowners", text: "Quality products for renovation and personal projects." },
];

const why = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Quality products sourced from trusted manufacturers and recognized brands.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    text: "Competitive pricing without compromising product quality.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    text: "Professional support throughout the purchasing process.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Supply",
    text: "Efficient sourcing and dependable product availability.",
  },
];

function Home2Page() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background pb-28 lg:pb-36">
        <div className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[38rem] rounded-full bg-accent/60 blur-3xl" />
        <div className="container-abm grid items-center gap-12 pt-14 lg:grid-cols-2 lg:gap-16 lg:pt-20">
          <div className="animate-fade-in">
            <p className="label-abm">Building Materials | UAE</p>
            <h1 className="mt-6 text-4xl leading-[1.03] font-semibold sm:text-5xl lg:text-6xl">
              BUILDING BETTER
              <br />
              STARTS WITH
              <br />
              THE RIGHT <span className="text-primary">MATERIALS.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quality building materials, trusted brands and reliable supply solutions for
              contractors, developers, retailers and customers across the UAE.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="arrow-move inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
              >
                Request a Quote <ArrowRight className="arrow size-4" />
              </Link>
              <Link
                to="/products-2"
                className="arrow-move inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Explore Products <ArrowRight className="arrow size-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="image-reveal overflow-hidden rounded-xl" data-visible="true">
              <img
                src={heroImg}
                alt="Modern UAE tower under construction at golden hour"
                width={1280}
                height={1600}
                className="aspect-4/5 w-full object-cover"
              />
            </div>

            <div className="glass-card float-soft absolute -bottom-6 -left-2 max-w-56 rounded-lg p-5 sm:-left-8 sm:max-w-64">
              <Sparkles className="size-5 text-primary" />
              <p className="mt-3 text-xs font-semibold tracking-[0.14em] uppercase">
                Quality Products
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Trusted brands and carefully selected materials.
              </p>
            </div>

            <div
              className="glass-card float-soft absolute top-10 -right-2 max-w-52 rounded-lg p-5 sm:-right-6"
              style={{ animationDelay: "1.2s" }}
            >
              <Truck className="size-5 text-primary" />
              <p className="mt-3 text-xs font-semibold tracking-[0.14em] uppercase">
                Reliable Supply
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Professional sourcing and delivery support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative z-10 -mt-20">
        <div className="container-abm">
          <div className="glass-card grid gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t, i) => (
              <Reveal key={t.n} delay={i * 70}>
                <div className="group h-full border-border/60 bg-background/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:shadow-[0_20px_40px_-28px_rgba(8,21,38,0.45)] sm:border-r last:sm:border-r-0">
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary">{t.n}</span>
                  <p className="mt-3 text-base font-semibold transition-colors group-hover:text-primary">
                    {t.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-abm grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-xl">
              <img
                src={aboutImg}
                alt="Modern architectural interior in the UAE"
                width={1200}
                height={1400}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div className="glass-card absolute right-4 -bottom-6 rounded-lg px-6 py-4">
              <div className="flex gap-6 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                <span>Quality</span>
                <span className="text-primary">Reliability</span>
                <span>Support</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <p className="label-abm">About ABM</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl">
              MORE THAN MATERIALS.
              <br />A PARTNER YOU CAN RELY ON.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Arafa Building Materials is a trusted UAE building materials supplier providing
              quality products, professional support and reliable supply solutions for projects of
              different sizes.
            </p>
            <Link
              to="/about"
              className="arrow-move mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Discover ABM <ArrowRight className="arrow size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-abm">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-abm">Our Products</p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
                EVERYTHING YOU NEED
                <br />
                TO BUILD BETTER.
              </h2>
            </div>
            <Link
              to="/products-2"
              className="arrow-move inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View All Categories <ArrowRight className="arrow size-4" />
            </Link>
          </div>

          <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 lg:grid-cols-4">
            {homeCategories.map((cat, i) => {
              const big = i === 0 || i === 5;
              return (
                <Reveal
                  key={cat.name}
                  delay={(i % 4) * 60}
                  className={big ? "col-span-2 row-span-2" : ""}
                >
                  <Link
                    to="/products-2/$category"
                    params={{ category: cat.slug }}
                    className="group relative block h-full overflow-hidden rounded-xl border border-transparent transition-colors hover:border-primary"
                  >
                    <img
                      src={cat.image}
                      alt={`${cat.name} supplied by ABM`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-navy/45 transition-colors duration-500 group-hover:bg-navy/60" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="arrow-move glass-card-dark flex items-center justify-between gap-3 rounded-lg px-4 py-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-navy-foreground">
                            {cat.name}
                          </p>
                          {big && (
                            <p className="mt-1 line-clamp-2 text-xs text-navy-foreground/70">
                              {cat.description}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="arrow size-4 shrink-0 text-primary" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-abm">
          <p className="label-abm">How We Help</p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
            MORE THAN MATERIALS.
            <br />
            COMPLETE SUPPLY SUPPORT.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 80}>
                <article className="card-lift glass-card h-full rounded-xl p-8">
                  <div className="flex items-start justify-between">
                    <s.icon className="size-7 text-primary" strokeWidth={1.5} />
                    <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-abm">
          <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">WHO WE SERVE</h2>
          <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {industries.map((ind, i) => (
              <Reveal
                key={ind.title}
                delay={i * 70}
                className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-auto"
              >
                <article className="card-lift h-full rounded-xl border border-border bg-background p-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{ind.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ABM */}
      <section className="relative isolate overflow-hidden bg-navy py-20 text-navy-foreground lg:py-28">
        <img
          src={warehouse}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
        />
        <div className="container-abm">
          <p className="label-abm">Why ABM</p>
          <h2 className="mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
            Quality. Reliability.
            <br />
            Experience. Support.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <article className="glass-card-dark h-full rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1">
                  <w.icon className="size-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-6 text-base font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{w.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="container-abm">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-abm">Trusted Brands</p>
              <h2 className="mt-5 text-3xl leading-tight font-semibold sm:text-4xl">
                BRANDS YOU CAN
                <br />
                BUILD WITH.
              </h2>
            </div>
            <Link
              to="/products-2"
              className="arrow-move inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View All Brands <ArrowRight className="arrow size-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {allBrands.map((brand) => (
              <div
                key={brand}
                className="flex h-24 items-center justify-center bg-background px-4 text-center transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:shadow-[0_18px_36px_-26px_rgba(8,21,38,0.45)] hover:outline hover:outline-primary"
              >
                <span className="text-sm font-semibold tracking-tight text-muted-foreground/70 transition-colors duration-300 hover:text-primary">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy py-24 text-navy-foreground lg:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="container-abm text-center">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-semibold sm:text-5xl">
            READY TO BUILD
            <br />
            BETTER?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-navy-foreground/70">
            Tell us what your project needs and our team can help with sourcing, material selection
            and reliable supply.
          </p>
          <Link
            to="/contact"
            className="arrow-move mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-background hover:text-navy"
          >
            Request a Quote <ArrowRight className="arrow size-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
