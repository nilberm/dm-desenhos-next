import styled from "styled-components";

export const CarouselComponent = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  .navButton {
    border: none;
    background: none;
    border-radius: 100%;
    outline: none;
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
    position: absolute;
    display: flex;
    transition: 0.3s;

    &:hover {
      background: #ddd;
      color: #999;
    }
  }

  .prevBtn {
    top: 50%;
    left: 5px;
    z-index: 999;
  }

  .fwdBtn {
    top: 50%;
    right: 5px;
    z-index: 999;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  img {
    height: 20rem;
  }
`;
