import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    profilePicture: "https://via.placeholder.com/150",
    username: "JohnDoe",
    password: "password123",
    email: "johndoe@example.com",
    address: "123 Main St, City, Country",
    phone: "123-456-7890",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
      </div>

      {/* Profile Details */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block font-semibold">Username:</label>
          {isEditing ? (
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{user.username}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Email Address:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Address:</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{user.address}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Phone No:</label>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>
      </div>

      {/* Edit Button */}
      <button
        onClick={handleEditToggle}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>

      {/* Order Section */}
      <div className="mt-6 space-y-4">
        <button
          onClick={() => navigate("/wishlist")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-bluee-600"
        >
          Wishlist
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Products in Cart
        </button>

        <button
          onClick={() => navigate("/orders")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Past Orders
        </button>

        <button
          onClick={() => navigate("/Premium")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Want Premium?
        </button>
      </div>
    </div>
  );
};

export default BuyerProfile;
