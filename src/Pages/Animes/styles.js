import styled from 'styled-components';

import { VscGraphLine } from 'react-icons/vsc'
import { MdOutlineDangerous } from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'
import { CgDetailsMore } from 'react-icons/cg'

export const Container = styled.section`
  width: 100%;
`;

export const LowerSubContainer = styled.div`
  height: 2000px;
  width: 100%;
  background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
`;

export const GraphIcon = styled(VscGraphLine)`
  font-size: 22px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
`;

export const StatusUpIcon = styled(MdOutlineDangerous)`
  font-size: 22px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
`;

export const StatusDownIcon = styled(GiConfirmed)`
  font-size: 22px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
`;

export const DetailsIcon = styled(CgDetailsMore)`
  font-size: 22px;
  color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
  filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
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
    top: 30%;
    text-align: center;

    & h1 {
      font-size: 40px;
      color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
      filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
      margin-bottom: 40px;
    }

    & div:nth-child(2){
      width: 100%;

      & ul {
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
            filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
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
            filter: drop-shadow(0 0 1px black);
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
            filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px #adadad)' : 'drop-shadow(0 0 1px black)'};
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
    }

    @media only screen and (max-width: 680px){
      & {
        width: 85%;
      }
    }
  }


`;