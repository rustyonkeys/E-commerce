import React, { useState } from "react";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`flex ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-64"}`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">My Website</h1>
          <FaTimes className="cursor-pointer text-2xl" onClick={toggleSidebar} />
        </div>

        {/* Menu Items */}
        <ul className="space-y-4">
          {MenuData.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
              <i className={item.icon}></i>
              <Link to={item.url} className="text-lg">{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          className="mt-6 w-full bg-gray-600 p-2 rounded-lg flex items-center justify-center space-x-2"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>

      {/* Sidebar Toggle Button */}
      <div className="p-4">
        <FaBars className="text-3xl cursor-pointer" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
