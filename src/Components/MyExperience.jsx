import React from "react";
import ExperienceData from "../Data/ExperienceData";
import { motion } from "motion/react"

function MyExperience() {
  return (
    <div className="w-full bg-black h-auto flex justify-center text-white">
      <div className="flex gap-5 px-5  flex-col items-center   mt-6  pb-8 w-[92%] md:w-[90%]  ">
        <h1 className="text-5xl font-bold">My Experience</h1>
        {ExperienceData.map((exp, index) => (
          <motion.div
            initial={
              index % 2 === 0 ? { opacity: 0, x: "-5%" } : { opacity: 0, x:" 5%" }
            }
            whileHover={{scale:1.03}}
            whileInView={index % 2 === 0 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
             viewport={{ once: true, amount: 0.3 }}   
            key={index}
            className="w-full overflow-hidden  mx-auto hover:bg-gray-500 bg-black text-white rounded-lg border border-gray-600 p-6 md:p-8 shadow-lg"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-lg md:text-xl font-bold uppercase">
                  {exp.name}
                </h2>
                <p className="text-sm text-gray-300">{exp.company}</p>
              </div>
              <div className="text-sm text-right text-gray-400">
                <p>
                  {exp.startDate} – {exp.endDate}
                </p>
              </div>
            </div>

            {/* Description List */}
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-200">
              {exp.description.map((des, index) => (
                <li key={index}>{des}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MyExperience;
