import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { AOSinit } from './utils/AOS-init';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luiz Henrique Pinheiro Silva',
  description: 'Desenvolvedor FullStack',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        href: '/favicon.png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body className={raleway.className}>
        <AOSinit>{children}</AOSinit>
      </body>
    </html>
  );
}
