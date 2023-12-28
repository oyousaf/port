import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const poemLines = [
  "In the binary ballet where pixels pirouette, I embarked on a journey, a dev's duet.",
  "Dreamweaver and Bootstrap, my first dance floor, Coding passion ignited, I craved for more.",
  "",
  "Mobirise and Webflow, partners in design, A symphony of websites, a world so fine.",
  "Yet, the evolution of code called my name, Visual Studio Code, where I found my flame.",
  "",
  "With React, I sculpted digital dreams, Next.js added depth, or so it seems.",
  "Tailwind, my brush, painting styles with grace, In the canvas of browsers, I found my space.",
  "",
  "MERN stack whispers, a melody to play, Mongo, Express, React, and Node in array.",
  "TypeScript, a sonnet in a developer's ear, In the kingdom of syntax, where I hold dear.",
  "",
  "Learning is my anthem, in skills I invest, In the library of knowledge, my heart finds rest.",
  "A web dev's waltz, with bugs to unfurl, I'm the maestro of code, in this vast, virtual world.",
  "",
  "So, in the binary glow, where my passion resides, I code, I create, in the web's tides.",
  "A quirky romance, with each line I script, In the language of love, my heart is equipped.",
];

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

      <div className="max-w-3xl">
        {poemLines.map((line, index) => (
          <motion.p
            key={index}
            variants={fadeIn("", "", 0.1, 1)} // Adjust animation as needed
            className="mt-4 text-secondary text-[20px] leading-[30px]"
          >
            {line}
          </motion.p>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
