import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { useMemo, useState } from "react";

import { Layout, PageHero, CtaBand } from "@/components/Layout";
import { Reveal, RevealImage } from "@/components/Reveal";
import logistics from "@/assets/logistics.jpg";
import warehouse from "@/assets/warehouse.jpg";

import { projects } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Project Material Supply & Delivery — ABM UAE" },
      {
        name: "description",
        content:
          "ABM offers bulk and retail building material supply, timely delivery, custom orders and expert advice for construction projects across the UAE.",
      },
      { property: "og:title", content: "Services | Project Material Supply & Delivery — ABM UAE" },
      {
        property: "og:description",
        content:
          "Bulk building materials, wholesale supply, custom sourcing and reliable logistics support for UAE projects.",
      },
    ],
  }),
  component: ServicesPage,
});

const filterTabs = [
  "All Projects",
  "Commercial",
  "Residential",
  "Industrial",
  "Infrastructure",
];

function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All Projects") return projects;
    return projects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <Layout>
      <PageHero
        label="Our Projects"
        title="Built on Trust.
Delivered with Excellence."
        description="From commercial developments to large-scale infrastructure, we supply quality materials that help build stronger projects across the UAE."
        image={logistics}
        imageAlt="Building material delivery trucks at a distribution yard"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold tracking-wider text-sky-500 uppercase">
                <span className="h-0.5 w-4 bg-sky-500"></span> FEATURED PROJECTS
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Our Recent Projects
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 rounded-xl bg-slate-100/80 p-1.5">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-sky-500 text-white shadow-sm shadow-sky-500/25 font-semibold"
                        : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((cat, i) => (
              <Reveal key={cat.title || cat.id} delay={(i % 3) * 80}>
                <article className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background">
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.title} supplied by Arafa Building Materials`}
                      width={900}
                      height={700}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    {cat.category && (
                      <span className="inline-flex items-center rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-600 ring-1 ring-inset ring-sky-500/20 w-fit mb-3">
                        {cat.category}
                      </span>
                    )}
                    <h2 className="text-lg font-semibold">{cat.title}</h2>
                    {cat.location && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <MapPin className="size-3.5 text-muted-foreground shrink-0" />
                        <span>{cat.location}</span>
                      </div>
                    )}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                    {/* <Link
                      to="/contact"
                      className="arrow-move mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      View Project
                      <ArrowRight className="arrow size-4" />
                    </Link> */}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-surface py-24 lg:py-32">
        <div className="container-abm grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label-abm">How We Work</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl">
              A simple, transparent supply process.
            </h2>
            <ol className="mt-10 space-y-8">
              {[
                ["Share requirements", "Send us your material list, drawings or specifications."],
                ["Receive a quote", "We confirm availability, brands, options and pricing."],
                ["Confirm the order", "Approve quantities and delivery schedule."],
                ["Delivery to site", "Materials dispatched when your project needs them."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-6">
                  <span className="font-display text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <RevealImage
            src={warehouse}
            alt="Warehouse team preparing building materials for dispatch"
            width={1408}
            height={1008}
            className="aspect-4/3 overflow-hidden rounded-lg"
          />
        </div>
      </section> */}

      <CtaBand />
    </Layout>
  );
}

