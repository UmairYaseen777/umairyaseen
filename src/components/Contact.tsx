import { CONTACT } from "../data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-ink text-white container-x py-16 sm:py-20 md:py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 reveal">
          <div className="md:col-span-3">
            <span className="label-mono" style={{ color: "#888" }}>
              § 04 — Contact
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display h-contact font-light tracking-tight mt-3 md:mt-0">
              Let's build
              <br />
              <span className="italic">something good.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20">
          <div className="hidden md:block md:col-span-3" />
          <div className="md:col-span-9 grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div className="reveal min-w-0">
              <div
                className="label-mono mb-2 sm:mb-3"
                style={{ color: "#888" }}
              >
                Email
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-display display-md ulink break-all text-white"
              >
                {CONTACT.email}
              </a>
            </div>
            <div
              className="reveal min-w-0"
              style={{ transitionDelay: "120ms" }}
            >
              <div
                className="label-mono mb-2 sm:mb-3"
                style={{ color: "#888" }}
              >
                LinkedIn
              </div>
              <a
                href={CONTACT.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="font-display display-md ulink break-all text-white"
              >
                /in/umairyaseenmalik
              </a>
            </div>
            <div
              className="reveal min-w-0"
              style={{ transitionDelay: "240ms" }}
            >
              <div
                className="label-mono mb-2 sm:mb-3"
                style={{ color: "#888" }}
              >
                Phone
              </div>
              <div className="font-display display-md text-white">
                {CONTACT.phone}
              </div>
            </div>
            <div
              className="reveal min-w-0"
              style={{ transitionDelay: "360ms" }}
            >
              <div
                className="label-mono mb-2 sm:mb-3"
                style={{ color: "#888" }}
              >
                Status
              </div>
              <div className="font-display display-md flex items-center gap-3 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block animate-soft-pulse shrink-0" />
                <span>Open · Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid md:grid-cols-12 gap-4 md:gap-8 mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 border-t"
          style={{ borderColor: "#1F1F1F" }}
        >
          <div
            className="md:col-span-3 font-mono text-[10px] sm:text-xs"
            style={{ color: "#666" }}
          >
            © 2025 Umair Yaseen
          </div>
          <div className="md:col-span-9 flex justify-between items-center gap-4">
            <div
              className="font-mono text-[10px] sm:text-xs"
              style={{ color: "#666" }}
            >
              Built with React · Vite · Tailwind
            </div>
            <a
              href="#top"
              className="font-mono text-[10px] sm:text-xs ulink shrink-0 text-white"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
