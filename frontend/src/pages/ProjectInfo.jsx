// eslint-disable-next-line import/no-unresolved
import Header from "@components/Header";
import orange from "../assets/orange.png";
import map from "../assets/map.png";
import personne from "../assets/personne.png";
import time from "../assets/time.png";
import "./styles/ProjectInfo.css";

export default function ProjectInfo() {
  return (
    <>
      <Header />
      <div className="col-container">
        <div className="col-gauche">
          <span className="entreprise">L'entreprise:</span>
          <span>Orange</span>
          <span className="demande">Les postes:</span>
          <span> Developpeur front-end</span>
          <span> Product Owner </span>
          <span> UX/UI</span>
          <span className="language">Language:</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
          <span>mySQL</span>
          <span className="equipe">L'équipe</span>
          <span>Nathan </span>
          <span>Lucie</span>
          <button className="join" type="button">
            Join
          </button>
        </div>

        <div className="col-milieu">
          <img className="agence" width="30%" src={orange} alt="orange" />
          <hr />
          <div className="annonce">
            <span>High </span>
            <span>
              <img className="personne" src={personne} alt="personne" />3
              personnes
            </span>
            <span>
              <img className="map" src={map} alt="map" />
              Angers
            </span>
            <span>
              <img className="time" src={time} alt="time" />4 mois
            </span>
          </div>
          <p className="descriptif">Descriptif du poste</p>
          <p className="info">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        </div>
        <div className="col-droite" />
      </div>
    </>
  );
}
