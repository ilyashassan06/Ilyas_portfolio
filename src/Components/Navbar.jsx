import React, { useState } from "react";
import Logo from "../assets/Logo.png";

import { Menu, X } from "lucide-react"; // for hamburger & close icon
import { motion } from "motion/react"
import { Link } from "react-scroll";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
    initial={{
      y:-100,
      opacity:0.3
    }}
    animate={{
      y:1,
      opacity:1,
    }}
    transition={{
      duration:.7,
    }}
    className="w-full  h-16 px-4 flex justify-between items-center relative z-50">
      {/* Left Logo */}
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="Logo" className="h-12 w-12" />
        <span className="text-2xl font-bold font-Logo">Ilyas Hassan</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-[18px] font-main font-bold">
  <Link
    to="skills"
    smooth={true}
    duration={500}
    offset={-50} // adjust for navbar height
    className="text-black cursor-pointer hover:border-b-2 transition"
  >
    Skills
  </Link>

  <Link
    to="about"
    smooth={true}
    duration={500}
    offset={-50}
    className="text-black cursor-pointer hover:border-b-2 transition"
  >
    About Me
  </Link>

  <Link
    to="projects"
    smooth={true}
    duration={500}
    offset={-50}
    className="text-black cursor-pointer hover:border-b-2 transition"
  >
    Projects
  </Link>

  <Link
    to="contact"
    smooth={true}
    duration={500}
    offset={-50}
    className="text-black cursor-pointer hover:border-b-2 transition"
  >
    Contact Me
  </Link>
</div>

      {/* Resume Button (Desktop Only) */}
      <button className="hidden md:block rounded bg-black px-5 h-10 text-white font-main">
        Resume
      </button>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        {isOpen ? (
          <X
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 text-lg font-main font-bold md:hidden z-50">
  <Link
    to="skills"
    smooth={true}
    duration={500}
    offset={-50}
    onClick={() => setIsOpen(false)}
    className="cursor-pointer hover:text-gray-600"
  >
    Skills
  </Link>

  <Link
    to="about"
    smooth={true}
    duration={500}
    offset={-50}
    onClick={() => setIsOpen(false)}
    className="cursor-pointer hover:text-gray-600"
  >
    About Me
  </Link>

  <Link
    to="projects"
    smooth={true}
    duration={500}
    offset={-50}
    onClick={() => setIsOpen(false)}
    className="cursor-pointer hover:text-gray-600"
  >
    Projects
  </Link>

  <Link
    to="contact"
    smooth={true}
    duration={500}
    offset={-50}
    onClick={() => setIsOpen(false)}
    className="cursor-pointer hover:text-gray-600"
  >
    Contact Me
  </Link>

  <button className="rounded bg-black px-6 h-10 text-white font-main hover:bg-gray-800 transition">
    Resume
  </button>
</div>

      )}
    </motion.nav>
  );
}

export default Navbar;
