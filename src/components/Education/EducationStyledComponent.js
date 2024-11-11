import styled from 'styled-components';

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a2e;
  color: #fff;
  padding: 20px 0;
  position: relative;
`;

export const EducationTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem; /* Adjust for mobile screens */
  }
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 0 20px;
  margin-top: 40px; /* Adds some spacing from the title */

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #0a0a23;
    transform: translateX(-50%); /* Center the line */
  }

  @media screen and (max-width: 768px) {
    padding: 0 10px; /* Adjust padding on mobile */
  }
`;

export const EducationCard = styled.div`
  background-color: #0a0a23;
  padding: 20px;
  border-radius: 20px;
  width: 370px;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  position: relative;
  margin: 20px 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Elevate card on hover */
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    max-width: 350px; /* Limit width on mobile */
  }
`;

export const TimelineCircle = styled.div`
  height: 20px;
  width: 20px;
  background-color: 
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -10px;
`;

export const DateText = styled.p`
  font-size: 0.9rem;
  color: #bbb;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem; /* Adjust for mobile */
  }
`;

export const InnerEducationCardTitle = styled.h4`
  font-size: 1.2rem;
  color: #a445ed;
  margin-bottom: 5px;
`;

export const EducationDetails = styled.p`
  font-size: 0.9rem;
  color: #ddd;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem; /* Adjust for mobile */
  }
`;
