import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Romain Gaudel</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              A-Propos
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projets
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Accueil
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/romain-gaudel-526a44a5/"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/boxtoboxyt"
            className="home__social-icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Romain Gaudel. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
