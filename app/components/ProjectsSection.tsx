'use client';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { Button } from './Bases';
import { FaReact } from 'react-icons/fa';
import { ProjectLoustech } from './Projects/ProjectLoustech';
import { useState } from 'react';
import Image from 'next/image';
import { useModalManager } from '../hooks/use-modal-manager';
import { SiMongodb } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { ProjectOrder } from './Projects/ProjectOrder';
import { ProjectHarmonize } from './Projects/ProjectHarmonize';

export const ProjectSection = () => {
  const modals = [
    { id: 1, name: 'loustech', open: false },
    { id: 2, name: 'order', open: false },
  ];

  const { handleCloseModal, handleOpenModal, modalsItems, findModal } = useModalManager(modals);

  return (
    <>
      <section id='projects' className='flex flex-col  justify-center  items-center  pb-28  '>
        <div className='max-w-screen-xl w-full p-max-w-xl relative flex flex-col h-full justify-center   '>
          <div data-aos='fade-right' className='text-start'>
            <span className='uppercase text-1xl font-black text-text-gray'>{'</div>'}</span>
            <h2 className='leading-none text-5xl sm:flex gap-5 items-center'>
              Projetos
              <span className='hidden sm:block h-[2px] w-full bg-secondary' />
            </h2>
            <h3 className='leading-none text-4xl uppercase text-secondary font-black'>Já feitos</h3>
            <p className='text-text-gray mt-5'>
              Conheça alguns de nossos projetos e as tecnologias usadas em cada projeto
            </p>
          </div>

          <ProjectLoustech
            open={findModal('loustech')?.open ?? false}
            handleClose={() => handleCloseModal('loustech')}
            handleOpenModal={() => handleOpenModal('loustech')}
          />

          <ProjectOrder
            handleOpenModal={() => handleOpenModal('order')}
            open={findModal('order')?.open ?? false}
            handleClose={() => handleCloseModal('order')}
          />

          <ProjectHarmonize
            open={findModal('loustech')?.open ?? false}
            handleClose={() => handleCloseModal('loustech')}
            handleOpenModal={() => handleOpenModal('loustech')}
          />
        </div>
      </section>
    </>
  );
};
