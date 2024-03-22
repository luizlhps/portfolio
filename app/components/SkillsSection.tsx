import React, { cloneElement } from 'react';
import { Button } from './Bases';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { FaAngular } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiRedux } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiTestinglibrary } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaFigma } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaDocker } from 'react-icons/fa';

export const SkillsSection = () => {
  const iconsSkills = [
    { name: 'React', element: <FaReact /> },
    { name: 'Nest.Js', element: <SiNextdotjs /> },
    { name: 'Angular', element: <FaAngular /> },
    { name: 'Nest', element: <SiNestjs /> },
    { name: 'Typescript', element: <SiTypescript /> },
    { name: 'Javascript', element: <IoLogoJavascript /> },
    { name: 'Redux', element: <SiRedux /> },
    { name: 'Sass', element: <FaSass /> },
    { name: 'mui', element: <SiMui /> },
    { name: 'Styled', element: <SiStyledcomponents /> },
    { name: 'Tailwind', element: <SiTailwindcss /> },
    { name: 'Testing', element: <SiTestinglibrary /> },
    { name: 'Postgresql', element: <BiLogoPostgresql /> },
    { name: 'mysql', element: <GrMysql /> },
    { name: 'Mongodb', element: <SiMongodb /> },
    { name: 'firebase', element: <IoLogoFirebase /> },
    { name: 'figma', element: <FaFigma /> },
    { name: 'Docker', element: <FaDocker /> },
  ];

  return (
    <section className='flex flex-col  justify-center  items-center  py-28  '>
      <div
        data-aos='fade-up'
        className='max-w-screen-xl w-full p-max-w-xl relative flex flex-col h-full justify-center   '
      >
        <div className='text-end'>
          <h2 className='leading-none text-5xl sm:flex gap-5 items-center'>
            <span className='hidden sm:block h-[2px] w-full bg-secondary' /> Skills
          </h2>
          <h3 className='leading-none text-4xl uppercase text-secondary font-black'>Minhas habilidades</h3>
          <span className='uppercase text-1xl font-black text-text-gray'>{'</div>'}</span>
        </div>

        <div className='grid mt-14 grid-cols-[repeat(auto-fill,_minmax(70px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] items-center justify-items-center  w-full min-h-[35px] sm:min-h-[150px] gap-5 sm:gap-8'>
          {iconsSkills.map((item, index) => (
            <div
              key={index}
              className='w-full flex flex-col h-full p-6 sm:p-8 bg-background-gray rounded-lg sm:min-h-[150px] text-center justify-center items-center'
            >
              <p className='mb-1 font-semibold uppercase hidden sm:block'>{item.name}</p>
              {cloneElement(item.element, { className: 'w-5 h-5 sm:w-10 sm:h-10' })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
