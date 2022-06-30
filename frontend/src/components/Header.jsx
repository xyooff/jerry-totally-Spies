import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import add from "../assets/add.png";
import profil from "../assets/profil.png";
import search from "../assets/search.png";

function Header() {
  return (
    <header>
      <Link className="logo" to="/home">
        <img width="25%" src={logo} alt="logo" />
      </Link>
      <div className="picto">
        <Link to="/add-project">
          <img src={add} alt="add" />
        </Link>
        <img src={profil} alt="profil" />
        <img src={search} alt="search" />
      </div>
    </header>
  );
}

export default Header;
