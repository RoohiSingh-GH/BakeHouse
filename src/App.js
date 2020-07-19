import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductContextProvider from "./Global/ProductContent";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductContextProvider>
        <div className="container">
          <Products></Products>
        </div>
      </ProductContextProvider>
    </div>
  );
}

export default App;
