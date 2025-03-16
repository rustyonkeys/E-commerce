import React, { useState, useEffect } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow-md rounded-lg relative">
              {/* Remove Button */}
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-md cursor-pointer"
                onClick={() => removeFromWishlist(item.id)}
              >
                ❌
              </button>

              {/* Product Image */}
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />

              {/* Product Details */}
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-blue-500 font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
