import styled from "styled-components";

export const CardContainerBase = styled.div`
  display: flex;
  position: relative;
  min-width: 330px;
  min-height: 430px;
  flex-direction: column;
  background-color: rgba(49, 225, 247, .5);
  border: 1px solid rgba(49, 225, 247, .1);
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  animation-timing-function: linear;
  transition: .15s;
  box-shadow: 2px 9px 15px 2px rgba(0, 0, 0, 0.35);
  color: #6a1e5d;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 10rem;
    height: 180%;
    background-color: rgba(255, 255, 255, 0.06);
    rotate: -45deg;
    left: -11rem;
    top: 5rem;
    transition: .3s;
  }


  :hover {
    transform: translateY(5px);
    filter: brightness(115%);
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.55);

    ::before {
      top: -25rem;
      left: 40rem;
    }
  }

`;