import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ProjetInfo from "./ProjetInfo";
import AddProject from "./AddProject";
import Home from "./Home";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projet" element={<ProjetInfo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </div>
  );
}
