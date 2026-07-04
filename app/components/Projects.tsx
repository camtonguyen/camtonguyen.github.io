"use client";

import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { FaCode, FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Control A",
    description: "Laravel, MySQL, Bootstrap, Vanilla JS, Pug.js.",
    image: "/assets/project-1.png",
    link: "https://controla.com.vn/"
  },
  {
    id: 2,
    title: "Hoang Vuong Packaging",
    description: "Laravel, SQL Server, Bootstrap, React.js, Vanilla JS.",
    image: "/assets/project-2.png",
    link: "https://baobigiay.vn/"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Side Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <div className="font-light text-sm/6 lg:text-base text-[#71717A] flex items-start gap-2">
                <FaCode className="mt-1 flex-shrink-0 text-white" />
                <p>
                  <span className="font-semibold text-white">Techstack: </span>
                  {project.description}
                </p>
              </div>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex justify-center mt-12 lg:mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button 
          onClick={() => {
            const section = document.getElementById('contact');
            if (section) {
              window.scrollTo({
                top: section.offsetTop - 110,
                behavior: "smooth",
              });
            }
          }}
          className="bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          Connect to see more <FaArrowRight />
        </button>
      </motion.div>
    </div>
  );
}
