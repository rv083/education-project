// src/pages/services/test-preparation/TOEFL.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function TOEFL() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* ================= Hero Section ================= */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            TOEFL Coaching & Preparation
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Test of English as a Foreign Language (TOEFL) preparation designed
            to help you meet university and visa English language requirements,
            especially for the United States and Canada.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Enquire Now
          </a>
        </section>

        {/* ================= About TOEFL ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            About TOEFL
          </h2>
          <p className="text-slate-700 leading-relaxed">
            TOEFL is a globally recognized English proficiency test that measures
            your ability to use and understand English in an academic environment.
            It is widely accepted by universities and institutions in the United
            States, Canada, and many other countries worldwide.
          </p>
        </section>

        {/* ================= Why TOEFL ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Why Choose TOEFL?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Preferred by US Universities
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                TOEFL is the most widely accepted English test in the United States
                and Canada.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Academic English Focus
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Evaluates English skills required in university-level classrooms.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Internet-Based Test (iBT)
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Fully computer-based exam with integrated task formats.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Reliable & Secure
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Conducted and administered by ETS with strict scoring standards.
              </p>
            </div>
          </div>
        </section>

        {/* ================= Our Approach ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Our TOEFL Preparation Approach
          </h2>

          <ul className="space-y-4 text-slate-700 list-disc list-inside">
            <li>Complete coverage of Reading, Listening, Speaking & Writing</li>
            <li>Focused training on integrated tasks</li>
            <li>Regular practice tests simulating real TOEFL iBT exams</li>
            <li>Expert feedback to improve accuracy and fluency</li>
            <li>Score improvement strategies and time management techniques</li>
          </ul>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-blue-50 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">
            Ready to Prepare for TOEFL?
          </h2>
          <p className="text-slate-600">
            Learn from expert trainers and gain the confidence to achieve your
            target TOEFL score.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Book a Free Consultation
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
}
