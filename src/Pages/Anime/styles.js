import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
`;

export const Body = styled.div`
    width: 100%;
    background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
    margin-top: 60px;
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const AnimeBackground = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackgroundAnimeImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    filter: opacity(0.8) blur(2px);
    overflow: hidden;
`;

export const BackgroundShadowEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.7);
`;

export const AnimeInfoContainer = styled.div`
    width: 1600px;
    height: 80%;
    position: absolute;
    border-radius: 15px;
    background-color: ${props => props.lightmode ? 'rgba(255,255,255,0)' : 'rgba(32, 33, 36, 0)'};
    transition: 0.5s;
    display: flex;

    & h1 {
        font-size: 27px;
        color: ${props => props.lightmode ? 'black' : '#f0f0f0'};
        filter: ${props => props.lightmode ? 'drop-shadow(0 0 1px white)' : 'drop-shadow(0 0 1px black)'};
        text-shadow: ${props => props.lightmode ? '0 0 1px white' : 'none'};
        margin-bottom: 40px;
        transition: 0.5s;
    }

    @media only screen and (max-width: 1640px){
      & {
          width: 90%;
      }
    }

    @media only screen and (max-width: 768px){
      & {
          height: 90%;
      }
    }
`;

export const LeftSideBar = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    & div:nth-child(1) {
        width: 80%;
        height: 70%;
        border-radius: 20px;
        background: black;
        transition: .5s;

        @media only screen and (max-width: 1380px){
            & {
                width: 95%;
            }
        }

        & img:nth-child(1) {
            width: 100%;
            height: 100%;
            border-radius: 20px;
        }
    }

    @media only screen and (max-width: 1100px){
        & {
            width: 0%;
        }
    }
`;
