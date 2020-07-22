import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "./Store";
import RecipeApp from "./RecipeApp";
import NavbarMain from "./components/navbarmain";
import Banner from "./components/Banner";
import Quiz from "./QuizApp";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={NavbarMain} />
          <Route path="/store" exact component={Store} />
          <Route path="/recipe" exact component={RecipeApp} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
      <Banner />
    </div>
  );
}

export default App;
