import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Body, GenresContainer } from './styles';

// components
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

// context
import { useLightMode } from '../../Context/LightModeContext'

const API = 'https://kitsu.io/api/edge/'


function Genres() {

  const navigator = useNavigate()
  const LightMode = useLightMode()
  const limit = 100

  const [genres, setGenres] = useState({})

  useEffect(()=>{
      fetch(`${API}genres?page[limit]=${limit}`)
      .then((response) => response.json())
      .then((response) => {
        setGenres(response)
      })
  }, [limit])

  return (
      <Container>
        <Header btnEffect={'Generos'}/>
        <Body lightmode={LightMode.lightMode}>
            {genres.data && 
            <GenresContainer lightmode={LightMode.lightMode}>
                <ul>
                {genres.data.map((genre)=>(
                    <li key={genre.id} onClick={()=>navigator('/Generos/Genero=' + genre.attributes.name)}>
                        <span>
                            {genre.attributes.name}
                        </span>
                    </li>
                ))}
                </ul>
            </GenresContainer>}
        </Body>
        <Footer />
      </Container>
  );
}

export default Genres;