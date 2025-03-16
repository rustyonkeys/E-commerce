import React, { useState } from "react";
import { items } from "./CpuData"; // Import items
import { useNavigate } from "react-router-dom";

const SortFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [dateOrder, setDateOrder] = useState("none");

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  ); // Load cart from localStorage
  const navigate = useNavigate();

  // Filter by category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  // Sort by price
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

   // Sort by date
   if (dateOrder === "latest") {
    sortedItems.sort((a, b) => new Date(b.dateListed) - new Date(a.dateListed));
  } else if (dateOrder === "oldest") {
    sortedItems.sort((a, b) => new Date(a.dateListed) - new Date(b.dateListed));
  }

  // Add to Cart Function
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Filter & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        {/* Category Filter */}
        <select
          className="p-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Intel">Intel</option>
          <option value="AMD">AMD</option>
          <option value="Server Processors">Server Processors</option>
        </select>

        {/* Sort Options */}
        <select
          className="p-2 border rounded-md mt-2 md:mt-0"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        {/* Date Sort Options */}
        <select
          className="p-2 border rounded-md "
          value={dateOrder}
          onChange={(e) => setDateOrder(e.target.value)}
        >
          <option value="none">Sort By Date</option>
          <option value="Lastest">Date: Latest</option>
          <option value="Oldest">Date: Oldest</option>
        </select>
      </div>

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="relative p-4 bg-white shadow-md rounded-lg group"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />

            {/* Wishlist Heart (Top Right) */}
            <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
              ❤️
            </div>

            {/* Add to Cart Button (Appears on Hover) */}
            <button
              onClick={() => addToCart(item)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300"
            >
              Add to Cart
            </button>

            {/* Product Details */}
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-blue-500 font-bold">${item.price}</p>
          </div>
        ))}
      </div>

      {/* View Cart Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/cart")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          View Cart ({cart.length})
        </button>
      </div>
    </div>
  );
};

export default SortFilter;
