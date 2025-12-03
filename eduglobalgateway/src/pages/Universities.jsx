// src/pages/Universities.jsx

import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Import Universities section
import UniversitiesSection from "../components/sections/Univ";

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-900">
      <Header />

      <main className="pt-14 pb-14 relative overflow-hidden">
        {/* Page heading */}
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
            Partner Institutions
          </h1>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our global academic collaborations.
          </p>
        </div>

        {/* Content container */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Universities Section (keeps its own internal layout) */}
          <UniversitiesSection />
        </div>

        {/* Decorative floating blobs (same style as other pages) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </main>

      <Footer />
    </div>
  );
}
