import { useState } from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/ilyashassan06/', icon: '⌨' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'Twitter / X', href: '#', icon: '𝕏' },
  { label: 'Dribbble', href: '#', icon: '🏀' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent'

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1400)
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,229,255,0.04), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-mono text-accent text-sm tracking-wider mb-3">// contact</p>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text mb-4">
            Let's build something
            <br />
            <span className="text-gradient">together</span>
          </h2>
          <p className="font-body text-textDim max-w-lg mx-auto">
            Whether it's a full-scale product, a consulting session, or just a chat about tech — my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <div className="reveal space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-surface">
              <h3 className="font-display font-semibold text-lg text-text mb-4">Contact info</h3>
              <div className="space-y-3">
                {[
                  { icon: '📧', label: 'Email', value: 'iamilyashassan06@gmail.com', href: 'mailto:iamilyashassan06@gmail.com' },
                  { icon: '📍', label: 'Location', value: 'Remote — Worldwide', href: null },
                  { icon: '⏰', label: 'Response', value: 'Within 24 hours', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-lg w-8">{item.icon}</span>
                    <div>
                      <p className="font-mono text-xs text-textDim">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-sm text-accent hover:text-accentDim transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-sm text-text">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="p-6 rounded-2xl border border-border bg-surface">
              <h3 className="font-display font-semibold text-lg text-text mb-4">Find me online</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-2 p-3 rounded-xl border border-border hover:border-accent/40 text-textDim hover:text-text transition-all duration-300 group"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="font-body text-sm group-hover:text-accent transition-colors">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface border-gradient">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-2xl text-text mb-2">Message sent!</h3>
                  <p className="font-body text-textDim">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-6 font-body text-sm text-accent hover:text-accentDim transition-colors"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-mono text-xs text-textDim mb-2">NAME</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text font-body text-sm placeholder-muted focus:outline-none focus:border-accent/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-textDim mb-2">EMAIL</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text font-body text-sm placeholder-muted focus:outline-none focus:border-accent/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-textDim mb-2">MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-border text-text font-body text-sm placeholder-muted focus:outline-none focus:border-accent/60 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-xl bg-accent text-bg font-display font-semibold text-sm hover:bg-accentDim transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
