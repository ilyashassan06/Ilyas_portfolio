import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Utils from './Pages/Utils'

function App() {
  

  return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/utils" element={<Utils />} />
    </Routes>
  )
}

export default App
