import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {

  const handleDownload = () => {
    const url = `${process.env.PUBLIC_URL}/cv/RishiPradhanResume.pdf`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hii, I'm Rishi Pradhan.{" "}
            </h1>
            <br className="hidden lg:inline-block" />
            <h3></h3>
            <p className="mb-8 leading-relaxed">
              As a proficient practitioner of{" "}
              <span className="skill">
                HTML, CSS, JavaScript, React.js, Bootstrap, and Git Github
              </span>{" "}
              I'm eager to contribute to cutting-edge projects and be part of a
              dynamic team.
            </p>
            <div className="flex justify-center items-center	">
              <button onClick={handleDownload} className="inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg bg-white text-black">
              Download CV
              </button>
         <Link to="/cv">     <button className="m-2 inline-flex bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg bg-white text-black">
         View My CV
              </button></Link>
              <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">
                <a href="https://github.com/Rishi6743" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github fa-2xl mx-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/rishipradhan/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin fa-2xl mx-2"></i>
                </a>
                {/* <i className="fa-brands fa-instagram fa-2xl mx-2"></i> */}
              </span>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
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
