import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const LowerSubContainer = styled.div`
  height: 2000px;
  width: 100%;
  background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
`;

export const MainPresentationContent = styled.main`
  width: 100%;
  height: 70vh;
  position: relative;
  margin-top: 60px;

  & img {
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1500px){
      & {
          margin-left: 10px;
      }
    }
  }
`;