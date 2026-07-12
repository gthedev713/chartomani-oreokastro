# Χαρτομάνι — website

React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Εκκίνηση

```bash
npm install
npm run dev
```

Άνοιξε το URL που θα δείξει το terminal (συνήθως http://localhost:5173).

## Build για production

```bash
npm run build
npm run preview   # για δοκιμή του παραγόμενου build τοπικά
```

Το τελικό, στατικό site βγαίνει στο φάκελο `dist/` — μπορείς να το ανεβάσεις σε
οποιοδήποτε static hosting (Netlify, Vercel, GitHub Pages κ.λπ.).

## Πριν το δημοσιεύσεις — TODO

Άνοιξε το αρχείο `src/data/content.ts` και συμπλήρωσε:

- `business.phone` και `business.phoneDisplay` — πραγματικό τηλέφωνο
- `business.address` — πραγματική διεύθυνση
- `business.mapsUrl` — link στο Google Maps του καταστήματος
- `schedule` — το πραγματικό ωράριο λειτουργίας (αυτό που υπάρχει τώρα είναι ενδεικτικό)

## Δομή

```
src/
  components/   Header, Hero, Marquee, Services, Stats, Reviews, Visit, CTA, Footer
  data/         content.ts — όλο το περιεχόμενο του site σε ένα σημείο
  index.css     design tokens (χρώματα σε HSL) + global styles
```

Όλα τα χρώματα ορίζονται ως HSL CSS variables στο `src/index.css` και εκτίθενται
στο Tailwind μέσω του `tailwind.config.js` — άλλαξε τα εκεί για να αλλάξει η
παλέτα σε όλο το site.
