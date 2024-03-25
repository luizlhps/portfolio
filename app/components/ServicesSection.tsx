import React from 'react';
import { Button, ButtonLink } from './Bases';
import Image from 'next/image';

export const ServicesSection = () => {
  return (
    <section className='overflow-hidden flex flex-col  justify-center  items-center  pt-36 pb-12  '>
      <div
        data-aos='fade-left'
        className='max-w-screen-xl w-full p-max-w-xl relative flex flex-col h-full justify-center   '
      >
        <div>
          <span className='uppercase text-1xl font-black text-text-gray'>{'</div>'}</span>
          <h2 className='leading-none text-5xl'>Quais os serviços</h2>
          <h3 className='leading-none text-4xl uppercase text-secondary font-black'>Que realizo ?</h3>
        </div>

        <div className='grid mt-14 grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] items-center justify-items-center  w-full min-h-[305px] gap-8'>
          <div className='w-full h-full p-8 min-h-[305px] bg-background-gray rounded-lg'>
            <Image
              src={'/img/computer-icon.svg'}
              alt='icone de computador com um simbolo de codigo'
              className='mb-4'
              height={65}
              width={65}
            ></Image>
            <h4 className='text-xl sm:text-2xl uppercase font-black'>Desenvolvimento</h4>
            <p className='text-text-gray'>Desenvolvo aplicações front-end e back-end de forma escalável.</p>
          </div>
          <div className='w-full h-full p-8  min-h-[305px] bg-background-gray rounded-lg'>
            <Image src={'/img/paint-icon.svg'} alt='lapis desenhando' className='mb-4' height={65} width={65}></Image>
            <h4 className='text-xl sm:text-2xl uppercase font-black'>Ui design</h4>
            <p className='text-text-gray'>Desenho interface de forma que ela seja clara, objetiva</p>
          </div>
          <div className='w-full h-full p-8  min-h-[305px] bg-background-gray rounded-lg'>
            <Image src={'/img/search-mundy-icon.svg'} alt='uma lupa ' className='mb-4' height={65} width={65}></Image>
            <h4 className='text-xl sm:text-2xl uppercase font-black'>SEO</h4>
            <p className='text-text-gray'>
              Melhoro o ranking da sua empresa no Google para aumentar a visibilidade e atrair potenciais clientes,
              tornando-a mais acessível e visível na plataforma.
            </p>
          </div>
        </div>
        <ButtonLink href='https://wa.me//5512981635176' className='mt-12 px-10 max-sm:text-sm' target='_blank'>
          faça um projeto
        </ButtonLink>
      </div>
    </section>
  );
};
