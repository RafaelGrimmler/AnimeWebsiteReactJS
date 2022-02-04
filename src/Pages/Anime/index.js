import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Body, AnimeBackground, BackgroundAnimeImage, BackgroundShadowEffect, AnimeInfoContainer, LeftSideBar } from './styles';

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

    useEffect(( ) => {
        fetch(`${API}anime?page[limit]=1&filter[id]=${id}`)
        .then((response) => response.json())
        .then((response) => {
            setAnime(response.data[0])
        })
    }, [id])

    console.log(anime.attributes)

    return (
      <Container>
            <Header/>
            <Body lightmode={LightMode.lightMode}>
                {anime ? 
                <AnimeBackground>
                    {anime.attributes.coverImage && <BackgroundAnimeImage src={anime.attributes.coverImage.original} alt={anime.attributes.canonicalTitle} />}
                    {anime.attributes.coverImage && 
                    <BackgroundShadowEffect />}
                    <AnimeInfoContainer lightmode={LightMode.lightMode}>
                        <LeftSideBar>
                            <div>
                                <img src={anime.attributes.posterImage.medium} alt={anime.attributes.canonicalTitle} />
                            </div>
                        </LeftSideBar>
                        <div>
                            <h1>{anime.attributes.canonicalTitle}</h1>
                        </div>
                    </AnimeInfoContainer>
                </AnimeBackground>
                : <Loading/>}
            </Body>
            <Footer/>
      </Container>
    );
}

export default Anime;