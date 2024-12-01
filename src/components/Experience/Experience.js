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
          <h3>ML & Software Development Intern</h3>
          <p>ContentEase AI</p>
          <p>January 2023 - Present</p>
          <InnerExperienceCardContainer>
            {/* First Inner Experience Card */}
            <InnerExperienceCard>
            <InnerExperienceCardTitle style={{ color: '#a445ed' }}>
              Design Engine
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
              ImageMop
            </InnerExperienceCardTitle>

              <ExperienceDetails>
              <span>Frontend:</span> Developed with Next.js, utilizing hooks for state management and Axios for API calls. Integrated Font Awesome icons for an enhanced user experience in managing image data.
              <br></br>
              <br></br>
              <span>Backend:</span> Built using NestJS and connected to a PostgreSQL database via TypeORM, employing DTOs for data validation and robust error handling.
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
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;
