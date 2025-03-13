import React, { useState } from "react";
import { items } from "./itemsData"; // Import items

const SortFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

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
          <option value="CPU">CPU</option>
          <option value="GPU">GPU</option>
          <option value="Motherboard">Motherboard</option>
          <option value="RAM">RAM</option>
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
      </div>

      {/* Items List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow-md rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.category}</p>
            <p className="text-blue-500 font-bold">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortFilter;
