import React from "react";

const items = [
  { name: "CPU", img: "https://plus.unsplash.com/premium_photo-1681426698212-53e47fec9a2c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3B1fGVufDB8fDB8fHww" },
  { name: "GPU", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPJev4XsXjbv2iABHJDTYWk7DQF79gl7qzg&s" },
  { name: "RAM", img: "https://www.shutterstock.com/shutterstock/photos/1892887324/display_1500/stock-photo-computer-memory-ram-on-motherboard-background-close-up-system-main-memory-random-access-memory-1892887324.jpg" },
  { name: "SSD", img: "https://static.vecteezy.com/system/resources/previews/039/642/039/non_2x/ssd-disk-drive-placed-on-wooden-surface-high-speed-ssd-ssd-sata-port-photo.jpg" },
  { name: "Motherboard", img: "https://5.imimg.com/data5/RO/CT/MY-21956046/computer-motherboard.jpg" },
  { name: "PSU", img: "https://cdn.mos.cms.futurecdn.net/hNcMBdLW7wrypXrRTKHemN-1200-80.jpg" },
  { name: "Cooler", img: "https://thumbs.dreamstime.com/b/row-computer-fans-lit-up-blue-background-row-computer-fans-lit-up-blue-background-fans-orange-337901870.jpg" },
];

const renderButtons = () => {
  return items.map((item, index) => (
    <button key={index} className=" rounded-full hover:scale-110 cursor-pointer flex flex-col items-center justify-center">
      <img
        src={item.img}
        alt={item.name}
        className="w-64 h-64 bg-gray-200 rounded-full hover:underline p-6"
      />
      <span className="mt-2 text-black font-semibold">{item.name}</span>
    </button>
  ));
};

const Bottomhomepage = () => {
  return (
    <div>
      <p className="font-bold text-3xl ml-[24px] mt-[50px]">
        Explore Product Categories
      </p>
      <div className="flex flex-wrap justify-center gap-6 py-12 px-[21px]">
        {renderButtons()}
      </div>
    </div>
  );
};

export default Bottomhomepage;





