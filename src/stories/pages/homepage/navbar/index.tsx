import React from 'react';
import { NavbarItems, NavbarWrapper } from './styles';

import LogoBlack from '../../../assets/Logos/Brand_Black.png';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <img src={LogoBlack} alt="logo" />
      <NavbarItems>
        <a href="#home">Home</a>
        <a href="#bundle">Bundle Size</a>
        <a href="#setupInfo">Setup</a>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#contributing">Contributing</a>
      </NavbarItems>
    </NavbarWrapper>
  );
};

export default Navbar;
