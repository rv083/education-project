// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";  // <-- ADD THIS
import AdvisoryBoard from "./pages/Advisory_Board";
import ScrollToTopOrHash from "./ScrollToTopOrHash";
export default function App() {
  return (
    <>
      <ScrollToTopOrHash />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />  {/* NEW ROUTE */}
      <Route path="/Advisory_Board" element={<AdvisoryBoard />} />
    </Routes>
    </>
  );
}
