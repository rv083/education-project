// src/components/sections/ApplicationAssistance.jsx
import React from "react";
// import appImg from "../../assets/application-assistance.jpg";

export default function ApplicationAssistance() {
  return (
    <section id="application-assistance" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">Application Assistance</h2>

        <p className="mt-4 text-slate-700">
          Eduglobal Gateway guides students through every step of the application process — organizing documents,
          filling forms, and crafting compelling Statements of Purpose (SOPs) and essays. Our team reviews and
          polishes applications to ensure accuracy and alignment with university expectations.
        </p>

        <p className="mt-4 text-slate-700">
          We provide timeline planning, checklist reminders, and one-on-one support so applications are submitted on time
          and stand out to admissions committees.
        </p>

        <a href="#contact" className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all">
          Get Application Help
        </a>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60"
          alt="Application Assistance"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
