import { useParams, useNavigate } from "react-router-dom";
import { items } from "./CpuData";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Extracts the product ID from the URL
  const navigate = useNavigate();

  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        ❌ Product not found! <br />
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 bg-gray-300 p-2 rounded-lg hover:bg-gray-400"
      >
        <FaArrowLeft size={28} />
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        <p className="text-lg">💰 Price: <span className="text-blue-500">${product.price}</span></p>
        <p className="text-lg">📆 Listed on: {product.dateListed}</p>
        <p className="text-lg">📍 Seller Location: {product.location || "Not Available"}</p>
        <p className="text-lg">⭐ Seller Rating: {product.sellerRating || "4.5/5"}</p>
        <p className="text-lg">📝 Description: {product.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
