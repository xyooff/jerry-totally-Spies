/* eslint-disable react/jsx-no-constructed-context-values */
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import ProjectsList from "./components/ProjectsList";
import UserIdContext from "./components/UserIdContext";
import Login from "./pages/Login";
import ProjetInfo from "./pages/ProjectInfo";
import AddProject from "./pages/AddProject";
import Home from "./pages/Home";
import ProjectsList from "./components/ProjectsList";
import AddUser from "./pages/AddUser";

function App() {
  const [userId, setUserId] = useState("");
  return (
    <Router>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/projectinfo" element={<ProjetInfo />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/projectslist" element={<ProjectsList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </UserIdContext.Provider>
    </Router>
  );
}

export default App;
