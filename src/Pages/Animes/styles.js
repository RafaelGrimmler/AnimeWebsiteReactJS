import styled from 'styled-components';

import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineDangerous } from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'
import { CgDetailsMore } from 'react-icons/cg'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { keyframes } from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const LowerSubContainer = styled.div`
  width: 100%;
  background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
`;

export const GraphIcon = styled(AiOutlineStar)`
  font-size: 24px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px white)' : 'drop-shadow(0 0 1px black)'};
`;

export const StatusUpIcon = styled(MdOutlineDangerous)`
  font-size: 22px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px white)' : 'drop-shadow(0 0 1px black)'};
`;

export const StatusDownIcon = styled(GiConfirmed)`
  font-size: 22px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px white)' : 'drop-shadow(0 0 1px black)'};
`;

export const DetailsIcon = styled(CgDetailsMore)`
  font-size: 33px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px white)' : 'drop-shadow(0 0 1px black)'};
  transition: .5s;
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 28px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px white)' : 'drop-shadow(0 0 1px black)'};
  transition: .5s;
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
    filter: grayscale(0.2) ${props => props.lightmode ? 'opacity(1)' : 'opacity(0.3)'};

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
    filter: grayscale(0.3) ${props => props.lightmode ? 'opacity(0.9)' : 'opacity(0.3)'};

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
    background: ${props => props.lightmode ? 'linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(54, 54, 56, 0.7))' : 'linear-gradient(to top, rgba(54, 54, 56, 0.9999), rgba(255, 255, 255, 0.1))'};
  }

  & div:nth-child(4) {
    width: 500px;
    height: 50%;
    position: absolute;
    top: 25%;
    text-align: center;

    @media only screen and (max-width: 680px){
      & {
       top: 10%;
      }
    }

    & h1 {
      font-size: 40px;
      color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
      filter: ${props => props.lightmode ? 'drop-shadow(0 1px 1px white)' : 'drop-shadow(0 0 1px black)'};
      text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
      margin-bottom: 40px;
    }

    & div:nth-child(2){
      width: 100%;

      & ul:nth-child(1) {
        width: 100%;
        height: 100%;
        display: flex; 
        align-items: center;
        justify-content: space-between;

        & li:nth-child(1) div {
          display: flex;
          align-items: center;
          justify-content: center;

          & span {
            font-size: 17px;
            color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
            filter: ${props => props.lightmode ? 'drop-shadow(0 1px 1px white)' : 'drop-shadow(0 0 1px black)'};
            text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
          }

          @media only screen and (max-width: 680px){
            & {
              margin-bottom: 20px;
            }
          }
        }

        & li:nth-child(2) div {
          display: flex;
          align-items: center;
          justify-content: center;

          & span{
            margin-left: 10px;
            font-size: 18px;
            font-weight: bold;
            color: var(--color-universal-header-text-animation);
            filter: ${props => props.lightmode ? 'drop-shadow(0 1px 1px white)' : 'drop-shadow(0 0 1px black)'};
            text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
          }

          @media only screen and (max-width: 680px){
            & {
              margin-bottom: 20px;
            }
          }
        }

        & li:nth-child(3) div {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;

          & span {
            margin-left: 10px;
            font-size: 20px;
            color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
            filter: ${props => props.lightmode ? 'drop-shadow(0 1px 1px white)' : 'drop-shadow(0 0 1px black)'};
            text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
          }
          
          @media only screen and (max-width: 680px){
            & {
              margin-bottom: 20px;
            }
          }
        }

        @media only screen and (max-width: 680px){
          & {
            display: block;
          }
        }
      }

      & ul:nth-child(2) {
        margin-top: 25px;
        width: 100%;
        height: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: 680px){
          & {
            margin-top: 0;
            display: block;
          }
        }
  
        & li:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

          & div {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: .5s;

            & span {
              margin-left: 10px;
              font-size: 22px;
              color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
              filter: ${props => props.lightmode ? 'drop-shadow(0 1px 0 white)' : 'drop-shadow(0 0 1px black)'};text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
              transition: .5s;
            }

            &:hover ${DetailsIcon}, &:hover span{
              color: var(--color-universal-header-text-animation);
            }

            &:hover {
              transform: scale(1.12);
            }
          }

          @media only screen and (max-width: 680px){
            & {
              margin-bottom: 20px;
            }
          }
        }

        & li:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: center;

          & div {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: .5s;

            & span {
              margin-left: 10px;
              font-size: 22px;
              color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
              filter: ${props => props.lightmode ? 'drop-shadow(0 1px 0 white)' : 'drop-shadow(0 0 1px black)'};text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
              transition: .5s;
            }

            &:hover ${AddIcon}, &:hover span{
              color: var(--color-universal-header-text-animation);
            }

            &:hover {
              transform: scale(1.12);
            }
          }
        }
      }
    }

    @media only screen and (max-width: 680px){
      & {
        width: 85%;
      }
    }
  }
`;

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

export const LoadingContent = styled.section`
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

export const AnimeList = styled.section`
  width: 100%;
  margin-top: ${props => props.conditional ? '' : ''};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};

  & ul {
    width: 100%;
    min-height: calc(100vh);
    display: flex;
    justify-content: center;
    position: relative;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
  }
`;

export const AnimeListWrapperContainer = styled.div`
  width: 90%;
  min-width: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  justify-items: center;
  margin-top: ${props => props.conditional ? '160px' : '-100px' };
  margin-bottom: 100px;
`;