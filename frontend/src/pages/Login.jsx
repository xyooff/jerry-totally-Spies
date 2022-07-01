// import React, { useState } from "react";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.css";
import axios from "axios";
import swal from "sweetalert";
import user from "../assets/user.png";
import logo from "../assets/logo.png";
import UserIdContext from "../components/UserIdContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUserId } = useContext(UserIdContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios
        .post(
          `http://localhost:5000/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => setUserId(res.data.id))
        .then(() => {
          navigate("/ProjectsList");
        })
        .catch((err) => {
          swal(err.response.data.error);
        });
    } else {
      swal("Please specify both email and password");
    }
  };

  function addUser() {
    navigate("/adduser");
  }

  return (
    <div className="login">
      <img className="logo-img" src={logo} alt="user" />
      <img className="user-img" src={user} alt="user" />
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="inputPseudo"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="inputLogPassword"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className="loginButton" type="submit" value="CONNEXION" />
      </form>
      <button
        className="registerButton"
        type="button"
        onClick={() => addUser()}
      >
        S'enregistrer
      </button>
    </div>
  );
}
