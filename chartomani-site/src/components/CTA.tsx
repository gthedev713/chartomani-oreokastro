import { motion } from 'framer-motion'
import { business } from '../data/content'

export default function CTA() {
  return (
    <section className="py-6">
      <div className="max-w-[1180px] mx-auto px-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-lg py-16 md:py-20 px-6 md:px-12 text-center text-paper overflow-hidden"
          style={{
            background:
              'linear-gradient(120deg, hsl(var(--color-burgundy)) 0%, hsl(var(--color-burgundy-deep)) 60%, hsl(var(--color-ink)) 130%)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at 80% 20%, hsl(var(--color-mustard) / 0.28), transparent 50%)' }}
          />
          <div className="relative max-w-[620px] mx-auto">
            <span className="text-xs tracking-widest uppercase font-semibold text-mustard-soft">Σας περιμένουμε</span>
            <h2 className="font-serif-display font-bold text-[clamp(1.9rem,3.6vw,2.7rem)] leading-tight mt-3 mb-3.5">
              Ελάτε να ψαχουλέψετε <em className="italic font-medium text-mustard-soft not-italic">κι εσείς</em> στο Χαρτομάνι
            </h2>
            <p className="text-paper/80 mb-8">
              Ένα βιβλίο, μια κάρτα, ένα δώρο ή απλώς μια κουβέντα — πάντα υπάρχει λόγος να περάσετε.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href={`tel:${business.phone}`} className="bg-paper text-burgundy rounded-full px-6 py-3 font-semibold hover:bg-card hover:-translate-y-0.5 transition-all">
                ☎ Καλέστε μας
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="border-[1.5px] border-paper/50 rounded-full px-6 py-3 font-semibold hover:-translate-y-0.5 transition-all"
              >
                Δείτε τη διαδρομή
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
