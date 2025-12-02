// src/pages/Services.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Add your images in src/assets and import them here:
// import ieltsImg from "../assets/ielts.jpg";
// import toeflImg from "../assets/toefl.jpg";
// import pteImg from "../assets/pte.jpg";
// import satImg from "../assets/sat.jpg";

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-20">

        {/* IELTS SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">About IELTS</h2>
            <p className="mt-2 text-lg font-semibold text-slate-800">
              International English Language Testing System
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Why IELTS?</span> A globally recognized test of English proficiency,
              essential for admission and visas in the UK, Australia, Canada, and New Zealand.
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Our Approach:</span> We offer targeted coaching for all four modules—Listening,
              Reading, Writing, and Speaking. Our faculty provides personalized feedback, regular mock tests,
              and proven strategies to help you achieve your desired band score.
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
            >
              Enquire Now
            </a>
          </div>

          <img
            src="https://globalstudyoptions.in/wp-content/uploads/2025/07/IELTS.jpg"
            alt="IELTS"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>

        {/* TOEFL SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">About TOEFL</h2>
            <p className="mt-2 text-lg font-semibold text-slate-800">
              Test of English as a Foreign Language
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Why TOEFL?</span> Widely accepted by universities in the United States and Canada,
              the TOEFL iBT tests your ability to use and understand English at the university level.
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Our Approach:</span> Our program focuses on building core skills for each
              section of the test. With access to the latest study materials and simulated test environments,
              you’ll be fully prepared for test day.
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
            >
              Enquire Now
            </a>
          </div>

          <img
            src="https://globalstudyoptions.in/wp-content/uploads/2025/07/TOEFL.jpg"
            alt="TOEFL"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>

        {/* PTE SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">About PTE</h2>
            <p className="mt-2 text-lg font-semibold text-slate-800">
              Pearson Test of English (PTE) Academic
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Why PTE?</span> A fast, computer-based English test accepted by thousands of
              institutions worldwide, particularly popular for Australia.
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Our Approach:</span> Our trainers focus on the specific techniques needed to
              excel in this AI-scored test—from mastering “repeat sentence” to acing the “summarize written text”
              questions.
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
            >
              Enquire Now
            </a>
          </div>

          <img
            src="https://globalstudyoptions.in/wp-content/uploads/2025/07/PTE.jpg"
            alt="PTE"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>

        {/* SAT SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-800">About SAT</h2>
            <p className="mt-2 text-lg font-semibold text-slate-800">
              Scholastic Assessment Test
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Why SAT?</span> A critical component for undergraduate admissions in the
              United States, the SAT assesses your readiness for college-level work.
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-bold">Our Approach:</span> We provide comprehensive coaching for both the
              Evidence-Based Reading and Writing sections as well as the Math section. Our curriculum builds both
              foundational knowledge and advanced problem-solving skills.
            </p>

            <a
              href="#contact"
              className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
            >
              Enquire Now
            </a>
          </div>

          <img
            src="https://globalstudyoptions.in/wp-content/uploads/2025/07/SAT.jpg"
            alt="SAT"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
