import React from 'react';
import { NavbarWrapper } from './styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <a href="#home">Home</a>
      <a href="#about">Setup</a>
      <a href="#contact">Installation</a>
      <a href="#contact">Usage</a>
      <a href="#bundle">Bundle Size</a>
      <a href="#bundle">Contributing</a>
    </NavbarWrapper>
  );
};

export default Navbar;
