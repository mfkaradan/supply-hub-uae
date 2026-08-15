import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { brandsForCategory, catalog, findCategory } from "@/data/catalog";

export const Route = createFileRoute("/products-2/$category")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Category not found | ABM" }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const title = `${category.name} | ABM Building Materials UAE`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CategoryNotFound,
  component: CategoryPage,
});

function CategoryNotFound() {
  return (
    <Layout>
      <div className="container-abm py-32 text-center">
        <h1 className="text-3xl font-semibold">Category not found</h1>
        <Link to="/products-2" className="mt-6 inline-block font-semibold text-primary">
          Back to all categories
        </Link>
      </div>
    </Layout>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const brands = brandsForCategory(category.name);
  const related = catalog.filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <Layout>
      <PageHero
        label="ABM Products"
        title={category.name}
        description={category.description}
        image={category.image}
        imageAlt={`${category.name} supplied by Arafa Building Materials`}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="container-abm">
          <Link
            to="/products-2"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" /> All Categories
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">About {category.name}</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                {category.description} ABM supplies this category for residential, commercial and
                fit-out projects across the UAE, with sourcing support for specific requirements.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[category.image, related[0]?.image, related[1]?.image]
                  .filter(Boolean)
                  .map((src, i) => (
                    <Reveal key={i} delay={i * 70} className={i === 0 ? "sm:col-span-2" : ""}>
                      <div className="overflow-hidden rounded-xl border border-border">
                        <img
                          src={src as string}
                          alt={`${category.name} products supplied by ABM`}
                          loading="lazy"
                          className="aspect-16/10 w-full object-cover"
                        />
                      </div>
                    </Reveal>
                  ))}
              </div>
            </div>

            <aside className="space-y-8">
              {brands.length > 0 && (
                <div className="glass-card rounded-xl p-7">
                  <h3 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                    Relevant Brands
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {brands.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-xl border border-border bg-surface p-7">
                <h3 className="text-lg font-semibold">Need {category.name} for your project?</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share your requirements and our team will help with product selection and supply.
                </p>
                <Link
                  to="/contact"
                  className="arrow-move mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
                >
                  Request a Quote <ArrowRight className="arrow size-4" />
                </Link>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                  Other Categories
                </h3>
                <ul className="mt-4 space-y-2">
                  {related.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/products-2/$category"
                        params={{ category: c.slug }}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
