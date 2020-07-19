import React, { createContext, useState } from "react";

import blueberry from "../assets/blueberry.jpg";
import carrot from "../assets/carrot.jpg";
import chilles from "../assets/chilles.jpg";
import coconut from "../assets/coconut.jpg";
import coffee from "../assets/coffee.jpg";
import garlic from "../assets/garlic.jpg";
import grapes from "../assets/grapes.jpg";
import juice from "../assets/juice.jpg";
import strawberry from "../assets/strawberry.jpg";
import potato from "../assets/potato.jpg";
import pear from "../assets/pear.jpg";
import oranges from "../assets/oranges.jpg";
import tomato from "../assets/tomato.jpg";

export const ProductContext = createContext();
const ProductContextProvider = (props) => {
  const [product] = useState([
    { id: 1, name: "Blueberry", price: 1, image: blueberry, status: "hot" },
    { id: 2, name: "Oranges", price: 1, image: oranges, status: "hot" },
    { id: 3, name: "Strawberry", price: 1, image: strawberry, status: "new" },
    { id: 4, name: "Pear", price: 1, image: pear, status: "hot" },
    { id: 5, name: "Grapes", price: 1, image: grapes, status: "hot" },
    { id: 6, name: "Carrot", price: 1, image: carrot, status: "new" },
    { id: 7, name: "Potato", price: 1, image: potato, status: "hot" },
    { id: 8, name: "Garlic", price: 1, image: garlic, status: "hot" },
    { id: 9, name: "Chilles", price: 1, image: chilles, status: "hot" },
    { id: 10, name: "Tomato", price: 1, image: tomato, status: "hot" },
    { id: 11, name: "Coffee", price: 1, image: coffee, status: "hot" },
    { id: 12, name: "Coconut", price: 1, image: coconut, status: "new" },
    { id: 13, name: "Juice", price: 1, image: juice, status: "hot" },
  ]);
  return (
    <ProductContext.Provider value={{ product: [...product] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
