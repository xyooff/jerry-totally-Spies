import React, { useState } from "react";
import "./styles/AddProject.css";
import axios from "axios";
import swal from "sweetalert";

function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [priorite, setPriorite] = useState("");
  const [deadline, setDeadline] = useState("");
  const [avancement, setAvancement] = useState("");
  const [datePublish, setDatePublish] = useState("");
  const [techno, setTechno] = useState("");
  const [company, setCompany] = useState("");

  const date = new Date();

  const handleClick = (e) => {
    setDatePublish(
      `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    );
    e.preventDefault();
    swal("hello");
    axios
      .post(
        `VITE_BACKEND_URL=http://localhost:5002/project`,
        {
          title,
          description,
          priorite,
          company,
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
    swal(
      `${title}/${description}/${priorite}/${deadline}/${datePublish}/${avancement}/${techno}`
    );
  };
  const handlechange = (e) => setTechno(e);
  const handleSelectCompany = (e) => setCompany(e.target.value);
  return (
    <form className="form-addProject">
      <div className="form-addProject-firstParty">
        <label className="form-addProject-label" htmlFor="text">
          LOGO ENTREPRISE
          <select className="from-input" onChange={handleSelectCompany}>
            <option value="1">generali</option>
            <option value="2">ina</option>
            <option value="3">orange</option>
            <option value="4">peugeot</option>
            <option value="5">renault</option>
            <option value="6">sanofi</option>
            <option value="7">sncf</option>
            <option value="8">societe general</option>
            <option value="9">thales</option>
            <option value="10">valeo</option>
            <option value="11">airbus</option>
            <option value="12">airfrance</option>
            <option value="13">arianeGroup</option>
            <option value="14">barclays</option>
            <option value="15">bnp paribas</option>
            <option value="16">continantal</option>
            <option value="17">credit mutuel</option>
            <option value="18">harmoni mutuel</option>
            <option value="19">mgen</option>
            <option value="20">groupe bpce</option>
          </select>
        </label>
        <label className="form-addProject-label" htmlFor="text">
          AGENCE
          <input
            className="from-input"
            type="text"
            value={city}
            name="city"
            placeholder="nantes"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="text">
          NOM
          <input
            className="from-input"
            type="text"
            value={title}
            name="title"
            placehorder={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="text">
          TECHNO
          <select
            className="from-input"
            multiple="multiple"
            onChange={() => handlechange()}
          >
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
            className="from-input"
            type="text"
            value={priorite}
            name="priority"
            placehorder="hight"
            onChange={(e) => setPriorite(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="date">
          DEADLINE
          <input
            className="from-input"
            type="date"
            value={deadline}
            name="date"
            placehorder="28/05/2022"
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="number">
          AVANCEMENT
          <input
            className="from-input"
            type="number"
            value={avancement}
            name="advance"
            placehorder=""
            onChange={(e) => setAvancement(e.target.value)}
          />
        </label>
        <label className="form-addProject-label" htmlFor="text">
          Description
          <textarea
            className="from-input-text"
            type="text-area"
            value={description}
            name="advance"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button
          id="from-button"
          className="from-input"
          type="submit"
          onClick={handleClick}
        >
          Add project
        </button>
      </div>
    </form>
  );
}

export default AddProject;
