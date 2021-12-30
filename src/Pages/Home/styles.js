import styled from 'styled-components';
import { keyframes } from 'styled-components';

import BackgroundimgFirstBannerLarge from '../../Images/Home/Backgroundimg_large.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FirstBannerContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundimgFirstBannerLarge});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimationSlideLeft = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const AnimationSlideRight = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const FirstBannerContent = styled.div`
  width: 80%;
  height: 500px;
  text-align: center;

  & h1 {
    font-size: 50px;
    color: var(--color-text-white);
    text-shadow: 1px 1px black;
    font-weight: bold;
    filter: drop-shadow( 0 0 1px black);
    
    animation-name: ${props=>props.clicked === 1 ? AnimationSlideLeft : '' };
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(1,.09,.83,.67);
    transform: ${props=>props.clicked === 1 ? 'translateX(-100%)' : ''};
  }

  & p {
    font-size: 18px;
    margin-top: 35px;
    color: var(--color-text-white);
    text-shadow: 1px 1px black;
    filter: drop-shadow( 0 0 1px black);
  }

  & p:nth-child(2) {
    animation-name: ${props=>props.clicked === 1 ? AnimationSlideRight : '' };
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(1,.09,.83,.67);
    transform: ${props=>props.clicked === 1 ? 'translateX(100%)' : ''};
  }

  & p:nth-child(3) {
    animation-name: ${props=>props.clicked === 1 ? AnimationSlideLeft : '' };
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(1,.09,.83,.67);
    transform: ${props=>props.clicked === 1 ? 'translateX(-100%)' : ''};
  }
`;

export const StartButton = styled.button`
  width: 90px;
  height: 40px;
  border: 1px solid black;
  margin-top: 50px;
  cursor: pointer;
  background-color: rgba(0,0,0,0);
  transition: 0.3s;
  font-size: 16px;

  &:hover {
      transform: scale(1.3);
    }
`;
