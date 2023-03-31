import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link className="navbar-link" to="/"> Home </Link>
        <Link className="navbar-link" to="/Registro"> Registro </Link>
        <Link className="navbar-link" to="/Alquilar"> Alquilar </Link>
        <Link className="navbar-link" to="/Cobrar"> Cobrar </Link>
        <Link className="navbar-link" to="/Quejas"> Quejas </Link>
      </div>
      <Button />
    </nav>
  );
}

export default Navbar;
