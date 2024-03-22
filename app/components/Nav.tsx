'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HamburguerMenu } from './HamburguerMenu';

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre', path: '#about' },
  { name: 'Projetos', path: '#projects' },
  { name: 'Contato', path: '#contact' },
];

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    document.body.style.overflow = 'hidden';
    setMenuOpen(true);
  };
  const handleCloseMenu = () => {
    document.body.style.overflow = 'visible';
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleCloseMenu);

    return window.addEventListener('resize', handleCloseMenu);
  }, []);

  return (
    <header
      className={`flex w-full px-max-w-padding z-20 h-[72px] bg-background justify-center items-center ${
        menuOpen ? 'fixed' : ''
      }`}
    >
      <nav className={`max-w-screen-xl z-10 flex justify-between w-full px-max-w-xl `}>
        <Link href={'/'} className='text-2xl sm:text-4xl font-black z-20'>
          Portfolio
        </Link>
        <HamburguerMenu
          handleMenu={menuOpen ? handleCloseMenu : handleOpenMenu}
          openMenu={menuOpen}
          className='block md:hidden '
        />

        <ul
          className={`font-medium  text-sm top-0 md:flex-row text-center items-center flex-col opacity-100 md:mt-0 mt-[72px] h-screen w-screen bg-background-gray md:bg-transparent  md:h-auto md:w-auto md:left-0 flex fixed md:static gap-6 md:opacity-100   ${
            menuOpen ? 'right-0 pt-12' : 'right-full'
          }`}
        >
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className='after:content-[""] after:bg-secondary relative after:absolute after:top-[30px] after:transition-[width] after:duration-100  after:left-0  after:w-0 hover:after:w-full after:h-[1px] hover:after'
            >
              <Link href={menuItem.path}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
