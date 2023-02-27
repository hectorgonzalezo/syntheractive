import React from 'react';
import HeaderButton from './HeaderButton';
import '../styles/headerStyle.scss';

function Header() {
  return(
    <header>
      <h1>Syntheractive</h1>
      <HeaderButton>Sign Up</HeaderButton>
      <HeaderButton>Log In</HeaderButton>
    </header>
  );
}

export default Header;