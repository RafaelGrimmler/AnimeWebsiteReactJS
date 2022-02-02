import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Narutolarge from '../../Images/Animes/Narutolarge.jpg'
import Narutooriginal from '../../Images/Animes/Narutooriginal.jpg'

import { Container, LowerSubContainer, MainPresentationContent, GraphIcon, StatusUpIcon, StatusDownIcon, DetailsIcon, AddIcon, AnimeList } from './styles';

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

  console.log(mainAnime)

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
              <div>
                <ul>
                  <li>{mainAnime ? 
                    <div>
                      <span>Lançamento: {mainAnime[0].attributes.startDate}</span>
                    </div> : ''}
                  </li>
                  <li>{mainAnime ? 
                    <div>
                      <GraphIcon lightmode={LightMode.lightMode}/>
                      <span>{(Math.round(parseFloat(mainAnime[0].attributes.averageRating))/10).toFixed(1) }</span>
                    </div> : ''}
                  </li>
                  <li>{mainAnime ? 
                    <div>
                      {mainAnime[0].attributes.status === 'finished' ? 
                      <StatusDownIcon lightmode={LightMode.lightMode}/> : 
                      <StatusUpIcon lightmode={LightMode.lightMode}/> }
                      <span>{mainAnime[0].attributes.status === 'finished' ? 'Completo' : 'Em Andamento'}</span>
                    </div> : ''}
                  </li>
                </ul>
                <ul>
                  <li>{mainAnime ? 
                    <div>
                      <DetailsIcon lightmode={LightMode.lightMode}/>
                      <span>Detalhes</span>
                    </div>
                    : ''}
                  </li>
                  <li>{mainAnime ? 
                    <div>
                      <AddIcon lightmode={LightMode.lightMode}/>
                      <span>Adicionar à lista</span>
                    </div>
                    : ''}
                  </li>
                </ul>
              </div>
            </div>
          </MainPresentationContent>
           : ''}
        <AnimeList conditional={offset}>
          <div>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </AnimeList>
      </LowerSubContainer>
    </Container>
  );
}

export default Animes;