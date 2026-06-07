import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I Bring to the Table
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My preferred Tech Stack
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 1)}
            key={technology.name}
            className='flex flex-col items-center justify-center w-36 h-64 bg-tertiary rounded-full shadow-card border border-white/10 group hover:-translate-y-2 hover:bg-black-200 transition-all duration-300'
          >
            <div className='w-16 h-16 mb-6'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='px-4 text-center'>
              <p className='text-white font-medium text-[15px]'>{technology.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");