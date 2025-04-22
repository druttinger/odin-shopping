import { useOutletContext, useParams } from "react-router-dom";

// Define the type for a product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const Profile = () => {
  const { id } = useParams<{ id: string }>(); // id is a string from the URL params
  const data: Product[] = useOutletContext<Product[]>(); // Expecting an array of Product objects

  // Find the product by id
  const product = data.find((item) => item.id === parseInt(id || "", 10));

  // Handle the case where the product is not found
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="bg-blue-200 p-5 font-black text-lg text-teal-700 rounded-2xl">
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <div key={product.id} className="bg-teal-500 p-5 m-5 rounded-2xl">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-lg">Price: ${product.price}</p>
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default Profile;
