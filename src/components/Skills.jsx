const categories = [
  {
    title: 'Core',
    icon: '⚡',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript (ES2024)', level: 95 },
      { name: 'HTML5 / CSS3', level: 98 },
    ],
  },
  {
    title: 'Styling',
    icon: '🎨',
    skills: [
      { name: 'Tailwind CSS', level: 96 },
      { name: 'Framer Motion', level: 80 },
      { name: 'GSAP', level: 75 },
      { name: 'Sass / CSS Modules', level: 88 },
    ],
  },
  {
    title: 'Tooling',
    icon: '🛠',
    skills: [
      { name: 'Vite / Webpack', level: 85 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 82 },
      { name: 'Testing (Vitest)', level: 75 },
    ],
  },
]

const techBadges = [
  'React', 'TypeScript', 'Next.js', 'Tailwind', 'Vite', 'Redux', 'React Query',
  'Node.js', 'REST APIs', 'GraphQL', 'PostgreSQL', 'Firebase', 'Vercel', 'Git',
  'Figma', 'GSAP', 'Framer Motion', 'Storybook', 'Jest', 'Playwright',
]

function SkillBar({ name, level }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-textDim group-hover:text-text transition-colors">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="h-1 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accentDim transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      {/* Section divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="font-mono text-accent text-sm tracking-wider mb-3">// skills & tools</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
            My tech <span className="text-gradient">arsenal</span>
          </h2>
        </div>

        {/* Skill cards */}
        <div className="reveal grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl bg-surface border border-border card-hover border-gradient"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-semibold text-lg text-text">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling badge strip */}
        <div className="reveal overflow-hidden">
          <p className="font-mono text-xs text-textDim text-center mb-4 tracking-wider">TECHNOLOGIES I WORK WITH</p>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

            <div className="flex animate-slide-left">
              {[...techBadges, ...techBadges].map((tech, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-2 px-4 py-2 rounded-lg border border-border bg-surface text-textDim font-mono text-sm hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
