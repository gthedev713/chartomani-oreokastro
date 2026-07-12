import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, business } from '../data/content'

export default function Header() {
  const [active, setActive] = useState('#home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-burgundy/10">
      <div className="max-w-[1180px] mx-auto px-7 flex items-center justify-between py-4">
        <a href="#home" className="font-serif-display font-bold text-2xl text-burgundy flex items-center gap-2.5">
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
            <rect x="4" y="6" width="10" height="28" rx="2" className="fill-burgundy" />
            <rect x="15" y="9" width="10" height="25" rx="2" className="fill-mustard" />
            <rect x="26" y="4" width="10" height="30" rx="2" className="fill-sage" />
          </svg>
          {business.name}
        </a>

        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium py-1 text-ink-soft transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-mustard after:transition-all after:duration-300 ${
                active === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${business.phone}`}
            className="hidden md:inline-flex items-center gap-2 border border-ink-soft rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-ink hover:text-paper hover:-translate-y-0.5 transition-all"
          >
            ☎ Κλήση
          </a>
          <a
            href="#visit"
            className="hidden md:inline-flex items-center gap-2 bg-burgundy text-paper rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-burgundy-deep hover:-translate-y-0.5 hover:shadow-soft transition-all"
          >
            Οδηγίες
          </a>
          <button
            aria-label="Μενού"
            className="md:hidden flex flex-col gap-1.5 w-7"
            onClick={() => setMobileOpen(true)}
          >
            <span className="h-0.5 bg-ink rounded-full" />
            <span className="h-0.5 bg-ink rounded-full" />
            <span className="h-0.5 bg-ink rounded-full" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-paper flex flex-col gap-6 px-7 pt-24 pb-10"
          >
            <button className="absolute top-6 right-6 text-3xl" onClick={() => setMobileOpen(false)}>
              ✕
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif-display text-2xl font-semibold text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a href={`tel:${business.phone}`} className="bg-burgundy text-paper rounded-full px-5 py-2.5 text-sm font-semibold">
                ☎ Κλήση
              </a>
              <a href="#visit" className="border border-ink-soft rounded-full px-5 py-2.5 text-sm font-semibold">
                Οδηγίες
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
