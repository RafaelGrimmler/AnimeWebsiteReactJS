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
  const [animes, setAnimes] = useState([])
  const [mainAnime, setMainAnimes] = useState({})

  useEffect(() => {
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
          <MainPresentationContent>
           
          </MainPresentationContent> : ''}
      </LowerSubContainer>
    </Container>
  );
}

export default Search;