import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, FirstBannerContainer, FirstBannerContent, StartButton, PullAnimationBar, Divtest } from './styles';


function Home() {

  const [clicked, setClicked] = useState(0)

  const navigate = useNavigate();

  const handleclick = () => {
    setClicked(1)
    window.setTimeout(()=>{navigate('pesquisar')}, 1200)
  }

  return (
      <Container>
        <FirstBannerContainer clicked={clicked}>
          <FirstBannerContent clicked={clicked}>
            <Divtest clicked={clicked}/>
            <h1>Catálogo de Animes</h1>
            <p>Faça listas com seus animes preferidos</p>
            <p>Descubra novos animes</p>
            <StartButton clicked={clicked} onClick={handleclick}>Começar</StartButton>
          </FirstBannerContent>
          <PullAnimationBar/> 
        </FirstBannerContainer>
      </Container>
  );
}

export default Home;