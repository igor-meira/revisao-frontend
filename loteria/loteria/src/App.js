import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import DiaDeSorte from './pages/DiaDeSorte';
import HomePage from './pages/HomePage';
import LotoFacil from './pages/LotoFacil';
import LotoMania from './pages/LotoMania';
import Megasena from './pages/Megasena';
import Quina from './pages/Quina';
import TimeMania from './pages/TimeMania';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/diadesorte">
          <DiaDeSorte/>
        </Route>
        <Route exact path="/lotofacil">
          <LotoFacil/>
        </Route>
        <Route exact path="/lotomania">
          <LotoMania/>
        </Route>
        <Route exact path="/megasena">
          <Megasena/>
        </Route>
        <Route exact path="/quina">
          <Quina/>
        </Route>
        <Route exact path="/timemania">
          <TimeMania/>
        </Route>
        <Route exact path="/">
          <HomePage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;