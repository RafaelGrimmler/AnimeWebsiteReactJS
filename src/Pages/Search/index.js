import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Body, FormContainer, SearchIcon, AnimesList, PaginationContainer } from './styles';

// components
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import AnimeCard from '../../Components/AnimeCard'
import Pagination from '../../Components/Pagination'

// context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'

function Search() {

    const navigator = useNavigate()
    const LightMode = useLightMode()
    const [text, setText] = useState('')
    const [animes, setAnimes] = useState(0)
    const [offset, setOffset] = useState(0)

    const HandleForm = e => {
        e.preventDefault()
        setOffset(0)
        fetch(`${API}anime?page[limit]=20&page[offset]=${offset}&filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
            setAnimes(response)
        })
    }

    useEffect(()=>{
        fetch(`${API}anime?page[limit]=20&page[offset]=${offset}&filter[text]=${text}`)
        .then((response) => response.json())
        .then((response) => {
            setAnimes(response)
        })
    }, [offset])

    return (
      <Container>
        <Header/>
        <Body lightmode={LightMode.lightMode}>
           <FormContainer lightmode={LightMode.lightMode}>
                <form onSubmit={HandleForm}>
                    <input type="text" placeholder='Animes...' name='animes/generos' value={text} onChange={e=>{setText(e.target.value)}}/>
                    <button type='submit'>
                        <SearchIcon lightmode={LightMode.lightMode}/>
                    </button>
                </form>
           </FormContainer>
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