import styled from 'styled-components';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export const Container = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & ul {
    width: 220px;
    height: 100%;
    display: flex;
    justify-content: space-between;

    & li {
      height: 100%;
    }
  }
`;

export const LeftArrow = styled(AiOutlineArrowLeft)`
  font-size: 20px;
  color: ${props => props.lightmode ? 'black' : '#F0F0F0'};
  filter: drop-shadow(0 0 1px black);
  transition: .5s;
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  font-size: 20px;
  color: ${props => props.lightmode ? 'black' : '#F0F0F0'};
  filter: drop-shadow(0 0 1px black);
  transition: .5s;
`;

export const Buttons = styled.div`
  width: 40px;
  height: 100%;
  background-color: ${props => props.selected ? props.lightmode ? '#7d7d7d' : 'black' : props.lightmode ? '#bebfc2' : 'var(--color-nightmode-background-cyan)'};
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;
  transition: .5s;

  &:hover ${LeftArrow}, 
  &:hover ${RightArrow},
  &:hover span {
    color: var(--color-universal-header-text-animation);
  }

  &:hover {
    background-color: ${props => props.lightmode ? '#7d7d7d' : 'black'};
  }

  & span {
    font-size: 17px;
    color: ${props => props.lightmode ? 'black' : '#F0F0F0'};
    font-weight: bold;
    filter: ${props => props.lightmode ? '' : 'drop-shadow(0 0 1px black)'};
    transition: .5s;

    color: ${props => props.selected ? 'var(--color-universal-header-text-animation)' : ''};
    filter: ${props => props.selected ? 'drop-shadow(0 0 1px black)' : ''};
  }
`;
