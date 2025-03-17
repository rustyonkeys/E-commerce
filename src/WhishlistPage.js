import React, { useState, useEffect } from "react";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Your Wishlist</h2>
      
      {wishlist.length === 0 ? <p>Your wishlist is empty.</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-blue-500 font-bold">${item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
