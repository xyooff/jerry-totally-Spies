/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import ProjectInfo from "./pages/ProjectInfo";
import ProfilUser from "./pages/ProfilUser";
import AddProject from "./pages/AddProject";
import Home from "./pages/Home";
import ProjectsList from "./components/ProjectsList.tsx";
import UserIdContext from "./components/UserIdContext";
import Datacontext from "./components/Datacontext";
import "./App.css";
import AddUser from "./pages/AddUser";

function App() {
  const [userId, setUserId] = useState("");
  const [projects, setProjects] = useState([]);
  return (
    <Router>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <Datacontext.Provider value={{ projects, setProjects }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/projectinfo" element={<ProjectInfo />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/projectslist" element={<ProjectsList />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/profilUser" element={<ProfilUser />} />
          </Routes>
        </Datacontext.Provider>
      </UserIdContext.Provider>
    </Router>
  );
}

export default App;
