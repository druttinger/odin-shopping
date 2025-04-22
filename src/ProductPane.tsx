import { Link } from "react-router-dom";
import { FaHandHoldingDollar } from "react-icons/fa6";

export interface Product {
  id: number;
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

function ProductPane({
  product,
  updateCart,
}: {
  product: Product;
  updateCart: (product: Product) => void;
}) {
  return (
    <div key={product.id} className="bg-teal-500 p-5 m-5 rounded-2xl">
      <Link to={"/products/" + product.id} className="text-2xl font-bold">
        {product.title}
      </Link>
      <p className="text-lg">{product.description}</p>
      <p className="text-lg">Price: ${product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-cover"
      />
      <div>Quantity: {product.quantity}</div>
      {product.quantity && product.quantity > 0 ? (
        <p className="text-lg">Quantity: {product.quantity}</p>
      ) : (
        <button
          onClick={() => {
            updateCart(product);
          }}
        >
          <FaHandHoldingDollar size="4em" className="cursor-pointer" />
        </button>
      )}
    </div>
  );
}

export default ProductPane;
