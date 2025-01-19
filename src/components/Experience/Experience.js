import React from 'react';
import {
  ExperienceContainer,
  TimelineContainer,
  ExperienceCard,
  ExperienceTitle,
  ExperienceDetails,
  InnerExperienceCardContainer,
  InnerExperienceCard,
  InnerExperienceCardTitle,
  TimelineCircle,
  SkillsContainer,
  SkillItem,
  DateText,
} from './ExperienceStyledComponent';

const Experience = () => {
  return (
    <ExperienceContainer>
      <ExperienceTitle>Experience</ExperienceTitle>
      <TimelineContainer>
        {/* Timeline Circle and DateText beside it */}
        <TimelineCircle />
        <DateText></DateText> 
        
        {/* Experience card on the right */}
        <ExperienceCard>
          <h3>ML and Software Development Intern</h3>
          <p>CONTENTEASE AI</p>
          <h4>January 2024 - December 2024</h4>
          <InnerExperienceCardContainer>
            {/* First Inner Experience Card */}
            <InnerExperienceCard>
            <InnerExperienceCardTitle style={{ color: '#a445ed' }}>
            </InnerExperienceCardTitle>

              <ExperienceDetails>
              Developed object detection and instance segmentation models using YOLOv8 and Llava for the AI-driven Design Engine project, including dataset annotation with Roboflow, and conducted model training and testing on Google Colab with performance monitoring via Weights & Biases.
              </ExperienceDetails>
              <SkillsContainer>
                <SkillItem>Object Detection</SkillItem>
                <SkillItem>Instance Segmentation</SkillItem>
                <SkillItem>YOLOv8</SkillItem>
                <SkillItem>Llava</SkillItem>
                <SkillItem>Colab</SkillItem>
                <SkillItem>Model Evaluation</SkillItem>
                <SkillItem>Problem solving</SkillItem>
              </SkillsContainer>
            </InnerExperienceCard>

            {/* Second Inner Experience Card */}
            <InnerExperienceCard>
            <InnerExperienceCardTitle style={{ color: '#a445ed' }}>
            </InnerExperienceCardTitle>

              <ExperienceDetails>
               Developed a tool with Next.js & NestJS, utilizing hooks for state management and Axios for API calls and connected to a PostgreSQL database via TypeORM.
              </ExperienceDetails>
              <SkillsContainer>
                <SkillItem>NextJs</SkillItem>
                <SkillItem>NestJS</SkillItem>
                <SkillItem>RESTful API</SkillItem>
                <SkillItem>PostgreSQL</SkillItem>
                <SkillItem>Git</SkillItem>
              </SkillsContainer>
            </InnerExperienceCard>
          </InnerExperienceCardContainer>
        </ExperienceCard>


        <ExperienceCard>
        <h3>Software Developer I</h3>
        <p>INHABITR</p>
        <h4>January 2025 - Present</h4>
        <InnerExperienceCardContainer>
          <InnerExperienceCard>
            <ExperienceDetails>
            Working as Software Developer I at Inhabitr since January 2025, contributing to the development and optimization of innovative software solutions.
            </ExperienceDetails>
          </InnerExperienceCard>
        </InnerExperienceCardContainer>
      </ExperienceCard>

        
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;
