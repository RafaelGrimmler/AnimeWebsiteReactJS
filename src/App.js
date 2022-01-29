import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'
import Search from './Pages/Search'

// Context
import { LightModeProvider } from './Context/LightModeContext'

function App() {
  return (
    <LightModeProvider>

      <Router>
        <GlobalStyle/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Animes" element={<Search/>} />
        </Routes>
      </Router>

    </LightModeProvider>
  );
}

export default App;
