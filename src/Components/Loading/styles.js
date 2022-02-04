import styled, {keyframes} from 'styled-components';

const LoadingContentAnimation = keyframes`
  0%{
    transform: rotate(0deg) scale(0.8);
  }
  50%{
    transform: rotate(180deg) scale(1.2);
  }
  100%{
    transform: rotate(360deg) scale(0.8);
  }
`;

export const Container = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 6px solid black;
    border-color: var(--color-universal-header-text-animation);
    filter: drop-shadow(0 0 1px black);
    border-left: none;
    border-bottom: none;
    position: absolute;
    top: 40%;

    animation: ${LoadingContentAnimation} 0.8s infinite;
`;