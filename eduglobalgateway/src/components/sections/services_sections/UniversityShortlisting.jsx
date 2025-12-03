// src/components/sections/UniversityShortlisting.jsx
import React from "react";
// import uniImg from "../../assets/university-shortlist.jpg";

export default function UniversityShortlisting() {
  return (
    <section id="university-shortlisting" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">University Shortlisting</h2>

        <p className="mt-4 text-slate-700">
          <span className="font-bold">Study Abroad:</span> Eduglobal Gateway helps students streamline the study-abroad
          university shortlisting process by analyzing academic profile, preferred countries, career goals, and budget.
          We provide insights into global rankings, program strengths, admission requirements, and scholarship
          opportunities — delivering personalized recommendations so you can choose universities that fit your aspirations.
        </p>

        <p className="mt-4 text-slate-700">
          <span className="font-bold">Domestic Admissions:</span> For domestic admissions, we evaluate entrance exam
          scores, academic records, and interests to suggest the best-fit institutions. Our comparisons cover course
          offerings, campus facilities, placement records, and fees — helping you pick the right university at home.
        </p>

        <a href="#contact" className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all">
          Enquire Now
        </a>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1559757175-570a7b3d8f6f?auto=format&fit=crop&w=1200&q=60"
          alt="University Shortlisting"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
