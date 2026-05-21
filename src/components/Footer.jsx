export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-text">
            <span className="text-accent">&lt;</span>IH<span className="text-accent">/&gt;</span>
          </span>
          <span className="text-border mx-2">|</span>
          <span className="font-body text-sm text-textDim">
            Built with{' '}
            <span className="text-accent">React</span> +{' '}
            <span className="text-accent">Tailwind</span> +{' '}
            <span className="text-accent">Vite</span>
          </span>
        </div>

        <p className="font-mono text-xs text-textDim">
          © {year} Ilyas Hassan. All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 font-mono text-xs text-textDim hover:text-accent transition-colors group"
        >
          Back to top
          <span className="transition-transform group-hover:-translate-y-1 duration-300">↑</span>
        </button>
      </div>
    </footer>
  )
}
