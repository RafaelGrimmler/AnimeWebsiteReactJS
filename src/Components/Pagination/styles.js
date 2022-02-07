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
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background-color: ${props => props.lightmode ? '#bebfc2' : 'var(--color-nightmode-background-cyan)'};
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  cursor: pointer;

  &:hover ${LeftArrow}, &:hover ${RightArrow} {
    color: var(--color-universal-header-text-animation);
  }
`;
