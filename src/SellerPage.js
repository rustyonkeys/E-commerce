import React from "react";

const SellerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Seller Dashboard</h1>
      
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Sell Your Products</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Product Name:</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Enter product name" />
          </div>

          <div>
            <label className="block font-medium">Price:</label>
            <input type="number" className="w-full p-2 border rounded" placeholder="Enter price" />
          </div>

          <div>
            <label className="block font-medium">Upload Image:</label>
            <input type="file" className="w-full p-2 border rounded hover:cursor-pointer" />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
