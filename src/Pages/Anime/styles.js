import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineDangerous } from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'
import { BsClockHistory } from 'react-icons/bs'
import { IoMdAddCircleOutline } from 'react-icons/io'

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
    overflow: hidden;
`;

export const RatingStar = styled(AiOutlineStar)`
    font-size: 18px;
    color: #f0f0f0;
    filter: drop-shadow(0 0 1px black);
    margin-right: 5px;
    transition: .5s;
`;

export const Incomplete = styled(MdOutlineDangerous)`
    font-size: 18px;
    color: #f0f0f0;
    filter: drop-shadow(0 0 1px black);
    margin-right: 5px;
    transition: .5s;
`;

export const Complete = styled(GiConfirmed)`
    font-size: 17px;
    color: #f0f0f0;
    filter: drop-shadow(0 0 1px black);
    margin-right: 5px;
    transition: .5s;
`;

export const Timer = styled(BsClockHistory)`
    font-size: 17px;
    color: #f0f0f0;
    filter: drop-shadow(0 0 1px black);
    margin-right: 5px;
    transition: .5s;

    @media only screen and (max-width: 400px){
        & {
            display: none;
        }
    }
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
    font-size: 33px;
    color: #f0f0f0;
    filter: drop-shadow(0 0 1px black);
    margin-right: 15px;
    transition: .5s;
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
    height: calc(100% - 6px);
    position: absolute;
    filter: opacity(0.8) blur(2px);
    overflow: hidden;
    transition: .5s;

    @media only screen and (max-width: 1100px){
        & {
            width: ${props => props.zoomwid};
        }
    }

    @media only screen and (max-width: 650px){
        & {
            width: ${props => props.zoomwidt};
        }
    }
`;

export const BackgroundShadowEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.8);
`;

export const AnimeInfoContainer = styled.div`
    width: 1600px;
    height: 80%;
    position: absolute;
    border-radius: 15px;
    background-color: ${props => props.lightmode ? 'rgba(255,255,255,0)' : 'rgba(32, 33, 36, 0)'};
    transition: 0.5s;
    display: flex;

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

export const InformationsBar = styled.div`
    height: 100%;
    width: 62.5%;
    transition: .5s;

    @media only screen and (max-width: 1100px){
        & {
            width: calc(100% - 30px);
        }
    }

    & h1 {
        margin-top: 150px;
        font-size: 27px;
        color: #f0f0f0;
        filter: drop-shadow(0 0 1px black);
        margin-bottom: 40px;
        transition: 0.5s;

        @media only screen and (max-width: 768px){
            & {
                margin-top: 50px;
            }
        }

        @media only screen and (max-width: 430px){
            & {
                margin-top: 25px;
            }
        }
    }
`;

export const Details = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SpanEditable = styled.span`
    color: ${props => props.cl ? props.cl : '#f0f0f0'};
    margin-right: ${props=>props.mr};
    filter: drop-shadow(0 0 1px black);
    font-size: ${props=>props.fs ? props.fs : '13px'};
    font-weight: bold;
    transition: .5s;  
    
    @media only screen and (max-width: 400px){
        & {
            display: ${props => props.fwsl};
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
    transition: .5s;

    & div:nth-child(1) {
        width: 50%;
        height: 60%;
        border-radius: 20px;
        background-color: black;
        transition: .5s;
        filter: drop-shadow(0 0 5px black);

        @media only screen and (max-width: 1380px){
            & {
                width: 60%;
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

export const DescriptionBar = styled.div`
    width: 100%;
    max-height: 195px;
    margin-top: 40px;
    margin-bottom: 40px;

    @media only screen and (max-width: 768px){
        & {
            overflow: scroll;
        }
    }
`;

export const GenresBar = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 40px;
    transition: .5s;

    & ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        & li div {
            height: 100%;
            min-height: 30px;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 48, 104,0.6);
            border-radius: 30px;
            margin-right: 15px;
            text-align: center;

            & span {
                height: 100%;
                padding-left: 7px;
                padding-right: 7px;
                color: white;
            }
        }

        & li:last-child  div {
            margin-right: 0;
        }
    }
`;

export const InteractiveBar = styled.div`
    display: flex;
    align-items: center;

    & div {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover ${AddIcon}, &:hover ${SpanEditable}{
            color: var(--color-universal-header-text-animation);
        }
    }
`;
