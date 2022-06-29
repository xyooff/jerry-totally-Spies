// import React, { useState } from "react";
// import "./styles/Login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="form-login" onSubmit="handleSubmit">
        <input
          className="inputPseudo"
          type="text"
          name="pseudo"
          id="pseudo"
          placeholder="supertomate27"
          value="pseudo"
          //   onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          className="inputLogPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value="password"
        />

        <button className="loginbutton" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
}
