import styled from "styled-components";

export const FooterComponent = styled.footer`
  background: #2b1310;
  color: #fff;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 1rem;
`;

export const IconsGrid = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonSocial = styled.button`
  border: none;
  background: none;
  color: #f3e9de;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    transform: translateY(-5px);
  }
`;
