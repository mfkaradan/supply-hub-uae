export function WhatsAppButton() {
  const phoneNumber = "971557935190";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello Arafa Building Materials team, I would like to enquire about building materials."
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 sm:bottom-8 sm:left-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Arafa Building Materials on WhatsApp (+971 55 793 5191)"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:size-14"
      >
        {/* Subtle breathing ripple pulse */}
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25 duration-1000" />

        {/* Exact Official WhatsApp Icon */}
        <svg
          className="size-7 transition-transform duration-300 group-hover:scale-105 sm:size-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.476.678 4.795 1.859 6.782L2.667 29.333l6.762-1.773A13.277 13.277 0 0016 29.333c7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667zm6.421 17.703c-.263.133-1.312.694-1.818.77-.453.068-1.027.097-1.657-.103-.382-.121-.872-.283-1.499-.554-2.636-1.138-4.358-3.793-4.49-3.97-.13-.177-1.073-1.441-1.073-2.748 0-1.308.679-1.951.92-2.217.24-.266.525-.332.7-.332s.35.002.503.01c.16.008.377-.063.59.456.22.532.745 1.818.81 1.951.066.133.11.288.022.466-.088.177-.132.288-.263.443-.131.155-.276.346-.395.464-.132.131-.27.275-.116.541.153.266.68 1.126 1.46 1.822 1.003.894 1.85 1.172 2.113 1.305.263.133.417.11.57-.067.153-.177.657-.776.832-1.042.175-.266.35-.222.59-.133.24.088 1.538.728 1.801.861.263.133.438.2.503.31.065.111.065.643-.198 1.22z"
            fill="white"
          />
        </svg>

        {/* Tooltip on hover for desktop */}
        <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-white shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100 sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
