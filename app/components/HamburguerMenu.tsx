import React from 'react';

interface IProps {
  handleMenu: () => void;
  openMenu: boolean;
  className?: string;
}

export const HamburguerMenu = ({ handleMenu, openMenu, className }: IProps) => {
  return (
    <div className="flex w-full items-center justify-end">
      <button
        data-testid="hamburguerMenu"
        onClick={handleMenu}
        className={`fixed z-[9999] flex origin-[0px] cursor-pointer flex-col gap-1 ${className}`}
      >
        <span
          data-testid="firstSpan"
          className={`block h-[2px] w-5  origin-[1.5px] transition-all delay-150 ease-out  ${
            openMenu ? 'rotate-45' : ''
          } bg-white`}
        ></span>
        <span
          data-testid="secondSpan"
          className={`block h-[2px] w-5  translate-x-0 transition-all delay-150 ease-out ${
            openMenu ? 'translate-x-5 opacity-0' : 'opacity-100'
          } bg-white`}
        ></span>
        <span
          data-testid="thirdSpan"
          className={`block h-[2px] w-5 origin-[1.5px]  transition-all delay-150 ease-out   ${
            openMenu ? '-rotate-45' : ''
          } origin-[1.5px] bg-white`}
        ></span>
      </button>
    </div>
  );
};
