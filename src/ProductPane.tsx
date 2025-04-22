import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

function ProductPane({ product }: { product: Product }) {
  return (
    <div key={product.id} className="bg-teal-500 p-5 m-5 rounded-2xl">
      <Link to={"/products/" + product.id} className="text-2xl font-bold">
        {product.title}
      </Link>
      <p className="text-lg">{product.description}</p>
      <p className="text-lg">Price: ${product.price}</p>
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-cover"
      />
    </div>
  );
}

export default ProductPane;
