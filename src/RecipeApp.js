import React, { useState, useEffect } from "react";
import "./RecipeApp.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "7bba8a1d";
  const APP_KEY = "12400253b0c7589d17fc96b064cc4c51";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
