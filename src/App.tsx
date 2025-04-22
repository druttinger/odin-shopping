import "./App.css";
import ShopHeader from "./ShopHeader";
import useFetch from "react-fetch-hook";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Product } from "./ProductPane";

const Layout = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const { isLoading, data, error } = useFetch(API_URL);
  const [cart, setCart] = useState<Product[]>([]);

  function updateCart(product: Product): void {
    if (product.id === -1) setCart([]);
    else
      setCart((array: Product[]) => {
        if (array.find((item: Product) => item.id === product.id)) {
          return array.map((item: Product) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity || 0) + 1 }
              : item
          );
        }
        return [...array, { ...product, quantity: 1 }];
      });
  }

  return (
    <div>
      <ShopHeader cart={cart} />
      <div className="absolute top-30 left-50 right-50 flex flex-col items-center justify-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error: {error.message}</h1>
        ) : (
          <div className="absolute top-30 left-50 right-50 flex flex-col items-center justify-center">
            <Outlet context={{ data, cart, updateCart }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
