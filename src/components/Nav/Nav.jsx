// 3rd party components
import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (<nav>
    <h3>This is the nav</h3>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/pokedex">Pokedex!</Link></li>
    </ul>
  </nav>)
};

export default Nav;
