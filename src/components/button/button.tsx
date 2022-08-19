import React from 'react';

interface IButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return (
    <button>{children}</button>
  );
};
