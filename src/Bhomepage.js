import React from "react";
import { items } from "./ItemsPage.js"; // Import items from ItemsPage.js

const Bhomepage = () => {
  return (
    <div>
      <p className="font-bold text-3xl ml-[24px] mt-[50px]">
        Explore Product Categories
      </p>
      <div className="flex flex-wrap justify-center gap-6 py-12 px-[21px]">
        {items.map((item, index) => (
          <a
            href={item.url}
            key={index}
            className="rounded-full hover:scale-110 cursor-pointer flex flex-col items-center justify-center transition transform duration-300"
          >
            {/* Item Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-64 h-64 bg-gray-200 rounded-full p-6 shadow-lg"
            />

            {/* Item Title */}
            <span className="mt-2 text-black font-semibold">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bhomepage;