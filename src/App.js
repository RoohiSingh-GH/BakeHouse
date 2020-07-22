import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Store";
import RecipeApp from "./RecipeApp";
import NavbarMain from "./components/navbarmain";
import Mainbanner from "./components/Mainbanner";
function App() {
  return (
    <div>
      <Mainbanner />
      <Router>
        <NavbarMain></NavbarMain>
        <Switch>
          <Route path="/" exact component={NavbarMain} />
          <Route path="/store" exact component={Store} />
          <Route path="/" exact component={NavbarMain} />
          <Route path="/recipe" exact component={RecipeApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
