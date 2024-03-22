import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer
      data-aos='fade-up'
      id='contact'
      className='flex flex-col  justify-center  items-center  py-28 border-t-[2px] border-t-background-gray '
    >
      <div className='max-w-screen-xl w-full p-max-w-xl relative flex flex-col h-full justify-center   '>
        <div className='text-center'>
          <h2 className='leading-none text-5xl items-center'>entre já em</h2>
          <h3 className='leading-none text-4xl uppercase text-secondary font-black'>Contato</h3>
        </div>

        <div className='mt-20 flex justify-center sm:justify-between flex-wrap gap-4'>
          <div className=' flex flex-col items-center text-center grow '>
            <Image src={'/img/mail-icon.svg'} height={50} width={50} alt='icone de email' />
            <h2 className='text-xl mt-3'>Email</h2>
            <p className='text-sm w-36 mt-1 text-text-gray font-medium'>luizhenriquepinheirosilva @hotmail.com</p>
          </div>
          <div className='flex flex-col items-center text-center grow  '>
            <Image src={'/img/phone-icon.svg'} height={50} width={50} alt='icone de telefone' />
            <h2 className='text-xl mt-3'>Celular</h2>
            <Link
              href='https://wa.me//5512981635176'
              target='_blank'
              className='text-sm w-36 mt-1 text-text-gray font-medium'
            >
              (12) 98163-5176
            </Link>
          </div>
          <div className='flex flex-col items-center text-center grow  '>
            <Image src={'/img/linkedin-icon.svg'} height={50} width={50} alt='icone do linkedin' />
            <h2 className='text-xl mt-3'>Email</h2>
            <Link
              href='https://www.linkedin.com/in/luizlhps/'
              target='_blank'
              className='text-sm w-36 mt-1 text-text-gray font-medium'
            >
              www.linkedin.com /in/luizlhps/
            </Link>
          </div>
          <div className='justify-center flex flex-col items-center text-center grow  '>
            <Image src={'/img/github-icon.svg'} height={50} width={50} alt='icone de email' />
            <h2 className='text-xl mt-3'>Email</h2>
            <Link
              href='https://github.com/luizlhps'
              target='_blank'
              className='text-sm w-36 mt-1 text-text-gray font-medium'
            >
              github.com/luizlhps
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
