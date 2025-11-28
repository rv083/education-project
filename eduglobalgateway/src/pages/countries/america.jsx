// src/pages/countries/America.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";
import heroUSA from "../../assets/usa.jpeg"; // put image here
import universitiesUSA from "../../assets/usa-universities.jpeg"; // optional: image to show with universities list
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
export default function America() {
  const data = {
    name: "United States of America",
    heading: "USA",
    description:
      "The United States offers world-class higher education, cutting-edge research opportunities, and strong industry ties. It’s a top choice for Indian students seeking quality education and global exposure.",
    heroImage: heroUSA,
    welcomingHub: {
      title: "A Welcoming Hub for Indian Students",
      points: [
        "Large and active Indian student communities on most campuses",
        "Plentiful Indian student associations and cultural groups",
        "Indian grocery stores and restaurants near major university towns",
        "Dedicated international student offices to assist with orientation, visas, and support"
      ]
    },
    whyChoose: [
      { title: "Top World Ranking", desc: "Home to many of the world’s top-ranked universities." },
      { title: "Research & Innovation", desc: "Excellent research facilities and industry collaboration." },
      { title: "Flexible Academic Paths", desc: "Options to pick majors, minors, and interdisciplinary study." },
      { title: "Strong Career Prospects", desc: "Robust internships, co-op programs, and employer connections." }
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
      "Offer Letter from US Institution",
      "Financial Proof (bank statements, scholarship letters)",
      "English Proficiency (IELTS/TOEFL/PTE) or waived per institution",
      "Statement of Purpose (SOP), Letters of Recommendation (LOR), and Academic Transcripts"
    ]
  };

  return (
    <>
      <Header />
      <CountrySection data={data} />
      <Footer />
    </>
  );
}
