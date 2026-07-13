import { motion } from 'framer-motion'
import { schedule, business } from '../data/content'

// Monday = 0 ... Sunday = 6
const todayIndex = (new Date().getDay() + 6) % 7

function isOpenNow(): boolean {
  const todayHours = schedule[todayIndex].hours
  if (todayHours === 'Κλειστά') return false

  const now = new Date()
  const nowMinutes = now.getHours() * 60 + now.getMinutes()

  // e.g. "8:30 – 14:00 & 17:30 – 21:00" -> ["8:30 – 14:00", "17:30 – 21:00"]
  const ranges = todayHours.split('&').map((r) => r.trim())

  return ranges.some((range) => {
    const [start, end] = range.split('–').map((t) => t.trim())
    if (!start || !end) return false
    const [sh, sm] = start.split(':').map(Number)
    const [eh, em] = end.split(':').map(Number)
    const startMinutes = sh * 60 + sm
    const endMinutes = eh * 60 + em
    return nowMinutes >= startMinutes && nowMinutes < endMinutes
  })
}

export default function Visit() {
  const open = isOpenNow()

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
            <div className="flex items-center justify-between px-6 py-5 border-b border-ink/[0.06]">
              <div className="font-serif-display font-semibold text-lg">Ωράριο λειτουργίας</div>
              <div
                className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  open ? 'bg-sage/15 text-sage' : 'bg-ink/[0.06] text-text-soft'
                }`}
              >
                <span className="relative flex w-2 h-2">
                  {open && (
                    <span className="absolute inline-flex w-full h-full rounded-full bg-sage opacity-75 animate-ping" />
                  )}
                  <span className={`relative inline-flex rounded-full w-2 h-2 ${open ? 'bg-sage' : 'bg-text-soft'}`} />
                </span>
                {open ? 'Ανοιχτά τώρα' : 'Κλειστά τώρα'}
              </div>
            </div>

            <div className="px-3 py-2">
              {schedule.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group flex items-center justify-between px-3 py-3.5 rounded-md transition-colors ${
                    i === todayIndex ? '' : 'hover:bg-ink/[0.03]'
                  } ${i !== schedule.length - 1 ? 'border-b border-ink/[0.05]' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === todayIndex ? 'bg-mustard' : 'bg-transparent group-hover:bg-ink/20'
                      }`}
                    />
                    <span className={i === todayIndex ? 'font-semibold text-ink' : 'text-text-soft'}>{d.name}</span>
                    {i === todayIndex && (
                      <span className="bg-mustard/15 text-mustard text-[0.68rem] font-bold px-2 py-0.5 rounded-full tracking-wide">
                        ΣΗΜΕΡΑ
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-sm tabular-nums ${
                      i === todayIndex ? 'font-semibold text-ink' : 'text-text-soft'
                    } ${d.hours === 'Κλειστά' ? 'italic opacity-70' : ''}`}
                  >
                    {d.hours}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
