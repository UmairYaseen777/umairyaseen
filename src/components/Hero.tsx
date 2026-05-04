import { STATS } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative sm:pt-32 pb-16 sm:pb-20 md:pb-28 lg:pb-32 container-x max-w-7xl mx-auto"
    >
      <div className="reveal">
        <div className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-10">
          <span className="w-6 sm:w-8 h-px bg-ink shrink-0" />
          <span className="label-mono">
            Front End Developer · Islamabad, PK
          </span>
        </div>
      </div>

      <h1 className="font-display reveal h-hero font-light text-ink">
        <span className="block">Crafting</span>
        <span className="block italic font-normal">interfaces</span>
        <span className="block">
          that <span className="text-accent">feel</span> inevitable
          <span className="text-accent animate-blink">.</span>
        </span>
      </h1>

      <div className="mt-10 sm:mt-12 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-8 items-end">
        <p
          className="font-display quote-lg font-light text-muted reveal md:col-span-6 md:col-start-7 lg:col-span-6 text-base sm:text-lg md:text-xl leading-relaxed text-ink-soft"
          style={{ transitionDelay: "120ms" }}
        >
          Creative and detail-oriented Front End Developer with
          <em className="font-display italic">4+ years</em> of experience
          building responsive, user-friendly, and high-performance web
          interfaces using HTML5, CSS3, JavaScript, React.js, and Next.js.
        </p>
      </div>

      <div
        className="reveal mt-10 sm:mt-12 md:mt-16 flex flex-wrap items-center gap-5 sm:gap-6"
        style={{ transitionDelay: "240ms" }}
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-3 bg-ink text-white rounded-full pl-5 sm:pl-6 pr-2 py-2 hover:bg-accent transition-all duration-500"
        >
          <span className="text-sm">Selected work</span>
          <span className="bg-white text-ink rounded-full w-9 h-9 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 13L13 1M13 1H4M13 1V10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </a>
        <a href="#contact" className="text-sm ulink text-ink">
          Or get in touch →
        </a>
      </div>

      {/* Stats strip */}
      <div
        className="reveal mt-16 sm:mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-line"
        style={{ transitionDelay: "360ms" }}
      >
        {STATS.map(([k, v], i) => (
          <div key={i}>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light break-words text-ink">
              {k}
            </div>
            <div className="text-xs sm:text-sm text-muted mt-2 leading-snug">
              {v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
