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
    justify-content: space-between;
    transition: background-color 0.5s;
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

        filter: ${props => props.lightmode ? 'drop-shadow(0 2px 1px #3d3d3d)' : 'drop-shadow(0 2px 1px black)'};
        color: ${props => props.lightmode ? 'black' : 'white'};
    }
    
    @media only screen and (max-width: 870px){
            & {
                margin-left: 2px;
            }
        }
`;

export const SearchGlass = styled(FaSearch)`
    width: 100%;
    height: 50%;
    color: ${props => props.lightmode ? 'black' : 'var(--color-nightmode-header-text)'};
    transition: color 0.5s;
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
    position: ${props=>props.pos === 'absolute' ? 'absolute' : ''};
    animation-name: ${LightModeAnimation};
    animation-duration: 0.5s;
    cursor: pointer;
`;

export const ModeLight = styled(BsSun)`
    font-size: ${props=>props.fonts};
    color: var(--color-nightmode-header-text);
    position: ${props=>props.pos === 'absolute' ? 'absolute' : ''};
    animation-name: ${LightModeAnimation};
    animation-duration: 0.5s;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    width: 300px;
    height: 35px;
    margin-left: 130px;

    & form {
        width: 100%;
        height: 100%;
        position: relative;
    }

    & input {
        height: 100%;
        width: 270px;
        border: 1px solid ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-border)'};
        border-right: none;
        font-size: 17px;
        padding-left: 7px;
        padding-right: 7px;
        border-bottom-left-radius: 7px;
        border-top-left-radius: 7px;
        background-color: ${props => props.lightmode ? '#E5E5E5' : '#464649'};
        color: ${props => props.lightmode ? '#000' : '#FFF'};
        transition: border-color 0.5s, background-color 0.5s, color 0.5s;

        &::-webkit-input-placeholder{
            color: ${props => props.lightmode ? '#75797d' : '#cfd0d1'};
            font-style: oblique;
        }

        @media only screen and (max-width: 1100px){
            & {
                width: 150px;
            }
        }

    }

    & button {
        width: 30px;
        height: 100%;
        position: absolute;
        border: 1px solid ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-border)'};
        border-left: none;
        cursor: pointer;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
        padding-right: 3px;
        padding-top: 2px;
        background-color: ${props => props.lightmode ? '#E5E5E5' : '#464649'};
        transition: border-color 0.5s, background-color 0.5s;
    }

    &:hover button, &:hover input {
        border-color: #616161;
    }

    @media only screen and (max-width: 1100px){
            & {
                width: 220px;
            }
        }

    @media only screen and (max-width: 960px){
            & {
                width: 190px;
                margin-left: 0;
            }
        }

    @media only screen and (max-width: 470px){
        & {
            display: none;
        }
    }
`;

export const ButtonsContainer = styled.div`
    width: 380px;
    height: 100%;
    margin-right: 50px;
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

export const NightModeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HamburgerMenu = styled.div`
    height: 54px;
    width: 54px;
    margin-right: 2px;
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
    }

    & div::before{
        content: '';
        width: 100%;
        height: 2px;
        background-color: ${props=>props.lightmode ? 'black' : 'white'};
        position: absolute;
        top: -10px;
        opacity: ${props => props.menustatus ? 0 : 1};
    }

`;

export const HamburgerMenuInteractionBar = styled.div`
    width: 100%;
    height: 350px;
    background-color: ${props => props.lightmode ? 'rgba(207, 207, 207, 0.7)' : 'rgba(32, 33, 36, 0.7)'};
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

        & form {
            width: 100%;
            height: 32px;
            display: none;
            position: relative;

            & button {
                position: absolute;
                right: 0;
                width: 10%;
                height: 100%;
                border: 1px solid ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-border)'};
                border-left: none;
                cursor: pointer;
                border-bottom-right-radius: 7px;
                border-top-right-radius: 7px;
                padding-right: 3px;
                padding-top: 2px;
                background-color: ${props => props.lightmode ? '#E5E5E5' : '#464649'};
                transition: border-color 0.5s, background-color 0.5s;
            }

            & input {
                width: 100%;
                height: 100%;
                border: 1px solid ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-border)'};
                border-right: none;
                font-size: 17px;
                padding-left: 7px;
                padding-right: 7px;
                border-bottom-left-radius: 7px;
                border-top-left-radius: 7px;
                border-bottom-right-radius: 7px;
                border-top-right-radius: 7px;
                background-color: ${props => props.lightmode ? '#E5E5E5' : '#464649'};
                color: ${props => props.lightmode ? '#000' : '#FFF'};
                transition: border-color 0.5s, background-color 0.5s, color 0.5s;

                &::-webkit-input-placeholder{
                    color: ${props => props.lightmode ? '#75797d' : '#cfd0d1'};
                    font-style: oblique;
                }
            }

            @media only screen and (max-width: 470px){
                & {
                    display: flex;
                }
            }
        }    

        & div {
            width: 100%;
            height: 100%;

            & ul {
                width: 100%;
                height: 100%;

                & li {
                    width: 100%;
                    height: 20%;
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

            @media only screen and (max-width: 470px){
                & {
                    height: calc(100% - 32px - 20px);
                    margin-top: 20px;
                }
            }
        }
    }
`;


