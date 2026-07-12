import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { heroSlides } from '../data/content'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function resetAuto() {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500)
  }

  useEffect(() => {
    resetAuto()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const slide = heroSlides[index]

  function go(i: number) {
    setIndex((i + heroSlides.length) % heroSlides.length)
    resetAuto()
  }

  return (
    <section id="home" className="relative h-[92vh] min-h-[620px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 animate-kenburns bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark gradient overlay so the headline stays readable over the photo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, hsl(var(--color-ink) / 0.82) 0%, hsl(var(--color-ink) / 0.55) 45%, hsl(var(--color-ink) / 0.25) 100%)',
            }}
          />
          <div className="absolute inset-0" style={{ background: slide.gradient, opacity: 0.35, mixBlendMode: 'multiply' }} />

          <div className="relative z-10 h-full flex flex-col justify-center max-w-[640px] px-7 mx-auto md:ml-[8%]">
            <div className="font-serif-display italic font-medium text-mustard-soft text-xl mb-4">
              {slide.tagline}
            </div>
            <h1 className="font-serif-display font-bold text-paper leading-[1.05] mb-5 text-[clamp(2.4rem,5.4vw,4.1rem)]">
              {slide.headlinePrefix}
              <em className="italic font-medium text-mustard-soft not-italic">{slide.headlineEm}</em>
              {slide.headlineSuffix}
            </h1>
            <p className="text-paper/80 text-lg max-w-[480px] mb-8">{slide.sub}</p>
            <div className="flex gap-3.5 flex-wrap">
              <a href={slide.ctaPrimary.href} className="bg-burgundy text-paper rounded-full px-6 py-3 font-semibold hover:bg-burgundy-deep hover:-translate-y-0.5 transition-all">
                {slide.ctaPrimary.label}
              </a>
              <a
                href={slide.ctaSecondary.href}
                className="border-[1.5px] border-paper/50 text-paper rounded-full px-6 py-3 font-semibold hover:bg-paper hover:text-ink hover:-translate-y-0.5 transition-all"
              >
                {slide.ctaSecondary.label}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-9 left-0 right-0 z-20 flex items-center justify-center gap-5">
        <button
          aria-label="Προηγούμενη"
          onClick={() => go(index - 1)}
          className="w-11 h-11 rounded-full border-[1.5px] border-paper/40 text-paper flex items-center justify-center hover:bg-paper hover:text-ink transition-all"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-mustard-soft' : 'w-2.5 bg-paper/35'}`}
            />
          ))}
        </div>
        <button
          aria-label="Επόμενη"
          onClick={() => go(index + 1)}
          className="w-11 h-11 rounded-full border-[1.5px] border-paper/40 text-paper flex items-center justify-center hover:bg-paper hover:text-ink transition-all"
        >
          ›
        </button>
      </div>
    </section>
  )
}
