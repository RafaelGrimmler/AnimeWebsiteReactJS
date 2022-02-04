import styled from 'styled-components';

import { BsGithub } from 'react-icons/bs'

export const Container = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-border)' : 'var(--color-nightmode-background-cyan)'};
    transition: 0.5s;


    & h2 {
        font-size: 20px;
        color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
        filter: ${props => props.lightmode ? 'drop-shadow(0 0 2px white)' : 'drop-shadow(0 0 2px black)'};
        transition: 0.5s;
    }

    & div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        & div:nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;

            & span:nth-child(1) {
                font-size: 14px;
                color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
                filter: ${props => props.lightmode ? 'drop-shadow(0 0 2px white)' : 'drop-shadow(0 0 2px black)'};
                padding-right: 20px;
                border-right: 1px solid;
                transition: 0.5s;
            }
        }
  }
`;

export const GithubIcon = styled(BsGithub)`
    font-size: 19px;
    margin-left: 20px;
    color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
    filter: ${props => props.lightmode ? 'drop-shadow(0 0 2px white)' : 'drop-shadow(0 0 2px black)'};
    transition: color 0.5s;
    transition: 0.5s;

    &:hover {
        color: var(--color-universal-header-text-animation);
    }
`;
