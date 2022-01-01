import styled from 'styled-components';
import { keyframes } from 'styled-components';

import BackgroundimgFirstBannerLarge from '../../Images/Home/Backgroundimg_large.png'
import Tittle from '../../Images/Home/Tittle.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
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


  animation-name: ${props=>props.clicked === 1 ? AnimationSlideLeft : '' };
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(1,.09,.83,.67);
  transform: ${props=>props.clicked === 1 ? 'translateX(-100%)' : ''};
`;

const AnimationSlideLeft = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const AnimationOpacityDown = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const FirstBannerContent = styled.div`
  width: 80%;
  height: 500px;
  text-align: center;
  position: relative;

  & h1 {
    font-size: 50px;
    color: var(--color-text-white);
    text-shadow: 1px 1px black;
    font-weight: bold;
    filter: drop-shadow( 0 0 1px black);
    
    animation-name: ${props=>props.clicked === 1 ? AnimationOpacityDown : '' };
    animation-duration: 0.65s;
    opacity: ${props=>props.clicked === 1 ? '0' : '1'};
  }

  & p {
    font-size: 18px;
    margin-top: 35px;
    color: var(--color-text-white);
    text-shadow: 1px 1px black;
    filter: drop-shadow( 0 0 1px black);
  }

  & p:nth-child(3) {
    animation-name: ${props=>props.clicked === 1 ? AnimationOpacityDown : '' };
    animation-duration: 0.65s;
    opacity: ${props=>props.clicked === 1 ? '0' : '1'};
  }

  & p:nth-child(4) {
    animation-name: ${props=>props.clicked === 1 ? AnimationOpacityDown : '' };
    animation-duration: 0.65s;
    opacity: ${props=>props.clicked === 1 ? '0' : '1'};
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

  animation-name: ${props=>props.clicked === 1 ? AnimationOpacityDown : '' };
  animation-duration: 0.65s;
  opacity: ${props=>props.clicked === 1 ? '0' : '1'};

  &:hover {
      transform: scale(1.3);
    }
`;

export const PullAnimationBar = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  transform: translateX(100%);
`;

const AnimationTittleLightAlternate = keyframes`
  0% {
    filter: drop-shadow(0 0 5px #00fbff);
  }
  66% {
    filter: drop-shadow(0 0 5px #5766eb);
  }
  100% {
    filter: drop-shadow(0 0 5px #00fbff);
  }
`;

export const Divtest = styled.div`
  width: 250px;
  height: 120px;
  background-image: url(${Tittle});
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 3;
  margin-left: 50%;
  transform: translateX(-50%);
  top: -150px;
  filter: drop-shadow(0 0 10px #00fbff) saturate(3) brightness(1.5);

  animation-name: ${AnimationTittleLightAlternate};
  animation-duration: ${props=>props.clicked === 1 ? '0.65s' : '5s' };;
  animation-iteration-count: ${props=>props.clicked === 1 ? 'none' : 'infinite' };
  animation-name: ${props=>props.clicked === 1 ? AnimationOpacityDown : '' };
  opacity: ${props=>props.clicked === 1 ? '0' : '1'};
`;