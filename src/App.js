import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Global Style
import GlobalStyle from './Styles/styles'

// Pages
import Home from './Pages/Home'
import Search from './Pages/Search'

// Components
import Header from './Components/Header'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pesquisar" element={<Search/>} />
      </Routes>
    </Router>
  );
}

export default App;
