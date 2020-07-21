import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbarmain from "./components/navbarmain";
import Store from "./Store";
import navbarmain from "./components/navbarmain";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Router>
        <Navbarmain></Navbarmain>

        <Switch>
          <Route path="/" exact component={navbarmain} />
          <Route path="/store" exact component={Store} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
