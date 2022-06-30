/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import axios from "axios";
import { useEffect, useState } from "react";
import User from "@components/User";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [agenceId, setAgenceId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/users`,
        {
          firstname: name,
          lastname: surname,
          email: mail,
          agenceId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .then(() => {
        swal("Ajout de membre effectué").then(() => window.location.reload());
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/admin/users`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          swal("Merci de vous authentifier").then(() =>
            navigate("/loginMember")
          );
        }
        if (err.response.status === 403) {
          swal("You're not authorized").then(() => navigate("/loginMember"));
        }
        console.error(err);
      });
  }, []);
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
          <div style={{ display: "flex" }}>
            <input type="submit" value="Créer membre" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Users;
