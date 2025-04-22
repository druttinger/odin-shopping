// import React from "react";
import { useOutletContext } from "react-router-dom";
import ProductPane from "./ProductPane";
import { Product } from "./ProductPane";

const Products = () => {
  const { cart, updateCart } = useOutletContext<{
    cart: Product[];
    updateCart: (product: Product) => void;
  }>();

  return (
    <div>
      <h1 className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl">
        Cart
      </h1>
      <button onClick={() => updateCart({ id: -1 })}>Empty Cart</button>
      {Array.isArray(cart)
        ? cart.map((product) => (
            <ProductPane
              product={product}
              key={product.id}
              updateCart={updateCart}
            />
          ))
        : null}
    </div>
  );
};

export default Products;
