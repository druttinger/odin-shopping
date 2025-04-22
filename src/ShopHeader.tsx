// import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrademark } from "react-icons/fa";
import { Product } from "./ProductPane";

export default function ShopHeader({ cart }: { cart: Product[] }) {
  return (
    <nav className="flex fixed top-0 left-0 right-0 justify-between items-center bg-teal-500 p-5 z-10">
      <Link
        to="/"
        className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl"
      >
        Shop Header <FaTrademark size="2em" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
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
