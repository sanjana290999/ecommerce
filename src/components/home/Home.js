import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Typewriter from "typewriter-effect";
import Products from "../product/Products";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

export default function HomePage() {
  const images = [
    "/asset/images/bg-5.avif",
    "/asset/images/bg-6.avif",
    "/asset/images/bg-3.avif",
    "/asset/images/bg-4.avif",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="relative flex flex-col md:flex-row items-center justify-center h-[58vh] overflow-hidden p-5">
            <div className="w-full md:w-2/6 text-center md:text-left z-10 p-5 md:p-10">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                <Typewriter
                  options={{
                    strings: [`"Awesome Collection Online Now"`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <Link to="/products">
                <button className="bg-teal-500 hover:bg-teal-600 py-3 px-8 text-white text-lg font-bold rounded-lg mt-8 transition duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="w-full md:w-4/6 mt-5 md:mt-0 relative h-full">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Background"
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)",
                  }}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}
