import { useEffect, useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { NAV_LINKS } from '../data/portfolio'

export function Nav() {
  const scrolled = useScrolled(20)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || open ? 'backdrop-blur-xl bg-white/80 border-b border-line' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto container-x py-4 md:py-5 flex items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="font-display text-lg md:text-xl font-medium tracking-tight text-ink"
          >
            Umair<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="ulink text-ink-soft hover:text-ink transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Available pill - desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm border border-ink rounded-full px-4 lg:px-5 py-2 text-ink hover:bg-ink hover:text-bg transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block animate-soft-pulse" />
            Available
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 -mr-2"
          >
            <span
              className={`block w-6 h-px bg-ink transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-bg transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-x pt-24 pb-12 h-full flex flex-col">
          <div className="flex-1 flex flex-col gap-1 mt-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-light py-4 border-b border-line text-ink hover:text-accent transition-colors"
              >
                <span className="font-mono text-xs text-muted mr-3">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </div>
          <div className="border-t border-line pt-6 flex items-center justify-between">
            <span className="label-mono">Available · Remote</span>
            <span className="w-2 h-2 rounded-full bg-accent inline-block animate-soft-pulse" />
          </div>
        </div>
      </div>
    </>
  )
}
