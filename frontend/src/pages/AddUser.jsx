/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [agence, setAgence] = useState("");
  const [mdp, setMdp] = useState("");
  const [verifMdp, setVerifMdp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mdp === verifMdp) {
      axios
        .post(
          `http://localhost:5000/users`,
          {
            firstname: name,
            lastname: surname,
            email: mail,
            password: mdp,
            agence_id: agence,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => res.data)
        .then(() => {
          swal("Ajout de membre effectué").then(() => navigate("/"));
        })
        .catch((err) => {
          console.warn(err);
        });
    } else {
      swal(`le mot de pass n'est pas égal`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "20%" }}
      >
        <label htmlFor="text">
          <input
            type="text"
            placeholder="prénom"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label htmlFor="text">
          <input
            type="text"
            placeholder="nom"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </label>
        <label htmlFor="text">
          <input
            type="text"
            placeholder="email"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
        </label>
        <select onChange={(e) => setAgence(e.target.value)} name="agence">
          <option value="">Agence :</option>
          <option value="1">Nantes</option>
          <option value="2">Strasbourg</option>
          <option value="3">Lille</option>
          <option value="4">Lyon</option>
        </select>
        <label htmlFor="text">
          <input
            type="password"
            placeholder="password"
            value={mdp}
            onChange={(e) => {
              setMdp(e.target.value);
            }}
          />
        </label>
        <label htmlFor="text">
          <input
            type="password"
            placeholder="password"
            value={verifMdp}
            onChange={(e) => {
              setVerifMdp(e.target.value);
            }}
          />
        </label>
        <div style={{ display: "flex" }}>
          <input type="submit" value="Créer membre" />
        </div>
      </form>
    </div>
  );
}

export default Users;
