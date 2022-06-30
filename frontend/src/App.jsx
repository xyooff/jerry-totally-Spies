/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import UserIdContext from "./components/UserIdContext";
import Login from "./pages/Login";
import ProjetInfo from "./pages/ProjetInfo";
import AddProject from "./pages/AddProject";
import Home from "./pages/Home";
import ProjectsList from "./components/ProjectsList";

function App() {
  const [userId, setUserId] = useState("");
  return (
    <Router>
      <UserIdContext.Provider value={{ userId, setUserId }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/projectinfo" element={<ProjetInfo />} />
          <Route path="/projectslist" element={<ProjectsList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-project" element={<AddProject />} />
        </Routes>
      </UserIdContext.Provider>
    </Router>
  );
}
export default App;
