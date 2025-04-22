import ProductPane from "./ProductPane";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const data = useOutletContext();
  return (
    <div>
      <h1 className="bg-blue-200 p-5 font-black text-3xl text-teal-700 rounded-2xl">
        Featured Product
      </h1>
      {Array.isArray(data) ? (
        <ProductPane product={data[Math.floor(Math.random() * data.length)]} />
      ) : null}
    </div>
  );
};

export default Home;
