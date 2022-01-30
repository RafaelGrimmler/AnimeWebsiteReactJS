import React from 'react';

import { Container, HigherSubContainer, LowerSubContainer } from './styles';

// components
import Header from '../../Components/Header'

function Search() {
  return (
    <Container>
      <Header btnEffect={'Animes'}/>
      <HigherSubContainer/>
      <LowerSubContainer>
        
      </LowerSubContainer>
    </Container>
  );
}

export default Search;