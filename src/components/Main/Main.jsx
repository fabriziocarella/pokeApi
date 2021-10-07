// 3rd party components
import React from "react";
import { Route, Switch } from 'react-router-dom';

// Own components
import Home from "../Home/Home"
import Form from "../Form/Form";
import Error from "../Error/Error";
import AddPokemon from "../AddPokemon/AddPokemon";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Form} />
        <Route path="/new" component={AddPokemon} />
        <Route component={Error} />
      </Switch>
    </main>)
};

export default Main;