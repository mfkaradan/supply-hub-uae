import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Layout, PageHero, CtaBand } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { categories } from "@/data/site";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | Construction Materials & Building Products UAE" },
      {
        name: "description",
        content:
          "Explore ABM product categories: ceramics, plumbing and sanitary products, electrical products, hardware and tools, steel, cement, timber, paints and more across the UAE.",
      },
      { property: "og:title", content: "Products | Construction Materials & Building Products UAE" },
      {
        property: "og:description",
        content:
          "A wide range of building materials and construction supplies from trusted manufacturers and recognized brands.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter(
      (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <Layout>
      <PageHero
        label="Our Products"
        title="Quality Products for Every Build."
        description="Explore a wide range of building materials, construction products and essential supplies sourced from trusted manufacturers and recognized brands."
        image={hero}
        imageAlt="Modern UAE skyline under construction"
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-abm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <label className="relative block max-w-md">
              <span className="sr-only">Search product categories</span>
              <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search categories, e.g. plumbing, steel, paints"
                className="w-full rounded-md border border-input bg-background py-3.5 pr-4 pl-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </label>
            <p className="text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "category" : "categories"}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cat, i) => (
              <Reveal key={cat.name} delay={(i % 3) * 80}>
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background">
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.name} supplied by Arafa Building Materials`}
                      width={900}
                      height={700}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="text-lg font-semibold">{cat.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    <Link
                      to="/contact"
                      className="arrow-move mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Explore Products
                      <ArrowRight className="arrow size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-muted-foreground">
              No categories match that search. Contact our team and we will source what you need.
            </p>
          )}
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
