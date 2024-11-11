// Projects.js
import React from 'react';
import { ProjectsContainer, SectionTitle, Subtitle, ProjectWrapper, ProjectCard, ProjectTitle, ProjectDescription, TechList, TechItem } from './ProjectsStyledComponent';

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      <Subtitle>Here are some of my projects</Subtitle>
      
      <ProjectWrapper>

        {/* Project 1 */}
        <ProjectCard>
          <ProjectTitle>CROPILIZER - A Recommender System</ProjectTitle>
          <ProjectDescription>
          A custom-built recommender system designed to provide personalized crop and fertilizer recommendations. The system leverages Random Forest algorithms to analyze user preferences and environmental factors, delivering optimized agricultural suggestions with high accuracy. Developed a data-driven approach to help users make informed decisions for improved crop yield and sustainability.          </ProjectDescription>
          <TechList>
            <TechItem>Python</TechItem>
            <TechItem>Scikit-Learn</TechItem>
            <TechItem>NumPy</TechItem>
            <TechItem>Pandas</TechItem>
            <TechItem>Matplotlib</TechItem> 
            <TechItem>Seaborn</TechItem> 
          </TechList>
        </ProjectCard>

        {/* Project 2 */}

      </ProjectWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
