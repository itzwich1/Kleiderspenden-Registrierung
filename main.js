import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import UnsereGeschichte from "./pages/UnsereGeschichte";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/UeberUns" element={<UeberUns />} />
          <Route path="/UnsereGeschichte" element={<UnsereGeschichte />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}