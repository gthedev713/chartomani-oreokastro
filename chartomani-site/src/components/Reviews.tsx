import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { reviews, business } from '../data/content'

export default function Reviews() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="reviews" className="bg-paper-deep py-28">
      <div className="max-w-[1180px] mx-auto px-7 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-burgundy">Κριτικές</span>
          <h2 className="font-serif-display font-bold text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight mt-3">
            Τι λένε όσοι <em className="italic font-medium text-burgundy not-italic">περνούν</em> την πόρτα
          </h2>
          <div className="text-mustard text-2xl mt-3.5 mb-1.5">★★★★★</div>
          <div className="font-semibold text-text-soft text-sm">
            {business.rating} από {business.reviewCount} αξιολογήσεις στο Google
          </div>
          <div className="flex gap-3 mt-8">
            <button
              aria-label="Προηγούμενη κριτική"
              onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
              className="w-11 h-11 rounded-full border-[1.5px] border-ink/25 flex items-center justify-center hover:bg-ink hover:text-paper hover:border-ink transition-all"
            >
              ‹
            </button>
            <button
              aria-label="Επόμενη κριτική"
              onClick={() => setIndex((i) => (i + 1) % reviews.length)}
              className="w-11 h-11 rounded-full border-[1.5px] border-ink/25 flex items-center justify-center hover:bg-ink hover:text-paper hover:border-ink transition-all"
            >
              ›
            </button>
          </div>
        </motion.div>

        <div className="relative h-[290px]" style={{ perspective: 1200 }}>
          {reviews.map((r, i) => {
            const offset = (i - index + reviews.length) % reviews.length
            const style =
              offset === 0
                ? { y: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 3 }
                : offset === 1
                ? { y: 16, scale: 0.94, rotate: 2, opacity: 0.55, zIndex: 2 }
                : { y: 28, scale: 0.88, rotate: -3, opacity: 0, zIndex: 1 }
            return (
              <motion.div
                key={i}
                animate={{ y: style.y, scale: style.scale, rotate: style.rotate, opacity: style.opacity }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                style={{ zIndex: style.zIndex }}
                className="absolute inset-0 bg-card rounded-md p-9 shadow-soft flex flex-col justify-between"
              >
                <p className="font-serif-display italic text-lg leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                <div>
                  <div className="mt-5 font-semibold text-sm text-burgundy">{r.author}</div>
                  <div className="text-sm text-text-soft">{r.meta}</div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
