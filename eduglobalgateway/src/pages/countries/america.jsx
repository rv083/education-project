// src/pages/countries/America.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";
import heroUSA from "../../assets/usa.jpeg";
import universitiesUSA from "../../assets/usa-universities.jpeg";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function America() {
  const data = {
    name: "United States of America",
    heading: "Study in the USA",
    description:
      "The United States offers world-class education, cutting-edge research, and unmatched industry exposure. It is one of the most preferred study destinations for Indian students seeking high-quality learning and global career success.",

    heroImage: heroUSA,

    welcomingHub: {
      title: "A Welcoming Hub for Indian Students",
      points: [
        "Large and active Indian communities across campuses",
        "Indian student associations, cultural events & support groups",
        "Indian food, groceries and restaurants easily accessible",
        "International student offices providing visa and onboarding support"
      ]
    },

    whyChoose: [
      {
        title: "Top Global Rankings",
        desc: "Home to many of the world’s leading universities."
      },
      {
        title: "High Research Output",
        desc: "World-class labs, innovation culture and industry collaboration."
      },
      {
        title: "Flexible Courses",
        desc: "Choose majors, minors, electives and interdisciplinary tracks."
      },
      {
        title: "Strong Career Prospects",
        desc: "Internships, co-ops, OPT and strong recruiter networks."
      }
    ],

    universities: {
      list: [
        "Massachusetts Institute of Technology (MIT)",
        "Harvard University",
        "Stanford University",
        "University of California, Los Angeles (UCLA)",
        "University of Chicago",
        "Columbia University"
      ],
      photo: universitiesUSA
    },

    eligibility: [
      "Valid Passport",
      "Offer Letter from a US Institution",
      "Financial Proof (bank statements or scholarship letters)",
      "English Proficiency – IELTS / TOEFL / PTE (or waiver)",
      "SOP, LORs, Transcripts & Academic Records"
    ]
  };

  return (
    <>
      <Header />
      {/* Gradient background like Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <CountrySection data={data} />
        </div>

        {/* Blue floating blobs for consistency */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>

      <Footer />
    </>
  );
}
