import React, { FC, ButtonHTMLAttributes } from 'react';
import './Button.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  btnType?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit'
  size?: 'small' | 'medium' | 'big';
}

export const Button: FC<ButtonProps> = ({
  label = 'button',
  btnType = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) => {
  className = `button button--${btnType} button--${size} ` + className;

  return (
    <button className={className} {...props}>
      {label}
    </button>
  );
};
