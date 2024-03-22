import React, { useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Button } from '../Bases';
import { Modal } from '../Modal';
import Image from 'next/image';

interface IProjectLoustech {
  open: boolean;
  handleClose: () => void;
  handleOpenModal: (name: string) => void;
}

export const ProjectLoustech = ({ open, handleClose, handleOpenModal }: IProjectLoustech) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      <div
        data-aos='fade-right'
        className='mt-16 flex gap-6 flex-col min-[1150px]:flex-row  justify-center items-center'
      >
        <Image
          height={364}
          width={640}
          onClick={() => handleOpenModal('loustech')}
          alt='projeto loustech'
          src={'/img/loustech.jpg'}
          className=' cursor-pointer rounded-md max-h-[364px]'
        />
        <div className='flex flex-col max-[1150px]:max-w-[640px] '>
          <h2>Loustech</h2>
          <div className='flex gap-2 mb-8  '>
            <SiNextdotjs className='w-5 h-5' />
            <FaReact className='w-5 h-5' />
            <SiTypescript className='w-5 h-5' />
          </div>

          <p className='text-text-gray '>
            Loustech, neste projeto, foi desenvolvida uma landing page com foco em um design limpo, informativo,
            responsivo e otimizado para SEO. O início do projeto envolveu a criação do layout do site no Figma,
            utilizando as cores azul, preto e branco, que representam a identidade da empresa.
          </p>
          <Button onClick={() => handleOpenModal('loustech')} className='mt-12 px-10 max-sm:text-sm'>
            Saber mais
          </Button>
        </div>
      </div>

      <Modal handleClose={handleClose} open={open}>
        <div className='bg-background w-full h-full sm:w-[85%] sm:h-fit sm:max-h-[90vh] overflow-y-auto relative p-8'>
          <button className='absolute top-2 right-4' onClick={handleClose}>
            x
          </button>

          <div className='grid grid-cols-1 2xl:grid-cols-2 gap-6 justify-center grow'>
            <div className='flex flex-col '>
              <div className='cursor-pointer rounded-md w-[100%] relative h-72  sm:h-auto '>
                <iframe
                  allowFullScreen
                  src='https://streamable.com/e/1ucczf?quality=highest'
                  width='100%'
                  height='100%'
                  className='min-h-[100%] sm:min-h-[380px] md:min-[380px]:'
                ></iframe>
              </div>
              <Button
                height='34px'
                onClick={() => openInNewTab('https://loustech.com.br/')}
                className='mt-2 !p-0 text-xs'
              >
                Acessar projeto
              </Button>
            </div>
            <div className='flex flex-col grow w-full'>
              <h2>Loustech</h2>
              <div className='flex gap-2 mb-8'>
                <SiNextdotjs className='w-5 h-5' />
                <FaReact className='w-5 h-5' />
                <SiTypescript className='w-5 h-5' />
              </div>

              <div className='text-text-gray overflow-y-auto sm:h-[281px]'>
                <p className='mt-3'>
                  O início do projeto envolveu a criação do layout do site no Figma, utilizando as cores azul, preto e
                  branco, que representam a identidade da empresa. Após a definição das cores, foram planejadas 4
                  páginas principais: a página principal (main), FAQ, serviços e quem somos.
                </p>
                <p className='mt-3'>
                  A página principal é especialmente crucial, pois é responsável por cativar o cliente e mantê-lo
                  interessado. Por isso, foi dividida em 7 seções distintas:
                </p>
                <ol className='mt-3 pl-8 list-decimal'>
                  <li>
                    <strong>Hero Section:</strong> Destaque inicial com uma chamada de ação para solicitar um orçamento,
                    juntamente com uma breve descrição dos serviços oferecidos.
                  </li>
                  <li>
                    <strong>Section de Serviços:</strong> Apresentação detalhada dos serviços oferecidos pela empresa.
                  </li>
                  <li>
                    <strong>Section de Qualidades:</strong> Destaque das principais qualidades e diferenciais da
                    empresa.
                  </li>
                  <li>
                    <strong>Section das Etapas do Processo do Serviço:</strong> Explicação visual e textual das etapas
                    envolvidas no processo de prestação de serviço.
                  </li>
                  <li>
                    <strong>Section sobre a Empresa:</strong> Informações sobre a empresa, sua história, missão e
                    valores.
                  </li>
                  <li>
                    <strong>Section com a Prova Social:</strong> Depoimentos de clientes satisfeitos, avaliações ou
                    exemplos de trabalhos anteriores para aumentar a confiança do visitante.
                  </li>
                  <li>
                    <strong>Footer:</strong> Seção final contendo informações de contato, links úteis e outros elementos
                    de navegação.
                  </li>
                </ol>
                <p className='mt-3'>
                  Cada seção foi cuidadosamente projetada para garantir uma experiência de usuário fluida e envolvente,
                  facilitando a navegação e fornecendo informações relevantes em cada etapa. O design responsivo garante
                  que a landing page seja visualmente atraente e funcional em dispositivos de diferentes tamanhos,
                  enquanto a otimização para SEO visa melhorar o posicionamento nos resultados de busca, aumentando a
                  visibilidade online da empresa.
                </p>
                <p className='mt-3'>
                  <strong>Resultados:</strong> A posição média para as palavras-chave {'"assistência computador"'} e
                  {' "assistência técnica pc"'} estão nas posições 3 e 4, aumentando o número de clientes na
                  assistência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
