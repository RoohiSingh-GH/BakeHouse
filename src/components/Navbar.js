import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/">Bakehouse</Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="cart">
            <span className="shoppingCart">
              <i class="fas fa-cart-arrow-down"></i>
              <span className="cartCount">0</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
