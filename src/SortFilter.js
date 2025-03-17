import React, { useState, useEffect } from "react";
import { items } from "./itemsData";

const SortFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [dateSort, setDateSort] = useState("latest"); 
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  // Sort by Date
  const finalSortedItems = [...sortedItems].sort((a, b) => {
    if (dateSort === "latest") return new Date(b.dateListed) - new Date(a.dateListed);
    if (dateSort === "oldest") return new Date(a.dateListed) - new Date(b.dateListed);
    return 0;
  });

  // Add to Cart (Prevent duplicates)
  const handleAddToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
      alert(`${item.name} has been added to the cart! 🛒`);
    } else {
      alert(`${item.name} is already in the cart!`);
    }
  };

  // Buy Now Action
  const handleBuyNow = (item) => {
    console.log(`Redirecting to checkout for ${item.name}`);
  };

  // Toggle Wishlist
  const toggleWishlist = (item) => {
    if (wishlist.some((wishItem) => wishItem.id === item.id)) {
      setWishlist(wishlist.filter((wishItem) => wishItem.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Filter & Sort Section */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        {/* Category Filter */}
        <select
          className="p-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="Motherboard">Motherboard</option>
          <option value="RAM">RAM</option>
        </select>

        {/* Sort by Price */}
        <select
          className="p-2 border rounded-md"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>

        {/* Sort by Date */}
        <select
          className="p-2 border rounded-md"
          value={dateSort}
          onChange={(e) => setDateSort(e.target.value)}
        >
          <option value="latest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {finalSortedItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-blue-500 font-bold">${item.price}</p>
            <p className="text-gray-500 text-sm">Listed on: {item.dateListed}</p>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(item)}
              className={`mt-2 text-lg ${
                wishlist.some((w) => w.id === item.id) ? "text-red-500" : "text-gray-400"
              }`}
            >
              {wishlist.some((w) => w.id === item.id) ? "❤️" : "🤍"}
            </button>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600"
                onClick={() => handleAddToCart(item)}
              >
                🛒 Add to Cart
              </button>

              <button
                className="flex-1 flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-green-600"
                onClick={() => handleBuyNow(item)}
              >
                💰 Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortFilter;
