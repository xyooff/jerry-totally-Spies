import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import ProjectInfo from "./ProjectInfo";
import AddProject from "./AddProject";
import Home from "./Home";
import ProjectsList from "../components/ProjectsList";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projectinfo" element={<ProjectInfo />} />
        <Route path="/projectslist" element={<ProjectsList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </div>
  );
}
