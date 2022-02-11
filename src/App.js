import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'
import Animes from './Pages/Animes'
import Anime from './Pages/Anime'
import Genres from './Pages/Genres'
import AnimeByGenre from './Pages/AnimeByGenre'
import Search from './Pages/Search'
import SearchByText from './Pages/SearchByText'

// Context
import { LightModeProvider } from './Context/LightModeContext'

function App() {
  return (
    <LightModeProvider>

      <Router>
        <GlobalStyle/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Animes" element={<Animes/>} />
          <Route path="/Anime/id=:id" element={<Anime/>} />
          <Route path="/Generos" element={<Genres/>} />
          <Route path="/Generos/Genero=:genre" element={<AnimeByGenre/>} />
          <Route path="/Buscar/Text=:text" element={<SearchByText/>} />
          <Route path="/Buscar" element={<Search/>} />
        </Routes>
      </Router>

    </LightModeProvider>
  );
}

export default App;
