import "../css/Footer.css";
import resume from "../images/resume.pdf";

const Footer = () => {
  return (
    <div id="footer">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/aribfarooqui/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
          <span className="tooltip">LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/AribFarooqui"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square fa-2x"></i>
          <span className="tooltip">Twitter</span>
        </a>
        <a href="https://github.com/aribbabar" target="_blank" rel="noreferrer">
          <i className="fab fa-github-square fa-2x"></i>
          <span className="tooltip">GitHub</span>
        </a>
        <a href={resume} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-square-envelope fa-2x"></i>
          <span className="tooltip">Resume</span>
        </a>
      </div>
      <p>© All rights reserved | Arib Farooqui</p>
      <a href="#home">
        <i className="up fas fa-arrow-up fa-2x"></i>
      </a>
    </div>
  );
};

export default Footer;
