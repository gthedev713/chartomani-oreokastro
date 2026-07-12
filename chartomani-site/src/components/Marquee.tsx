import { marqueeItems } from '../data/content'

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className="marquee-band bg-burgundy overflow-hidden py-4">
      <div className="animate-marquee flex gap-12 w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-paper font-medium">
              {item.startsWith('★') ? (
                <>
                  <span className="text-mustard-soft">★</span>
                  {item.slice(1)}
                </>
              ) : (
                item
              )}
            </span>
            <span className="text-paper/35">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
