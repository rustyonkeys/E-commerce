import React, { useState, useRef } from "react";
import { MenuData } from "./MenuData.js";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Prevent dropdown from closing immediately
    }
    setOpenDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(false);
    }, 300); // Add delay before closing
  };

  return (
    <nav className="h-20 w-full flex items-center bg-blue-500 font-semibold text-white p-4 hover:bg-blue-600 z-50 relative">
      <div className="container mx-auto flex justify-between items-center space-x-6">
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
            <li key={index} className="relative flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110 font-semibold">
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="bg-blue text-white-600 px-4 py-2 rounded-lg font-semibold ">
                    {item.title} ⏷
                  </button>
                  {openDropdown && (
                    <div className="absolute left-0 mt-2 w-40 bg-blue-500 text-white shadow-lg rounded-lg">
                      {item.dropdown.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.url} className="block px-4 py-2 hover:bg-blue-400">
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i> {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
