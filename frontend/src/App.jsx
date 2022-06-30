/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import ProjectInfo from "./pages/ProjectInfo";
import AddProject from "./pages/AddProject";
import Home from "./pages/Home";
import ProjectsList from "./components/ProjectsList";
import "./App.css";

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projectinfo" element={<ProjectInfo />} />
        <Route path="/projectslist" element={<ProjectsList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </Router>
  );
}

export default App;
