import React from "react";
import Slider from "react-slick";
import ShoppingMan from "./ShoppingMan.jpg";
import "./Slider.css";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <section className="homeSlider px-6 py-6">
      <div className="container-fluid position-relative">
        <Slider {...settings} className="home_slider_Main">
          <div className="relative bg-purple-300 h-[600px] flex justify-center items-center">
            <p className="font-bold px-[200px] py-[80px] text-5xl text-purple-700">
              SHOP CONFIDENTLY WITH <br />
              OLX MONEY BACK POLICY
            </p>

            <p className="info font-bold text-xl text-purple-600">
              Signup to get extra benefits
            </p>

            <div className="register hover:scale-110">
              <input type="text" placeholder="Your email address..." />
              <button className="bg-g">Register</button>
            </div>

            <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white font-bold px-2 py-2 rounded-lg transfrom transition-transform duration-300 hover:scale-110">
              Shop Now
            </button>
          </div>

          <div className="relative bg-[#e1bee7] h-[600px] flex justify-center items-center">
            <div className="flex w-full justify-center items-center">
              <div className="w-1/2 flex justify-center">
                <p className="font-bold px-[100px] py-[80px] text-6xl text-purple-700 leading-[5rem]">
                  "Sell Smart. <br />
                  <span className="block mt-4"></span> Shop Smarter. Save More!"<br />
                </p>
              </div>

              {/* Image */}
              <div className="w-1/2 flex justify-center py-[50px] ">
                <img
                  src={ShoppingMan}
                  alt="Shopping Man"
                  className="max-w-[350px] h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <button className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white font-bold px-2 py-2 rounded-lg transfrom transition-transform duration-300 hover:scale-110">
              Shop Now
            </button>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;