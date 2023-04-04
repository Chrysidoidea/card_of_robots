import styled from 'styled-components';

export const CardListWrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.3rem;

  @media (max-width: 1662px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1252px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 855px) {
    grid-template-columns: repeat(1, 1fr);
  }
  
`;