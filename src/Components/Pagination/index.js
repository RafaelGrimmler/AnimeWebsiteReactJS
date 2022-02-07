import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Buttons, LeftArrow, RightArrow } from './styles';

// context
import { useLightMode } from '../../Context/LightModeContext'

function Pagination({ofs, count}) {

  const [offset, setOffset] = ofs
  const [current, setCurrent] = useState(Math.ceil(offset/20) + 1)
  const LightMode = useLightMode()
  const pagesLength = Math.ceil(count / 20)
  var first = pagesLength - current <= 1 ? pagesLength - 4 : Math.max(current - 2, 1)  
 
  useEffect(()=>{
    setCurrent(Math.ceil(offset/20) + 1)
  }, [offset])

  return (
      <Container>
          <Wrapper>
              <Buttons lightmode={LightMode.lightMode}>
                <LeftArrow lightmode={LightMode.lightMode}/>
              </Buttons>
              <ul>
                {Array.from({ length: Math.min(5, pagesLength) })
                  .map((_ , index) => index + first)
                  .map((page) => (page <= pagesLength &&
                    <li key={page}>
                      <Buttons lightmode={LightMode.lightMode} selected={current === page ? 1 : 0} onClick={() => setOffset((page - 1) * 20)}>
                        <span>{page}</span>
                      </Buttons>
                    </li>
                  ))
                }
              </ul>
              <Buttons lightmode={LightMode.lightMode}>
                <RightArrow lightmode={LightMode.lightMode}/>
              </Buttons>
          </Wrapper>
      </Container>
  );
}

export default Pagination;