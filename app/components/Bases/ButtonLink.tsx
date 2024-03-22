import React, { CSSProperties, ElementType, ReactNode } from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'contained' | 'outlined';
  maxheight?: string;
  minheight?: string;
  height?: string;
  maxwidth?: string;
  width?: string;
  href: string;
}

export const ButtonLink = (props: ButtonProps) => {
  const outlined = 'border-[1px] border-secondary hover:bg-secondary';
  const contained = 'bg-secondary hover:bg-secondary-light-color text-background';

  const variantStyle = () => {
    if (props.variant === 'contained') return contained;
    return outlined;
  };

  const baseCSS = `rounded-lg p-3 text-center text-1xl uppercase font-semibold ${variantStyle()} ${props.className}`;

  return (
    <a
      {...props}
      type={props.type}
      className={baseCSS}
      href={props.href}
      style={{
        width: props.width,
        height: props.height,
        maxWidth: props.maxwidth,
        maxHeight: props.maxheight,
        minHeight: props.minheight,
      }}
    >
      {props.children}
    </a>
  );
};
