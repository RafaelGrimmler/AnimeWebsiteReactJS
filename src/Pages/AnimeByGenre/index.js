import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Body, AnimesList, PaginationContainer, GenreTitle } from './styles';

// components
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import AnimeCard from '../../Components/AnimeCard'
import Pagination from '../../Components/Pagination'

// context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'

function Search() {

    const LightMode = useLightMode()
    const { genre } = useParams()
    const [animes, setAnimes] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(()=>{
        fetch(`${API}anime?page[limit]=20&page[offset]=${offset}&filter[genres]=${genre}`)
        .then((response) => response.json())
        .then((response) => {
            setAnimes(response)
        })
    }, [offset, genre])

    return (
      <Container>
        <Header btnEffect={'Generos'}/>
        <Body lightmode={LightMode.lightMode}>
            <GenreTitle lightmode={LightMode.lightMode}>Pesquisa: '<h1>{genre}</h1>'</GenreTitle>
           {animes.data && 
            <AnimesList>
                <ul>
                    {animes.data.map(anime => (
                        <li key={anime.id}>
                            <AnimeCard anime={anime}/>
                        </li>
                    ))}
                </ul>
            </AnimesList>
           }
           {animes.data && 
           <PaginationContainer>
                <Pagination mb='0px' ofs={[offset, setOffset]} count={animes.meta.count}/>
           </PaginationContainer> 
           }
        </Body>
        <Footer />
      </Container>
  );
}

export default Search;