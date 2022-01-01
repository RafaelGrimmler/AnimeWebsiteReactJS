import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdModeNight } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    z-index: 98;
    background-color: var(--color-background-white);
    border-bottom: 2px solid #777778;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    width: 160px;
    height: 35px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
   
    & h1 {
        font-size: 25px;
        font-family: fantasy;
    }
`;

export const SearchGlass = styled(FaSearch)`
    width: 100%;
    height: 50%;
    color: black;
`;

export const ModeNight = styled(MdModeNight)`
    font-size: 25px;
    color: black;
    position: ${props=>props.pos === 'absolute' ? 'absolute' : ''};
`;

export const ModeLight = styled(BsSun)`
    font-size: 25px;
    color: black;
    position: ${props=>props.pos === 'absolute' ? 'absolute' : ''};
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
        border: 1px solid black;
        border-right: none;
        font-size: 17px;
        padding-left: 7px;
        padding-right: 7px;
        border-bottom-left-radius: 7px;
        border-top-left-radius: 7px;
    }

    & button {
        width: 30px;
        height: 100%;
        position: absolute;
        border: 1px solid black;
        border-left: none;
        cursor: pointer;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
        padding-right: 3px;
        padding-top: 2px;
    }
`;

export const ButtonsContainer = styled.div`
    width: 380px;
    height: 35px;
    margin-right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & ul li {
        margin-right: 30px;
    }

    & ul li:nth-child(5) {
        margin-right: 0px;
    }
`;

export const NightModeContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;


