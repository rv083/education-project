// src/pages/Services.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// career & corporate
import CareerCounselling from "../components/sections/CareerCounselling";
import CorporateTraining from "../components/sections/CorporateTraining";

// study abroad
import UniversityShortlisting from "../components/sections/services_sections/UniversityShortlisting";
import ApplicationAssistance from "../components/sections/services_sections/ApplicationAssistance";
import DocumentPreparations from "../components/sections/services_sections/DocumentPreparations";
import VisaGuidance from "../components/sections/services_sections/VisaGuidance";
import ScholarshipHelp from "../components/sections/services_sections/ScholarshipHelp";
import PreDepartureBriefing from "../components/sections/services_sections/PreDepartureBriefing";

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-24">

        {/* ================= Services Navigation ================= */}
        <section className="bg-blue-50 rounded-2xl p-6 shadow-sm">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-800 text-center">
            Our Services
          </h1>
          <p className="text-center text-slate-600 mt-2">
            Navigate through our offerings designed to support your global education journey.
          </p>

          <nav className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#study-abroad"
              className="px-6 py-2 rounded-full bg-white border border-blue-200 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Study Abroad
            </a>
            <a
              href="#test-prep"
              className="px-6 py-2 rounded-full bg-white border border-blue-200 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Test Preparation
            </a>
            <a
              href="#career"
              className="px-6 py-2 rounded-full bg-white border border-blue-200 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Career & Corporate
            </a>
          </nav>
        </section>

        {/* ================= Study Abroad Services ================= */}
        <section id="study-abroad" className="space-y-16 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
              Study Abroad Services
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Comprehensive guidance covering every step of your international education journey.
            </p>
          </div>

          <UniversityShortlisting />
          <ApplicationAssistance />
          <DocumentPreparations />
          <VisaGuidance />
          <ScholarshipHelp />
          <PreDepartureBriefing />
        </section>

        {/* ================= Test Preparation ================= */}
        <section id="test-prep" className="space-y-16 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
              Test Preparation
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Structured coaching programs and expert guidance to help you excel in
              international entrance examinations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* IELTS */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-800">IELTS</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Complete preparation for Listening, Reading, Writing, and Speaking
                with mock tests and expert evaluation.
              </p>
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                Explore IELTS →
              </button>
            </div>

            {/* TOEFL */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-800">TOEFL</h3>
              <p className="mt-2 text-slate-600 text-sm">
                TOEFL iBT coaching focused on academic English skills and real
                exam simulations.
              </p>
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                Explore TOEFL →
              </button>
            </div>

            {/* PTE */}
            <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold text-blue-800">PTE Academic</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Computer-based training designed for speed, accuracy, and
                high-score strategies.
              </p>
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                Explore PTE →
              </button>
            </div>
          </div>
        </section>

        {/* ================= Career & Corporate ================= */}
        <section id="career" className="space-y-16 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
              Career & Corporate Services
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Career-focused counselling and professional training for long-term success.
            </p>
          </div>

          <CareerCounselling />
          <CorporateTraining />
        </section>

      </main>

      <Footer />
    </div>
  );
}
