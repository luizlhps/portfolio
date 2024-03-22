import React from 'react';
import { LuGithub } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export const AboutSection = () => {
  return (
    <section
      id='about'
      className='flex flex-col  justify-center  items-center bg-background-gray py-36 max-[1036px]:justify-center '
    >
      <div
        data-aos='fade-right'
        className='max-w-screen-xl w-full p-max-w-xl relative flex flex-col h-full justify-center max-[1036px]:items-center  '
      >
        <span className='uppercase text-1xl font-black text-text-gray'>{'</div>'}</span>
        <h2 className='leading-none text-5xl'>Conheça um pouco</h2>
        <h3 className='leading-none text-4xl uppercase text-secondary font-black'>sobre mim</h3>
        <p className='mt-5 max-w-[938px] max-sm:text-base text-text-gray'>
          Desenvolvedor Full Stack apaixonado por tecnologia, atuo como freelancer desde 2022. Tenho conhecimento em
          Next.js, React, Angular, Nest.js, Node.js, MySQL, PostgreSQL, MongoDB, Firebase, TypeScript e JavaScript.
        </p>
        <p className='mt-7 text-text-gray'>Cursando atualmente Ciência da Computação na Unopar</p>

        <div className='flex gap-5 mt-12 justify-center items-center'>
          <div className='flex gap-2'>
            <Link
              target='_blank'
              href='https://wa.me//5512981635176'
              className='w-11 h-11 cursor-pointer bg-secondary rounded-full flex'
            >
              <FaWhatsapp className='w-6 h-6 m-auto' />
            </Link>
            <Link
              target='_blank'
              href='https://www.instagram.com/luizlhps/'
              className='w-11 h-11 cursor-pointer bg-secondary rounded-full flex'
            >
              <FaInstagram className='w-6 h-6 m-auto' />
            </Link>
            <Link
              target='_blank'
              href='https://github.com/luizlhps'
              className='w-11 h-11 cursor-pointer bg-secondary rounded-full flex'
            >
              <LuGithub className='w-6 h-6 m-auto' />
            </Link>
          </div>

          <span className='w-full h-[2px] block bg-secondary'></span>
        </div>
      </div>
    </section>
  );
};
