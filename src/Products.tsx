import { useOutletContext, useSearchParams } from "react-router-dom";
import ProductPane from "./ProductPane";
import { Product } from "./ProductPane";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, updateCart } = useOutletContext<{
    data: Product[];
    updateCart: (product: Product) => void;
  }>();

  const fitsSearchParams = (str: string, price: number) => {
    const minPrice = parseInt(searchParams.get("min") || "0");
    const maxPrice = parseInt(searchParams.get("max") || "0");
    return (
      str
        .toLowerCase()
        .includes((searchParams.get("name") || "").toLowerCase()) &&
      price >= minPrice &&
      (!maxPrice || price <= maxPrice)
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
          value={searchParams.get("name") || ""}
          onChange={(e) =>
            setSearchParams({
              ...Object.fromEntries(searchParams),
              name: e.target.value,
            })
          }
          className="border-2 border-teal-500 p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Min Price"
          value={searchParams.get("min") || ""}
          onChange={(e) =>
            setSearchParams({
              ...Object.fromEntries(searchParams),
              min: e.target.value,
            })
          }
          className="border-2 border-teal-500 p-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={searchParams.get("max") || ""}
          onChange={(e) =>
            setSearchParams({
              ...Object.fromEntries(searchParams),
              max: e.target.value,
            })
          }
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
