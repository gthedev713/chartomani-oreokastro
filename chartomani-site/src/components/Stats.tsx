import { motion } from 'framer-motion'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section id="story" className="py-28">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="bg-ink rounded-lg py-16 px-6 md:px-10"
        >
          <div className="text-center max-w-[560px] mx-auto mb-12">
            <span className="text-xs tracking-widest uppercase font-semibold text-mustard-soft">Γιατί το Χαρτομάνι</span>
            <h2 className="font-serif-display font-bold text-paper text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight mt-3">
              Χρόνια εμπιστοσύνης, <em className="italic font-medium text-mustard-soft not-italic">μία</em> γειτονιά
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-paper/10 rounded-md overflow-hidden">
            {stats.map((s, i) => (
              <div key={i} className="group relative bg-ink p-9 overflow-hidden">
                <div className="absolute inset-0 bg-burgundy origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 z-0" />
                <div className="relative z-10">
                  <div className="font-serif-display font-bold text-4xl text-paper">
                    {s.num}
                    {s.suffix && <span className="text-xl">{s.suffix}</span>}
                  </div>
                  <div className="text-paper/65 text-sm mt-1.5">{s.label}</div>
                  <div className="inline-block mt-3.5 text-mustard-soft transition-transform duration-300 group-hover:translate-x-1.5">↗</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
