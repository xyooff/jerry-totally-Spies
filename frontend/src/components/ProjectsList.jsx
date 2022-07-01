import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProjectsList.css";
import axios from "axios";
import Header from "./Header";
import ProgressBar from "./ProgressBar";

const testData = [{ bgcolor1: "#6a1b9a" }];

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
    <>
      <Header />
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
                <tr className="all-tables">
                  <td>{item.logo}</td>
                  <td>{item.city}</td>
                  <Link to="/projectinfo">
                    {" "}
                    <td>{item.title}</td>{" "}
                  </Link>
                  <td>{item.tech}</td>
                  <td>
                    {" "}
                    <img className="pictureTable" src={item.url} alt="" />
                  </td>
                  <td>{item.priorite}</td>
                  <td>{item.deadline}</td>
                  <td>{item.datePublish}</td>
                  <td>
                    {testData.map((el) => (
                      <ProgressBar
                        bgcolor={el.bgcolor1}
                        completed={item.avancement}
                      />
                    ))}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default ProjectsList;
