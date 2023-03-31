import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link className="navbar-link" to="/"> Home </Link>
        <Link className="navbar-link" to="/Faucet"> Faucet </Link>
        <Link className="navbar-link" to="/Sorteo"> Sorteo </Link>
      </div>
      <Button />
    </nav>
  );
}

export default Navbar;
