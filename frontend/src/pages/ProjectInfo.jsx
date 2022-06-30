// eslint-disable-next-line import/no-unresolved
import Header from "@components/Header";
import orange from "../assets/orange.png";
import "./styles/ProjectInfo.css";

export default function ProjectInfo() {
  return (
    <>
      <Header />
      <div className="col-container">
        <div className="col-gauche">
          <span> Nom entreprise</span>
          <span> Developpeur front-end</span>
          <span> Product Owner </span>
          <span> UX/UI</span>
          <span>JavaScript</span>
          <span>ReactJs</span>
          <span>mySQL</span>
        </div>

        <div className="col-milieu">
          <img className="agence" width="30%" src={orange} alt="orange" />
          <p className="entreprise">i want to DIIIEEE</p>
          <div className="annonce">
            <span>Priorité</span>
            <span>3 personnes</span>
            <span>Ville</span>
            <span>Durée mission</span>
          </div>
          <p>
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

        <div className="col-droite">
          <span>L'équipe</span>
          <span>Nathan </span>
          <span>Lucie</span>
          <button className="join" type="button">
            Join
          </button>
        </div>
      </div>
    </>
  );
}
