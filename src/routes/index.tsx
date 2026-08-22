import { createFileRoute, Link } from "@tanstack/react-router";
import home_1 from "@/assets/home/home-1.webp"
import {
  ArrowRight,
  Boxes,
  Truck,
  Headset,
  ShieldCheck,
  PackageSearch,
  BadgeCheck,
  Wallet,
  Building2,
  HardHat,
  Store,
  Home,
} from "lucide-react";

import { Layout, CtaBand } from "@/components/Layout";
import { Reveal, RevealImage } from "@/components/Reveal";
import { categories, brands, brandLogos } from "@/data/site";
import hero from "@/assets/hero.jpg";
import warehouse from "@/assets/warehouse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arafa Building Materials | Building Materials Supplier UAE" },
      {
        name: "description",
        content:
          "ABM is a UAE building materials supplier delivering quality construction materials, plumbing and sanitary products, electrical items, hardware and tools with reliable supply.",
      },
      { property: "og:title", content: "Arafa Building Materials | Building Materials Supplier UAE" },
      {
        property: "og:description",
        content:
          "Quality materials, trusted brands and reliable supply for contractors, developers, retailers and homeowners across the UAE.",
      },
    ],
  }),
  component: HomePage,
});

const values = [
  {
    n: "01",
    title: "Quality Products",
    text: "Carefully selected materials sourced from trusted manufacturers and recognized brands.",
  },
  {
    n: "02",
    title: "Reliable Supply",
    text: "Dependable sourcing and supply support for projects of different sizes.",
  },
  {
    n: "03",
    title: "Expert Guidance",
    text: "Practical support to help customers select suitable products and solutions.",
  },
  {
    n: "04",
    title: "Timely Delivery",
    text: "Logistics support designed to keep materials moving when projects need them.",
  },
];

const services = [
  {
    icon: Boxes,
    title: "Bulk & Retail Supply",
    text: "Materials for projects of different sizes, from individual requirements to larger developments.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    text: "Reliable logistics support for on-time site deliveries.",
  },
  {
    icon: PackageSearch,
    title: "Custom Orders",
    text: "Special product sourcing based on specific client requirements.",
  },
  {
    icon: Headset,
    title: "Expert Advice",
    text: "Practical guidance on material selection and product usage.",
  },
];

const industries = [
  { icon: HardHat, title: "Contractors", text: "Full-scale project material supply." },
  {
    icon: Building2,
    title: "Real Estate Developers",
    text: "Support for large development projects.",
  },
  { icon: Store, title: "Retailers", text: "Competitive wholesale supply." },
  { icon: Home, title: "DIY Homeowners", text: "Quality materials for renovation and personal projects." },
];

const why = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    text: "Premium, certified materials from trusted manufacturers.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    text: "Competitive pricing without compromising quality.",
  },
  { icon: Headset, title: "Customer Support", text: "Dedicated service from start to finish." },
  {
    icon: ShieldCheck,
    title: "Reliable Supply",
    text: "Efficient sourcing and dependable product availability.",
  },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={hero}
          alt="Modern UAE architecture and construction at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
        <div className="container-abm flex min-h-[86vh] flex-col justify-center py-24 lg:py-32">
          <p className="label-abm animate-fade-in">Building Materials Supplier · UAE</p>
          <h1 className="animate-fade-in mt-7 max-w-4xl text-4xl leading-[1.03] font-semibold sm:text-6xl lg:text-7xl">
            Quality Materials.
            <br />
            Trusted Brands.
            <br />
            <span className="text-primary">Reliable Supply.</span>
          </h1>
          <p className="animate-fade-in mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            Arafa Building Materials is a trusted UAE supplier of quality building materials and
            construction products, serving contractors, developers, retailers and customers with
            reliable sourcing and supply solutions.
          </p>
          <div className="animate-fade-in mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="arrow-move inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-background hover:text-navy"
            >
              Request a Quote
              <ArrowRight className="arrow size-4" />
            </Link>
            <Link
              to="/products"
              className="arrow-move inline-flex items-center justify-center gap-2 rounded-md border border-navy-foreground/25 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Products
              <ArrowRight className="arrow size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="bg-background">
        <div className="container-abm grid gap-px border-x border-b border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.n} delay={i * 80} className="bg-background p-8 lg:p-10">
              <span className="font-display text-sm font-semibold text-primary">{v.n}</span>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label-abm">About ABM</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Building Supply, Made Simple.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Arafa Building Materials is a trusted name in the UAE construction industry, supplying
              quality building materials with efficiency, professionalism and customer-focused
              service.
            </p>
            <Link
              to="/about"
              className="arrow-move mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Discover ABM
              <ArrowRight className="arrow size-4" />
            </Link>
          </Reveal>
          <RevealImage
            src={home_1}
            alt="Building materials warehouse with organised stock and forklift operations"
            width={1408}
            height={1008}
            className="aspect-4/3 overflow-hidden rounded-lg"
          />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-abm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <p className="label-abm">Our Products</p>
              <h2 className="mt-6 max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
                Everything You Need to Build Better.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/products"
                className="arrow-move inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                View All Products
                <ArrowRight className="arrow size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat, i) => (
              <Reveal key={cat.name} delay={(i % 4) * 80}>
                <Link
                  to="/products"
                  className="card-lift group block overflow-hidden rounded-lg border border-border bg-background"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.name} products supplied by ABM`}
                      width={900}
                      height={700}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-semibold">{cat.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm">
          <Reveal>
            <p className="label-abm">Our Services</p>
            <h2 className="mt-6 max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              More Than Materials. Complete Supply Support.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="card-lift h-full rounded-lg border border-border bg-background p-8">
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-accent text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-abm">
          <Reveal>
            <p className="label-abm">Who We Serve</p>
            <h2 className="mt-6 max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Supporting Every Stage of Your Project.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="bg-background p-8 lg:p-10">
                <item.icon className="size-6 text-primary" />
                <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ABM */}
      <section className="bg-navy py-24 text-navy-foreground lg:py-32">
        <div className="container-abm grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="label-abm">Why ABM</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Built on Quality.
              <br />
              Driven by Trust.
            </h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {why.map((w, i) => (
              <Reveal key={w.title} delay={i * 80}>
                <w.icon className="size-6 text-primary" />
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm">
          <Reveal>
            <p className="label-abm">Trusted Brands</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Brands You Can Build With.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {brandLogos.map((brand, i) => (
              <Reveal
                key={brand}
                delay={(i % 5) * 60}
                className="flex min-h-24 items-center justify-center bg-background p-6 text-center"
              >
                <img
                  src={brand}
                  alt="Brand partner logo"
                  loading="lazy"
                  className="max-h-12 w-auto max-w-[130px] object-contain transition-all duration-300 hover:scale-105"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
