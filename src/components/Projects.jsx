import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Ai resume analyzer',
    category: 'Web App',
    description:
      'A smart web app built with React that uses AI to evaluate resumes, score them for ATS compatibility, and suggest improvements. Designed with a modern, responsive UI and deployed on Vercel.',
    tech: ['React', 'Html', 'CSS', 'Tailwind', 'Javascript'],
    color: '#00E5FF',
    featured: true,
    links: { live: 'https://ai-resume-analyzer-iota-seven.vercel.app/Home', github: 'https://github.com/ilyashassan06/AiResumeAnalyzer' },
  },
  {
    id: 2,
    title: 'Ecom Website',
    category: 'E-commerce',
    description:
      'Developed a modern full-stack ecommerce platform with separate customer and merchant functionalities. Merchants can add, edit, manage, and delete products through an admin dashboard, while users can browse products, apply filters, manage carts, and place orders. Built using React.js, JavaScript, Tailwind CSS, and Firebase with responsive design and optimized user experience.',
    tech: ['React', 'Html', 'CSS', 'Tailwind', 'Javascript','Firebase','Context APi'],
    color: '#FFB800',
    featured: true,
    links: { live: 'https://deal-kart.vercel.app/', github: 'https://github.com/ilyashassan06/DealKart' },
  },
  {
    id: 3,
    title: 'Tool Vercse',
    category: 'Web App',
    description:
      'Developed ToolVerse, a modern web platform that provides multiple useful online tools in one place for improving productivity and daily workflow. Features include responsive UI, category-based tool organization, fast search functionality, and reusable React components built with React.js, JavaScript, and Tailwind CSS.',
    tech: ['React', 'Html', 'CSS', 'Tailwind', 'Javascript','Context APi'],
    color: '#9F7AEA',
    featured: false,
    links: { live: 'https://tool-verse-silk.vercel.app/', github: 'https://github.com/ilyashassan06/ToolVerse' },
  },
  {
    id: 4,
    title: 'Single user blog website',
    category: 'Tool',
    description:
      'A single user blog website build in react with multiple tech stacks used consisting multiple fetures like authentication , add blog , edit blog,delete blog built with react and tech stacks like firebase,redux toolkit,etc.',
    tech: [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Firebase",
  "Firestore Database",
  "Firebase Authentication",
  "React Router DOM",
  "Context API",
  "Responsive Design",
  "Git",
  "GitHub",
  "Vercel"
],
    color: '#48BB78',
    featured: false,
    links: { live: 'https://bb-log-verse.vercel.app/', github: 'https://github.com/ilyashassan06/BLogVerse' },
  },
  
]

const filters = ['All', 'Web App', 'E-commerce', 'Design Tool', 'Tool', 'Open Source', 'Website']

function ProjectCard({ project }) {
  return (
    <div
      className="group relative p-6 rounded-2xl bg-surface border border-border card-hover overflow-hidden flex flex-col"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}55, transparent)` }}
      />

      {/* Category tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="font-mono text-xs px-2.5 py-1 rounded-md border"
          style={{ color: project.color, borderColor: `${project.color}33`, background: `${project.color}11` }}
        >
          {project.category}
        </span>
        {project.featured && (
          <span className="font-mono text-xs text-gold border border-gold/30 bg-gold/10 px-2.5 py-1 rounded-md">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-xl text-text mb-3 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="font-body text-sm text-textDim leading-relaxed mb-5 flex-1">{project.description}</p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-0.5 rounded bg-border text-textDim"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
        target='blank'
          href={project.links.live}
          className="flex items-center gap-1.5 text-sm font-body text-accent hover:text-accentDim transition-colors group/link"
        >
          Live demo
          <span className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">↗</span>
        </a>
        <a
        target='blank'
          href={project.links.github}
          className="flex items-center gap-1.5 text-sm font-body text-textDim hover:text-text transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-accent text-sm tracking-wider mb-3">// projects</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text">
              Selected <span className="text-gradient">work</span>
            </h2>
          </div>
          <a
            href="#"
            className="font-body text-sm text-textDim hover:text-accent transition-colors self-start md:self-auto"
          >
            View all on GitHub →
          </a>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-accent text-bg font-semibold'
                  : 'border border-border text-textDim hover:border-accent/40 hover:text-text'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
