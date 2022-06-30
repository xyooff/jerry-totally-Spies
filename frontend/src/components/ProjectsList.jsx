import React from "react";
import "./ProjectsList.css";

function ProjectsList() {
  const tabItems = [
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "high",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "low",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "medium",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "high",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "high",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "high",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
    {
      logo: "img",
      agence: "NANTES",
      name: "AIRBUS",
      tech: "logo tech",
      priority: "high",
      deadline: "10/10/2022",
      date: "01/07/2022",
      state: "60%",
    },
  ];

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
        {tabItems.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.logo}</td>
                <td>{item.agence}</td>
                <td>{item.name}</td>
                <td>{item.tech}</td>
                <td>{item.priority}</td>
                <td>{item.deadline}</td>
                <td>{item.date}</td>
                <td>{item.state}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ProjectsList;
