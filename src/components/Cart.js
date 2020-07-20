import React, { useContext } from "react";
import { CartContext } from "../Global/CartContext";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <div className="cartDetails" style={{ marginTop: "100px" }}>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cartImage">
                  <img src={cart.image}></img>
                </span>
                <span className="cartproductname">{cart.name}</span>
                <span className="cartproductprice">${cart.price}.00</span>
                <span
                  className="inc"
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                >
                  <i className="fas fa-plus"></i>
                </span>
                <span className="productQuantity">{cart.qty}</span>
                <span
                  className="dec"
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <i className="fas fa-minus"></i>
                </span>
                <span className="productTotalPrice">
                  ${cart.price * cart.qty}.00
                </span>
                <span
                  className="delete"
                  onClick={() =>
                    dispatch({ type: "DELETE", id: cart.id, cart })
                  }
                >
                  <i className="fas fa-trash"></i>
                </span>
              </div>
            ))
          : "Sorry your cart is currently empty"}
      </div>
    </div>
  );
};
export default Cart;
