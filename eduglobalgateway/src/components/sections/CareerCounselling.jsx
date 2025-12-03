// src/components/sections/CareerCounselling.jsx
import React from "react";
import careerImg from "../../assets/career.png"; // your local image

export default function CareerCounselling() {
  return (
    <section id="career" className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Text column */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800">Career Counselling</h2>

            <p className="mt-4 text-slate-700 text-base md:text-lg leading-relaxed">
              At EduGlobal Gateway, we believe the foundation of a successful study or career journey begins with
              choosing the right path. Our Career Counselling services help students identify strengths, interests,
              and long-term goals through personalised mentoring.
            </p>

            <p className="mt-4 text-slate-700">
              We offer aptitude assessments, personality mapping, academic profiling, and one-on-one counselling to
              recommend streams, courses, and career options both in India and abroad. Our goal is to remove uncertainty
              and give students clarity and confidence.
            </p>

            <p className="mt-4 text-slate-700">
              Whether a student is unsure about stream selection, college options, or international career prospects,
              our counsellors provide actionable steps and tailored guidance to plan a successful future.
            </p>

            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
            >
              Book a Counselling Session
            </a>
          </div>

          {/* Image column */}
          <div>
            <img
              src={careerImg}
              alt="Career Counselling Illustration"
              className="rounded-xl w-full h-80 object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
