import React from "react";
import { NavbarItems, NavbarWrapper } from "./styles";

import LogoBlack from "../../assets/Logos/Brand_Black.png";

const Navbar = () => {
	return (
		<NavbarWrapper>
			<img src={LogoBlack} alt="logo" />
			<NavbarItems>
				<a href="#home">Home</a>
				<a href="#about">Setup</a>
				<a href="#contact">Installation</a>
				<a href="#contact">Usage</a>
				<a href="#bundle">Bundle Size</a>
				<a href="#bundle">Contributing</a>
			</NavbarItems>
		</NavbarWrapper>
	);
};

export default Navbar;
