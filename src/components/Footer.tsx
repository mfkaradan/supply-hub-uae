import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

// import logo from "@/assets/abm-logo.png.asset.json";
import logo2 from "@/assets/abm-logo-2.webp"



const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer id="site-footer" className="bg-navy text-navy-foreground">
      <div className="container-abm grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div className="max-w-sm">
          <div className="inline-flex rounded-md bg-background px-4 py-3">
            <img
              src={logo2}
              alt="Arafa Building Materials logo"
              width={160}
              height={54}
              loading="lazy"
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-navy-foreground/70">
            A trusted UAE building materials supplier delivering quality products, reliable sourcing
            and professional supply solutions.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Navigate
          </h3>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-navy-foreground/75 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Get in touch
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
            Share your project requirements and our team will get back to you with product options
            and supply support.
          </p>
          <Link
            to="/contact"
            className="arrow-move mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-background hover:text-navy"
          >
            Request a Quote
            <ArrowRight className="arrow size-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-abm flex flex-col gap-2 py-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arafa Building Materials. All rights reserved.</p>
          <p>Building materials supplier — United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
