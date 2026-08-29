import Reveal from './Reveal.jsx'

const TRUST = [
  'Fast Delivery', '100% Custom Development', 'Scalable Architecture', 'Dedicated Engineers',
  'Transparent Process', 'AI First', 'IoT Experts', 'ERP Specialists', 'Enterprise Security'
]

export default function Trust() {
  return (
    <section className="relative py-20 bg-navy overflow-hidden border-y border-white/5">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-widest text-cyan font-mono mb-10">
          Why Clients Trust Us
        </p>
      </Reveal>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {[...TRUST, ...TRUST].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="mx-4 glass rounded-full px-6 py-3 text-sm text-mist whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </section>
  )
}
