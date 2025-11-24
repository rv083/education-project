// src/pages/Advisory_Board.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Advisors from "../components/sections/Advisors";

export default function AdvisoryBoard() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Header />

      <main className="pt-6">
        {/* Page heading */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
            Advisory Board
          </h1>
        </div> */}

        {/* Advisors section — it handles its own inner container */}
        <Advisors />
      </main>

      <Footer />
    </div>
  );
}
