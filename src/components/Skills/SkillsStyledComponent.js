import styled from 'styled-components';

export const SkillsContainer = styled.div`
  background-color: #0a0a23;
  color: white;
  padding: 50px 0;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 50px;
  color: #b0b0d6;

  @media screen and (max-width: 768px) {
    font-size: 1rem; /* Smaller font size on mobile */
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 20px;
  gap: 20px; /* Add space between skill cards */

  @media screen and (max-width: 768px) {
    justify-content: center; /* Center skill cards on smaller screens */
    gap: 10px; /* Smaller gap between cards on mobile */
  }
`;

export const SkillCard = styled.div`
  background-color: #1f1f3a;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 400px;
  height: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 768px) {
    width: 100%; /* Full width for mobile screens */
    max-width: 350px; /* Maximum width for mobile */
    margin-bottom: 15px;
  }
`;

export const SkillCategoryTitle = styled.h3`
  font-size: 2rem;
  color: #a445ed;
  margin-bottom: 15px;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: #6235b4; /* Change color on hover */
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on mobile */
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows the items to wrap within the card */
  justify-content: flex-start; /* Align items horizontally in each card */
  gap: 10px; /* Adds space between items */
  padding: 10px 0;
`;

export const SkillItem = styled.div`
  background-color: #2a2a50;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 5px 0;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6235b4;
    color: white;
  }
`;
