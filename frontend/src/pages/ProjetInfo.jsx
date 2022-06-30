// eslint-disable-next-line import/no-unresolved
import Header from "@components/Header";
import orange from "../assets/orange.png";
import "./ProjetInfo.css";

export default function ProjetInfo() {
  return (
    <div>
      <Header />
      <div className="agence">
        <img width="20%" src={orange} alt="orange" />
      </div>
      <p className="entreprise">i want to DIIIEEE</p>
    </div>
  );
}
