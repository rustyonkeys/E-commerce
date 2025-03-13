import React, { useState } from "react";
import { MenuData } from "./MenuData";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="h-28 w-full flex items-center bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-600">
      <div className="container mx-auto flex justify-center items-center space-x-10">
        {/* Website Name */}
        <h1 className="text-3xl font-bold">My Website</h1>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Type to search..."
            className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-2 text-gray-600 hover:text-gray-800">
            🔍
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className="flex space-x-7 text-xl">
          {MenuData.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110"
            >
              <i className={item.icon}></i>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
