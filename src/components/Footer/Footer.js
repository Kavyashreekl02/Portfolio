import React from 'react';
import {
  FooterContainer,
  FooterContent,
  Name,
  NavLinks,
  Copyright,
} from './FooterStyledComponent';


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Name>Kavyashree K L</Name>
        <NavLinks>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </NavLinks>
        <Copyright>© 2024 Kavyashree K L. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
