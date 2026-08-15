import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Truck, PackageSearch, Headset } from "lucide-react";

import { Layout, PageHero, CtaBand } from "@/components/Layout";
import { Reveal, RevealImage } from "@/components/Reveal";
import logistics from "@/assets/logistics.jpg";
import warehouse from "@/assets/warehouse.jpg";

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

const services = [
  {
    icon: Boxes,
    title: "Bulk & Retail Supply",
    text: "Materials for projects of different sizes, from individual requirements to larger developments.",
    points: ["Project material supply", "Wholesale supply for retailers", "Single-item purchases"],
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    text: "Reliable logistics support for on-time site deliveries.",
    points: ["Scheduled site deliveries", "Coordinated dispatch", "Order tracking support"],
  },
  {
    icon: PackageSearch,
    title: "Custom Orders",
    text: "Special product sourcing based on specific client requirements.",
    points: ["Specification-based sourcing", "Brand-specific requests", "Non-standard items"],
  },
  {
    icon: Headset,
    title: "Expert Advice",
    text: "Practical guidance on material selection and product usage.",
    points: ["Material selection support", "Product comparisons", "Application guidance"],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        label="Our Services"
        title="More Than Materials. Complete Supply Support."
        description="From bulk project material supply to custom sourcing, ABM supports every stage of procurement with practical, dependable service."
        image={logistics}
        imageAlt="Building material delivery trucks at a distribution yard"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <div className="card-lift h-full rounded-lg border border-border bg-background p-8 lg:p-10">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-accent text-primary">
                  <s.icon className="size-5" />
                </span>
                <h2 className="mt-6 text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32">
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
      </section>

      <CtaBand />
    </Layout>
  );
}
