import React from 'react';

interface ButtonProps{
  children: string;
}

function HeaderButton({ children }:  ButtonProps){
  return <button type="button" className='header-button'>{children}</button>;
}

export default HeaderButton;