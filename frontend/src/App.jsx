/* eslint-disable react/jsx-no-constructed-context-values */
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import React, { useState } from "react";
// import LoginMember from "./pages/LoginMember";
// import Users from "./pages/Users";
// import Logout from "./pages/Logout";
// import EspaceMember from "./pages/EspaceMember";
// import UserIdContext from "./components/UserIdContext";
// import Body from "./pages/Body";
// import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import ProjectInfo from "./pages/ProjectInfo";
import AddProject from "./pages/AddProject";
import Home from "./pages/Home";
import ProjectsList from "./components/ProjectsList";

function App() {
  // const [userId, setUserId] = useState("");
  return (
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
