import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [foundPokemons, setFoundPokemons] = useState("")
  useEffect(
    async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        const data = res.data
        setFoundPokemons([...foundPokemons, ...data.results])
        console.log("foundPokemons", foundPokemons);
        const preloadPokemons = data.results
        console.log(preloadPokemons);
      }
      catch (e) {
        console.log(e);
      }
    }, [])
  return (
    <section className="home">
      <p>Here you have the first 20 pokemons. If you want to know more, go find them on our <b>"Find Pokemons!"</b> section</p>
      <article className="nameContainer">{(foundPokemons)? foundPokemons.map((pokemon, i) => <div className="pokeName" key={i}>{pokemon.name}</div>) : ""}</article>
    </section>
  )
};

export default Home;
