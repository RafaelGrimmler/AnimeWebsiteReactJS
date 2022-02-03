import React from 'react';

import { Container, InfoBar, DopplerEffect, RatingStar, Incomplete, Complete } from './styles';


function AnimeCard({ anime }) {
  return (
      <Container>
        <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
        <DopplerEffect />
        <InfoBar>
            <h1>{anime.attributes.canonicalTitle}</h1>
            <div>
                {anime.attributes.startDate &&
                    <span>{anime.attributes.startDate.slice(0,4)}</span>
                }
                {anime.attributes.averageRating && (
                    <div>
                        <RatingStar/>
                        <span>{(Math.round(parseFloat(anime.attributes.averageRating))/10).toFixed(1)}</span>
                    </div>
                )}
                {anime.attributes.status && (
                    <div>
                        {anime.attributes.status === 'finished' ?
                            <Complete/> : <Incomplete/>
                        }
                        <span>
                            {anime.attributes.status === 'finished' ? 'Completo' : 'Em Andamento'
                            }
                        </span>
                    </div>
                )}
            </div>
        </InfoBar>
      </Container>
  );
}

export default AnimeCard;