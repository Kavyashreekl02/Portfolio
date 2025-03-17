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
            <SkillItem>Streamlit</SkillItem>
            <SkillItem>Flask</SkillItem>
          </SkillList>
        </SkillCard>

        {/* Backend Skills */}
        <SkillCard>
          <SkillCategoryTitle>Backend</SkillCategoryTitle>
          <SkillList>
            <SkillItem>Node JS</SkillItem>
            <SkillItem>Express JS</SkillItem>
            <SkillItem>Python</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>MySQL</SkillItem>
            <SkillItem>PostgreSQL</SkillItem>
            <SkillItem>Mongo DB</SkillItem>
          </SkillList>
        </SkillCard>

        {/* Machine Learning Skills */}
        <SkillCard>
          <SkillCategoryTitle>Machine Learning & Deep Learning</SkillCategoryTitle>
          <SkillList>
            <SkillItem>Python</SkillItem>
            <SkillItem>Object Detection</SkillItem>
            <SkillItem>Instance Segmentation</SkillItem>
            <SkillItem>Image Classification</SkillItem>
            <SkillItem>Jupyter</SkillItem>
            <SkillItem>Google Colab</SkillItem>
          </SkillList>
        </SkillCard>

        {/* Other Skills */}
        <SkillCard>
          <SkillCategoryTitle>Others</SkillCategoryTitle>
          <SkillList>
            <SkillItem>MS Excel</SkillItem>
            <SkillItem>Power BI</SkillItem>
            <SkillItem>Postman</SkillItem>
            <SkillItem>JMeter</SkillItem>
            <SkillItem>VS Code</SkillItem>
            <SkillItem>Git</SkillItem>
            <SkillItem>GitHub</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillWrapper>
    </SkillsContainer>
  );
};

export default Skills;
