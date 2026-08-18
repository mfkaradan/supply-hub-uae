import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`group fixed right-6 bottom-6 z-50 flex size-11 items-center justify-center rounded-full border border-white/15 bg-navy text-navy-foreground shadow-lg shadow-navy/20 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:right-8 sm:bottom-8 sm:size-12 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
