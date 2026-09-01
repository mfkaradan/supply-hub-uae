import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, FileText, PackageSearch, Building2, Boxes, MapPin, Flag } from "lucide-react";

import { Layout, PageHero } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import logistics from "@/assets/logistics.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ABM | Request a Building Materials Quote in UAE" },
      {
        name: "description",
        content:
          "Contact Arafa Building Materials for project material supply, product enquiries, custom orders and bulk building materials across the UAE.",
      },
      { property: "og:title", content: "Contact ABM | Request a Building Materials Quote in UAE" },
      {
        property: "og:description",
        content:
          "Tell us your requirements — our team helps with sourcing, material selection and reliable supply.",
      },
    ],
  }),
  component: ContactPage,
});

const enquiryTypes = [
  { icon: FileText, title: "Request a Quote", text: "Pricing for a material list or project scope." },
  { icon: PackageSearch, title: "Product Enquiries", text: "Availability, brands and specifications." },
  { icon: Building2, title: "Project Supply", text: "Ongoing supply for developments and sites." },
  { icon: Boxes, title: "Custom Orders", text: "Special sourcing for specific requirements." },
];

const branches = [
  {
    tag: "MAIN BRANCH",
    name: "Arafa Building Materials Trading L.L.C",
    address: "Al Hail - Fujairah",
    country: "UAE",
  },
  {
    tag: "BRANCH 2",
    name: "Arafa Building Materials Trading Br.1",
    address: "Qidfi' - Fujairah",
    country: "UAE",
  },
  {
    tag: "BRANCH 3",
    name: "Arafa Building Materials Trading LLC Sajaa Branch Sharjah",
    address: "Al Sajaa - Emirates Industrial City - Sharjah",
    country: "UAE",
  },
];

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/25";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <PageHero
        label="Contact ABM"
        title="Let's Talk About Your Requirements."
        description="Whether you need materials for a construction project, retail supply or a specific product, our team is ready to help."
        image={logistics}
        imageAlt="Building materials being loaded for delivery"
      />

      <section className="bg-background py-24 lg:py-32">
        <div className="container-abm grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Send an enquiry</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Share a few details and our team will respond with product options and supply support.
            </p>

            <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" required className={fieldClass} placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium">
                  Company
                </label>
                <input id="company" name="company" className={fieldClass} placeholder="Company name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="Phone number" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium">
                  Project Type
                </label>
                <select id="projectType" name="projectType" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option>Contracting / Construction</option>
                  <option>Real Estate Development</option>
                  <option>Retail / Wholesale</option>
                  <option>Fit-out / Renovation</option>
                  <option>Individual / DIY</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={fieldClass}
                  placeholder="Tell us about the materials or quantities you need"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="arrow-move inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy"
                >
                  Send Enquiry
                  <ArrowRight className="arrow size-4" />
                </button>
                {sent && (
                  <p className="mt-4 text-sm text-primary">
                    Thank you — your enquiry has been prepared. Our team will follow up shortly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-border bg-surface p-8 lg:p-10">
              <h2 className="text-lg font-semibold">How we can help</h2>
              <ul className="mt-8 space-y-8">
                {enquiryTypes.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                      <item.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Branches Section */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-abm">
          <Reveal className="text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              <span className="h-px w-6 bg-primary" />
              OUR BRANCHES
              <span className="h-px w-6 bg-primary" />
            </p>
            <h2 className="mt-6 text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
              We're Closer Than You Think.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Visit any of our branches across the UAE for reliable building materials, trusted service and expert support.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch, index) => (
              <Reveal key={branch.tag} delay={index * 80}>
                <div className="card-lift flex h-full flex-col justify-between rounded-lg border border-border bg-background p-8">
                  <div>
                    <div className="mb-6 inline-flex size-12 items-center justify-center rounded-md bg-accent text-primary">
                      <Building2 className="size-6" />
                    </div>
                    <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                      {branch.tag}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug">
                      {branch.name}
                    </h3>
                  </div>

                  <div>
                    <div className="my-6 border-t border-border" />
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="my-6 border-t border-border" />
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Flag className="size-4 shrink-0 text-primary" />
                      <span>{branch.country}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
