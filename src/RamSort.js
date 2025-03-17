import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { ramItems } from "./RamData";

const RamSort = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [dateSort, setDateSort] = useState("latest");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  
  const navigate = useNavigate(); 

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => localStorage.setItem("wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const toggleWishlist = (item) => {
    if (wishlist.some((wishItem) => wishItem.id === item.id)) {
      setWishlist(wishlist.filter((wishItem) => wishItem.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const addToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
      alert(`${item.name} has been added to the cart!`);
    }
  };

  let filteredItems = selectedCategory === "All" ? ramItems : ramItems.filter((item) => item.category === selectedCategory);

  if (sortOrder !== "none") {
    filteredItems = [...filteredItems].sort((a, b) =>
      sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
  }

  filteredItems = [...filteredItems].sort((a, b) =>
    dateSort === "latest"
      ? new Date(b.dateListed) - new Date(a.dateListed)
      : new Date(a.dateListed) - new Date(b.dateListed)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap gap-2 justify-between mb-6">
        <select className="p-2 border rounded-md" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="DDR3">DDR3</option>
          <option value="DDR4">DDR4</option>
          <option value="DDR5">DDR5</option>
        </select>

        <select className="p-2 border rounded-md" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="none">Sort by Price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>

        <select className="p-2 border rounded-md" value={dateSort} onChange={(e) => setDateSort(e.target.value)}>
          <option value="none">Sort by Date</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-blue-500 font-bold">${item.price}</p>
            <p className="text-gray-500 text-sm">Listed on: {item.dateListed}</p>

            <button onClick={() => toggleWishlist(item)} className="text-red-500 mt-2">
              {wishlist.some((wishItem) => wishItem.id === item.id) ? "❤️" : "🤍"}
            </button>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => addToCart(item)}
                className="w-1/2 bg-blue-500 text-white py-2 rounded-md transform transition-transform duration-300 hover:scale-110"
              >
                Add to Cart 🛒
              </button>

              <button
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-1/2 bg-green-500 text-white py-2 rounded-md transform transition-transform duration-300 hover:scale-110"
              >
                Product Details 📄
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamSort;
