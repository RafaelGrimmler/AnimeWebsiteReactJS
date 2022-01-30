import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, LogoContainer, SearchContainer, ButtonsContainer, SearchGlass, ModeNight, ModeLight, NightModeContainer, ButtonsSpan, HamburgerMenu} from './styles';

// Context
import { useLightMode } from '../../Context/LightModeContext'

function Header({btnEffect}) {

  const navigator = useNavigate()

  const LightMode = useLightMode()

  const HandleLightModeFunctionality = ()=>{
    LightMode.lightMode ? LightMode.setLightMode(false) : LightMode.setLightMode(true)
  }
  
  return (
      <Container lightmode={LightMode.lightMode}>
        <LogoContainer lightmode={LightMode.lightMode} onClick={()=>navigator('/')}>
          <h1>DISCOVERNIME</h1>
        </LogoContainer>
        <SearchContainer lightmode={LightMode.lightMode}>
          <form action="">
            <input type="text" name='Anime' placeholder='Pesquisar animes...'/>
            <button type='submit'>
              <SearchGlass lightmode={LightMode.lightMode}/>
            </button>
          </form>
        </SearchContainer>
        <ButtonsContainer>
          <ul>
            <li><ButtonsSpan lightmode={LightMode.lightMode} onClick={()=>navigator('/')}>Início</ButtonsSpan></li>
            <li><ButtonsSpan lightmode={LightMode.lightMode}onClick={()=>navigator('/Animes')} animation={btnEffect === 'Animes' ? 1 : 0}>Animes</ButtonsSpan></li>
            <li><ButtonsSpan lightmode={LightMode.lightMode} onClick={()=>navigator('/')} animation={btnEffect === 'Generos' ? 1 : 0}>Gêneros</ButtonsSpan></li>
            <li><ButtonsSpan lightmode={LightMode.lightMode} onClick={()=>navigator('/')} animation={btnEffect === 'Minhalista' ? 1 : 0}>Minha Lista</ButtonsSpan></li>
            <li>
              <NightModeContainer>
                {LightMode.lightMode ? <ModeNight onClick={HandleLightModeFunctionality} pos={'absolute'}/> : <ModeLight onClick={HandleLightModeFunctionality} pos={'absolute'}/>}
              </NightModeContainer>
            </li>
          </ul>
        </ButtonsContainer>
        <HamburgerMenu lightmode={LightMode.lightMode}>
          <div/>
        </HamburgerMenu>
      </Container>
  );
}

export default Header;