import styled from 'styled-components';

import { BsSearch } from 'react-icons/bs'

export const Container = styled.div`
  width: 100%;
`;

export const Body = styled.div`
    width: 100%;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    transition: .5s;
`;

export const SearchIcon = styled(BsSearch)`
    font-size: 20px;
    color: ${props => props.lightmode ? 'black' : 'white'}; 
    transition: .5s;
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
    & form {
        position: relative;
        width: 400px;
        height: 40px;
        margin-top: 60px;
        margin-bottom: 40px;

        & input {
            width: 100%;
            height: 100%;
            position: absolute;
            border: none;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 18px;
            border-radius: 10px;
            background-color: ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-background-cyan)'};
            transition: .5s;
            color: ${props => props.lightmode ? 'black' : 'white'};
        }

        & button {
            width: 40px;
            height: 100%;
            position: absolute;
            right: 0;
            border: none;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;background-color: ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-background-cyan)'};
            transition: .5s;
            cursor: pointer;
        }

        & button:hover ${SearchIcon} {
            color: var(--color-universal-header-text-animation);
        }
    }
`;

export const AnimesList = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    & ul {
        width: 90%;
        min-width: 200px;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        justify-items: center;
        margin-bottom: 100px;
    }
`;

export const PaginationContainer = styled.div`
    width: 100%;
    padding-bottom: 100px;
`;