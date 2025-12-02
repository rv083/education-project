// src/pages/countries/Canada.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Leave images empty
const heroCanada = "https://globalstudyoptions.in/wp-content/uploads/2023/12/canada.jpg";
const universitiesCanada = "https://globalstudyoptions.in/wp-content/uploads/2023/12/canada1-1365x2048.jpg";

export default function Canada() {
  const data = {
    name: "The Canada",
    heading: "Study in Canada: A Leading Choice for Indian Students",

    description:
      "Canada ranks among the world’s top destinations for international education, thanks to its excellent universities, cultural diversity, and remarkable quality of life. With over half a million international students, including a fast-growing Indian community, Canada offers a fulfilling, globally recognized education at a comparatively affordable cost.",

    heroImage: heroCanada,

    // International Student Culture Section
    welcomingHub: {
      title: "International Student Culture: The Indian Perspective",
      points: [
        "Welcoming Multiculturalism: Canadian society is truly diverse. On campus, Indian students find thriving international groups, cultural associations, and celebrations of Indian festivals like Diwali, Holi, and Navratri. This helps in maintaining cultural ties while adapting to a new environment.",
        "Supportive Campuses: Most universities provide orientation sessions, international student offices, mental health support, English language help, and friendship clubs, making it easy for newcomers to integrate.",
        "Easy Adaptation: From a variety of regional Indian restaurants to Indian stores, essentials are always within reach. Participating in social events, student clubs, and local holidays—both Canadian and Indian—helps students build friendships and settle in quickly.",
        "Skill Development and Career Focus: Students have access to internships, co-ops, and part-time jobs, enhancing their practical skills and offering valuable exposure to the Canadian workplace.",
      ],
    },

    // Why Choose Canada
    whyChoose: [
      {
        title: "Top–Ranked, Research–Driven Universities",
        desc: "Canadian institutions consistently appear in the QS and THE world rankings, known for their academic excellence and innovative research.",
      },
      {
        title: "Practical, Career–Oriented Education",
        desc: "Thousands of programs feature work placements or co-op studies, allowing students to earn while they learn and gain hands-on experience.",
      },
      {
        title: "Affordable by Global Standards",
        desc: "Tuition fees and living expenses are lower than many other English-speaking countries. Scholarships further reduce costs.",
      },
      {
        title: "Inclusive, Safe, and Peaceful",
        desc: "Canada is ranked among the top countries for quality of life and safety, making it reassuring for international families.",
      },
      {
        title: "Post–Study Opportunities",
        desc: "The Post-Graduation Work Permit (PGWP) and accessible pathways to permanent residency make Canada attractive for those wishing to build a future there.",
      },
    ],

    // Universities Section → using text table? We'll add list + description.
    universities: {
    list: [
  {
    name: "McGill University",
    rank: 27,
    knownFor: ["—"]
  },
  {
    name: "University of Toronto",
    rank: 29,
    knownFor: ["—"]
  },
  {
    name: "University of British Columbia",
    rank: 40,
    knownFor: ["—"]
  },
  {
    name: "University of Alberta",
    rank: 96,
    knownFor: ["—"]
  },
  {
    name: "McMaster University",
    rank: 103,
    knownFor: ["—"]
  },
  {
    name: "Université de Montréal",
    rank: 151,
    knownFor: ["—"]
  },
  {
    name: "University of Waterloo",
    rank: 112,
    knownFor: ["—"]
  },
  {
    name: "Western University",
    rank: 120,
    knownFor: ["—"]
  },
  {
    name: "University of Calgary",
    rank: 182,
    knownFor: ["—"]
  },
  {
    name: "Queen’s University",
    rank: 209,
    knownFor: ["—"]
  }
],
      photo: universitiesCanada,
    },

    eligibility: [
      "Academic Records: For undergraduate programs, successful completion of 12th standard (higher secondary); for postgraduate, a recognized bachelor’s degree (minimum 3–4 years).",
      "Language Proficiency: Proof via standardized tests:\n• IELTS overall 6.0–6.5 (varies by program)\n• TOEFL iBT 80–100 (as required per institution/program)",
      "Acceptance from a DLI: You must be admitted to a Designated Learning Institution (DLI).",
      "Proof of Funds: Evidence you have enough money to pay tuition and living expenses (CAD 10,000–20,000 per year on average).",
      "Supporting Documents: Valid passport, academic transcripts, language test results, Statement of Purpose, CV, letters of recommendation, and medical certification if required.",
      "Visa Application: Apply for a Canadian study permit after receiving acceptance from a DLI. A Genuine Temporary Entrant (GTE) statement and police clearance may be requested.",
      "Health & Background: Clean medical and criminal record for visa approval, if required. For certain postgraduate and business programs, additional requirements such as work experience (2–3 years), GMAT (580–600), or GRE may apply.",
      "Canada stands out for its world-class education, multicultural vibrancy, affordability, and rewarding career pathways—making it a leading choice for Indian students seeking global success.",
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
