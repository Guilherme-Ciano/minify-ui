import React from "react";
import { NavbarItems, NavbarWrapper } from "./styles";

const Navbar = () => {
	return (
		<NavbarWrapper>
			<img
				src={
					"https://raw.githubusercontent.com/Guilherme-Ciano/minify-ui/main/src/stories/assets/Logos/Brand_Black.png"
				}
				alt="logo"
			/>
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
