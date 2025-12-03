// src/components/sections/ScholarshipHelp.jsx
import React from "react";
// import scholarshipImg from "../../assets/scholarship-help.jpg";

export default function ScholarshipHelp() {
  return (
    <section id="scholarship-help"  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">Scholarship Help</h2>

        <p className="mt-4 text-slate-700">
          We identify funding opportunities and match scholarships to your profile. Our support includes application
          timelines, essay review, and document preparation to maximize your chances of securing financial aid.
        </p>

        <p className="mt-4 text-slate-700">
          From merit-based awards to country-specific grants, we guide you through eligibility, deadlines, and submission best practices.
        </p>

        <a href="#contact" className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all">
          Find Scholarships
        </a>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60"
          alt="Scholarship Help"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
