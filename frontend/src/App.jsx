/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginMember from "./pages/LoginMember";
// import Users from "./pages/Users";
// import Logout from "./pages/Logout";
// import EspaceMember from "./pages/EspaceMember";
import UserIdContext from "./components/UserIdContext";
import Body from "./pages/Body";
import "./App.css";

function App() {
  const [userId, setUserId] = useState("");
  return (
    <>
      <Body />
      <Router>
        <div className="app">
          <nav>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
                fontSize: "30px",
              }}
            >
              <li>
                <Link to="/loginMember">Membre</Link>
              </li>
              <li>
                <Link to="/loginAdmin">Admin </Link>
              </li>
              <li>
                <Link to="/logout">Disconnect</Link>
              </li>
            </ul>
          </nav>
          <UserIdContext.Provider value={{ userId, setUserId }}>
            <Routes>
              <Route path="/loginMember" element={<LoginMember />} />
              {/* <Route path="/espacemember" element={<EspaceMember />} /> */}
            </Routes>
          </UserIdContext.Provider>
        </div>
      </Router>
    </>
  );
}
export default App;
