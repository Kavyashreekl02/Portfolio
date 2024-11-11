import styled from 'styled-components';

// Navbar container
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0a0a23;
  position: fixed; /* Change sticky to fixed */
  top: ; /* Make sure it's at the top of the page */
  left: 0; /* Ensures it stays aligned to the left edge */
  right: 0; /* Ensures it stays aligned to the right edge */
  z-index: 1000; /* Makes sure it's above other content */
  width: 95%; /* Ensure it spans the entire width of the viewport */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
  height:38px;
`;

// Logo styles
export const NavLogo = styled.h1`
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #a445ed;
  

  span {
    color: white;
  }
`;

// Menu container
export const NavMenu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  width: 50%;
  height: 10px;
  justify-content: flex-end;  // Aligns the menu items to the left

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: ;
    width: 95%;
    padding: 1rem;
    z-index: 1;
    justify-content: space-between;  // Keeps the menu items left-aligned in the mobile view
  }
`;


// Individual menu item
export const NavItem = styled.li`
`;

// Menu links
export const NavLinks = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  transition: color 0.3s ease;

  &:hover {
    color: #a445ed;
  }
`;

// Github button styling
export const GithubButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 2px solid #a445ed;
  border-radius: 25px;
  color: #a445ed;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  height: 13px;
  width: 100px;
  &:hover {
    background-color: #a445ed;
    color: #fff;
  }
`;

// Hamburger icon
export const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
