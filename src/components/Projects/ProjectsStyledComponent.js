import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0a0a23;
  color: #fff;
  padding: 20px 0;
  position: relative;
  
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem; /* Smaller font size on mobile */
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    gap: 10px; /* Reduced gap on mobile */
  }
`;

export const ProjectCard = styled.div`
  background-color: #1f1f3a;
  padding: 20px;
  border-radius: 10px;
  width: 480px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: auto;
  
  &:hover {
    transform: translateY(-10px); /* Hover effect for slight card lift */
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.7); /* Stronger shadow on hover */
  }

  @media screen and (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    max-width: 350px; /* Maximum width for mobile */
    margin-bottom: 15px;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #a445ed;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem; /* Adjust title size for smaller screens */
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem; /* Adjust description font size for mobile */
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const TechItem = styled.span`
  background-color: #2a2a50;
  color: #fff;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6235b4;
    color: white;
  }
`;
