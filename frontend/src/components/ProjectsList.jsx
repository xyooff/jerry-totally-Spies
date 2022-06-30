import "./ProjectsList.css";
import tabItems from "../data";

function ProjectsList() {
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
