import React, { useState } from "react";

const SellerPage = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([null, null, null]); // Three image upload slots

  const handleImageChange = (index, event) => {
    const newImages = [...images];
    newImages[index] = event.target.files[0];
    setImages(newImages);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = {
      productName,
      price,
      currency,
      description,
      images
    };
    console.log("Product Submitted:", productData);
    alert("Product listed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Seller Dashboard Heading */}
      <h1 className="text-4xl font-bold text-center mb-2">Seller Dashboard</h1>
      <p className="text-lg text-center mb-6">⭐ Seller Rating: 4.5/5</p>

      {/* Product Upload Form */}
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Sell Your Products</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div>
            <label className="block font-medium">Product Name:</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded" 
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          {/* Price and Currency Selection */}
          <div className="flex gap-4">
            <div className="w-2/3">
              <label className="block font-medium">Price:</label>
              <input 
                type="number" 
                className="w-full p-2 border rounded" 
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>

            <div className="w-1/3">
              <label className="block font-medium">Currency:</label>
              <select 
                className="w-full p-2 border rounded"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="USD">$ (USD)</option>
                <option value="INR">₹ (INR)</option>
              </select>
            </div>
          </div>

          {/* Upload Images (Now in Column) */}
          <div>
            <label className="block font-medium">Upload Images (Max: 3):</label>
            <div className="flex flex-col gap-4">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-start">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => handleImageChange(index, e)} 
                    className="border p-2 rounded w-full"
                  />
                  {image && (
                    <img 
                      src={URL.createObjectURL(image)} 
                      alt={`Preview ${index + 1}`} 
                      className="mt-2 w-32 h-32 object-cover rounded-lg border"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Description */}
          <div>
            <label className="block font-medium">Product Description:</label>
            <textarea
              className="w-full p-2 border rounded resize-none"
              placeholder="Write about the product..."
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
