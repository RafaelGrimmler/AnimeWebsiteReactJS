import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Container, InfoBar, DopplerEffect, RatingStar, Incomplete, Complete, Firstinformation, Secondinformation, Thirdinformation } from './styles';


function AnimeCard({ anime }) {

  const navigator = useNavigate()

  const URLonClick = '/Anime/id=' + anime.id

  return (
      <Container title={anime.attributes.canonicalTitle} onClick={()=>navigator(URLonClick)}>
        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
        <DopplerEffect />
        <InfoBar>
            <h1>{anime.attributes.canonicalTitle}</h1>
            <div>
                {anime.attributes.startDate &&
                    <Firstinformation>{anime.attributes.startDate.slice(0,4)}</Firstinformation>
                }
                {anime.attributes.averageRating && (
                    <Secondinformation>
                        <div>
                            <RatingStar/>
                            <span>{(Math.round(parseFloat(anime.attributes.averageRating))/10).toFixed(1)}</span>
                        </div>
                    </Secondinformation>
                )}
                {anime.attributes.status && (
                    <Thirdinformation cond={anime.attributes.averageRating}>
                        <div>
                            {anime.attributes.status === 'finished' ?
                            <Complete/> : <Incomplete/>
                             }
                             <span>
                            {anime.attributes.status === 'finished' ? 'Completo' : 'Em Andamento'
                            }
                            </span>
                        </div>
                    </Thirdinformation>
                )}
            </div>
        </InfoBar>
      </Container>
  );
}

export default AnimeCard;