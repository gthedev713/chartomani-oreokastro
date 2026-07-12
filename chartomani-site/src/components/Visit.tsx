import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { schedule, business, getOpenStatus } from '../data/content'

// Monday = 0 ... Sunday = 6
const todayIndex = (new Date().getDay() + 6) % 7

function formatMinutes(mins: number) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${h}:${m.toString().padStart(2, '0')}`
}

export default function Visit() {
  const [status, setStatus] = useState(() => getOpenStatus())

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="visit" className="py-28">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-[620px] mb-14"
        >
          <span className="text-xs tracking-widest uppercase font-semibold text-burgundy">Επισκεφτείτε μας</span>
          <h2 className="font-serif-display font-bold text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight mt-3">
            Περάστε μια <em className="italic font-medium text-burgundy not-italic">βόλτα</em> από το μαγαζί
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative bg-burgundy text-paper rounded-lg p-10 md:p-11 overflow-hidden"
          >
            <div className="absolute w-56 h-56 rounded-full bg-mustard/[0.18] -top-20 -right-20" />
            <div className="relative">
              <div className="text-xs tracking-widest uppercase font-semibold text-mustard-soft">
                Στοιχεία επικοινωνίας
              </div>
              <h3 className="font-serif-display text-2xl font-semibold mt-2.5">{business.name}</h3>

              <div className="flex gap-3.5 items-start mt-5">
                <span className="text-mustard-soft w-5 mt-0.5">📍</span>
                <span>{business.address}</span>
              </div>
              <div className="flex gap-3.5 items-start mt-4">
                <span className="text-mustard-soft w-5 mt-0.5">☎</span>
                <span>{business.phoneDisplay}</span>
              </div>
              <div className="flex gap-3.5 items-start mt-4">
                <span className="text-mustard-soft w-5 mt-0.5">★</span>
                <span>
                  {business.rating} βαθμολογία · {business.reviewCount} κριτικές στον Χάρτη Google
                </span>
              </div>

              <div className="flex gap-3 mt-7 flex-wrap">
                <a href={`tel:${business.phone}`} className="bg-paper text-burgundy rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-card hover:-translate-y-0.5 transition-all">
                  ☎ Κλήση
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border-[1.5px] border-paper/50 text-paper rounded-full px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition-all"
                >
                  Οδηγίες →
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-card rounded-lg shadow-soft overflow-hidden"
          >
            <div className="flex items-center justify-between px-7 py-5 border-b border-ink/[0.06]">
              <span className="text-xs tracking-widest uppercase font-semibold text-text-soft">Ώρες λειτουργίας</span>
              <span
                className={`inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full ${
                  status.open ? 'bg-sage/15 text-sage' : 'bg-burgundy/10 text-burgundy'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${status.open ? 'bg-sage' : 'bg-burgundy'}`} />
                {status.open
                  ? `Ανοιχτά · κλείνει ${formatMinutes(status.closesAt!)}`
                  : status.opensAt !== undefined
                  ? `Κλειστά · ανοίγει ${formatMinutes(status.opensAt)}`
                  : 'Κλειστά'}
              </span>
            </div>

            <div className="px-7 py-2">
              {schedule.map((d, i) => (
                <div
                  key={d.name}
                  className={`flex items-center justify-between py-3.5 ${
                    i !== schedule.length - 1 ? 'border-b border-ink/[0.06]' : ''
                  }`}
                >
                  <div className="font-semibold flex items-center gap-2.5 text-sm">
                    {d.name}
                    {i === todayIndex && (
                      <span className="bg-mustard text-ink text-[0.68rem] font-bold px-2.5 py-0.5 rounded-full tracking-wide">
                        ΣΗΜΕΡΑ
                      </span>
                    )}
                  </div>
                  <div className="text-text-soft text-sm tabular-nums">{d.hours}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
