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
      <ul className="right">
        <li>
          <Link to="/store">Store</Link>
          <Link to="/recipe">Recipe</Link>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
};
export default navbarmain;
