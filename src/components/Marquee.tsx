import { SKILLS_MARQUEE } from '../data/portfolio'

export function Marquee() {
  const doubled = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE]

  return (
    <section className="border-y border-line py-5 sm:py-6 overflow-hidden bg-paper">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-8 sm:gap-12 px-4 sm:px-6 shrink-0"
          >
            <span className="font-display italic text-xl sm:text-2xl md:text-3xl font-light text-ink">
              {item}
            </span>
            <span className="text-accent text-xl sm:text-2xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  )
}
