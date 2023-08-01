import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full teal-green-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-secondary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Welcome</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I've spent countless years immersing myself in the world of coding,
        constantly exploring new technologies and honing my skills to create
        exceptional websites. The process of crafting, refining, and maintaining
        websites has become more than just a hobby—it's my true calling. <br />
        My journey began with tools like Dreamweaver, Bootstrap, Mobirise, and
        Webflow, which sparked my fascination with the scope of web development.
        As time progressed, I embraced more contemporary tools like Visual
        Studio Code, React, Next.js, and Tailwind, allowing me to craft more
        versatile and manageable applications. With each project, I strive to
        push boundaries, refine my techniques, and deliver seamless user
        experiences. <br />
        My quest for growth and knowledge is far from over though. The future
        holds exciting prospects, and I eagerly embrace the challenges ahead. In
        the coming months, I aspire to delve into the MERN stack, broadening my
        expertise to encompass the full spectrum of web development. I also have
        my sights set on learning TypeScript, as it currently seems to be the
        meta. With each new skill I acquire, I'm empowered to create even more
        innovative and robust solutions for my clients. <br />
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
