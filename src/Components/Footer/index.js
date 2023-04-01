import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <div className="useful-links">
        <a href="https://www.example.com/documentation" target="_blank" rel="noopener noreferrer">Documentation</a>
        <a href="https://www.example.com/contact" target="_blank" rel="noopener noreferrer">Contact</a>
        <a href="https://www.example.com/about" target="_blank" rel="noopener noreferrer">About</a>
      </div>
    </div>
  );
}

export default Footer;