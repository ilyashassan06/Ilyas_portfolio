import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'UI Engineer', 'React Specialist', 'Web Craftsman']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let i = typing ? displayed.length : displayed.length

    if (typing) {
      if (displayed.length < currentRole.length) {
        const t = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00E5FF, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none animate-float"
        style={{ background: 'radial-gradient(circle, #FFB800, transparent)', animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8"
            style={{ animation: 'fadeUp 0.6s ease forwards', animationDelay: '0.1s', opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent tracking-wider">AVAILABLE FOR WORK</span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-extrabold text-6xl md:text-8xl leading-none tracking-tight mb-4"
            style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '0.2s', opacity: 0 }}
          >
            <span className="text-text">Ilyas</span>
            <br />
            <span className="text-gradient glow-text">Hassan</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="flex items-center gap-3 mb-8 h-10"
            style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '0.35s', opacity: 0 }}
          >
            <span className="font-mono text-textDim text-sm">~/</span>
            <span className="font-display text-xl md:text-2xl text-accent font-semibold">
              {displayed}
              <span className="animate-blink ml-0.5 text-accent">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="font-body text-textDim text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
            style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '0.5s', opacity: 0 }}
          >
            I craft{' '}
            <span className="text-text font-medium">fast, accessible, and visually precise</span>{' '}
            web experiences — turning design systems into pixel-perfect interfaces that users love.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4"
            style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '0.65s', opacity: 0 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-display font-semibold rounded-xl hover:bg-accentDim transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              View Projects
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl text-textDim font-body hover:border-accent/40 hover:text-text transition-all duration-300"
            >
              Get in touch
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-border"
            style={{ animation: 'fadeUp 0.7s ease forwards', animationDelay: '0.8s', opacity: 0 }}
          >
            {[
              { value: '4+', label: 'Years experience' },
              { value: '30+', label: 'Projects shipped' },
              { value: '15+', label: 'Happy clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl text-accent">{stat.value}</p>
                <p className="font-body text-sm text-textDim mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-textDim tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-textDim to-transparent" />
      </div>
    </section>
  )
}
