import React, { useEffect } from 'react'
import CursorGlow from '../components/CursorGlow'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible')
              }
            })
          },
          { threshold: 0.12 }
        )
    
        const elements = document.querySelectorAll('.reveal')
        elements.forEach((el) => observer.observe(el))
    
        return () => observer.disconnect()
      }, [])
  return (
    <div className="noise-bg relative min-h-screen bg-bg">
      <CursorGlow />
      <Navbar />
      <main>
        
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home