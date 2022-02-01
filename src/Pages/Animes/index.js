import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Narutolarge from '../../Images/Animes/Narutolarge.jpg'
import Narutooriginal from '../../Images/Animes/Narutooriginal.jpg'

import { Container, LowerSubContainer, MainPresentationContent } from './styles';

// components
import Header from '../../Components/Header'

// context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'


function Animes() {

  const LightMode = useLightMode()

  const [offset, setOffset] = useState(0)
  const [animes, setAnimes] = useState({})
  const [mainAnime, setMainAnime] = useState(0)
  
  useEffect(() => {
    fetch(`${API}anime?page[limit]=1&filter[text]=naruto`)
      .then((response) => response.json())
      .then((response) => {
        setMainAnime(response.data)
      })
      
    fetch(`${API}anime?page[limit]=20&page[offset]=${offset}`)
    .then((response) => response.json())
    .then((response) => {
      setAnimes(response.data)
    })
  }, [offset])

  return (
    <Container>
      <Header btnEffect={'Animes'}/>
      <LowerSubContainer lightmode={LightMode.lightMode}>
        {offset === 0 ? 
          <MainPresentationContent lightmode={LightMode.lightMode}>
            <img src={Narutolarge} alt="" />
            <img src={Narutooriginal} alt="" />
            <div />
            <div>
              <h1>{mainAnime ? mainAnime[0].attributes.canonicalTitle : ''}</h1>
            </div>
          </MainPresentationContent> : ''}
      </LowerSubContainer>
    </Container>
  );
}

export default Animes;