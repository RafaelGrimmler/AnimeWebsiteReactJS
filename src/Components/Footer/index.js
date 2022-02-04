import React from 'react';

import { Container, GithubIcon } from './styles';

// context
import { useLightMode } from '../../Context/LightModeContext'

function Footer() {

    
  const LightMode = useLightMode()

  return (
      <Container lightmode={LightMode.lightMode}>
          <div>
              <h2>Rafael Grimmler da Rocha</h2>
              <div>
                <div>
                    <span>Grimmlerr@gmail.com</span>
                    <a href="https://github.com/RafaelGrimmler/AnimeWebsiteReactJS"><GithubIcon lightmode={LightMode.lightMode}/></a>
                </div>
              </div>
          </div>
      </Container>
  );
}

export default Footer;