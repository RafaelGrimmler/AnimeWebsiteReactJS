import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';

import { Container, LogoContainer, ButtonsContainer, SearchGlass, RightContainer, ModeNight, ModeLight, NightModeContainer, ButtonsSpan, HamburgerMenu, HamburgerX, HamburgerMenuInteractionBar } from './styles';

// Context
import { useLightMode } from '../../Context/LightModeContext'

function Header({btnEffect}) {

  const navigator = useNavigate()
  const LightMode = useLightMode()

  const [hamburguerController, setHamburguerController] = useState(false)

  const HandleHamburguerMenu = () => {
    hamburguerController ? setHamburguerController(false) : setHamburguerController(true)
  }
  const HandleLightModeFunctionality = ()=>{
    LightMode.lightMode ? LightMode.setLightMode(false) : LightMode.setLightMode(true)
  }

  return (
      <Container lightmode={LightMode.lightMode}>
        <LogoContainer lightmode={LightMode.lightMode} onClick={()=>navigator('/')}>
          <h1>DISCOVERNIME</h1>
        </LogoContainer>
        <ButtonsContainer>
          <ul>
            <li><ButtonsSpan title='Início' lightmode={LightMode.lightMode} onClick={()=>navigator('/')}>Início</ButtonsSpan></li>
            <li><ButtonsSpan title='Animes' lightmode={LightMode.lightMode}onClick={()=>navigator('/Animes')} animation={btnEffect === 'Animes' ? 1 : 0}>Animes</ButtonsSpan></li>
            <li><ButtonsSpan title='Gêneros' lightmode={LightMode.lightMode} onClick={()=>navigator('/Generos')} animation={btnEffect === 'Generos' ? 1 : 0}>Gêneros</ButtonsSpan></li>
            <li><ButtonsSpan title='Minha Lista' lightmode={LightMode.lightMode} onClick={()=>navigator('/')} animation={btnEffect === 'Minhalista' ? 1 : 0}>Minha Lista</ButtonsSpan></li>
          </ul>
        </ButtonsContainer>
        <RightContainer>
          <NightModeContainer>
            <ul>
              <li>
                <SearchGlass title='Buscar' lightmode={LightMode.lightMode} onClick={()=>navigator('/')}/>
              </li>
              <li>
                {LightMode.lightMode ? <ModeNight title='Modo Escuro' onClick={HandleLightModeFunctionality} fonts={'25px'} pos={'absolute'}/> : <ModeLight title='Modo Claro' onClick={HandleLightModeFunctionality} fonts={'25px'} pos={'absolute'}/>}
              </li>
            </ul>
          </NightModeContainer>
        </RightContainer>
        <HamburgerMenu >
          <HamburgerX onClick={HandleHamburguerMenu} lightmode={LightMode.lightMode} menustatus={hamburguerController}>
            <div/>
          </HamburgerX>
          <HamburgerMenuInteractionBar menustatus={hamburguerController} lightmode={LightMode.lightMode}>
            <div>
              <div>
                <ul>
                  <li>
                    <span title='Buscar' onClick={()=>navigator('/')}>Buscar</span>
                  </li>
                  <li>
                    <span title='Início' onClick={()=>navigator('/')}>Início</span>
                  </li>
                  <li>
                    <span title='Animes' onClick={()=>navigator('/Animes')}>Animes</span>
                  </li>
                  <li>
                    <span title='Gêneros' onClick={()=>navigator('/Generos')}>Gêneros</span>
                  </li>
                  <li>
                    <span title='Minha Lista' onClick={()=>navigator('/')}>Minha Lista</span>
                  </li>
                  <li>
                    {LightMode.lightMode ? <ModeNight title='Modo Escuro' fonts={'36px'} onClick={HandleLightModeFunctionality} pos={'absolute'}/> : <ModeLight title='Modo Claro' fonts={'36px'} onClick={HandleLightModeFunctionality} pos={'absolute'}/>}
                  </li>
                </ul>
              </div>
            </div>
          </HamburgerMenuInteractionBar>
        </HamburgerMenu>
      </Container>
  );
}

export default Header;