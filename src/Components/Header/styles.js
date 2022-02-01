import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    z-index: 98;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)': 'var(--color-nightmode-background-cyan)'};
    border-bottom: 1px solid ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'black'};
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: background-color 0.5s;
    top: 0;
`;

export const LogoContainer = styled.div`
    width: 160px;
    height: 35px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
   
    & h1 {
        font-size: 25px;
        font-family: fantasy;
        transform-style: preserve-3d;
        transform: perspective(9px) rotateX(2deg);
        transition: .5s;

        filter: ${props => props.lightmode ? 'drop-shadow(0 2px 1px #3d3d3d)' : 'drop-shadow(0 2px 1px black)'};
        color: ${props => props.lightmode ? 'black' : 'white'};
    }
    
    & h1:hover {
        color: var(--color-universal-header-text-animation);
        filter: ${props => props.lightmode ? 'drop-shadow(0 2px 3px black)' : 'drop-shadow(0 2px 1px white)'};
    }

    @media only screen and (max-width: 870px){
            & {
                margin-left: 10px;
            }
        }
`;

export const SearchGlass = styled(FaSearch)`
    width: 100%;
    height: 100%;
    font-size: 23px;
    color: ${props => props.lightmode ? 'black' : 'var(--color-nightmode-header-text)'};
    transition: color 0.5s;
    position: relative;
    cursor: pointer;

    &:hover {
        color: var(--color-universal-header-text-animation);
    }
`;

export const LightModeAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const ModeNight = styled(BsMoon)`
    font-size: ${props=>props.fonts};
    color: black;
    animation-name: ${LightModeAnimation};
    animation-duration: 0.5s;
    transition: color .5s, transform .5s;
    cursor: pointer;

    &:hover {
        color: var(--color-universal-header-text-animation);
        transform: rotate(45deg);
    }
`;

export const ModeLight = styled(BsSun)`
    font-size: ${props=>props.fonts};
    color: var(--color-nightmode-header-text);
    /* position: ${props=>props.pos === 'absolute' ? 'absolute' : ''}; */
    animation-name: ${LightModeAnimation};
    animation-duration: 0.5s;
    transition: color .5s, transform 1s;
    cursor: pointer;

    &:hover {
        color: var(--color-universal-header-text-animation);
        transform: rotate(180deg);
    }
`;

export const ButtonsContainer = styled.div`
    width: 380px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    & ul li {
        margin-right: 30px;
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & ul li:nth-child(5) {
        margin-right: 0px;
    }

    @media only screen and (max-width: 870px){
            & {
                display: none;
            }
        }
`;

export const ButtonsSpan = styled.span`
    font-weight: bold;
    color: ${props=>props.animation === 1 ? 'var(--color-universal-header-text-animation)' : props.lightmode ?'var(--color-lightmode-header-text)' : 'var(--color-nightmode-header-text)'};
    transition: ${props=>props.animation === 1 ? '0.3s' : '0.5s'};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${props=>props.animation === 1 ? 'var(--color-universal-header-text-animation)' : props.lightmode ?'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-cyan)'};
    border-top: 3px solid ${props=>props.animation === 1 ? 'var(--color-universal-header-text-animation)' : props.lightmode ?'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-cyan)'};
    text-align: center;

    &:hover {
        color: var(--color-universal-header-text-animation);
        border-radius: ${props=>props.animation === 1 ? '50%' : '0%'};
        border-bottom-color: var(--color-universal-header-text-animation);
        border-top-color: var(--color-universal-header-text-animation);
    }
`;

export const RightContainer = styled.div`
    margin-right: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100%;

        & li {
            height: 100%;
        }

        & li+li {
            margin-left: 20px;
        }
    }

    @media only screen and (max-width: 870px){
        & {
            display: none;
        }
    }
`;

export const NightModeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HamburgerMenu = styled.div`
    height: 54px;
    width: 54px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    display: none;
    cursor: pointer;

    @media only screen and (max-width: 870px){
            & {
                display: flex;
            }
        }
`;

export const HamburgerX = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & div{
        width: ${props => props.menustatus ? '50%' : '70%'};
        height: 2px;
        background-color: ${props=>props.lightmode ? 'black' : 'white'};
        position: relative;
        transform: ${props => props.menustatus ? 'rotate(45deg)' : 'rotate(0deg)'};
        transition: 0.5s;
    }

    & div::after{
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${props=>props.lightmode ? 'black' : 'white'};
        position: absolute;
        top: ${props => props.menustatus ? '0px' : '10px'};
        transform: ${props => props.menustatus ? 'rotate(90deg)' : 'rotate(0deg)'};
        transition: 0.5s;
    }

    & div::before{
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${props=>props.lightmode ? 'black' : 'white'};
        position: absolute;
        top: -10px;
        opacity: ${props => props.menustatus ? 0 : 1};
        transition: 0.5s;
    }

`;

export const HamburgerMenuInteractionBar = styled.div`
    width: 100%;
    height: 350px;
    background-color: ${props => props.lightmode ? 'rgba(207, 207, 207, 0.94)' : 'rgba(32, 33, 36, 0.97)'};
    position: absolute;
    left: 0;
    top: 60px;
    display: ${props => props.menustatus ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    cursor: auto;

    & div {
        width: 60%;
        height: 80%;  

        & div {
            width: 100%;
            height: 100%;

            & ul {
                width: 100%;
                height: 100%;

                & li {
                    width: 100%;
                    height: 16%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 25px;

                    & span {
                        padding-top: 7px;
                        padding-bottom: 7px;
                        padding-left: 15px;
                        padding-right: 15px;
                        cursor: pointer;
                        font-size: 19px;
                        text-align: center;
                        font-weight: bold;
                        color: ${props => props.lightmode ? 'var(--color-lightmode-header-text)' : 'var(--color-nightmode-header-text)' };
                        transition: .2s;
                    }

                    & span:hover {
                        filter: drop-shadow(0 0 3px var(--color-universal-header-text-animation));
                    }
                }
            }
        }
    }
`;


