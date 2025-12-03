// src/components/sections/VisaGuidance.jsx
import React from "react";
// import visaImg from "../../assets/visa-guidance.jpg";

export default function VisaGuidance() {
  return (
    <section id="visa-guidance" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">Visa Guidance</h2>

        <p className="mt-4 text-slate-700">
          Our visa guidance service helps you navigate complex, country-specific visa application processes. We provide
          step-by-step checklists, document gathering assistance, and mock interview sessions to build confidence for consulate interviews.
        </p>

        <p className="mt-4 text-slate-700">
          We keep track of changing rules and timelines to help you submit strong, timely visa applications and reduce delays.
        </p>

        <a href="#contact" className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all">
          Learn About Visa Help
        </a>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=60"
          alt="Visa Guidance"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
