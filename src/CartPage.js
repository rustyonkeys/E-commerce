import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-blue-500 font-bold">${item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
