import { useOutletContext } from "react-router-dom";
import ProductPane from "./ProductPane";
import { Product } from "./ProductPane";
import { FaDollarSign } from "react-icons/fa";

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
      {cart.length ? (
        <button
          className="h-15 w-40 m-10 border-2 border-teal-600 rounded-md text-teal-600 color-white cursor-pointer hover:text-white hover:bg-teal-600 "
          onClick={() => updateCart({ id: -1 })}
        >
          <FaDollarSign size="2em" className="inline-block mr-2" />
          Purchase
        </button>
      ) : (
        <p className="text-2xl text-teal-700 m-10">Your cart is empty</p>
      )}
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
