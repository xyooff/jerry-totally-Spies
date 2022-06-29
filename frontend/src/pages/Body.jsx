import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  );
}
