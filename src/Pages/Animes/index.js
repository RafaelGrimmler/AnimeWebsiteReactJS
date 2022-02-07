import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { useNavigate } from 'react-router-dom';
import Narutolarge from '../../Images/Animes/Narutolarge.jpg'
import Narutooriginal from '../../Images/Animes/Narutooriginal.jpg'

import { Container, LowerSubContainer, MainPresentationContent, GraphIcon, StatusUpIcon, StatusDownIcon, DetailsIcon, AddIcon, AnimeList, LoadingContent, AnimeListWrapperContainer } from './styles';

// components
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import AnimeCard from '../../Components/AnimeCard'
import Pagination from '../../Components/Pagination'

// context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'


function Animes() {

  const navigator = useNavigate()
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
      setAnimes(response)
    })
  }, [offset])

  console.log(animes)

  return (
    <Container>
      <Header btnEffect={'Animes'}/>
      <LowerSubContainer lightmode={LightMode.lightMode}>
        {offset === 0 ? 
          <MainPresentationContent lightmode={LightMode.lightMode}>
            <img src={Narutolarge} alt="" />
            <img src={Narutooriginal} alt="" />
            <div />
            {mainAnime ? 
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
                    <div onClick={()=>navigator('/Anime/id=' + mainAnime[0].id)}>
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
            : <LoadingContent/>}
          </MainPresentationContent>
           : ''}
        <AnimeList conditional={offset} lightmode={LightMode.lightMode}>
            {animes.data ? (
              <ul>
                <AnimeListWrapperContainer conditional={offset}>
                {animes.data.map((anime) => (
                  <li key={anime.id}>
                    <AnimeCard anime={anime}/>
                  </li>
                ))}
                </AnimeListWrapperContainer>
              </ul>
            ) : <LoadingContent/>}
        </AnimeList>
        {animes.data && <Pagination ofs={[offset, setOffset]} count={animes.meta.count}/>}
        <Footer/>
      </LowerSubContainer>
    </Container>
  );
}

export default Animes;