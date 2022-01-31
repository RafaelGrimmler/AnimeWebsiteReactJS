import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

import { Container, LowerSubContainer, MainPresentationContent } from './styles';

// components
import Header from '../../Components/Header'

// context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'

function Search() {

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

  // mainAnime ? mainAnime[0].attributes.coverImage.large : ''

  return (
    <Container>
      <Header btnEffect={'Animes'}/>
      <LowerSubContainer lightmode={LightMode.lightMode}>
        {offset === 0 ? 
          <MainPresentationContent >
            <img src={mainAnime ? mainAnime[0].attributes.coverImage.large : ''} alt="Estampa do Anime em destaque" />
          </MainPresentationContent> : ''}
      </LowerSubContainer>
    </Container>
  );
}

export default Search;