import { Routes, Route } from "react-router-dom";
import Login from "./Login";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}
