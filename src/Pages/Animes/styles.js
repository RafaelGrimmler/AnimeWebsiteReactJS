import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const LowerSubContainer = styled.div`
  height: 2000px;
  width: 100%;
  background-color: ${props => props.lightmode ? 'var(--color-lightmode-background-white)' : 'var(--color-nightmode-background-body-cyan)'};
`;

export const MainPresentationContent = styled.main`

`;