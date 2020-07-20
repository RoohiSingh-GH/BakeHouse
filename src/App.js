import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ProductContextProvider from "./Global/ProductContent";
import CartContextProvider from "./Global/CartContext";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Notfound from "./components/Notfound";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route component={Notfound} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
