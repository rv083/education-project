// src/components/sections/PreDepartureBriefing.jsx
import React from "react";
import prepImg from "../../../assets/pre_departure.jpg";

export default function PreDepartureBriefing() {
  return (
    <section id="predeparture" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">Pre-Departure Briefing</h2>

        <p className="mt-4 text-slate-700">
          Our pre-departure briefings prepare students for life abroad — covering travel planning, accommodation,
          local culture, budgeting, healthcare, and essential dos and don’ts.
        </p>

        <p className="mt-4 text-slate-700">
          These practical sessions include checklists, packing tips, mobile & banking setup, and local emergency guidance
          so you feel ready and confident before you leave.
        </p>

        <a href="#contact" className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all">
          Book a Briefing
        </a>
      </div>

      <div>
        <img
          src={prepImg}
          alt="Pre Departure Briefing"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
