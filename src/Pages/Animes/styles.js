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
  height: 75vh;
  position: relative;
  margin-top: 60px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  & img:nth-child(1) {
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 1920px){
      & {
          display: none;
      }
    }
  }

  & img:nth-child(2) {
    width: 100%;
    height: 100%;
    display: none;
    filter: grayscale(0.2);

    @media only screen and (max-width: 1920px){
      & {
        display: block;
      }
    }

    @media only screen and (max-width: 768px){
      & {
        width: 140%;
      }
    }

    @media only screen and (max-width: 426px){
      & {
        width: 170%;
      }
    }
  }

  & div:nth-child(3) {
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${props => props.lightmode ? 'linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(54, 54, 56, 0.2))' : 'linear-gradient(to top, rgba(54, 54, 56, 0.9999), rgba(255, 255, 255, 0.1))'};
  }

  & div:nth-child(4) {
    width: 50%;
    height: 50%;
    position: absolute;
    top: 10%;
    background-color: red;

    
  }
`;