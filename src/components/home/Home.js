import Navbar from "../navbar/Navbar";
import Typewriter from "typewriter-effect";
import Products from "../product/Products";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import { useState } from "react";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <div
          className="relative flex flex-col md:flex-row items-center justify-center h-[58
          vh] mt-5 overflow-hidden"
        >
          <div className="flex-1 text-white text-center md:text-left z-10 p-5 md:p-10">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              <Typewriter
                options={{
                  strings: [`"Osam Collection Online Now"`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <Link to="/Products">
              <button className="bg-teal-500 hover:bg-teal-600 py-3 px-8 text-white text-lg font-bold rounded-lg mt-8 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="flex-1 mt-5 md:mt-0">
            <img
              src="/asset/images/bg-1.avif"
              alt="Background"
              className="object-cover w-full h-full rounded-lg transform md:scale-100"
              style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
            />
          </div>
        </div>
        <div className="mt-5">
          <Products />
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
}
