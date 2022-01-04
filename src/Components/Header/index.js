import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, LogoContainer, SearchContainer, ButtonsContainer, SearchGlass, ModeNight, ModeLight, NightModeContainer, ButtonsSpan} from './styles';

function Header({btnEffect}) {

  const navigator = useNavigate()
  
  return (
      <Container>
        <LogoContainer onClick={()=>navigator('/')}>
          <h1>DISCOVERNIME</h1>
        </LogoContainer>
        <SearchContainer>
          <form action="">
            <input type="text" name='Anime' placeholder='Pesquisar animes...'/>
            <button type='submit'>
              <SearchGlass/>
            </button>
          </form>
        </SearchContainer>
        <ButtonsContainer>
          <ul>
            <li><ButtonsSpan onClick={()=>navigator('/')}>Início</ButtonsSpan></li>
            <li><ButtonsSpan onClick={()=>navigator('/Animes')} animation={btnEffect === 'Animes' ? 1 : 0}>Animes</ButtonsSpan></li>
            <li><ButtonsSpan onClick={()=>navigator('/')} animation={btnEffect === 'Generos' ? 1 : 0}>Gêneros</ButtonsSpan></li>
            <li><ButtonsSpan onClick={()=>navigator('/')} animation={btnEffect === 'Minhalista' ? 1 : 0}>Minha Lista</ButtonsSpan></li>
            <li>
              <NightModeContainer>
                <ModeNight pos={'absolute'}/>
                <ModeLight pos={'absolute'}/>
              </NightModeContainer>
            </li>
          </ul>
        </ButtonsContainer>
      </Container>
  );
}

export default Header;