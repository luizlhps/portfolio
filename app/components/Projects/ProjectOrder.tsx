import React, { useEffect } from 'react';
import { FaNode, FaReact } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Button } from '../Bases';
import { Modal } from '../Modal';
import { IoLogoFirebase } from 'react-icons/io5';
import Image from 'next/image';

interface IProjectOrder {
  open: boolean;
  handleClose: () => void;
  handleOpenModal: (name: string) => void;
}

export const ProjectOrder = ({ open, handleOpenModal, handleClose }: IProjectOrder) => {
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
          src={'/img/order-service.jpg'}
          className=' cursor-pointer rounded-md max-h-[364px]'
        />
        <div className='flex flex-col max-[1150px]:max-w-[640px] '>
          <h2>Sistema O.S</h2>
          <div className='flex gap-2 mb-8  '>
            <SiNextdotjs className='w-5 h-5' />
            <FaReact className='w-5 h-5' />
            <SiTypescript className='w-5 h-5' />
            <FaNode className='w-5 h-5' />
            <SiMongodb className='w-5 h-5' />
            <IoLogoFirebase className='w-5 h-5' />
          </div>

          <p className='text-text-gray '>
            O sistema de ordem de serviço é um sistema focado na organização de clientes, finanças e funcionários.
            Implementação da geração em PDF de ordens de serviço para fortalecer a credibilidade da empresa.
          </p>

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
                      src='https://streamable.com/e/6yona2?quality=highest'
                      width='100%'
                      height='100%'
                      className='min-h-[100%] sm:min-h-[380px] md:min-[380px]:'
                    ></iframe>
                  </div>
                  <Button
                    height='34px'
                    onClick={() => openInNewTab('https://github.com/luizlhps/Ordem-de-Servico-Client')}
                    className='mt-2 !p-0 text-xs'
                  >
                    Acessar projeto
                  </Button>
                </div>
                <div className='flex flex-col grow w-full'>
                  <h2>Sistema O.S</h2>
                  <div className='flex gap-2 mb-8'>
                    <SiNextdotjs className='w-5 h-5' />
                    <FaReact className='w-5 h-5' />
                    <SiTypescript className='w-5 h-5' />
                    <FaNode className='w-5 h-5' />
                    <SiMongodb className='w-5 h-5' />
                    <IoLogoFirebase className='w-5 h-5' />
                  </div>

                  <div className='text-text-gray overflow-y-auto sm:h-[281px]'>
                    <p className='mt-3'>
                      O Projeto envolveu a criação do back-end e front-end do zero. O Layout foi criado pelo figma com
                      base nos componentes do material UI,
                    </p>
                    <p className='mt-3'>O sistema deveria ter autenticação e com as seguintes funcionalidades:</p>
                    <ol className='mt-3 pl-8 list-decimal'>
                      <li>
                        <strong>Criação de usuários:</strong> Com apenas alguns cliques, os administradores é possível
                        adicionar novos usuários ao sistema, inserindo informações essenciais, como nome, sobrenome,
                        e-mail e cargo
                      </li>
                      <li>
                        <strong>Criação de permissões e cargos:</strong> Ferramenta poderosa projetada para simplificar
                        e aprimorar a administração de acesso e responsabilidades dentro do sistema. Com recursos
                        avançados e uma interface intuitiva, oferecendo controle total sobre quem pode acessar o quê e
                        com quais autorizações, permitindo uma governança eficaz e uma distribuição equitativa de
                        responsabilidades.
                      </li>
                      <li>
                        <strong>Criação das ordens de serviço:</strong> Foi projetada para simplificar e otimizar o
                        processo de gestão de pedidos de serviço, desde a criação inicial até o acompanhamento e
                        conclusão. Com a capacidade de gerar PDFs para cada O.S., facilita significativamente a entrega
                        para o cliente, proporcionando eficiência e praticidade em todo o fluxo de trabalho.
                      </li>
                      <li>
                        <strong>Criação de serviços:</strong> Projetada para simplificar e otimizar o processo de
                        definição e entrega de serviços personalizados., t
                      </li>
                      <li>
                        <strong>Criação de clientes:</strong> Projetado para simplificar e aprimorar o processo de
                        integração e gerenciamento de novos clientes
                      </li>
                      <li>
                        <strong>Criação de transações:</strong>Uma solução abrangente e intuitiva projetada para
                        simplificar e otimizar o processo de criação e acompanhamento de transações comerciais. Com
                        recursos avançados e uma interface amigável,
                      </li>
                    </ol>
                    <p className='mt-3'>
                      O sistema de ordem de serviço foi concebido para resolver uma série de desafios comuns encontrados
                      em assistências técnicas, abordando desde a criação de um serviço até a conclusão das transações
                      relacionadas. Com ênfase na simplificação e otimização, o sistema integra proteções robustas de
                      autenticação, proporcionando uma gestão eficiente e segura em todos os aspectos do processo.
                    </p>
                    <p className='mt-3'>
                      <strong>Resultados:</strong>
                      Os problemas de organização dentro da assistência foram resolvidos de forma eficaz com a
                      implementação deste sistema. Enquanto outros sistemas de serviços podem apresentar uma grande
                      desvantagem devido à complexidade de suas interfaces, o meu sistema se destaca por sua facilidade
                      de uso e interface amigável. Esta vantagem oferece uma experiência intuitiva para qualquer
                      assistência técnica, garantindo que a adoção e a utilização do sistema sejam simplificadas e
                      eficazes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <Button onClick={() => handleOpenModal('order')} className='mt-12 px-10 max-sm:text-sm'>
            Saber mais
          </Button>
        </div>
      </div>
    </>
  );
};
