import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {/* <img
                src={project.image}
                alt={project.title}
                height={250}
                width={250}
                className="mb-6 rounded-full"
              /> */}
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                  // height: "200px",
                  // width: "200px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="rounded-full flex items-center justify-center xl:h-[250px] xl:w-[250px] h-[200px] w-[200px] mb-4"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(-1)}
              >
                <motion.div
                  className="w-full h-0 bg-black opacity-70 z-10 rounded-full flex flex-col items-center  justify-center"
                  initial={{ height: 0 }}
                  animate={{ height: isHovered === index ? "100%" : "0px" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.a
                    href={project.website}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered === index ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                  >
                    <FaGlobe />
                    <span className="ml-2">Website</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered === index ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                    <span className="ml-2">Github</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
