// src/components/sections/DocumentPreparations.jsx
import React from "react";
// import docsImg from "../../assets/document-prep.jpg";

export default function DocumentPreparations() {
  return (
    <section id="document-preparations" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold text-blue-800">Document Preparations</h2>

        <p className="mt-4 text-slate-700">
          We make document preparation smooth and stress-free. Our experts guide you on transcripts, recommendation letters,
          CVs/resumes, and SOP formats specific to each university. Avoid common mistakes with our checklist and get
          personalized feedback to present a professional application.
        </p>

        <p className="mt-4 text-slate-700">
          We also offer document verification tips and formatting help so everything meets the receiving university's standards.
        </p>

        <a href="#contact" className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all">
          Prepare Documents
        </a>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1526318472351-c75fcf070ee5?auto=format&fit=crop&w=1200&q=60"
          alt="Document Preparation"
          className="rounded-xl w-full h-80 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
