import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Product } from "./ProductPane";

export default function ShopHeader({ cart }: { cart: Product[] }) {
  return (
    <nav className="flex fixed top-0 left-0 right-0 justify-between items-center bg-teal-500 p-5 z-10">
      <Link
        to="/"
        className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl"
      >
        Coolest Fake Shop Ever
      </Link>
      <nav>
        <ul className="flex justify-center content-center gap-10">
          <li className="text-5xl hover:text-amber-300">
            <Link to="/products">Products</Link>
          </li>
          <li className="text-2xl hover:text-amber-300">
            <Link to="/cart">
              <FaShoppingCart size="4em" />
              <div className="absolute right-2 bottom-8 w-10 h-10 center text-3xl rounded-3xl text-white bg-red-600 color">
                {cart.length}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
