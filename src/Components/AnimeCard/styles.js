import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineDangerous } from 'react-icons/md'
import { GiConfirmed } from 'react-icons/gi'

export const Container = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 8px black;
  position: relative;
  transition: .5s;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: .5s;
    filter: opacity(0.9) saturate(0.7);
  }

  &:hover {
    box-shadow: 0 0 20px black;
    transform: scale(1.1);
  }
`;

export const DopplerEffect = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 9px;
    background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.0));
`;

export const RatingStar = styled(AiOutlineStar)`
    font-size: 18px;
    color: #dbdbdb;
    margin-right: 5px;
`;

export const Incomplete = styled(MdOutlineDangerous)`
    font-size: 18px;
    color: #dbdbdb;
    margin-right: 5px;
`;

export const Complete = styled(GiConfirmed)`
    font-size: 17px;
    color: #dbdbdb;
    margin-right: 5px;
`;

export const InfoBar = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: end;
    flex-direction: column;

    & h1 {
        color: #FFFFFF;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 16px;
        filter: drop-shadow(0 0 1px black);
        overflow: hidden;
        max-height: 56px;
        margin-bottom: 12px;
    }
    
    & span {
        color: #dbdbdb;
        font-size: 12.5px;
        font-weight: bold;
    }

    & div:nth-child(2) {
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        width: calc(100% - 20px);
        display: flex;
        align-items: center;
        justify-content: space-between;

        & div:nth-child(2) {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            width: auto;
            display: flex;
            justify-content: center;
            align-items: center;

            & span {
                color: var(--color-universal-header-text-animation);
                filter: drop-shadow(0 0 1px black);
            }
        }

        & div:nth-child(3) {
            position: relative;
            width: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;