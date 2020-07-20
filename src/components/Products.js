import React, { useContext } from "react";
import { ProductContext } from "../Global/ProductContent";
import { CartContext } from "../Global/CartContext";
import Banner from "./Banner";

const Products = () => {
  const { product } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className="container">
      <Banner />
      <div className="products" style={{ marginTop: "30px" }}>
        {product.map((product) => (
          <div className="product" key={product.id}>
            <div className="productImage">
              <img src={product.image} alt="Not found" />
            </div>
            <div className="productDetails">
              <div className="productName">
                <h4>{product.name}</h4>
              </div>
              <div className="productPrice">${product.price}.00</div>
            </div>

            <div
              className="addToCart"
              onClick={() =>
                dispatch({ type: "ADDTOCART", id: product.id, product })
              }
            >
              Add To Cart
            </div>
            {product.status === "hot" ? <div className="hot">Hot</div> : ""}
            {product.status === "new" ? <div className="new">New</div> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
