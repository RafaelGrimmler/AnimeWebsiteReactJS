import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Body, AnimeBackground, BackgroundAnimeImage, BackgroundShadowEffect, AnimeInfoContainer, LeftSideBar, InformationsBar, Details, RatingStar, Timer, Complete, Incomplete, SpanEditable, DescriptionBar, InteractiveBar, AddIcon, GenresBar } from './styles';

// Components
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Loading from '../../Components/Loading'

// Context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'

function Anime() {

    const LightMode = useLightMode()
    const { id } = useParams()
    const [anime, setAnime] = useState(0)
    const [animeGenres, setAnimeGenres] = useState(0)

    useEffect(( ) => {
        fetch(`${API}anime?page[limit]=1&filter[id]=${id}`)
        .then((response) => response.json())
        .then((response) => {
            setAnime(response.data[0])
        })
    }, [id])

    useEffect(( ) => {
        if(anime){
            fetch(`${anime.relationships.genres.links.related}`)
            .then((response) => response.json())
            .then((response) => {
                setAnimeGenres(response.data.slice(0,3))
            })
        }
    }, [anime])

    return (
      <Container>
            <Header/>
            <Body lightmode={LightMode.lightMode}>
                {anime ? 
                <AnimeBackground>
                    {anime.attributes.coverImage ? <BackgroundAnimeImage zoomwidt='170%' src={anime.attributes.coverImage.original} alt={anime.attributes.canonicalTitle} /> : <BackgroundAnimeImage zoomwid='250%' src='https://images.wallpaperscraft.com/image/single/girl_night_starry_sky_160928_1920x1080.jpg' alt={anime.attributes.canonicalTitle} />}
                    <BackgroundShadowEffect />
                    <AnimeInfoContainer lightmode={LightMode.lightMode}>
                        <LeftSideBar>
                            <div>
                                <img src={anime.attributes.posterImage.medium} alt={anime.attributes.canonicalTitle} />
                            </div>
                        </LeftSideBar>
                        <InformationsBar lightmode={LightMode.lightMode}>
                            <h1>{anime.attributes.canonicalTitle}</h1>
                            <Details lightmode={LightMode.lightMode}>
                                {anime.attributes.startDate && <SpanEditable mr='25px' lightmode={LightMode.lightMode}>{anime.attributes.startDate.slice(0,4)}</SpanEditable>}
                                {anime.attributes.averageRating && <RatingStar lightmode={LightMode.lightMode}/>}
                                {anime.attributes.averageRating && <SpanEditable cl='#ff3068' mr='25px' lightmode={LightMode.lightMode}>{(Math.round(parseFloat(anime.attributes.averageRating))/10).toFixed(1)}<SpanEditable lightmode={LightMode.lightMode} fs='10px'>/10</SpanEditable></SpanEditable>}
                                {anime.attributes.episodeLength &&
                                <Timer lightmode={LightMode.lightMode}/>}
                                {anime.attributes.episodeLength && <SpanEditable fwsl='none' mr='25px' lightmode={LightMode.lightMode}>{anime.attributes.episodeLength}</SpanEditable>}
                                {anime.attributes.status === 'finished' ? <Complete lightmode={LightMode.lightMode}/> : <Incomplete lightmode={LightMode.lightMode}/>}
                                {anime.attributes.status === 'finished' ? 
                                <SpanEditable lightmode={LightMode.lightMode}>Completo</SpanEditable> : <SpanEditable lightmode={LightMode.lightMode}>Em Andamento</SpanEditable>}
                            </Details>
                            <DescriptionBar>
                             {anime.attributes.description && <SpanEditable>{anime.attributes.description}</SpanEditable>}
                            </DescriptionBar>
                            {animeGenres &&
                                <GenresBar>
                                    <ul>
                                    {animeGenres.map((animeGenres) => (
                                        <li key={animeGenres.id}>
                                            <div>
                                                <span>
                                                    {animeGenres.attributes.name}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                    </ul>
                                </GenresBar>
                            }
                            <InteractiveBar>
                                <div>
                                    <AddIcon />
                                    <SpanEditable fs='23px'>Adicionar à lista</SpanEditable>
                                </div>
                            </InteractiveBar>
                        </InformationsBar>
                    </AnimeInfoContainer>
                </AnimeBackground>
                : <Loading/>}
            </Body>
            <Footer/>
      </Container>
    );
}

export default Anime;