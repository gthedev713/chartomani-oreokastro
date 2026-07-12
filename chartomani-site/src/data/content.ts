export const business = {
  name: 'Χαρτομάνι',
  city: 'Ωραιόκαστρο',
  rating: 4.9,
  reviewCount: 187,
  phone: '+302310698432',
  phoneDisplay: '2310 698 432',
  address: 'Υψηλάντου 49, 570 13 Ωραιόκαστρο',
  mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Χαρτομάνι, Υψηλάντου 49, 570 13 Ωραιόκαστρο')}`,
}

export const heroSlides = [
  {
    id: 0,
    tagline: 'Το γειτονικό βιβλιοπωλείο που θυμάται τ\u2019 όνομά σου',
    headlinePrefix: 'Ένα ράφι γεμάτο ',
    headlineEm: 'ιστορίες',
    headlineSuffix: ', μια πόρτα πάντα ανοιχτή',
    sub: 'Στο Χαρτομάνι κάθε επίσκεψη είναι λίγο ανακάλυψη, λίγο κουβέντα και σίγουρα κι ένα χάδι στους γατούληδες του μαγαζιού.',
    ctaPrimary: { label: 'Τι θα βρείτε', href: '#services' },
    ctaSecondary: { label: 'Ωράριο & διεύθυνση', href: '#visit' },
    spines: [
      { w: 26, h: 78, color: 'hsl(var(--color-mustard))' },
      { w: 20, h: 92, color: 'hsl(var(--color-sage))' },
      { w: 30, h: 65, color: 'hsl(var(--color-paper))' },
      { w: 22, h: 85, color: 'hsl(var(--color-burgundy))' },
      { w: 18, h: 70, color: 'hsl(var(--color-mustard))' },
      { w: 26, h: 96, color: 'hsl(var(--color-ink-soft))' },
      { w: 20, h: 60, color: 'hsl(var(--color-paper))' },
    ],
    gradient:
      'radial-gradient(ellipse at 75% 20%, hsl(var(--color-mustard) / 0.35), transparent 55%), linear-gradient(135deg, hsl(var(--color-ink)) 0%, #2c3350 55%, hsl(var(--color-burgundy-deep)) 100%)',
    // TODO: swap for a real photo of the shop — this is a free stock photo for now
    image: 'https://images.unsplash.com/photo-1521123845560-14093637aa7d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 1,
    tagline: 'Σεπτέμβριος χωρίς άγχος',
    headlinePrefix: 'Σχολικά είδη με ',
    headlineEm: 'υπομονή',
    headlineSuffix: ' να τα διαλέξουμε μαζί',
    sub: 'Τετράδια, κασετίνες, βιβλία της χρονιάς — ό,τι λείπει από τη λίστα, το παραγγέλνουμε και έρχεται σε λίγες μέρες.',
    ctaPrimary: { label: 'Δείτε τα προϊόντα', href: '#services' },
    ctaSecondary: { label: 'Καλέστε μας', href: `tel:${business.phone}` },
    spines: [
      { w: 22, h: 88, color: 'hsl(var(--color-sage))' },
      { w: 28, h: 70, color: 'hsl(var(--color-mustard))' },
      { w: 18, h: 94, color: 'hsl(var(--color-paper))' },
      { w: 24, h: 75, color: 'hsl(var(--color-ink-soft))' },
      { w: 20, h: 82, color: 'hsl(var(--color-burgundy))' },
    ],
    gradient:
      'radial-gradient(ellipse at 20% 75%, hsl(var(--color-sage) / 0.4), transparent 55%), linear-gradient(135deg, hsl(var(--color-burgundy-deep)) 0%, #6d2836 50%, hsl(var(--color-ink)) 100%)',
    image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    tagline: 'Όταν δεν ξέρεις τι να χαρίσεις',
    headlinePrefix: 'Δώρα και κάρτες για ',
    headlineEm: 'κάθε',
    headlineSuffix: ' αφορμή',
    sub: 'Ψαχουλέψτε ανάμεσα σε ό,τι απρόσμενο κρύβει το μαγαζί — σχεδόν πάντα βρίσκεται το σωστό δώρο.',
    ctaPrimary: { label: 'Ανακαλύψτε', href: '#services' },
    ctaSecondary: { label: 'Οδηγίες', href: business.mapsUrl },
    spines: [
      { w: 24, h: 80, color: 'hsl(var(--color-burgundy))' },
      { w: 20, h: 65, color: 'hsl(var(--color-paper))' },
      { w: 26, h: 90, color: 'hsl(var(--color-mustard))' },
      { w: 18, h: 72, color: 'hsl(var(--color-sage))' },
      { w: 22, h: 85, color: 'hsl(var(--color-ink-soft))' },
    ],
    gradient:
      'radial-gradient(ellipse at 60% 30%, hsl(var(--color-mustard) / 0.3), transparent 55%), linear-gradient(135deg, #2c3350 0%, hsl(var(--color-ink)) 55%, #4a3524 100%)',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1600&q=80',
  },
]

export const marqueeItems = [
  '★ 4,9 στο Google',
  '187 κριτικές πελατών',
  'Βιβλία · Σχολικά · Δώρα',
  '“Το αγαπημένο μας βιβλιοπωλείο της γειτονιάς”',
  'Ειδικές παραγγελίες σε λίγες μέρες',
  'Με τους γατούληδες του μαγαζιού',
]

