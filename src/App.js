import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbarmain from "./components/navbarmain";
import Store from "./Store";
import RecipeApp from "./RecipeApp";
import Banner from "./components/Banner";
function App() {
  return (
    <div>
      <Banner></Banner>
      <Router>
        <Switch>
          <Route path="/" exact component={Navbarmain} />
          <Route path="/store" exact component={Store} />
          <Route path="/" exact component={Navbarmain} />
          <Route path="/recipe" exact component={RecipeApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
