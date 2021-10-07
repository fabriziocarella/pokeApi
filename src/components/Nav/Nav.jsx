// 3rd party components
import React from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className={props.clase} >
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Find Pokemons!</Link></li>
        <li><Link to="/new">Add Pokemons!</Link></li>
      </ul>
    </nav>)
};

export default Nav;
