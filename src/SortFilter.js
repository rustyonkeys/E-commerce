import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { items } from "./itemsData";

const SortFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [dateSort, setDateSort] = useState("latest"); 
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // PayPal Client ID (Use Sandbox ID)
  const paypalClientId = "AWwamXd4MtNhCJqyJVzuxX-X07-e13fBRvTdZ2ADoH4-De8ynvzuUyJy-OqRTJ52AIi04_uS6FHC65Yw";

  // Function to handle PayPal payment
  const handleBuyNow = (item) => {
    setSelectedItem(item);
  };

  return (
    <PayPalScriptProvider options={{ "client-id": paypalClientId }}>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Filter & Sort Section */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          {/* Category Filter */}
          <select className="p-2 border rounded-md" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All Categories</option>
            <option value="CPU">CPU</option>
            <option value="GPU">GPU</option>
            <option value="Motherboard">Motherboard</option>
            <option value="RAM">RAM</option>
          </select>

          {/* Sort by Price */}
          <select className="p-2 border rounded-md" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="none">Sort by Price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>

          {/* Sort by Date */}
          <select className="p-2 border rounded-md" value={dateSort} onChange={(e) => setDateSort(e.target.value)}>
            <option value="latest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Items List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-blue-500 font-bold">${item.price}</p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => handleBuyNow(item)}>
                  💰 Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PayPal Checkout Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">Checkout for {selectedItem.name}</h2>
              <p>Price: ${selectedItem.price}</p>

              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{ amount: { value: selectedItem.price.toString() } }],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`);
                    setSelectedItem(null); // Close modal
                  });
                }}
                onCancel={() => {
                  alert("Payment cancelled.");
                  setSelectedItem(null); // Close modal
                }}
              />

              <button onClick={() => setSelectedItem(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
};

export default SortFilter;
