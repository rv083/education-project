// src/pages/services/test-preparation/PTE.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function PTE() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* ================= Hero Section ================= */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            PTE Academic Coaching & Preparation
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Pearson Test of English (PTE) Academic preparation designed to help
            you achieve fast results through computer-based testing and
            AI-driven scoring.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Enquire Now
          </a>
        </section>

        {/* ================= About PTE Academic ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            About PTE Academic
          </h2>
          <p className="text-slate-700 leading-relaxed">
            PTE Academic is a fully computer-based English language proficiency
            test accepted by thousands of universities and governments worldwide.
            It evaluates your speaking, writing, reading, and listening skills
            through real-life academic scenarios using automated scoring.
          </p>
        </section>

        {/* ================= Why PTE Academic ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Why Choose PTE Academic?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Fast Results
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Results are typically available within 48 hours, making PTE one
                of the fastest English proficiency tests.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Fully Computer-Based
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                No human examiner—fair and unbiased AI-based evaluation.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Widely Accepted
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Accepted by universities and immigration authorities in
                Australia, UK, Canada, and more.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800">
                Flexible Test Dates
              </h3>
              <p className="text-slate-700 mt-2 text-sm">
                Frequent test availability with flexible scheduling options.
              </p>
            </div>
          </div>
        </section>

        {/* ================= Our Approach ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Our PTE Preparation Approach
          </h2>

          <ul className="space-y-4 text-slate-700 list-disc list-inside">
            <li>In-depth training for Speaking, Writing, Reading & Listening</li>
            <li>Focused strategies for AI scoring algorithms</li>
            <li>Regular full-length mock tests with score analysis</li>
            <li>Time management and accuracy improvement techniques</li>
            <li>Expert trainers with proven PTE success rates</li>
          </ul>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-blue-50 rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-blue-800">
            Ready to Ace PTE Academic?
          </h2>
          <p className="text-slate-600">
            Prepare smartly with expert guidance and proven strategies to
            achieve your target PTE score.
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
