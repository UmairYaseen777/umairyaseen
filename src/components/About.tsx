import { SKILL_GROUPS } from "../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="bg-paper border-y border-line container-x py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-3 reveal">
          <span className="label-mono">§ 02 — About</span>
        </div>
        <div className="md:col-span-9">
          <p className="font-display quote-lg font-light reveal mt-3 md:mt-0 text-ink">
            I started building for the web in{" "}
            <span className="italic">2019</span>. Since then I've worked across
            compliance, fintech-adjacent SaaS and consumer products — moving
            from straight HTML/CSS into{" "}
            <span className="italic">component-driven</span> React, and now into
            Next.js for everything I ship today.
          </p>
          <p
            className="text-base sm:text-lg leading-relaxed mt-6 sm:mt-8 text-ink-soft max-w-3xl reveal"
            style={{ transitionDelay: "120ms" }}
          >
            What I care about most is the{" "}
            <em className="font-display italic">quiet</em> craft — the spacing,
            the type, the loading states nobody notices when they're done well.
            I work fastest when I can collaborate closely with designers and
            ship interfaces that survive contact with real users.
          </p>

          <div
            className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10 reveal"
            style={{ transitionDelay: "240ms" }}
          >
            {SKILL_GROUPS.map(({ title, items }) => (
              <div key={title}>
                <div className="label-mono mb-3 sm:mb-4">{title}</div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-xs sm:text-sm text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
