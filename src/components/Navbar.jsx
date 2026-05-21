import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {

  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight text-text hover:text-accent transition-colors duration-300"
        >
          <span className="text-accent">&lt;</span>
          IH
          <span className="text-accent">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-textDim hover:text-accent transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={()=>navigate("/Utils")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/30 text-accent text-sm font-body hover:bg-accent/10 transition-all duration-300"
        >
          Dev Utils
          <span>→</span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-textDim hover:text-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all flex flex-col items-center  duration-400 overflow-hidden ${
          menuOpen ? 'max-h-80 border-b border-border' : 'max-h-0'
        } bg-surface/95 backdrop-blur-md`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-textDim hover:text-accent transition-colors font-body"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
         {/* CTA */}
        <button
           onClick={()=>navigate("/Utils")}
          className="  items-center mb-3 gap-2 px-4 w-[70%] py-2 rounded-lg border border-accent/30 text-accent text-sm font-body hover:bg-accent/10 transition-all duration-300"
        >
          Dev Utils
          <span>→</span>
        </button>
      </div>
    </header>
  )
}
