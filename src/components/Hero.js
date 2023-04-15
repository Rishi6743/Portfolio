import React from "react";

const Hero = () => {
  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hii, I'm Rishi Pradhan.{" "}
            </h1>
            <br class="hidden lg:inline-block" />
            <h3></h3>
            <p class="mb-8 leading-relaxed">
              As a proficient practitioner of{" "}
              <span className="skill">
                HTML, CSS, JavaScript, React.js, Bootstrap, and Git Github
              </span>{" "}
              I'm eager to contribute to cutting-edge projects and be part of a
              dynamic team.
            </p>
            <div class="flex justify-center items-center	">
              <button class="inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg bg-white text-black">
                Resume
              </button>
              <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
                <a href="https://github.com/Rishi6743" target="_blank">
                  <i class="fa-brands fa-github fa-2xl mx-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/rishipradhan/" target="_blank">
                  <i class="fa-brands fa-linkedin fa-2xl mx-2"></i>
                </a>
                {/* <i class="fa-brands fa-instagram fa-2xl mx-2"></i> */}
              </span>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="../image/hero.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
