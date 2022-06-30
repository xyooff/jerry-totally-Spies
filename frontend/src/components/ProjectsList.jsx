import React, { useState, useEffect } from "react";
import "./ProjectsList.css";
import axios from "axios";
import ProgressBar from "./ProgressBar";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/project/users")
      .then((res) => res.data)
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="list-page">
      <table className="bloc-table">
        <thead>
          <tr>
            <th>LOGO ENTREPRISE</th>
            <th>AGENCE</th>
            <th>NOM</th>
            <th>TECHNO</th>
            <th>PRIORITE</th>
            <th>DEADLINE</th>
            <th>DATE DE PUBLICATION</th>
            <th>AVANCEMENT</th>
          </tr>
        </thead>
        {projects.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.logo}</td>
                <td>{item.city}</td>
                <td>{item.title}</td>
                <td>{item.tech}</td>
                <td>{item.priorite}</td>
                <td>{item.deadline}</td>
                <td>{item.datePublish}</td>
                <td>
                  <ProgressBar
                    bgcolor={item.bgcolor}
                    completed={item.avancement}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ProjectsList;
