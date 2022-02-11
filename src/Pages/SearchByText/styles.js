import styled from 'styled-components';

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

export const AnimesList = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    & ul {
        margin-top: 100px;
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

export const SearchTitle = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 100px;
    font-size: 35px;
    color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
    filter: ${props => props.lightmode ? 'drop-shadow(0 1px 1px white)' : 'drop-shadow(0 0 1px black)'};
    text-shadow: ${props => props.lightmode ? '0 -1px 1px white' : 'none'};
    transition: .5s;

    @media only screen and (max-width: 768px){
        & {
            font-size: 25px;
        }
    }

    & h1 {
        font-size: 32px;
        font-style: oblique;

        @media only screen and (max-width: 768px){
            & {
                font-size: 22px;
            }
        }
    }
`;