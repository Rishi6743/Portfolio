import React from "react";
import "./Cv.css";

function Cv() {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1 className="cv-name">Rishi Pradhan</h1>
        <p className="cv-title">Frontend Developer</p>
        <div className="cv-contact">
          <a
            href="https://github.com/RishiPradhan"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/RishiPradhan
          </a>
          <a
            href="mailto:rishi.p18@outlook.com"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            rishi.p18@outlook.com
          </a>
          <a
            href="https://www.linkedin.com/in/rishipradhan/"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/RishiPradhan
          </a>
          <a
            href="tel:+916290663234"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91-6290663234
          </a>
        </div>
      </div>
      <div className="cv-main">
        <h2 className="cv-section-heading">Objective</h2>
        <p className="cv-objective">
          To obtain a frontend developer position that utilizes my skills and
          experience in creating responsive and user-friendly web applications
          using HTML, CSS, JavaScript, React.js, and Bootstrap.
        </p>
        <h2 className="cv-section-heading">Skills</h2>
        <ul className="cv-skills">
          <li>Html, CSS and JavaScript</li>
          <li>React.Js with Redux</li>
          <li>Bootstrap, Tailwind CSS</li>
        </ul>
        <h2 className="cv-section-heading">Personal Projects</h2>
        <div className="cv-project">
          <h3 className="cv-project-heading">Portfolio Website:</h3>
          <p className="cv-project-description">
            Developed and designed my portfolio website using React and Tailwind
            CSS.
          </p>
          <p className="cv-project-language">
            <strong>Language:</strong> React, Tailwind CSS
          </p>
          <a
            href="https://rishipradhan.netlify.app/"
            className="cv-project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://rishipradhan.netlify.app/
          </a>
        </div>
        <div className="cv-project">
          <h3 className="cv-project-heading">ClickBuzz:</h3>
          <p className="cv-project-description">
            Developed and designed a website for a professional photographer to
            showcase their work and services.
          </p>
          <p className="cv-project-language">
            <strong>Language:</strong> React, Tailwind CSS
          </p>
          <a
            href="https://clickbuzz.netlify.app/"
            className="cv-project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://clickbuzz.netlify.app/
          </a>
        </div>
        <h2 className="cv-section-heading">Education</h2>
        <div className="cv-education">
          <h3>B.Tech in Electrical Engineering</h3>
          <p>
            Maulana Abul Kalam Azad University of Technology, West Bengal
            (2015-2019)
          </p>
        </div>
        <h2 className="cv-section-heading">Experience</h2>
        <div className="cv-experience">
          <h3 className="cv-experience-heading">
            JBS Enterprises Private Limited
          </h3>
          <p className="cv-experience-title">
            Shift In-charge, JBS Enterprises Private Limited
          </p>
          <p className="cv-experience-date">2019-2021</p>
          <ul className="cv-experience-list">
            <li>
              Assisted in the operation and maintenance of a 133kv Grid
              substation, managing high-pressure situations and ensuring safety
              and compliance as part of a team.
            </li>
          </ul>
        </div>
        <div className="cv-experience">
          <p className="cv-experience-title">
            Customer Support Associate, Teleperformance
          </p>
          <p className="cv-experience-date">2021-Present</p>
          <ul className="cv-experience-list">
            <li>
              Provide exceptional customer service to clients via phone and
              email. Assist customers with inquiries, troubleshooting, and
              problem resolution in a timely and professional manner.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cv;
