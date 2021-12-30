import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, FirstBannerContainer, FirstBannerContent, StartButton } from './styles';

function Home() {

  const [clicked, setClicked] = useState(0)

  const navigate = useNavigate();

  const handleclick = () => {
    setClicked(1)
    window.setTimeout(()=>{navigate('pesquisar')}, 1200)
  }

  return (
      <Container>
        <FirstBannerContainer>
          <FirstBannerContent clicked={clicked}>
            <h1>Catálogo de Animes</h1>
            <p>Faça listas com seus animes preferidos</p>
            <p>Descubra novos animes</p>
            <StartButton onClick={handleclick}>Começar</StartButton>
          </FirstBannerContent>
        </FirstBannerContainer>
      </Container>
  );
}

export default Home;