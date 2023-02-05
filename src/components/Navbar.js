import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link class="flex title-font font-medium items-center text-white mb-4 md:mb-0" to={"/"}>
            
            <span class="ml-3 text-xl">Rishi Pradhan</span>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-white">Home</Link>
            <Link to="/about" class="mr-5 hover:text-white">About</Link>
            <Link to="/portfolio" class="mr-5 hover:text-white">Portfolio</Link>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <Link to="/contact">Contact me</Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
