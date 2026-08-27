'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import {
  FaFigma,
  FaGitAlt,
  FaInfinity,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiClaude, SiMongodb, SiMysql } from 'react-icons/si';
import { TbDatabaseCog } from 'react-icons/tb';
import { useLanguage } from '../context/LanguageContext';

const experienceLogos: Record<number, string> = {
  1: '/assets/freelance.png',
  2: '/assets/niteco.png',
  3: '/assets/dfo.png',
  4: '/assets/sutrix.png',
};

export default function Skills() {
  const { t } = useLanguage();

  const [skills] = useState([
    { id: 1, name: 'JavaScript', icon: <FaJs size={50} /> },
    { id: 2, name: 'TypeScript', icon: <BiLogoTypescript size={50} /> },
    { id: 3, name: 'React', icon: <FaReact size={50} /> },
    { id: 4, name: 'Next.js', icon: <RiNextjsFill size={50} /> },
    { id: 5, name: 'Tailwind', icon: <RiTailwindCssFill size={50} /> },
    { id: 6, name: 'Python', icon: <FaPython size={50} /> },
    { id: 9, name: 'PHP', icon: <FaPhp size={50} /> },
    { id: 8, name: 'Node.js', icon: <FaNodeJs size={50} /> },
    { id: 7, name: 'MySQL', icon: <SiMysql size={50} /> },
    { id: 10, name: 'MongoDB', icon: <SiMongodb size={50} /> },
    { id: 11, name: 'Git', icon: <FaGitAlt size={50} /> },
    { id: 12, name: 'Figma', icon: <FaFigma size={50} /> },
    { id: 13, name: 'CI/CD', icon: <FaInfinity size={50} /> },
    { id: 14, name: 'ORM', icon: <TbDatabaseCog size={50} /> },
    { id: 15, name: 'Claude Code', icon: <SiClaude size={50} /> },
  ]);

  const experiences = t.skills.experiences.map((exp) => ({
    ...exp,
    logo: experienceLogos[exp.id],
  }));

  return (
    <div className='mt-3 lg:mt-16 bg-white' id='skills'>
      <div className='px-5 lg:px-28 py-10'>
        <motion.h2
          className='text-2xl lg:text-4xl text-center text-black'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.skills.headingPrefix}{' '}
          <span className='font-extrabold'>{t.skills.headingBold}</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12'>
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className='bg-white text-black border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5'
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className='bg-black w-full my-8 py-8 lg:my-16 lg:py-16'>
        <motion.h2
          className='text-2xl lg:text-4xl text-center text-white'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t.skills.experienceHeadingPrefix}{' '}
          <span className='font-extrabold'>
            {t.skills.experienceHeadingBold}
          </span>
        </motion.h2>

        {/* Experience Cards */}
        <div className='px-5 lg:px-28 my-8 lg:mt-16 space-y-10'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className='bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className='flex justify-between flex-col items-start lg:flex-row lg:items-center'>
                <div className='flex items-center gap-5'>
                  <Image
                    className='w-7 h-7 object-contain'
                    src={exp.logo}
                    alt=''
                    width={28}
                    height={28}
                  />
                  <h2 className='font-semibold text-white text-lg lg:text-xl'>
                    {exp.role} {exp.company && t.skills.roleAt}{' '}
                    {exp.company && exp.company}
                  </h2>
                </div>
                <span className='text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base'>
                  {exp.period}
                </span>
              </div>
              <p className='text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light'>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
