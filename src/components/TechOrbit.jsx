import Reveal from './Reveal.jsx'

const RING_1 = ['React', 'Next.js', 'Angular', 'Vue', 'Node', 'Python', 'Java', '.NET']
const RING_2 = ['Flutter', 'React Native', 'Firebase', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker']
const RING_3 = ['Kubernetes', 'OpenAI', 'TensorFlow', 'LangChain', 'PyTorch']

function Ring({ items, radius, duration, reverse, size }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        animation: `spin ${duration}s linear infinite ${reverse ? 'reverse' : ''}`
      }}
    >
      <div className="relative" style={{ width: radius * 2, height: radius * 2 }}>
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2
          const x = radius + radius * Math.cos(angle)
          const y = radius + radius * Math.sin(angle)
          return (
            <div
              key={item}
              className="absolute glass rounded-full px-3 py-1.5 text-xs font-mono text-mist -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{
                left: x,
                top: y,
                animation: `spin ${duration}s linear infinite ${reverse ? '' : 'reverse'}`,
                fontSize: size
              }}
            >
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function TechOrbit() {
  return (
    <section className="relative py-28 bg-void overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Reveal>
          <span className="text-cyan font-mono text-xs tracking-widest uppercase">Technology Stack</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            One team, every layer of the stack
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="relative mx-auto mt-16 hidden sm:block" style={{ width: 640, height: 640, maxWidth: '90vw' }}>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/10" style={{ width: 560, height: 560 }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/10" style={{ width: 380, height: 380 }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border border-white/10" style={{ width: 200, height: 200 }} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass rounded-full w-28 h-28 flex items-center justify-center text-center font-display font-semibold text-sm shadow-glow-violet">
              DASA<br />TECH
            </div>
          </div>

          <Ring items={RING_3} radius={100} duration={22} size={11} />
          <Ring items={RING_2} radius={190} duration={34} reverse size={11} />
          <Ring items={RING_1} radius={280} duration={46} size={12} />
        </div>

        {/* Mobile fallback: simple wrapped badge grid, no orbit animation */}
        <div className="sm:hidden mt-12 flex flex-wrap justify-center gap-2 px-6">
          {[...RING_1, ...RING_2, ...RING_3].map((t) => (
            <span key={t} className="glass rounded-full px-3 py-1.5 text-xs font-mono text-mist">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
