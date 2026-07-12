import { useEffect, useState } from 'react'

export default function ScrollRibbon() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    function update() {
      const h = document.documentElement
      const value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setPct(Math.min(100, Math.max(0, value || 0)))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="ribbon-track hidden md:flex">
      <div className="ribbon-fill" style={{ height: `${pct}%`, transition: 'height 0.08s linear' }} />
    </div>
  )
}
