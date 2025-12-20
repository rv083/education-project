// src/pages/services/test-preparation/IELTS.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function IELTS() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* ================= Hero Section ================= */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            IELTS Coaching & Preparation
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            International English Language Testing System (IELTS) preparation
            designed to help you achieve your desired band score for study,
            work, and migration abroad.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Enquire Now
          </a>
        </section>

        {/* ================= About IELTS ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            About IELTS
          </h2>
          <p className="text-slate-700 leading-relaxed">
            IELTS is one of the world’s most trusted English proficiency tests,
            accepted by universities, employers, and immigration authorities
            in countries like the UK, Canada, Australia, New Zealand, and more.
            The test assesses your ability to listen, read, write, and speak
            in English in real-life academic and professional situations.
          </p>
        </section>

        {/* ================= Why IELTS ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Why Choose IELTS?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Globally Accepted
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Recognized by over 11,000 institutions worldwide for admissions
                and visa purposes.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Accurate Skill Assessment
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Tests all four language skills using real-world scenarios.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Multiple Test Formats
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Available as IELTS Academic and IELTS General Training.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Fast Results
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Computer-based IELTS results are typically available within days.
              </p>
            </div>
          </div>
        </section>

        {/* ================= Our Approach ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Our IELTS Preparation Approach
          </h2>

          <ul className="space-y-4 text-slate-700 list-disc list-inside">
            <li>In-depth training for Listening, Reading, Writing & Speaking</li>
            <li>Personalized feedback and one-on-one speaking sessions</li>
            <li>Regular mock tests aligned with the latest IELTS pattern</li>
            <li>Time management strategies and band improvement techniques</li>
            <li>Experienced faculty with proven success records</li>
          </ul>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-blue-50 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">
            Ready to Start Your IELTS Journey?
          </h2>
          <p className="text-slate-600">
            Get expert guidance, structured practice, and the confidence to
            achieve your target band score.
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
