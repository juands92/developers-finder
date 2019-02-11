import React from "react";
import logo from "../../utils/img/Keytree_logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          width="270"
          height="100"
          className="d-inline-block align-top"
          alt=""
        />
      </Link>
    </nav>
  );
}
