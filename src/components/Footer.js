import React from "react";
import "./Footer.css"


const Footer = () => {
  return (
    <div>
      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-400 text-sm text-center sm:text-left">
              © Rishi Pradhan 2023. All rights reserved.
              <a
                href="https://twitter.com/knyttneve"
                class="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
              <i class="fa-brands fa-github fa-2xl mx-2"></i>
              <i class="fa-brands fa-linkedin fa-2xl mx-2"></i>
              {/* <i class="fa-brands fa-instagram fa-2xl mx-2"></i> */}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
