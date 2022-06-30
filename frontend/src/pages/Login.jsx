// import React, { useState } from "react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Login.css";
import user from "../assets/user.png";
import logo from "../assets/logo.png";

export default function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <img className="logo-img" src={logo} alt="user" />
      <img className="user-img" src={user} alt="user" />
      <form className="form-login">
        <input
          className="inputPseudo"
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="supertomate27"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          className="inputLogPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NavLink to="/Home">
          <button className="loginButton" type="submit">
            Sign In
          </button>
        </NavLink>
      </form>
    </div>
  );
}
