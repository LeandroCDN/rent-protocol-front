import React from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="/"  rel="noopener noreferrer"> DevFuri </a>
        {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a> */}
      </div>
      <div className="useful-links">
        <a href="https://mumbai.polygonscan.com/address/0xD6D59e9f8BEe9919dba3261aE9FaEDFDD6A6764a#writeContract"  rel="noopener noreferrer"> Mint Mock Token </a>
        <a className="aSpace">|</a>
        <a href="https://duckdev.notion.site/Solidity-Documentaci-n-924df1f1536d49028a075e487ebe496b" target="_blank" rel="noopener noreferrer">Documentation</a>
        <a className="aSpace">|</a>
        <a href="https://duckdev.notion.site/King-of-dev-2-0-Team-DevFury-a79221d7f1bc47d0a4c1bae651c57014" target="_blank" rel="noopener noreferrer">Team Members</a>
        <a className="aSpace">|</a>
        <a href="https://duckdev.notion.site/Project-track-Hackaton-workshit-072ffce2ef1d4b3ea20a22f3952fdffb" target="_blank" rel="noopener noreferrer">Project Info</a>
      </div>
    </div>
  );
}

export default Footer;