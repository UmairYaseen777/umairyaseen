import { ROLES } from '../data/portfolio'

export function Experience() {
  return (
    <section
      id="experience"
      className="container-x max-w-7xl mx-auto py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16 reveal">
        <div className="md:col-span-3">
          <span className="label-mono">§ 03 — Experience</span>
        </div>
        <div className="md:col-span-9">
          <h2 className="font-display h-section font-light tracking-tight mt-3 md:mt-0 text-ink">
            A decade-long <span className="italic">arc</span>.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-6 md:gap-8">
        <div className="hidden md:block md:col-span-3" />
        <div className="md:col-span-9 border-t border-line">
          {ROLES.map((role, i) => {
            const isCurrent = role.to === 'Now'
            return (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-3 md:gap-6 py-7 sm:py-8 md:py-10 border-b border-line reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="md:col-span-3 font-mono text-xs text-muted">
                  {role.from} —{' '}
                  <span className={isCurrent ? 'text-accent' : ''}>{role.to}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-display display-lg font-normal text-ink">
                    {role.title}
                  </h3>
                  <div className="text-xs sm:text-sm text-ink-soft mt-1 mb-3 sm:mb-4">
                    {role.company}
                    <span className="text-muted"> · {role.where}</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-ink-soft max-w-2xl">
                    {role.summary}
                  </p>
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {role.keys.map(k => (
                      <span
                        key={k}
                        className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 bg-paper rounded-full text-ink-soft"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
