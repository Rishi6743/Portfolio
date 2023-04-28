import React from "react";

const Portfolio = () => {
  const openClickbuzz = () => {
    window.open("https://clickbuzz.netlify.app/", "_blank");
  };
  const openFilmBoxx = () => {
    window.open("https://filmboxx.netlify.app/", "_blank");
  };

  return (
    <div>
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                My Projects
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <h2 class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Check out my projects below to see my skills and experience as a
              frontend web developer.
            </h2>
          </div>
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src="../image/Clickbuzz.png"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    Project 1
                  </h2>
                  <h1 class="text-white text-3xl title-font font-medium mb-4">
                    ClickBuzz
                  </h1>

                  <p class="leading-relaxed">
                    ClickBuzz is a visually stunning portfolio website for a
                    photographer, built using React.js, Bootstrap.
                    <br /> <br />
                    <a target="_blank" href="https://github.com/Rishi6743/ClickBuzz.git">
                      <i class="fa-brands fa-github fa-flip fa-2xl"></i>
                    </a>{" "}
                  </p>

                  <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900"></span>
                    <button
                      onClick={openClickbuzz}
                      class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-red hover:bg-red-600  hover:text-white-600 rounded"
                    >
                      Live{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src="../image/movie.png"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    Project 2
                  </h2>
                  <h1 class="text-white text-3xl title-font font-medium mb-4">
                    FilmBoxx
                  </h1>

                  <p class="leading-relaxed">
                    FilmBoxx is a movie website that provides users with access
                    to various movies and TV shows. Lanugage used HTML CSS
                    JAVACRIPT
                    <br /> <br />
                    <a href="https://github.com/Rishi6743/Movie-app.git">
                      <i class="fa-brands fa-github fa-flip fa-2xl"></i>
                    </a>{" "}
                  </p>

                  <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  <div class="flex">
                    <span class="title-font font-medium text-2xl text-gray-900"></span>
                    <button
                      onClick={openFilmBoxx}
                      class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-red hover:bg-red-600  hover:text-white-600 rounded"
                    >
                      Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
