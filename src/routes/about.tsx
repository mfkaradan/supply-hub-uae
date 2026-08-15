import { createFileRoute } from "@tanstack/react-router";

import { Layout, PageHero, CtaBand } from "@/components/Layout";
import { Reveal, RevealImage } from "@/components/Reveal";
import warehouse from "@/assets/warehouse.jpg";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ABM | Trusted Building Materials Supplier in UAE" },
      {
        name: "description",
        content:
          "Arafa Building Materials supplies construction materials across the UAE for developers, contractors, retailers and individuals with efficient, professional service.",
      },
      { property: "og:title", content: "About ABM | Trusted Building Materials Supplier in UAE" },
      {
        property: "og:description",
        content:
          "A trusted partner in building supply — quality materials, reliable sourcing and customer-first service.",
      },
    ],
  }),
  component: AboutPage,
});

const mission = [
  {
    title: "Problem-Solving Supply",
    text: "Focus on solving customer needs, not simply delivering products.",
  },
  {
    title: "Quality & Support",
    text: "Provide quality products backed by technical support and customer-first service.",
  },
  {
    title: "Long-Term Partnerships",
    text: "Understand client needs and deliver value beyond expectations.",
  },
  {
    title: "Efficient Procurement",
    text: "Simplify purchasing through efficient logistics, fair pricing and dependable service.",
  },
];

const valuesList = ["Quality", "Integrity", "Customer Focus", "Reliability", "Sustainability"];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        label="About ABM"
        title="A Trusted Partner in Building Supply."
        image={logistics}
        imageAlt="Delivery trucks loading building materials at a supply yard"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <RevealImage
            src={warehouse}
            alt="Organised building materials warehouse in the UAE"
            width={1408}
            height={1008}
            className="aspect-4/3 overflow-hidden rounded-lg"
          />
          <Reveal>
            <h2 className="text-3xl leading-tight font-semibold sm:text-4xl">
              Quality building materials, supplied with professionalism.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Arafa Building Materials (ABM) is a trusted name in the UAE construction industry,
              committed to supplying high-quality building materials with efficiency and
              professionalism.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              ABM serves developers, contractors, retailers and individuals with reliable and
              competitively priced materials.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-32">
        <div className="container-abm grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="label-abm">Vision</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl">Our Vision</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To become one of the most trusted names in the UAE construction supply industry by
              delivering smart, reliable and timely solutions that help build better and stronger
              projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm">
          <Reveal>
            <p className="label-abm">Mission</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              Our Mission
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {mission.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="card-lift h-full rounded-lg border border-border bg-background p-8">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-navy-foreground lg:py-32">
        <div className="container-abm">
          <Reveal>
            <p className="label-abm">Core Values</p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              What We Stand For.
            </h2>
          </Reveal>
          <ul className="mt-14 divide-y divide-navy-foreground/10 border-t border-navy-foreground/10">
            {valuesList.map((value, i) => (
              <Reveal
                key={value}
                as="li"
                delay={i * 70}
                className="group flex items-baseline gap-6 py-6 lg:py-8"
              >
                <span className="font-display text-sm font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-primary sm:text-4xl lg:text-5xl">
                  {value}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
