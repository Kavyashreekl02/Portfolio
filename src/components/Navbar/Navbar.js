import React, { useState } from 'react';
import {
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  GithubButton,
  HamburgerIcon
} from './NavbarStyledComponent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavLogo>
        <span>&lt;</span> KAVYASHREE K L <span>/&gt;</span>
      </NavLogo>
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLinks href="#about">About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#skills">Skills</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#experience">Experience</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#projects">Projects</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks href="#education">Education</NavLinks>
        </NavItem>
        <GithubButton href="https://github.com/Kavyashreekl02" target="_blank">
        Github Profile
      </GithubButton>
      </NavMenu>
      
    </NavbarContainer>
  );
};

export default Navbar;
