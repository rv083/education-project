// src/pages/Universities.jsx

import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Import Universities section
import UniversitiesSection from "../components/sections/Univ";

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="pt-6 pb-12">
        {/* Page heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h1 className="text-4xl font-extrabold text-center text-slate-900">
            Partner Universities
          </h1>
          <p className="mt-2 text-center text-slate-600">
            Explore our global academic collaborations.
          </p>
        </div>

        {/* Universities Section */}
        <UniversitiesSection />
      </main>

      <Footer />
    </div>
  );
}
