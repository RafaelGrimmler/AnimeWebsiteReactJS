import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Body, AnimesList, PaginationContainer, SearchTitle } from './styles';

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
    const { text } = useParams()
    const [animes, setAnimes] = useState(0)
    const [offset, setOffset] = useState(0)

    useEffect(()=>{
        fetch(`${API}anime?page[limit]=20&page[offset]=${offset}&filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
            setAnimes(response)
        })
    }, [offset, text])

    return (
      <Container>
        <Header />
        <Body lightmode={LightMode.lightMode}>
            <SearchTitle>Pesquisa: '<h1>{text}</h1>'</SearchTitle>
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