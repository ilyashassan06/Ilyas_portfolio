import React from 'react';
import banner from "../assets/profile.png";
import skillsData from "../Data/SkillsData";
import { motion } from "framer-motion"; // fixed import

function AboutMe() {
  return (
    <div id='about' className="flex gap-10 justify-center flex-col md:flex-row mt-10 border-b-2 pb-8 w-[92%] md:w-[90%]">
      {/* ✅ Left Section (Image) */}
      <motion.div 
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100, when: "beforeChildren" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-[70%] md:w-1/3 lg:w-1/5 max-w-sm mx-auto md:mx-0 z-0"
      >
        <img
          src={banner}
          alt="Coding Illustration"
          className="h-auto w-auto max-h-full object-contain border-2 grayscale hover:grayscale-0 active:grayscale-0 transition duration-300 rounded"
        />
      </motion.div>

      {/* ✅ Right Section (Text) */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-4 w-full md:w-[75%] justify-center mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug w-full">
          <span className="font-titlemain text-4xl sm:text-5xl md:text-6xl">
            React Developer{" "}
          </span>
          — I fix your UI before your users notice.
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl md:text-[18px] leading-relaxed">
          Hi, I'm <span className="font-semibold">Ilyas Hassan</span>, a
          frontend developer with a passion for clean UI and smooth user
          experiences. I started with the basics and quickly fell in love with
          building dynamic web apps using ReactJS. Now, I’m expanding into the
          full MERN stack, turning ideas into polished projects that solve real
          problems. Every line of code is a step toward creating something
          meaningful.
        </p>

        <div id='skills' className="w-full">
          <h1 className="border-b-2 inline text-4xl sm:text-5xl font-sans font-bold">Skills</h1>
          <div className="w-full flex flex-wrap items-stretch gap-4 mt-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 120 }}
                viewport={{ once: true, amount: 0.6 }}
                className="flex items-center justify-center gap-3 border-2 p-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img src={skill.image} alt={skill.name} className="w-8 h-8" />
                <span className="text-sm sm:text-base">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
