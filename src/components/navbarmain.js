import React from "react";
import { Link } from "react-router-dom";
const navbarmain = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Bakehouse</Link>
        </li>
      </ul>
      <ul className="right" id="Nav_menu">
        <li>
          <Link to="/store">Store</Link>
          <Link to="/recipe">Recipe</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default navbarmain;
