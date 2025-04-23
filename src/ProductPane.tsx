import { Link } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export interface Product {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

const sizes = {
  small: "w-20 h-20",
  large: "w-60 h-60",
};

function ProductPane({
  product,
  updateCart,
  imgSize = "small",
}: {
  product: Product;
  updateCart: (product: Product, amount: number) => void;
  imgSize?: "small" | "large";
}) {
  return (
    <div key={product.id} className="bg-teal-500 p-5 m-5 rounded-2xl">
      <Link to={"/products/" + product.id} className="text-2xl font-bold">
        <span className="hover:text-white">{product.title}</span>
      </Link>
      <p className="text-lg">{product.description}</p>
      <p className="text-lg">Price: ${product.price}</p>
      <p className={sizes[imgSize] + " object-cover m-10"}>
        <img src={product.image} alt={product.title} />
      </p>
      {product.quantity && product.quantity > 0 ? (
        <p className="text-3xl">
          <button
            onClick={() => {
              updateCart(product, -1);
            }}
            className="hover:text-white"
          >
            <FiMinusCircle size="4em" className="cursor-pointer" />
          </button>
          Quantity: {product.quantity}
          <button
            onClick={() => {
              updateCart(product, 1);
            }}
            className="hover:text-white"
          >
            <FiPlusCircle size="4em" className="cursor-pointer" />
          </button>
          <button
            onClick={() => {
              updateCart(product, (product.quantity || 0) * -1);
            }}
            className="hover:text-white"
          >
            <GiCancel size="4em" className="cursor-pointer" />
          </button>
        </p>
      ) : (
        <button
          onClick={() => {
            updateCart(product, 1);
          }}
          className="hover:text-white"
        >
          <FaHandHoldingDollar size="4em" className="cursor-pointer" />
        </button>
      )}
    </div>
  );
}

export default ProductPane;
