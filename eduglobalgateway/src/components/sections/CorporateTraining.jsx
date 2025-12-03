// src/components/sections/CorporateTraining.jsx
import React from "react";
import corporateImg from "../../assets/corporate-training.avif";

export default function CorporateTraining() {
  return (
    <section id="corporate" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Text column */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800">Corporate Training</h2>

            <p className="mt-4 text-slate-700 text-base md:text-lg leading-relaxed">
              Our Corporate Training vertical helps organizations build a skilled, confident and future-ready workforce.
              We design practical, industry-relevant courses that improve performance, productivity and leadership skills.
            </p>

            <p className="mt-4 text-slate-700">
              Programs are available for communication & interpersonal skills, leadership & team development, project &
              time management, workplace professionalism, and technology-driven upskilling. Each module is delivered by
              experienced trainers with real-world experience.
            </p>

            <p className="mt-4 text-slate-700">
              Training sessions are flexible and tailored to business goals — suitable for upskilling existing teams or
              onboarding new employees with measurable outcomes.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
            >
              Contact for Corporate Training
            </a>
          </div>

          {/* Image column */}
          <div>
            <img
              src={corporateImg}
              alt="Corporate Training Illustration"
              className="rounded-xl w-full h-80 object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
