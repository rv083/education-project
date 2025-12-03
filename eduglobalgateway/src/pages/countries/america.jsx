// src/pages/countries/America.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";
import heroUSA from "../../assets/mit_univ.jpeg";
import USAside from "../../assets/usa_side.jpg";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function America() {
  const data = {
    name: "United States of America",
    heading: "Study in the United States: Your Launchpad to Global Success",

    description:
      "The United States of America, a federal republic of 50 states, is a vast country known for its diverse landscapes, vibrant cities, and status as the world’s foremost economic and military power. A global leader in technology, innovation, and culture, the U.S. offers a dynamic environment for students from across the world, making it a premier destination for higher education.",

    heroImage:heroUSA,

    welcomingHub: {
      title: "A Welcoming Hub for Indian Students",
      points: [
        "The U.S. has a long history of welcoming international students, and its universities are bastions of cultural diversity. For Indian students, this means stepping into a multicultural environment where different perspectives are celebrated.",
        "Many U.S. universities have vibrant Indian communities and dedicated student associations that organize events for Diwali, Holi, and other festivals, helping students stay connected to their roots.",
        "American campus life encourages collaboration and interaction, allowing students to build a global network of peers, mentors, and future colleagues.",
        "Universities offer extensive support systems, including international student offices, clubs, and local community groups that help you adapt smoothly to your new environment."
      ],
    },

    whyChooseFull:
      "The decision to study in the U.S. is an investment in a future of limitless possibilities. The American education system offers several distinct advantages that attract students globally.",

    whyChoose: [
      {
        title: "Academic Excellence and Global Reputation",
        desc: "The U.S. hosts a majority of the world’s top-ranked universities, and degrees earned here are recognized and respected worldwide."
      },
      {
        title: "Flexible Curriculum Structure",
        desc: "Students can explore a variety of subjects before declaring a major, and the credit system allows customized academic pathways."
      },
      {
        title: "Cutting-Edge Research and Innovation",
        desc: "Students gain hands-on exposure to advanced research facilities and often work alongside leading experts."
      },
      {
        title: "Vibrant Campus Life",
        desc: "Clubs, sports, events, and diverse student communities enrich your university experience beyond academics."
      }
    ],

    universities: {
      title: "Top Universities in the United States",
      fullText:
        "The U.S. boasts an impressive number of world-class institutions. While rankings vary, the following universities consistently feature among the best globally:",
      list: [
  {
    name: "Massachusetts Institute of Technology (MIT)",
    rank: 1,
    knownFor: ["Engineering", "Computer Science", "Natural Sciences", "Business & Management"]
  },
  {
    name: "Harvard University",
    rank: 5,
    knownFor: ["Medicine & Life Sciences", "Social Sciences", "Business & Management", "Law"]
  },
  {
    name: "Princeton University",
    rank: 25,
    knownFor: ["Natural Sciences", "Mathematics", "Engineering", "Humanities & Social Sciences"]
  },
  {
    name: "Stanford University",
    rank: 3,
    knownFor: ["Computer Science & Engineering", "Business & Entrepreneurship", "Natural Sciences", "Social Sciences"]
  },
  {
    name: "California Institute of Technology (Caltech)",
    rank: 10,
    knownFor: ["Physics & Natural Sciences", "Engineering", "Research & Innovation"]
  },
  {
    name: "University of California, Berkeley (UCB)",
    rank: 6,
    knownFor: ["Engineering & Technology", "Natural Sciences", "Social Sciences", "Business"]
  },
  {
    name: "Yale University",
    rank: 21,
    knownFor: ["Social Sciences & Humanities", "Law", "Arts", "Life Sciences"]
  },
  {
    name: "University of Pennsylvania",
    rank: 15,
    knownFor: ["Business & Management (Wharton)", "Social Sciences", "Medicine", "Law"]
  },
  {
    name: "Johns Hopkins University",
    rank: 13,
    knownFor: ["Medicine & Life Sciences", "Biomedical Engineering", "Natural Sciences", "Research"]
  },
  {
    name: "University of California, Los Angeles (UCLA)",
    rank: 42,
    knownFor: ["Arts & Humanities", "Social Sciences", "Business", "Engineering & Technology"]
  }
]

,
      photo: USAside
    },

    eligibilityTitle: "Eligibility Criteria for Indian Students",

    eligibilityDetails:
      "To study in the U.S., students must meet certain academic and visa requirements. The following criteria are generally necessary to secure an F-1 Student Visa:",

    eligibility: [
      "University Acceptance: Admission into a full-time program at a SEVP-approved institution (Form I-20 provided by the university).",
      "Proof of Financial Support: Evidence of funds covering tuition, living expenses, and travel costs.",
      "English Proficiency: Minimum required scores in IELTS, TOEFL, or equivalent tests.",
      "Intent to Return: Demonstrating strong ties to India as proof of intent to return after studies.",
      "Valid Passport: Must remain valid for 6+ months beyond your planned stay in the U.S."
    ]
  };

  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <CountrySection data={data} />
        </div>

        {/* Blue floating blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>
      <Footer />
    </>
  );
}
