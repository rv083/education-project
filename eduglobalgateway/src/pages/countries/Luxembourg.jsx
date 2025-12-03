// src/pages/countries/Luxembourg.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import heroLux from "../../assets/university_of_luxembourg.jpg";
import universitiesLux from "../../assets/univ_lux_side.jpg";

export default function Luxembourg() {
  const data = {
    name: "Luxembourg",
    heading: "Study in Luxembourg: Europe’s Hidden Gem for Global Achievers",

    description:
      "Luxembourg, officially the Grand Duchy of Luxembourg, is a small yet prosperous nation located in the heart of Western Europe. Surrounded by Germany, France, and Belgium, it is known for its breathtaking landscapes, strong economy, high standard of living, and multicultural identity. Despite its compact size, Luxembourg has grown into a major financial hub and a thriving center for international students seeking quality education and global exposure.",

    heroImage: heroLux,

    // International Student Section
    welcomingHub: {
      title: "A Welcoming and Diverse Hub for Indian Students",
      points: [
        "Truly Multicultural Campuses: The University of Luxembourg hosts students from more than 130 nationalities, giving Indian students strong cultural diversity and a global peer network.",
        "Safe and Inclusive Society: Luxembourg’s low crime rate, friendly locals, and high standard of living ensure a comfortable transition for Indian students moving abroad.",
        "Multilingual Advantage: With French, German, and Luxembourgish as the official languages — and English widely spoken — students benefit from multilingual exposure that boosts career potential.",
        "Excellent Quality of Life: Luxembourg consistently ranks among Europe’s safest and most prosperous nations, offering a clean environment, excellent healthcare, and a vibrant international community."
      ],
    },

    // Why Choose Luxembourg
    whyChoose: [
      {
        title: "High-Quality, Research-Driven Education",
        desc: "The University of Luxembourg is globally recognized for innovation and interdisciplinary research, preparing students for complex real-world challenges."
      },
      {
        title: "A Global Financial Hub",
        desc: "As a major European finance center, Luxembourg offers exceptional opportunities for internships and employment in banking, IT, research, and policy."
      },
      {
        title: "Strategic Location in Europe",
        desc: "Situated near Paris, Brussels, and Frankfurt, students enjoy unmatched mobility and access to top European companies and cultural experiences."
      },
      {
        title: "Affordable Education & Scholarships",
        desc: "Public education fees are significantly lower than many Western European countries, and multiple scholarships are available for international students."
      }
    ],

    // Universities Section
    universities: {
  list: [
    {
      name: "University of Luxembourg",
      rank: "QS World Rank 2025: 381–400",
      knownFor: [
        "Computer Science & ICT",
        "Finance & Economics",
        "Law & European Governance",
        "Engineering",
        "Cybersecurity",
        "Data Science"
      ]
    },
    {
      name: "Luxembourg School of Business (LSB)",
      rank: "Not Ranked in QS (Private Business School)",
      knownFor: [
        "MBA Programs",
        "Management & Leadership",
        "Executive Education"
      ]
    },
    {
      name: "Sacred Heart University Luxembourg",
      rank: "Not Ranked in QS (Satellite Campus of SHU USA)",
      knownFor: [
        "Executive MBA",
        "Business Management",
        "Corporate Leadership Programs"
      ]
    },
    {
      name: "European Business University (EBU)",
      rank: "Not Ranked in QS",
      knownFor: [
        "Business Administration",
        "Online Hybrid MBA Programs",
        "International Business"
      ]
    }
  ],
  photo: universitiesLux
},


    // Eligibility
    eligibility: [
      "Bachelor’s Program: A recognized Class 12 certificate; non-EU certificates may require validation from Luxembourg’s Ministry of Education.",
      "Master’s Program: A recognized bachelor’s degree in a relevant field, with official accreditation for non-EU degrees.",
      "Language Proficiency: English-taught programs require IELTS/TOEFL. Programs in German/French require proficiency certificates (DELF/DSH).",
      "Financial Proof: Evidence of sufficient funds for tuition fees, living costs, and residence permit requirements.",
      "Valid Passport & Visa Documents: Students must submit proof of admission, health insurance, and financial documents for the student visa process."
    ],
  };

  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <CountrySection data={data} />
        </div>

        {/* Floating blobs for theme consistency */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>
      <Footer />
    </>
  );
}
