// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";  // <-- ADD THIS
import AdvisoryBoard from "./pages/Advisory_Board";
import ScrollToTopOrHash from "./ScrollToTopOrHash";
import UniversitiesPage from "./pages/Universities";
import CountriesIndex from "./pages/countries/index";
import America from "./pages/countries/america";
import Belgium from "./pages/countries/Belgium";
import Denmark from "./pages/countries/Denmark";
import Australia from "./pages/countries/Australia";
import Canada from "./pages/countries/Canada";
export default function App() {
  return (
    <>
      <ScrollToTopOrHash />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />  {/* NEW ROUTE */}
      <Route path="/advisory-board" element={<AdvisoryBoard />} />
      <Route path="/universities" element={<UniversitiesPage />} />
      <Route path="/countries" element={<CountriesIndex />} />
      <Route path="/country/America" element={<America />} />
      <Route path="/country/Canada" element={<Canada />} />
      <Route path="/country/Belgium" element={<Belgium />} />
      <Route path="/country/Denmark" element={<Denmark />} />
      <Route path="/country/Australia" element={<Australia />} />
    </Routes>
    </>
  );
}
