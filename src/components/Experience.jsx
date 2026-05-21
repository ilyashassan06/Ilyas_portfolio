const experiences = [
  {
  company: 'Dg Digitals',
  role: 'Frontend Developer',
  period: '2023 — Present',
  type: 'Full-time',
  description:
    'Developing responsive and modern business websites for clients across multiple industries based on company and customer requirements. Building scalable frontend interfaces with focus on UI/UX, performance, and mobile responsiveness using React.js and modern web technologies.',
  highlights: [
    'Developed custom frontend websites for multiple business clients',
    'Built responsive landing pages and company portfolio websites',
    'Converted UI/UX designs into fully functional web interfaces',
    'Implemented reusable React components for faster development',
    'Optimized website performance and mobile responsiveness',
    'Collaborated with design and marketing teams to meet client requirements',
  ],
  accent: '#00E5FF',
},
  {
  company: 'Self-Employed',
  role: 'Frontend Developer & SEO Specialist',
  period: '2021 — Present',
  type: 'Freelance',
  description:
    'Working with local businesses and clients to develop modern, responsive websites while improving their online visibility through SEO optimization strategies. Delivering custom frontend solutions focused on performance, user experience, search engine ranking, and business growth.',
  highlights: [
    'Designed and developed responsive business and portfolio websites for clients',
    'Implemented on-page SEO techniques to improve search engine visibility',
    'Optimized website speed, performance, and mobile responsiveness',
    'Built custom landing pages focused on lead generation and conversions',
    'Collaborated directly with clients to understand business requirements',
    'Improved website structure, metadata, and SEO-friendly content implementation',
    'Managed website deployment, maintenance, and performance monitoring',
  ],
  accent: '#8B5CF6',
},
  
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="font-mono text-accent text-sm tracking-wider mb-3">// experience</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-border to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="reveal md:flex gap-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Period column */}
                <div className="md:w-[200px] flex-shrink-0 md:text-right mb-4 md:mb-0 md:pt-1">
                  <p className="font-mono text-xs text-textDim">{exp.period}</p>
                  <span className="font-mono text-xs px-2 py-0.5 rounded mt-1 inline-block border"
                    style={{ color: exp.accent, borderColor: `${exp.accent}33`, background: `${exp.accent}11` }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex flex-shrink-0 w-px relative">
                  <div
                    className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-bg"
                    style={{ background: exp.accent }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 rounded-2xl bg-surface border border-border card-hover group">
                  <div
                    className="absolute top-0 left-0 bottom-0 w-0.5 rounded-l-2xl transition-all duration-300 group-hover:opacity-100 opacity-30"
                    style={{ background: exp.accent }}
                  />
                  <h3 className="font-display font-bold text-xl text-text mb-1">{exp.role}</h3>
                  <p className="font-body text-accent text-sm font-medium mb-3">{exp.company}</p>
                  <p className="font-body text-textDim text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm font-body text-textDim">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
