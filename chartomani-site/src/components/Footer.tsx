import { business } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/75 pt-20 pb-8 mt-16">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-10 md:gap-12 mb-12">
          <div>
            <div className="font-serif-display font-bold text-2xl text-paper mb-3.5">{business.name}</div>
            <p className="text-sm">
              Γειτονικό βιβλιοπωλείο στο {business.city} — βιβλία, σχολικά, δώρα και κάρτες, με προσωπική εξυπηρέτηση από
              το {business.rating}★ μαγαζί της περιοχής.
            </p>
          </div>
          <div>
            <h4 className="text-paper text-sm mb-4 tracking-wide">Επικοινωνία</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>{business.address}</li>
              <li>{business.phoneDisplay}</li>
              <li>{business.city}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-paper text-sm mb-4 tracking-wide">Γρήγοροι σύνδεσμοι</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#services" className="hover:text-mustard-soft transition-colors">Τι θα βρείτε</a></li>
              <li><a href="#reviews" className="hover:text-mustard-soft transition-colors">Κριτικές</a></li>
              <li><a href="#visit" className="hover:text-mustard-soft transition-colors">Ωράριο & διεύθυνση</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/10 pt-6 text-sm text-paper/45 flex flex-wrap justify-between gap-2.5">
          <span>© 2026 {business.name}. Με αγάπη για το βιβλίο.</span>
          <span>{business.city}, Θεσσαλονίκη</span>
        </div>
      </div>
    </footer>
  )
}
