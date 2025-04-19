// import React from "react";
import { Link } from "react-router-dom";

export default function ShopHeader() {
  return (
    <nav className="flex fixed top-0 left-0 right-0 justify-between items-center bg-teal-500 p-5">
      <h1 className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl">
        Shop Header
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
