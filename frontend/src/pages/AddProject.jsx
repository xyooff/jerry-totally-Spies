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
  const [company, setCompany] = useState("");
  const [arrayTechno, setArrayTechno] = useState("");

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
          tech: arrayTechno,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        console.warn(err.response.data.error);
      });
    console.log(
      `${title}/${description}/${priorite}/${company}/${deadline}/${datePublish}/${avancement}/${arrayTechno}`
    );
  };
  const handleSelectCompany = (e) => setCompany(e.target.value);
  const handleSelectTechno = (e) => {
    if (e.target.checked) {
      setArrayTechno(`${e.target.value} ; ${arrayTechno}`);
    }
  };
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
        <h2>techno</h2>
        <div>
          <label htmlFor="checkbox">
            react
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="1"
            />
          </label>
          <label htmlFor="checkbox">
            node.js
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="2"
            />
          </label>
          <label htmlFor="checkbox">
            ruby
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="3"
            />
          </label>
          <label htmlFor="checkbox">
            php
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="4"
            />
          </label>
          <label htmlFor="checkbox">
            vue.js
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="5"
            />
          </label>
          <label htmlFor="checkbox">
            angular
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="6"
            />
          </label>
          <label htmlFor="checkbox">
            docker
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="7"
            />
          </label>
          <label htmlFor="checkbox">
            sql
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="8"
            />
          </label>
        </div>
        <div>
          <label htmlFor="checkbox">
            mangodb
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="9"
            />
          </label>
          <label htmlFor="checkbox">
            mysql
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="10"
            />
          </label>
          <label htmlFor="checkbox">
            python
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="11"
            />
          </label>
          <label htmlFor="checkbox">
            java
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="12"
            />
          </label>
          <label htmlFor="checkbox">
            javascript
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="13"
            />
          </label>
          <label htmlFor="checkbox">
            C#
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="14"
            />
          </label>
          <label htmlFor="checkbox">
            C ++
            <input
              onChange={(e) => handleSelectTechno(e)}
              type="checkbox"
              value="15"
            />
          </label>
        </div>
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
