import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100%] h-[100%] flex flex-col  ">
       {/* Navbar will be shown on every page */}
      <Navbar/>

      {/* Page content changes here */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  )
}

export default App
