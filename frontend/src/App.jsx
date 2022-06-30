/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/Login";
import ProjectInfo from "./pages/ProjectInfo";
import AddProject from "./pages/AddProject";
import Home from "./pages/Home";
import ProjectsList from "./components/ProjectsList.tsx";
import UserIdContext from "./components/UserIdContext";
import "./App.css";
import AddUser from "./pages/AddUser";

function App() {
  const [userId, setUserId] = useState("");
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Router>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/projectinfo" element={<ProjectInfo />} />
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
