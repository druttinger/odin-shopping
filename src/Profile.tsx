import { useOutletContext, useParams, Link } from "react-router-dom";
import ProductPane from "./ProductPane";
import { Product } from "./ProductPane";

const Profile = () => {
  const { id } = useParams<{ id: string }>(); // id is a string from the URL params
  const { data, updateCart } = useOutletContext<{
    data: Product[];
    updateCart: (product: Product) => void;
  }>(); // Expecting an array of Product objects

  // Find the product by id
  const product = data.find((item) => item.id === parseInt(id || "", 10));

  // Handle the case where the product is not found
  if (!product) {
    return (
      <>
        <h1>Product not found</h1>
        <Link to="..">
          <span className="hover:text-red-600">
            You can go back to the closest know page by clicking here, though!
          </span>
        </Link>
      </>
    );
  }

  return (
    <div className="bg-blue-200 p-5 font-black text-lg text-teal-700 rounded-2xl">
      <h1>Hello from profile page!</h1>
      <ProductPane product={product} updateCart={updateCart} />
      <Link to="/products">See other products</Link>
    </div>
  );
};

export default Profile;
