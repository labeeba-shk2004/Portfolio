import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { socialLinks } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Get in touch
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Contact.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {socialLinks.map((link, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.1, 1)}
            key={link.name}
            onClick={() => window.open(link.link, "_blank")}
            className='flex flex-col items-center justify-center w-36 h-64 bg-tertiary rounded-full shadow-card border border-white/10 group hover:-translate-y-2 hover:bg-black-200 transition-all duration-300 cursor-pointer'
          >
            <div className='w-16 h-16 mb-6'>
              <img
                src={link.icon}
                alt={link.name}
                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='px-4 text-center'>
              <p className='text-white font-medium text-[15px]'>{link.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");