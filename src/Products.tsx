import React from "react";
import { useOutletContext } from "react-router-dom";
import ProductPane from "./ProductPane";
import { Product } from "./ProductPane";

const Products = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [[minPrice, maxPrice], setPriceRange] = React.useState([0, 10000]);
  const { data, updateCart } = useOutletContext<{
    data: Product[];
    updateCart: (product: Product) => void;
  }>();

  const fitsSearchParams = (str: string, price: number) => {
    return (
      str.toLowerCase().includes(searchTerm.toLowerCase()) &&
      price >= minPrice &&
      price <= maxPrice
    );
  };

  return (
    <div>
      <h1 className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl">
        Shop App
      </h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-teal-500 p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setPriceRange([parseInt(e.target.value), maxPrice])}
          className="border-2 border-teal-500 p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setPriceRange([minPrice, parseInt(e.target.value)])}
          className="border-2 border-teal-500 p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-teal-500 text-white p-2 rounded-lg ml-2"
        >
          Search
        </button>
      </form>
      {Array.isArray(data)
        ? data.map((product: Product) =>
            fitsSearchParams(
              (product.title || "") + product.description,
              product.price || 0
            ) ? (
              <ProductPane
                product={product}
                key={product.id}
                updateCart={updateCart}
              />
            ) : null
          )
        : null}
    </div>
  );
};

export default Products;
