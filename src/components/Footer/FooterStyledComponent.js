import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1a1a2e;
  padding: 40px 20px;
  color: #fff;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 30px 15px; /* Adjust padding for mobile */
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px; /* Reduce gap on mobile */
  }
`;

export const Name = styled.h3`
  color: #a445ed;
  font-size: 1.8rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font on mobile */
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px; /* Stack links vertically on mobile */
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #a445ed;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px; /* Adjust gap for mobile */
  }
`;

export const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem; /* Larger icons for better visibility */
  transition: color 0.3s ease;

  &:hover {
    color: #a445ed;
  }
`;

export const Copyright = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Smaller text on mobile */
  }
`;
