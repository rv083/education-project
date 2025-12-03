// src/pages/countries/Italy.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroImg from "../../assets/milano_polytech_univ.jpg"
import ItalySide from "../../assets/Italy_pic.jpg"

export default function Italy() {
  const data = {
    name: "Italy",
    heading: "Study in Italy: Where History, Innovation, and Opportunity Meet",

    description:
      "Italy, a country at the heart of Europe, is a captivating blend of ancient history, artistic grandeur, and modern innovation. From the architectural marvels of the Roman Empire to its global leadership in fashion and design, Italy offers a living classroom where every street tells a story. Home to the oldest university in the Western world, Italy’s academic traditions are profound, making it a dream destination for students seeking a world-class education immersed in unparalleled cultural richness.",

    heroImage: HeroImg,

    welcomingHub: {
      title: "A Welcoming and Vibrant Culture for Indian Students",
      points: [
        "Italy has seen a significant surge in enrollments from Indian students, who are drawn to its welcoming atmosphere and diverse communities. Italians are generally known for being warm and open-minded.",
        "Growing Indian Communities: Vibrant Indian groups have formed in major student cities, offering support networks, cultural celebrations, and help navigating daily life.",
        "A Culturally Rich Experience: Life in Italy is an immersion in art, history, and phenomenal cuisine. Exploring local dishes, historic cities, and festivals forms a deep cultural experience.",
        "Language and Integration: While many programs are in English, learning basic Italian boosts daily interactions and helps students integrate smoothly."
      ],
    },

    whyChooseFull:
      "Italy provides a top-tier education that is both high in quality and accessible, offering distinct advantages for international students.",

    whyChoose: [
      {
        title: "Academic Excellence and Diversity",
        desc: "Italian universities are renowned for their rigorous academic standards and broad course offerings, excelling in engineering, architecture, arts, and design."
      },
      {
        title: "Affordable Education",
        desc: "Compared to many Western European countries, Italy offers significantly lower tuition fees at public universities, with scholarships and fee waivers available."
      },
      {
        title: "Post-Study and Work Opportunities",
        desc: "International students can work part-time up to 20 hours per week, and apply for temporary residence after graduation for employment opportunities."
      },
      {
        title: "A Gateway to Europe",
        desc: "Italy’s location enables students to easily travel across Europe, enriching their cultural knowledge during their academic journey."
      }
    ],

    universities: {
      title: "Top Universities in Italy",
      fullText:
        "Italy is home to some of the world's oldest and most prestigious universities. According to the QS World University Rankings 2025, some of the top institutions include:",
      list: [
        {
          name: "The Polytechnic University of Milan (Politecnico di Milano)",
          rank: 123,
          knownFor: [
            "Engineering & Technology",
            "Architecture",
            "Design",
            "Computer Science"
          ],
        },
        {
          name: "Sapienza University of Rome",
          rank: 134,
          knownFor: [
            "Classics & Ancient History",
            "Physics & Astronomy",
            "Medicine",
            "Engineering"
          ],
        },
        {
          name: "University of Bologna",
          rank: 154,
          knownFor: [
            "Humanities",
            "Law",
            "Business & Economics",
            "Engineering"
          ],
        },
        {
          name: "University of Padova",
          rank: 243,
          knownFor: [
            "Medicine",
            "Physics",
            "Agricultural Sciences",
            "Engineering"
          ],
        },
        {
          name: "Politecnico di Torino",
          rank: 262,
          knownFor: [
            "Architecture",
            "Engineering",
            "Urban Planning",
            "Technology"
          ],
        },
        {
          name: "University of Milan",
          rank: 276,
          knownFor: [
            "Biology",
            "Pharmaceutical Sciences",
            "Medicine",
            "Life Sciences"
          ],
        },
        {
          name: "University of Pisa",
          rank: 349,
          knownFor: [
            "Physics",
            "Mathematics",
            "Computer Science",
            "Engineering"
          ],
        },
        {
          name: "University of Naples Federico II",
          rank: 424,
          knownFor: [
            "Engineering",
            "Marine Sciences",
            "Physics",
            "Computer Science"
          ],
        },
      ],
      photo: ItalySide,
    },

    eligibilityTitle: "Eligibility Criteria for Indian Students",

    eligibilityDetails:
      "The application process for Italian universities is thorough. Indian students must generally meet the following criteria:",

    eligibility: [
      "For Bachelor's Programs: Completion of 12 years of schooling with a valid school leaving certificate.",
      "For Master’s Programs: A relevant bachelor’s degree from a recognized university, typically 15–16 years of formal education.",
      "English Language Proficiency: IELTS 6.0 or TOEFL 74 for English-taught courses (varies by university).",
      "Student Visa (Type D): Requires proof of admission, financial resources (~€6,000/year), accommodation, and health insurance."
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
