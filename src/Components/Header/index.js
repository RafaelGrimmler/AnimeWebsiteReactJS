import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, LogoContainer, SearchContainer, ButtonsContainer, SearchGlass, ModeNight, ModeLight, NightModeContainer} from './styles';

function Header() {

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
            <li><span>Início</span></li>
            <li><span>Animes</span></li>
            <li><span>Gêneros</span></li>
            <li><span>Minha Lista</span></li>
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