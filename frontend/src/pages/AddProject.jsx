import React, { useState } from "react";
import "./styles/AddProject.css";
import axios from "axios";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priorite, setPriorite] = useState("");
  const [deadline, setDeadline] = useState("");
  const [avancement, setAvancement] = useState("");
  const [datePublish, setDatePublish] = useState("");
  const [techno, setTechno] = useState("");

  const date = new Date();

  const handleClick = (e) => {
    setDatePublish(
      `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    );
    e.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/project`,
        {
          title,
          description,
          priorite,
          deadline,
          datePublish,
          avancement,
          techno,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        console.warn(err.response.data.error);
      });
  };
  const handlechange = (e) => setTechno(e.target.value);
  return (
    <form className="form-addProject">
      <div className="form-addProject-firstParty">
        <label className="form-addProject-label" htmlFor="text">
          LOGO ENTREPRISE
          <select>
            <option>generali</option>
            <option>ina</option>
            <option>orange</option>
            <option>peugeot</option>
            <option>renault</option>
            <option>sanofi</option>
            <option>sncf</option>
            <option>societe general</option>
            <option>thales</option>
            <option>valeo</option>
            <option>airbus</option>
            <option>airfrance</option>
            <option>arianeGroup</option>
            <option>barclays</option>
            <option>bnp paribas</option>
            <option>continantal</option>
            <option>credit mutuel</option>
            <option>harmoni mutuel</option>
            <option>mgen</option>
            <option>groupe bpce</option>
          </select>
        </label>
        <label className="form-addProject-label" htmlFor="city">
          AGENCE
          <input
            type="text"
            value=""
            name="city"
            placehorder="nantes"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="text">
          NOM
          <input
            type="text"
            value={title}
            name="title"
            placehorder="tesla"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="text">
          TECHNO
          <select multiple onChange={() => handlechange()}>
            <option value="1">react</option>
            <option value="2">node.js</option>
            <option value="3">ruby</option>
            <option value="4">php</option>
            <option value="5">vue.js</option>
            <option value="6">angular</option>
            <option value="7">docker</option>
            <option value="8">sql</option>
            <option value="9">mangodb</option>
            <option value="10">mysql</option>
            <option value="11">python</option>
            <option value="12">java</option>
            <option value="13">javascript</option>
            <option value="14">C#</option>
            <option value="15">C ++</option>
          </select>
        </label>
      </div>
      <div className="form-addProject-SecondParty">
        <label className="form-addProject-label" htmlFor="text">
          PRIORITE
          <input
            type="text"
            value="priority"
            name={priorite}
            placehorder="hight"
            onChange={(e) => setPriorite(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="date">
          DEADLINE
          <input
            type="date"
            value={deadline}
            name="date"
            placehorder="28/05/2022"
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="date">
          DATE DE PUBLICATION
          <input type="date" value="" name="DatePublish" placehorder="" />
        </label>
        <label className="form-addProject-label" htmlFor="number">
          AVANCEMENT
          <input
            type="number"
            value={avancement}
            name="advance"
            placehorder=""
            onChange={(e) => setAvancement(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" onClick={handleClick}>
        Add project
      </button>
    </form>
  );
}

export default AddProject;
