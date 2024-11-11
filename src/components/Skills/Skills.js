// Skills.js
import React from 'react';
import { SkillsContainer, SectionTitle, Subtitle, SkillWrapper, SkillCard, SkillCategoryTitle, SkillList, SkillItem } from './SkillsStyledComponent';

const Skills = () => {
  return (
    <SkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      <Subtitle>Here are some of my skills</Subtitle>
      
      <SkillWrapper>
        {/* Frontend Skills */}
        <SkillCard>
          <SkillCategoryTitle>Frontend</SkillCategoryTitle>
          <SkillList>
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>React JS</SkillItem>
            <SkillItem>Next JS</SkillItem>
          </SkillList>
        </SkillCard>

        {/* Backend Skills */}
        <SkillCard>
          <SkillCategoryTitle>Backend</SkillCategoryTitle>
          <SkillList>
            <SkillItem>Node JS</SkillItem>
            <SkillItem>Express JS</SkillItem>
            <SkillItem>Python</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>PostgreSQL</SkillItem>
            <SkillItem>Mongo DB</SkillItem>
          </SkillList>
        </SkillCard>

        {/* Machine Learning Skills */}
        <SkillCard>
          <SkillCategoryTitle>Machine Learning</SkillCategoryTitle>
          <SkillList>
            <SkillItem>Python</SkillItem>
            <SkillItem>Jupyter</SkillItem>
            <SkillItem>Google Colab</SkillItem>
          </SkillList>
        </SkillCard>

        {/* Other Skills */}
        <SkillCard>
          <SkillCategoryTitle>Others</SkillCategoryTitle>
          <SkillList>
            <SkillItem>VS Code</SkillItem>
            <SkillItem>Git</SkillItem>
            <SkillItem>GitHub</SkillItem>
            <SkillItem>Postman</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillWrapper>
    </SkillsContainer>
  );
};

export default Skills;
