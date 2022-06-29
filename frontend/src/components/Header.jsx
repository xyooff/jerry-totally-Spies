import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import add from "../assets/add.png";
import profil from "../assets/profil.png";
import search from "../assets/search.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img width="25%" src={logo} alt="logo" />
      </div>
      <div className="picto">
        <img src={add} alt="add" />
        <img src={profil} alt="profil" />
        <img src={search} alt="search" />
      </div>
    </header>
  );
}

export default Header;
