import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #0a0a23;
  color: #fff;
  min-height: 100vpx;
`;

export const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size on smaller screens */
  }
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #bbb;
  margin-bottom: 40px;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
`;

export const FormContainer = styled.div`
  background-color: #141432;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.5);
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #1f1f3d;
  color: #fff;
  font-size: 1rem;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  ::placeholder {
    color: #888;
  }

  &:focus {
    background-color: #29294a;
    outline: none;
    border: 2px solid #a445ed; /* Highlight border on focus */
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #1f1f3d;
  color: #fff;
  font-size: 1rem;
  resize: none;
  height: 120px;
  transition: background-color 0.2s ease, border-color 0.2s ease;

  ::placeholder {
    color: #888;
  }

  &:focus {
    background-color: #29294a;
    outline: none;
    border: 2px solid #a445ed; /* Highlight border on focus */
  }
`;

export const SubmitButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 8px;
  background-color: #922cdb;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #a445ed;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #6e21a9;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.9rem; /* Adjust button size on mobile */
  }
`;
