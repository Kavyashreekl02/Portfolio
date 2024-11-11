import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a2e;
  color: #fff;
  padding: 20px 0;
  position: relative;
`;

export const ExperienceTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 20px;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #0a0a23;
    z-index: 0;
    transform: translateX(-50%);
  }

  
  }
`;

export const TimelineCircle = styled.div`
  height: 30px;
  width: 30px;
  background-color: #a445ed;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    left: 10%;
  }
`;

export const DateText = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  color: #bbb;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.8rem;
  }
`;

export const ExperienceCard = styled.div`
  background-color: #0a0a23;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
  margin: 20px auto;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #fff;
  }

  p {
    margin: 5px 0;
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
  }
`;

export const InnerExperienceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const InnerExperienceCard = styled.div`
  background-color: #1a1a2e;
  padding: 15px;
  border-radius: 8px;
  width: 95%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  h4 {
    margin: 0;
    font-size: 1.2rem;
    color: #00bcd4;
  }

  p {
    margin: 10px 0;
    color: #ccc;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 15px;
  }
`;

export const InnerExperienceCardTitle = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  color: #a445ed;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ExperienceDetails = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #ddd;

  span {
    font-size: 1rem;
    color: #bbb;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const SkillItem = styled.span`
  background-color: #2a2a50;
  color: #fff;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 0.9rem;

  &:hover {
    background-color: #6235b4;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
`;
