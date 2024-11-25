// About.js
import React from 'react';
import {
  AboutContainer,
  ContentSection,
  ImageSection,
  Greeting,
  Name,
  SubTitle,
  Description,
  ResumeButton,
  ProfileImage
} from './AboutStyledComponent';
import ProfileImg from '../Image/New_Profile.JPG'; // Correct path to your image

const About = () => {
  return (
    <AboutContainer>
      <ContentSection>
        <Greeting>Hi, I am</Greeting>
        <Name>Kavyashree K L</Name> {/* Replace with your name */}
        <SubTitle>I am a <span>Software Engineer</span></SubTitle>
        <Description>
        I am a motivated and adaptable individual, eager to embrace new challenges. Committed to continuous learning and delivering high-quality results, I am prepared to contribute meaningfully and grow within a professional setting.
        </Description>
        <ResumeButton href="https://drive.google.com/file/d/1QaFGiNyBgdE2inA70Ifv_5RuT1xynPn1/view?usp=drive_link" target="_blank">
          Check Resume
        </ResumeButton>
      </ContentSection>
      <ImageSection>
        <ProfileImage src={ProfileImg} alt="Profile Image" />
      </ImageSection>
    </AboutContainer>
  );
};

export default About;
