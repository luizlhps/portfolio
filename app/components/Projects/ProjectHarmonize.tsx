import React, { useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Button } from '../Bases';
import { Modal } from '../Modal';
import Image from 'next/image';

interface IProjectHarmonize {
  open: boolean;
  handleClose: () => void;
  handleOpenModal: (name: string) => void;
}

export const ProjectHarmonize = ({ open, handleClose, handleOpenModal }: IProjectHarmonize) => {
  return (
    <>
      <div
        data-aos='fade-right'
        className='mt-16 flex gap-6 flex-col min-[1150px]:flex-row  justify-center items-center'
      >
        <Image
          height={364}
          width={640}
          alt='projeto loustech'
          src={'/img/harmonize.jpg'}
          className=' cursor-pointer rounded-md max-h-[364px]'
        />
        <div className='flex flex-col max-[1150px]:max-w-[640px] '>
          <h2>Harmonize</h2>
          <div className='flex gap-2 mb-8  '>
            <SiNextdotjs className='w-5 h-5' />
            <FaReact className='w-5 h-5' />
            <SiTypescript className='w-5 h-5' />
          </div>

          <p className='text-text-gray '>
            No projeto Harmonize, optamos por uma abordagem de divisão em duas partes distintas no frontend: a criação
            de uma landing page separada e a implementação de um sistema de gestão de projetos. Para o backend,
            utilizamos o framework Nest.js junto ao banco de dados PostgreSQL, além do serviço de armazenamento de
            arquivos S3.
          </p>
          <Button className='mt-12 px-10 max-sm:text-sm'>Em construção</Button>
        </div>
      </div>
    </>
  );
};
