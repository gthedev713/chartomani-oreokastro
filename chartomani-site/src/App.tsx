import ScrollRibbon from './components/ScrollRibbon'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Stats from './components/Stats'
import Reviews from './components/Reviews'
import Visit from './components/Visit'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollRibbon />
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Reviews />
      <Visit />
      <CTA />
      <Footer />
    </div>
  )
}
