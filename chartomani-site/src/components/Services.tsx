import { useRef } from 'react'
import { motion } from 'framer-motion'
import { services } from '../data/content'

function TiltCard({ service }: { service: (typeof services)[number] }) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const rx = ((y / r.height) - 0.5) * -10
    const ry = ((x / r.width) - 0.5) * 10
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
    el.style.setProperty('--mx', `${(x / r.width) * 100}%`)
    el.style.setProperty('--my', `${(y / r.height) * 100}%`)
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative bg-card rounded-lg p-8 shadow-soft hover:shadow-deep overflow-hidden border border-burgundy/5 min-h-[230px] flex flex-col justify-end transition-shadow duration-300 ${service.span}`}
      style={{ transitionProperty: 'transform, box-shadow', transitionDuration: '0.12s, 0.3s' }}
    >
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.55), transparent 55%)',
          mixBlendMode: 'overlay',
        }}
      />
      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-4 text-2xl ${service.iconClass}`} style={{ width: 52, height: 52 }}>
        {service.icon}
      </div>
      <div className="font-serif-display font-semibold text-xl mb-2">{service.title}</div>
      <div className="text-text-soft text-sm">{service.desc}</div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-28 px-2">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-[620px] mb-14"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-burgundy">Τι θα βρείτε</span>
          <h2 className="font-serif-display font-bold text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight mt-3">
            Ένα μικρό μαγαζί, <em className="italic font-medium text-burgundy not-italic">χίλια</em> πράγματα να ανακαλύψεις
          </h2>
          <p className="text-text-soft text-lg mt-4 max-w-[520px]">
            Από το πρώτο σχολικό τετράδιο μέχρι το βιβλίο που έψαχνες χρόνια — το Χαρτομάνι το παραγγέλνει, το βρίσκει, το προτείνει.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5" style={{ perspective: 1400 }}>
          {services.map((s, i) => (
            <TiltCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
