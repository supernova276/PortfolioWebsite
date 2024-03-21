import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Akshita</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/ecstatic_sans_ecstasy/"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/akshita-dixit-04b075190/"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="mailto:akshita.dixit2706@gmail.com"
            className="footer__social-icon"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="bx bxl-gmail"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; AkshitaDixit. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
