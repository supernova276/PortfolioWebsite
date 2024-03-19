import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/akshita-dixit-04b075190/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin"></i>
      </a>
      <a
        href="https://github.com/supernova276"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://leetcode.com/supernova2706/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bx-code-alt"></i>
      </a>
    </div>
  );
};

export default Social;
