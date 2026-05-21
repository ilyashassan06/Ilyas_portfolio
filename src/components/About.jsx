export default function About() {
  return (
    <section id="about" className="pt-28 pb-10 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - visual block */}
          <div className="reveal relative">
            <div className="relative w-full max-w-sm mx-auto md:mx-0">
              {/* Photo placeholder with geometric design */}
              <div className="relative w-72 h-72 mx-auto">
                {/* Rotating border ring */}
                <div
                  className="absolute inset-0 rounded-2xl border border-accent/20 animate-spin-slow"
                  style={{ transform: 'rotate(12deg)' }}
                />
                <div
                  className="absolute inset-2 rounded-2xl border border-gold/10"
                  style={{ transform: 'rotate(-8deg)' }}
                />
                {/* Main card */}
                <div className="absolute inset-4 rounded-2xl bg-surface border border-border flex items-center justify-center overflow-hidden">
                  {/* Abstract code visual */}
                  <div className="p-6 font-mono text-xs leading-relaxed text-left w-full">
                    <div className="text-accent/60">const developer = {'{'}</div>
                    <div className="pl-4 text-textDim">
                      <div>name: <span className="text-gold">"Ilyas Hassan"</span>,</div>
                      <div>role: <span className="text-accent">"Frontend Dev"</span>,</div>
                      <div>passion: <span className="text-gold">"Craft"</span>,</div>
                      <div>coffee: <span className="text-accent">true</span>,</div>
                      <div>status: <span className="text-green-400">"available"</span></div>
                    </div>
                    <div className="text-accent/60">{'}'}</div>
                  </div>
                </div>
                {/* Accent dot */}
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent glow-accent" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gold/60" />
              </div>
            </div>
          </div>

          {/* Right - content */}
          <div>
            <div className="reveal">
              <p className="font-mono text-accent text-sm tracking-wider mb-3">// about me</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-6 leading-tight">
                Building interfaces
                <br />
                <span className="text-gradient">worth remembering</span>
              </h2>
            </div>

            <div className="reveal space-y-4 text-textDim font-body leading-relaxed text-base" style={{ transitionDelay: '0.1s' }}>
              <p>
                Hey! I'm Ilyas, a frontend developer with{' '}
                <span className="text-text font-medium">4+ years</span> of experience building
                high-performance web applications. I specialize in React ecosystems, design systems,
                and turning complex UX requirements into clean, maintainable code.
              </p>
              <p>
                My approach combines{' '}
                <span className="text-text font-medium">engineering precision</span> with a genuine
                eye for design. I believe great interfaces are invisible — they just work, feel right,
                and make people come back.
              </p>
              <p>
                When I'm not pushing pixels, I'm exploring new CSS capabilities, contributing to
                open-source, or experimenting with creative coding.
              </p>
            </div>

            <div className="reveal mt-8 grid grid-cols-2 gap-4" style={{ transitionDelay: '0.2s' }}>
              {[
                ['📍', 'Location', 'Remote / Worldwide'],
                ['🎓', 'Education', 'Computer Science'],
                ['💬', 'Languages', 'English, Hindi'],
                ['☕', 'Fuel', 'Coffee & Dark Mode'],
              ].map(([icon, label, value]) => (
                <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-surface border border-border">
                  <span className="text-lg">{icon}</span>
                  <div>
                    <p className="font-mono text-xs text-textDim">{label}</p>
                    <p className="font-body text-sm text-text font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-8" style={{ transitionDelay: '0.3s' }}>
              <a
                href="/public/ATS Front-end Resume (1).pdf"
                className="inline-flex items-center gap-2 font-body text-sm text-accent hover:text-accentDim transition-colors group"
              >
                Download Resume
                <span className="group-hover:translate-x-1 transition-transform">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
