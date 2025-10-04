import React from 'react'
import recentWorkData from '../Data/RecentWorkData'
  import { motion } from "framer-motion";
import { easeInOut,} from "motion/react"

function RecentWork() {
  return (
    <div className="flex gap-5 px-5  flex-col items-center  mt-6  pb-8 w-[92%] md:w-[90%] overflow-hidden  ">
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
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
          {work.name}
        </h3>
        <p className="text-lg text-black mb-4 leading-relaxed">
          {work.description}
        </p>

        {/* Button Link */}
        <a
          href="#"
          className="inline-flex items-center text-lg font-semibold text-black border-b-2 border-black hover:translate-x-1 transition-transform duration-300"
        >
          Explore Project →
        </a>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  )
}

export default RecentWork