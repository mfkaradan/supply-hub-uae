import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

import logo2 from "@/assets/abm-logo-2.webp"


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Our Projects" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-abm">
        <div className="grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)}>
            <img
              src={logo2}
              alt="Arafa Building Materials logo"
              width={200}
              height={146}
              className="h-20 pb-2 w-auto shrink-0 object-contain transition-transform duration-200 hover:scale-[1.02]"
            />
            <span className="sr-only">Arafa Building Materials</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              to="/contact"
              className="arrow-move hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy sm:inline-flex"
            >
              Request a Quote
              <ArrowRight className="arrow size-4" />
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-abm flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3.5 text-base font-medium text-foreground last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground sm:hidden"
            >
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
