'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { ButtonLink } from './Bases';
import { DownloadCV } from './DownloadCV';

export const HeroSection = () => {
  const comp = useRef(null);

  return (
    <main className='flex flex-col  justify-center  items-center h-[87vh] sm:h-[760px]  max-[1036px]:justify-center '>
      <div
        data-aos-easing='linear'
        data-aos-duration='270'
        data-aos='fade-left'
        className='max-w-screen-xl w-full p-max-w-xl relative flex flex-col h-full justify-center max-[1036px]:items-center bg-[length:777px_707px] min-[1036px]:bg-[url("/img/photo.png")] bg-no-repeat bg-[right_top_100%] '
      >
        <Image
          className='max-[1036px]:block hidden scale-x-[-1] mb-5 max-h-[700px]:mb-12 min-h-[233px] min-w-[256px]'
          src={'/img/photo.png'}
          alt='Foto profissional do dono do portifolio'
          height={256}
          width={233}
        />

        <div>
          <span className='uppercase text-1xl font-black text-text-gray '>{'</div>'}</span>
          <h1 className='leading-none max-sm:text-5xl'>Olá, Sou o Luiz</h1>
          <h2 className='leading-none max-sm:text-4xl max-[1036px]:text-secondary'>Desenvolvedor Fullstack</h2>
          <h3 className='mt-5 max-w-96 '>Procurando um desenvovedor para resolver seus problemas ?</h3>

          <div className='flex gap-5'>
            <ButtonLink
              href='https://wa.me//5512981635176'
              className='mt-8 max-sm:text-sm'
              variant='contained'
              target='_blank'
            >
              Entrar em contato
            </ButtonLink>
            <DownloadCV />
          </div>
        </div>
        <Image
          height={25}
          width={25}
          src='/img/next-icon.svg'
          alt='next icone'
          className='w-32 animate-[icons_5s_ease_infinite_alternate] h-32 sm:w-40 translate-y-3 -z-10 absolute sm:h-40 left-[5px] top-[80%] sm:top-[70%]'
        />
        <Image
          height={25}
          width={25}
          src='/img/mongodb-icon.svg'
          alt='mongodb icone'
          className='w-32 h-32 sm:w-40 animate-[icons_4s_ease_infinite_alternate] -z-10 absolute sm:h-40 right-[5px] top-0'
        />
      </div>
    </main>
  );
};
