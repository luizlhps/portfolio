'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProjectModal {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const Modal = ({ open, children, handleClose }: IProjectModal) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleResize = () => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.id === 'modal') handleClose();
  };

  return (
    <>
      {isMounted ? (
        createPortal(
          <div
            id='modal'
            onClick={closeModal}
            className={`fixed transition-[visibility,_background-color] delay-100  ${
              open ? 'bg-slate-950/80 visible' : 'opacity-0 invisible'
            } w-screen h-screen left-0 top-0 z-50 flex justify-center items-center`}
          >
            {open && children}
          </div>,
          document.body
        )
      ) : (
        <></>
      )}
    </>
  );
};
