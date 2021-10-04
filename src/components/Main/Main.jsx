import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useDebounce } from "use-debounce/lib";
import axios from "axios";


import PokeList from "../PokeList/PokeList";
import Error from "../Error/Error";



const Main = () => {

  const [foundPokemons, setFoundPokemons] = useState([])
  const [input_value, setInput_value] = useState("");
  const [debounced] = useDebounce(input_value, 2000)

  useEffect(
    async () => {
      try {
        //! CONTINUAR
        let checkExist = foundPokemons.find((pokemon) => {
          return pokemon.id == debounced
        })
        console.log(debounced);

        if (debounced !== "" && checkExist !== undefined) {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${debounced}`)
          const data = await [res.data]
          console.log(foundPokemons);
          setFoundPokemons([...foundPokemons, ...data])
        } else {
          // alert(`Please add a valid number or Pokemon name`)
        }
      }
      catch (e) {
        console.log(e);
      }
    }, [debounced])



  return (
    <main>
      <section>
        <form>
          <input type="text" name="pokemon" placeholder="Search a Pokemon!" onChange={(e) => { setInput_value(e.target.value) }} />
        </form>
      </section>
      <Switch>
        <Route path="/pokedex" component={() => <PokeList foundPokemons={foundPokemons} />} />
        <Route component={Error} />
      </Switch>
    </main>)
};

export default Main;
