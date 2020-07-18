import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <a href="">Bakehouse</a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <a href="">
            <span className="shoppingCart">
              <i class="fas fa-cart-arrow-down"></i>
              <span className="cartCount">0</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