export const services = [
  {
    icon: '📚',
    iconClass: 'bg-burgundy/10 text-burgundy',
    title: 'Βιβλία για κάθε αναγνώστη',
    desc: 'Λογοτεχνία, παιδικά, δοκίμια — και προτάσεις φτιαγμένες στα μέτρα σας, όχι γενικές λίστες μπεστ σέλερ.',
    span: 'md:col-span-4',
  },
  {
    icon: '✏️',
    iconClass: 'bg-mustard/15 text-mustard',
    title: 'Σχολικά & γραφική ύλη',
    desc: 'Ό,τι χρειάζεται η λίστα του σχολείου, βήμα βήμα και χωρίς βιασύνη.',
    span: 'md:col-span-2',
  },
  {
    icon: '🎁',
    iconClass: 'bg-sage/15 text-sage',
    title: 'Δώρα & κάρτες',
    desc: 'Ιδιαίτερες λεπτομέρειες για κάθε περίσταση, έτοιμες να τυλιχτούν.',
    span: 'md:col-span-2',
  },
  {
    icon: '📦',
    iconClass: 'bg-ink/10 text-ink',
    title: 'Ειδικές παραγγελίες',
    desc: 'Δεν το έχουμε στο ράφι; Το παραγγέλνουμε και φτάνει μέσα σε λίγες μέρες.',
    span: 'md:col-span-4',
  },
]

export const stats = [
  { num: '4,9', suffix: '/5', label: 'Μέση βαθμολογία Google' },
  { num: '187', suffix: '', label: 'Κριτικές πελατών' },
  { num: '1:1', suffix: '', label: 'Προσωπική εξυπηρέτηση, κάθε φορά' },
  { num: '🐾', suffix: '', label: 'Με τους γατούληδες του μαγαζιού' },
]

export const reviews = [
  {
    quote:
      'Το αγαπημένο μας μικρό βιβλιοπωλείο της γειτονιάς — μας προτείνουν βιβλία, μας εξυπηρετούν με ιδιαίτερα δώρα και πάντα αφήνουν χρόνο για ένα καλό ψάξιμο στα ράφια.',
    meta: 'πριν από έναν χρόνο',
  },
  {
    quote:
      'Φιλόξενος χώρος με ό,τι ζητήσεις — βιβλία, σχολικά, δώρα. Κι αν κάτι λείπει, έρχεται σε ελάχιστες μέρες. Πουθενά αλλού δεν σε εξυπηρετούν τόσο καλά όσο η Ευαγγελία.',
    meta: 'πριν από 11 μήνες',
  },
  {
    quote:
      'Δεν ξέρω αν είναι ο χώρος, οι άνθρωποι, τα προϊόντα ή οι γατούληδες — πάντως αυτό το βιβλιοπωλείο ξεχωρίζει.',
    meta: 'πριν από 8 μήνες',
  },
]

// TODO: confirm real opening hours before publishing — placeholder based on a typical
// neighbourhood bookshop schedule.
export const schedule = [
  { name: 'Δευτέρα', hours: '8:30 – 14:00 & 17:30 – 21:00' },
  { name: 'Τρίτη', hours: '8:30 – 14:00' },
  { name: 'Τετάρτη', hours: '8:30 – 14:00 & 17:30 – 21:00' },
  { name: 'Πέμπτη', hours: '8:30 – 14:00' },
  { name: 'Παρασκευή', hours: '8:30 – 14:00 & 17:30 – 21:00' },
  { name: 'Σάββατο', hours: '8:30 – 14:30' },
  { name: 'Κυριακή', hours: 'Κλειστά' },
]

// Parses an hours string like "8:30 – 14:00 & 17:30 – 21:00" or "Κλειστά" into
// a list of [startMinutes, endMinutes] ranges for live open/closed status.
function parseRanges(hours: string): [number, number][] {
  if (hours.trim() === 'Κλειστά') return []
  return hours.split('&').map((part) => {
    const [start, end] = part.trim().split('–').map((t) => t.trim())
    const toMinutes = (t: string) => {
      const [h, m] = t.split(':').map(Number)
      return h * 60 + m
    }
    return [toMinutes(start), toMinutes(end)]
  })
}

export function getOpenStatus(now: Date = new Date()) {
  const todayIndex = (now.getDay() + 6) % 7 // Monday = 0 ... Sunday = 6
  const nowMinutes = now.getHours() * 60 + now.getMinutes()
  const ranges = parseRanges(schedule[todayIndex].hours)
  const activeRange = ranges.find(([start, end]) => nowMinutes >= start && nowMinutes < end)

  if (activeRange) {
    return { open: true, closesAt: activeRange[1] }
  }
  const nextRange = ranges.find(([start]) => nowMinutes < start)
  return { open: false, opensAt: nextRange?.[0] }
}

export const navLinks = [
  { label: 'Αρχική', href: '#home' },
  { label: 'Η ιστορία μας', href: '#story' },
  { label: 'Τι θα βρείτε', href: '#services' },
  { label: 'Κριτικές', href: '#reviews' },
  { label: 'Επισκεφτείτε μας', href: '#visit' },
]
