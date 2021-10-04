import React from "react";
import { Route, Switch } from 'react-router-dom';

import Form from "../Form/Form";
import PokeList from "../PokeList/PokeList";
import Error from "../Error/Error";



const Main = () => {
  return (
  <main>
    <Switch>
      <Route path="/" component={Form} exact />
      <Route path="/form" component={Form} />
      <Route path="/pokedex" component={PokeList} />
      <Route component={Error} />
    </Switch>
  </main>)
};

export default Main;
