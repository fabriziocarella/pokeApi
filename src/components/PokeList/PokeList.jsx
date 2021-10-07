import React from "react";

import Card from '../Card'
const PokeList = (props) => {

  return (
    <article className="cardContainer">
      {props.foundPokemons.map((pokemon, i) => <Card info={pokemon} key={i} />)}
    </article>)
};

export default PokeList;