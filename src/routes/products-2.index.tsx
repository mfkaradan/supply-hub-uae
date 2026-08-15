import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { allBrands, brandsForCategory, catalog, featuredCategories } from "@/data/catalog";
import heroImg from "@/assets/p2-hero.jpg";

export const Route = createFileRoute("/products-2/")({
  head: () => ({
    meta: [
      { title: "Products 2 | ABM Building Materials Catalogue UAE" },
      {
        name: "description",
        content:
          "Browse the full ABM product catalogue by category and brand: ceramics, sanitary ware, plumbing, electrical, hardware, steel, cement, timber, paints and more in the UAE.",
      },
      { property: "og:title", content: "Products 2 | ABM Building Materials Catalogue UAE" },
      {
        property: "og:description",
        content: "Search and explore ABM building material categories and trusted brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products2Page,
});

const shortcuts = [
  "Ceramics",
  "Sanitary Ware",
  "Plumbing & Sanitary",
  "Electrical",
  "Hardware & Tools",
  "Paints",
  "Power Tools",
];

function Products2Page() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalog.filter((c) => {
      if (activeCategory && c.name !== activeCategory) return false;
      if (activeBrand && !brandsForCategory(c.name).includes(activeBrand)) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        brandsForCategory(c.name).some((b) => b.toLowerCase().includes(q))
      );
    });
  }, [query, activeCategory, activeBrand]);

  const hasFilters = Boolean(activeCategory || activeBrand || query);

  const clearAll = () => {
    setActiveCategory(null);
    setActiveBrand(null);
    setQuery("");
  };

  const sidebar = (
    <div className="space-y-10">
      <div>
        <h2 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          Product Categories
        </h2>
        <ul className="mt-4 space-y-1">
          <li>
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                activeCategory === null
                  ? "bg-accent font-semibold text-primary"
                  : "text-muted-foreground hover:bg-surface hover:text-foreground"
              }`}
            >
              All Categories
            </button>
          </li>
          {catalog.map((c) => (
            <li key={c.slug}>
              <button
                type="button"
                onClick={() => setActiveCategory(c.name)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  activeCategory === c.name
                    ? "bg-accent font-semibold text-primary"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                }`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Brands</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {allBrands.map((b) => {
            const active = activeBrand === b;
            return (
              <button
                key={b}
                type="button"
                onClick={() => setActiveBrand(active ? null : b)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearAll}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          <X className="size-4" /> Clear filters
        </button>
      )}
    </div>
  );

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container-abm grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="label-abm">ABM Products</p>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl">
              QUALITY PRODUCTS
              <br />
              FOR EVERY <span className="text-primary">PROJECT.</span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Explore building materials, construction products and essential supplies sourced from
              trusted manufacturers and recognized brands.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border">
            <img
              src={heroImg}
              alt="Building material samples including tiles, timber, pipes and paint"
              width={1280}
              height={1000}
              className="aspect-5/4 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="border-y border-border bg-surface py-10">
        <div className="container-abm">
          <label className="relative block">
            <span className="sr-only">Search products or categories</span>
            <Search className="absolute top-1/2 left-5 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products or categories..."
              className="w-full rounded-lg border border-input bg-background py-4 pr-4 pl-13 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
            />
          </label>
          <div className="mt-4 flex flex-wrap gap-2">
            {shortcuts.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setActiveCategory(s);
                  setQuery("");
                }}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-background py-16 lg:py-20">
        <div className="container-abm">
          <p className="label-abm">Featured Categories</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 3) * 70}>
                <Link
                  to="/products-2/$category"
                  params={{ category: cat.slug }}
                  className="card-lift group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background"
                >
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.name} supplied by ABM`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{cat.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    <span className="arrow-move mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore <ArrowRight className="arrow size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOGUE */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="container-abm">
          <div className="grid gap-10 lg:grid-cols-[17rem_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
                {sidebar}
              </div>
            </aside>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "category" : "categories"}
                  {activeCategory ? ` in ${activeCategory}` : ""}
                  {activeBrand ? ` · ${activeBrand}` : ""}
                </p>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold lg:hidden"
                >
                  <SlidersHorizontal className="size-4" /> Filter & Categories
                </button>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {filtered.map((cat, i) => (
                  <Reveal key={cat.slug} delay={(i % 2) * 60}>
                    <Link
                      to="/products-2/$category"
                      params={{ category: cat.slug }}
                      className="card-lift group flex h-full gap-5 overflow-hidden rounded-xl border border-border bg-background p-4"
                    >
                      <div className="size-28 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={cat.image}
                          alt={`${cat.name} supplied by ABM`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <h3 className="text-base font-semibold">{cat.name}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {cat.description}
                        </p>
                        <span className="arrow-move mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Explore <ArrowRight className="arrow size-4" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="mt-16 text-center text-muted-foreground">
                  No categories match your selection. Contact our team and we will source what you
                  need.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-navy/50"
          />
          <div className="absolute inset-y-0 right-0 w-[88%] max-w-sm overflow-y-auto bg-background p-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-base font-semibold">Filter & Categories</p>
              <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close">
                <X className="size-5" />
              </button>
            </div>
            {sidebar}
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-8 w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground"
            >
              Show {filtered.length} results
            </button>
          </div>
        </div>
      )}

      {/* STICKY QUOTE CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-center px-5">
        <div className="glass-card pointer-events-auto flex items-center gap-4 rounded-full py-2.5 pr-2.5 pl-5">
          <span className="hidden text-sm font-medium sm:inline">Need a specific product?</span>
          <Link
            to="/contact"
            className="arrow-move inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Request a Quote <ArrowRight className="arrow size-4" />
          </Link>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="bg-navy py-20 text-navy-foreground lg:py-28">
        <div className="container-abm text-center">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight font-semibold sm:text-4xl">
            CAN'T FIND WHAT YOU NEED?
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-navy-foreground/70">
            Tell us what you're looking for. Our team can help source the right product for your
            project requirements.
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
