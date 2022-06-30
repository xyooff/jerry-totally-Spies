/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useState } from "react";
import User from "@components/User";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [agence, setAgence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:5000/users`,
        {
          firstname: name,
          lastname: surname,
          email: mail,
          agenceId: agence,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then(() => {
        swal("Ajout de membre effectué").then(() => navigate("/ProjectsList"));
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <>
      <p>Users List</p>
      <div style={{ display: "flex" }}>
        {users.map((user) => (
          <User
            key={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            email={user.email}
            phoneNumber={user.phoneNumber}
            address={user.address}
            postalCode={user.postalCode}
            city={user.city}
            id={user.id}
          />
        ))}
      </div>
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
          <label htmlFor="text">
            <input
              type="text"
              placeholder="agence"
              value={agence}
              onChange={(e) => {
                setAgence(e.target.value);
              }}
            />
          </label>
          <div style={{ display: "flex" }}>
            <input type="submit" value="Créer membre" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Users;
