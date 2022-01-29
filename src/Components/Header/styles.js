import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    z-index: 98;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)': 'var(--color-nightmode-background-cyan)'};
    border-bottom: 1px solid var(--color-lightmode-border);
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
        filter: drop-shadow(0 2px 1px #3d3d3d);

    }
`;

export const SearchGlass = styled(FaSearch)`
    width: 100%;
    height: 50%;
    color: black;
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
    font-size: 23px;
    color: black;
    position: ${props=>props.pos === 'absolute' ? 'absolute' : ''};
    animation-name: ${LightModeAnimation};
    animation-duration: 0.5s;
`;

export const ModeLight = styled(BsSun)`
    font-size: 25px;
    color: var(--color-nightmode-header-text);
    position: ${props=>props.pos === 'absolute' ? 'absolute' : ''};
    animation-name: ${LightModeAnimation};
    animation-duration: 0.5s;
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
        border: 1px solid var(--color-lightmode-border);
        border-right: none;
        font-size: 17px;
        padding-left: 7px;
        padding-right: 7px;
        border-bottom-left-radius: 7px;
        border-top-left-radius: 7px;
        background-color: #E5E5E5;
        transition: border-color 0.5s;
    }

    & button {
        width: 30px;
        height: 100%;
        position: absolute;
        border: 1px solid var(--color-lightmode-border);
        border-left: none;
        cursor: pointer;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
        padding-right: 3px;
        padding-top: 2px;
        background-color: #E5E5E5;
        transition: border-color 0.5s;
    }

    &:hover button, &:hover input {
        border-color: #616161;
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


