// src/pages/countries/Denmark.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Leave images empty for now
const heroDenmark = "";
const universitiesDenmark = "";

export default function Denmark() {
  const data = {
    name: "The Denmark",
    heading: "Study in Denmark: Where Innovation Meets Quality Living",

    description:
      "Denmark, a picturesque Scandinavian country, is known for its progressive society, safe cities, and cutting-edge universities. Consistently ranked among the world’s happiest nations, Denmark offers an unmatched fusion of high living standards, sustainability, and education. Its location at the heart of Europe provides easy access to major European cities, making it an attractive choice for Indian and international students alike.",

    heroImage: heroDenmark,

    // International Student Culture
    welcomingHub: {
      title: "International Student Culture: The Indian Perspective",
      points: [
        "Multicultural Campuses: Nearly half of all students in Denmark’s top universities are international, ensuring a rich exchange of cultures. English is widely spoken, and most academic programs—especially at the master’s level—are offered in English, minimizing language barriers.",
        "Supportive, Friendly Environment: Danish society is open, informal, and inclusive, with a community spirit that helps students integrate quickly. Cultural events, clubs, and Indian student societies make it easy to make friends and celebrate festivals like Diwali and Holi.",
        "Work & Life Balance: Denmark is renowned for its healthy work-life balance and safe, egalitarian society—values that are reflected on campus and supported by modern amenities and public services.",
      ],
    },

    // Why Choose Denmark
    whyChoose: [
      {
        title: "Globally Ranked Universities",
        desc: "Five Danish universities consistently appear in the QS World Top 500, with the University of Copenhagen ranked #101 globally (QS 2026).",
      },
      {
        title: "High-Quality, Innovative Education",
        desc: "Teaching is interactive and project-based, focused on developing critical thinking, teamwork, and real-world skills. Denmark is strong in fields like engineering, life sciences, IT, business, and sustainability.",
      },
      {
        title: "Research & Career Prospects",
        desc: "Denmark’s universities have strong ties with industry and offer excellent research opportunities, internships, and pathways to post-study employment. Part-time work (up to 20 hours/week) is allowed for students, with post-graduation job search opportunities.",
      },
      {
        title: "Affordable Tuition & Living",
        desc: "Tuition is lower than in many other Western countries, and scholarships are available for international students. The cost of living is balanced by part-time work prospects and a high quality of life.",
      },
    ],

    // Universities
    universities: {
      list: [
        "University of Copenhagen — QS World Rank 2026: 101 | Known for Life Sciences, Humanities, Research",
        "Technical University of Denmark (DTU) — QS 2026: 107 | Known for Engineering, Technology, Innovation",
        "Aarhus University — QS 2026: 131 | Known for Arts, Sciences, Social Sciences",
        "University of Southern Denmark (SDU) — QS 2026: 303 | Known for Engineering, Health, Business",
        "Aalborg University — QS 2026: 306 | Known for Engineering, IT, Project-based Learning",
        "Copenhagen Business School (CBS) — QS MBA: Top 100 | Known for Business, Management",
        "Roskilde University — QS 2026: 501 | Known for Social Sciences, Communication",
      ],
      photo: universitiesDenmark,
    },

    // Eligibility Requirements
    eligibility: [
      "For Bachelor’s Programs:",
      "• Completion of Class 12/senior secondary school with at least 60% marks.",
      "• English proficiency: IELTS 6.0–6.5 or TOEFL equivalent (minimum band 5.0 in all skills for some courses).",
      "• Some technical courses may require mathematics proficiency verification or additional entrance tests.",

      "For Master’s Programs:",
      "• Recognized bachelor’s degree in a relevant field with a minimum of 60–65% marks.",
      "• IELTS 6.5, TOEFL iBT 79+, or equivalent for English-taught courses.",
      "• Motivation letter, CV, letters of recommendation, and sometimes a university interview.",

      "Special Requirements for MBBS/Medical:",
      "• NEET qualification is mandatory for Indian medical applicants.",
      "• 50% in Physics, Chemistry, Biology, and English in Class 12.",

      "Visa Requirements:",
      "• Admission letter from a recognized Danish institution.",
      "• Proof of funds for living expenses (approx. DKK 6,397/month for 12 months).",
      "• Valid passport, proof of accommodation, health insurance, and English test score documentation.",

      "The Denmark Advantage: Denmark offers Indian students a blend of global-quality education, vibrant student life, and world-leading safety and sustainability. Graduates gain a European degree recognized worldwide, develop in-demand skills, and experience a truly balanced, inclusive lifestyle.",
    ],
  };

  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <CountrySection data={data} />
        </div>

        {/* floating blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>

      <Footer />
    </>
  );
}
