import React, { useState } from 'react';

import { Container, Wrapper, Buttons, LeftArrow, RightArrow } from './styles';

// context
import { useLightMode } from '../../Context/LightModeContext'

function Pagination({ofs}) {

  const [offset, setOffset] = ofs
  const [page, setPage] = useState(1)
  const LightMode = useLightMode()

  return (
      <Container>
          <Wrapper>
              <Buttons lightmode={LightMode.lightMode}>
                <LeftArrow lightmode={LightMode.lightMode}/>
              </Buttons>
              <ul>
                
              </ul>
              <Buttons lightmode={LightMode.lightMode}>
                <RightArrow lightmode={LightMode.lightMode}/>
              </Buttons>
          </Wrapper>
      </Container>
  );
}

export default Pagination;