import "./App.css";
// import React from "react";
import ShopHeader from "./ShopHeader";
import useFetch from "react-fetch-hook";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const { isLoading, data, error } = useFetch(API_URL);

  return (
    <div>
      <ShopHeader />
      <div className="absolute top-30 left-50 right-50 flex flex-col items-center justify-center">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error: {error.message}</h1>
        ) : (
          <Outlet context={data} />
        )}
      </div>
    </div>
  );
};

export default Layout;
