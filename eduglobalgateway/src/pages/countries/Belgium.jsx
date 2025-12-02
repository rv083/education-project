// src/pages/countries/Belgium.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Leave images empty for now
const heroBelgium = "https://globalstudyoptions.in/wp-content/uploads/2023/12/Belgium1.jpg";
const universitiesBelgium = "https://globalstudyoptions.in/wp-content/uploads/2023/12/Belgium3.webp";

export default function Belgium() {
  const data = {
    name: "The Belgium",
    heading: "Study in Belgium: Europe’s Multilingual Innovation Hub",

    description:
      "Belgium, strategically located in Western Europe and home to Brussels—the capital of the European Union—is famous for its rich history, vibrant cities, and multicultural society. With three official languages (Dutch, French, and German) and a thriving international community, Belgium offers students a unique blend of world-class academics and cross-cultural experiences. Its central location allows students to easily travel across Europe, making it an appealing destination for those seeking a global perspective.",

    heroImage: heroBelgium,

    welcomingHub: {
      title: "International Student Culture: The Indian Perspective",
      points: [
        "Belgium is an increasingly popular destination for Indian students, who are drawn by its academic excellence, reasonable costs, and dynamic student life.",
        "Welcoming Multicultural Society: Campuses are remarkably diverse, with both local and international student associations. Indian students regularly celebrate festivals, connect with cultural groups, and find familiar food options, especially in student cities like Leuven, Brussels, and Ghent.",
        "Language Accessibility: A wide range of English-taught programs at Bachelor’s and Master’s levels means Indian students face no language barriers. Opportunities to learn Dutch or French are abundant, further enhancing employability.",
        "Quality of Life: Belgium offers a safe, affordable lifestyle, with moderate living costs (roughly €930 per month), great public transport, student discounts, and vibrant cultural events.",
        "Post–Study Prospects: Indian graduates can access post-study work opportunities in Belgium and throughout the EU.",
      ],
    },

    whyChoose: [
      {
        title: "World-Class Universities",
        desc: "Belgium consistently ranks among the world’s top study destinations, with several universities in the QS Top 200.",
      },
      {
        title: "Affordable Education",
        desc: "Tuition and living costs are lower than many Western European countries. Numerous scholarships are available based on merit and need.",
      },
      {
        title: "Cultural & Career Advantages",
        desc: "The country’s multicultural environment, central location, and strong links with global employers provide students with valuable international exposure and internship opportunities.",
      },
      {
        title: "English-Taught Programs",
        desc: "Hundreds of high-quality programs in English at undergraduate and postgraduate levels minimize language hurdles for Indian students.",
      },
    ],

    universities: {
      list: [
  {
    name: "KU Leuven",
    rank: 60,
    knownFor: ["Engineering", "Sciences", "Law"]
  },
  {
    name: "Ghent University",
    rank: 162,
    knownFor: ["Life Sciences", "Engineering"]
  },
  {
    name: "Université catholique de Louvain (UCL)",
    rank: 191,
    knownFor: ["Humanities", "Theology"]
  },
  {
    name: "Université libre de Bruxelles (ULB)",
    rank: 227,
    knownFor: ["Medicine", "Social Sciences"]
  },
  {
    name: "University of Antwerp",
    rank: 280,
    knownFor: ["Arts", "Sciences"]
  },
  {
    name: "Vrije Universiteit Brussel (VUB)",
    rank: 294,
    knownFor: ["Business", "Engineering"]
  },
  {
    name: "Université de Liège",
    rank: 379,
    knownFor: ["Medicine", "Environment"]
  }
]
,
      photo: universitiesBelgium,
    },

    eligibility: [
      // Undergraduate
      "Undergraduate Programs:",
      "• Secondary school certificate (Class 12 or equivalent)",
      "• Transcripts, certified copies of qualification",
      "• Proof of English proficiency (IELTS 6.0–6.5, TOEFL iBT 72+ for English-taught programs)",
      "• For French/Dutch-taught programs: language proficiency at B1/B2 CEFR level",
      "• Motivation letter and CV may be required",

      // Postgraduate
      "Postgraduate Programs:",
      "• Recognized bachelor’s degree in a relevant field",
      "• Transcripts, degree certificate",
      "• Proof of English proficiency (IELTS 6.5, TOEFL iBT 80+, PTE accepted)",
      "• CV, motivational letter, letters of recommendation",
      "• Some programs may require entrance exams or interviews",

      // Visa
      "Student Visa (Type D):",
      "• Letter of admission from a Belgian institution",
      "• Valid passport (at least 12 months validity)",
      "• Completed visa application form",
      "• Proof of sufficient funds for living expenses (typically €800–1,000/month)",
      "• Health insurance covering the entire stay",
      "• Proof of accommodation",
      "• Police clearance certificate",
      "• Medical certificate (free from public health risks)",

      // Application Process
      "Application Process:",
      "1. Apply online to the university and secure admission.",
      "2. Gather all the required documents.",
      "3. Submit a visa application and provide biometrics at VFS Global.",
      "4. Track your visa application online; interviews are generally not required for Indian students.",

      "Belgium offers Indian students a combination of academic brilliance, affordable education, global exposure, and exciting lifestyle opportunities in the heart of Europe.",
    ],
  };

  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <CountrySection data={data} />
        </div>

        {/* Floating gradient blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>

      <Footer />
    </>
  );
}
