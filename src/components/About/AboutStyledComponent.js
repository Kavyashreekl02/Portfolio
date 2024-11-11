import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #1a1a2e;
  color: white;
  height: 500px; /* Adjust based on your preference */
  
  /* Mobile responsiveness */
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;  /* Reverses order for mobile */
    padding: 20px;
    height: 700px; /* Adjust for mobile view */
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    text-align: center; /* Center the text on smaller screens */
    margin-bottom: 20px;
  }
`;

export const ImageSection = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex: 0; /* Take full width on mobile */
    margin-top: 20px;
    justify-content: center; /* Ensure the image is centered */
    height: auto;
  }
`;

export const Greeting = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 36px; /* Smaller font size on mobile */
  }
`;

export const Name = styled.h2`
  font-size: 48px;
  color: #a445ed;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 36px; /* Smaller font size on mobile */
  }
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 20px;

  span {
    color: #a445ed;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px; /* Smaller font size on mobile */
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 16px; /* Smaller font size on mobile */
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  background-color: #a445ed;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6235b4;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px; /* Smaller font size on mobile */
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid #a445ed;
  object-fit: cover;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    width: 180px; /* Smaller image on mobile */
    height: 180px; /* Smaller image on mobile */
  }
`;
