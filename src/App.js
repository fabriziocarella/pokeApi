// 3rd party components
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { pokeContext } from './context/pokeContext';

// Own components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'

function App() {
  const [foundPokemons, setFoundPokemons] = useState([])
  const [previous, setPrevious] = useState("")

  const pokemons = {
    foundPokemons, setFoundPokemons, previous, setPrevious
  }
  return (
    <div className="app">
      <BrowserRouter>
        <pokeContext.Provider value={pokemons}>
          <Header />
          <Main />
        </pokeContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;