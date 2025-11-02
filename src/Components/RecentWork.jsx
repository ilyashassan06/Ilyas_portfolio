import React from 'react'
import recentWorkData from '../Data/RecentWorkData'
  import { motion } from "framer-motion";
import { easeInOut,} from "motion/react"

function RecentWork() {
  return (
    <div
  id="projects"
  className="flex gap-5 px-5 flex-col items-center mt-6 pb-8 w-[92%] md:w-[90%] overflow-hidden"
>
  <h1 className="text-4xl my-4 font-bold">Recent Work</h1>

  <div className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center overflow-hidden">
    {recentWorkData.slice(0, 3).map((work, index) => (
     <motion.div
  key={index}
  initial={{ opacity: 0, y: 25, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
  className="max-w-sm flex flex-col bg-white border-3 border-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
>
  {/* Image Section */}
  <div className="relative group">
    <img
      src={work.image}
      alt="Project Thumbnail"
      className="w-full h-44 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
    />
    <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-md shadow-md">
      NEW
    </span>
  </div>

  {/* Content Section */}
  <div className="px-5 py-4 flex flex-col flex-grow">
    <h3 className="text-2xl font-bold text-black mb-1">
      {work.name}
    </h3>
    <p className="text-gray-800 text-xl mb-3 leading-relaxed line-clamp-3">
      {work.description}
    </p>

    {/* Tech Stack Section */}
    {work.techStack && work.techStack.length > 0 && (
      <div className="mb-4">
        <p className="text-base font-semibold text-gray-900 mb-1">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {work.techStack.map((tech, idx) => (
            <img
              key={idx}
              src={tech}
              alt={`tech-${idx}`}
              className="w-8 h-8 object-contain rounded-full border border-gray-400 p-1 hover:scale-110 transition-transform duration-200 shadow-sm"
            />
          ))}
        </div>
      </div>
    )}

    {/* Button */} 
    <div className="mt-auto pt-3">
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-base font-semibold text-black border-2 border-black py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300"
      >
        View Project →
      </a>
    </div>
  </div>
</motion.div>
    ))}
  </div>
</div>

  )
}

export default RecentWork