// src/components/sections/TestPreparation.jsx
import React from "react";
import ieltsImg from "../../../assets/ielts_img.jpg"
import toeflImg from "../../../assets/toefl_img.jpg"
import pteImg from "../../../assets/pte_img.jpg"
import satImg from "../../../assets/sat_img.jpg"

export default function TestPreparation() {
  return (
    <section id="test-prep" className="space-y-16">
      {/* Main Heading */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold text-blue-800">Test Preparation</h2>
        <p className="mt-4 text-slate-700 text-lg leading-relaxed">
          Eduglobal Gateway offers structured guidance, expert teachers, 
          and reliable study materials for international exams including 
          IELTS, TOEFL, PTE, GRE, SAT & GMAT.  
          With personalized study plans and regular progress analysis, 
          we ensure every student feels confident and fully prepared for test day.
        </p>
      </div>

      {/* ---------------- EXAM SECTIONS BELOW ---------------- */}

      {/* IELTS */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl font-semibold text-blue-700">IELTS</h3>
          <p className="mt-2 text-sm font-medium text-slate-800">
            International English Language Testing System
          </p>

          <p className="mt-4 text-slate-700">
            <span className="font-bold">Why IELTS?</span>  
            A globally accepted test for study and immigration in the UK, Australia, Canada & New Zealand.
          </p>

          <p className="mt-4 text-slate-700">
            <span className="font-bold">Our Coaching:</span>  
            Covers Listening, Reading, Writing & Speaking with mock tests, feedback, 
            and proven band-score improvement strategies.
          </p>
        </div>

        <img
          src="https://globalstudyoptions.in/wp-content/uploads/2025/07/IELTS.jpg"
          alt="IELTS"
          className="rounded-xl w-full h-72 object-cover shadow-md"
        />
      </div> */}

      {/* TOEFL */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-blue-700">About IELTS</h3>
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
            src={ieltsImg}
            alt="IELTS"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>

        {/* TOEFL */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-blue-700">About TOEFL</h3>
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
            src={toeflImg}
            alt="TOEFL"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>

        {/* PTE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-blue-700">About PTE</h3>
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
            src={pteImg}
            alt="PTE"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>

        {/* SAT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-blue-700">About SAT</h3>
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
            src={satImg}
            alt="SAT"
            className="rounded-xl w-full h-80 object-cover shadow-md"
          />
        </section>
    </section>
  );
}
