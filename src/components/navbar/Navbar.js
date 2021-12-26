import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/">
        <i>MrSesLee </i>
        <span>| Recipe</span>
      </Logo>
      <Hamburger onClick={() => setisOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/login">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
