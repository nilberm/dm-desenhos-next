import styled from "styled-components";

export const CatalogComponent = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  width: 100%;
  grid-gap: 2rem;
`;

export const CatalogItem = styled.button`
  width: 12rem;
  border: none;
  background: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  cursor: pointer;
  transition: all 0.2s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CatalogItemTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 0.5rem;
  width: 100%;
`;
