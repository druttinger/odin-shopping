import ProductPane from "./ProductPane";
import { Link, useOutletContext, useLocation } from "react-router-dom";
import { Product } from "./ProductPane";
import { useEffect, useState } from "react";

interface OutletContext {
  data: Product[];
  updateCart: (product: Product) => void;
}

const Home = () => {
  const location = useLocation();
  const [featured, setFeatured] = useState(0);
  const { data, updateCart } = useOutletContext<OutletContext>();

  useEffect(() => {
    setFeatured(Math.floor(Math.random() * data.length));
  }, [location, data.length]);

  return (
    <div>
      <h1 className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl">
        Featured Product
      </h1>
      {Array.isArray(data) ? (
        <ProductPane product={data[featured]} updateCart={updateCart} />
      ) : null}
      <Link
        to="/products"
        className="bg-teal-500 text-white p-2 rounded-lg mt-4 inline-block"
      >
        See other great products!
      </Link>
    </div>
  );
};

export default Home;
