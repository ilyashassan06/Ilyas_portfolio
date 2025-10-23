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
    {recentWorkData.map((work, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        className="max-w-sm bg-white py-5 border border-black shadow-[4px_4px_0_0_black] rounded-lg overflow-hidden hover:shadow-[6px_6px_0_0_black] transition-all duration-300"
      >
        {/* Image Section */}
        <div className="relative px-5 py-2">
          <img
            src={work.image}
            alt="Project Thumbnail"
            className="w-full h-48 border-3 rounded-2xl object-cover grayscale hover:grayscale-0 transition duration-500"
          />
          <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        </div>

        {/* Content Section */}
        <div className="px-5">
          <h3 className="text-2xl font-bold text-black mb-2">
            {work.name}
          </h3>
          <p className="text-lg text-black mb-4 leading-relaxed">
            {work.description}
          </p>

          {/* 💻 Tech Stack Section */}
         {work.techStack && work.techStack.length > 0 && (
  <div className="mb-5">
    <p className="text-2xl font-semibold text-gray-800 mb-2 ">
      Tech Stacks Used
    </p>
    <div className="flex flex-wrap  gap-3">
      {work.techStack.map((tech, idx) => (
        <img
          key={idx}
          src={tech}
          alt={`tech-${idx}`}
          className="w-10 h-10 object-contain rounded-full border border-gray-400 p-1 hover:scale-110 transition-transform duration-200 shadow-sm"
        />
      ))}
    </div>
  </div>
)}


          {/* Button Link */}
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-semibold text-black border-b-2 border-black hover:translate-x-1 transition-transform duration-300"
          >
            View Project →
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</div>

  )
}

export default RecentWork