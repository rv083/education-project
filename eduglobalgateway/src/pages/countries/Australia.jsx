// src/pages/countries/Australia.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Leave images empty for now
const heroAustralia = "https://globalstudyoptions.in/wp-content/uploads/2023/12/Australia.jpg";
const universitiesAustralia = "https://globalstudyoptions.in/wp-content/uploads/2023/12/Australia2.webp";

export default function Australia() {
  const data = {
    name: "The Australia",
    heading: "Study in Australia: World–Class Education & Unmatched Diversity",

    description:
      "Australia, the world’s sixth largest country, is famous for its breathtaking landscapes, vibrant cities, strong economy, and top universities. Its reputation for high-quality education and welcoming multicultural environment has made it one of the top three study destinations globally, attracting over 7,40,000 international students—including thousands from India each year.",

    heroImage: heroAustralia,

    // International Student Culture
    welcomingHub: {
      title: "International Student Culture: The Indian Perspective",
      points: [
        "Indian Student Communities: Major cities like Melbourne, Sydney, Brisbane, Adelaide, and Perth have large, active Indian student associations, frequent celebrations of Indian festivals, and vast support networks.",
        "Support & Integration: Universities offer orientation programs, buddy schemes, and student support offices to help students adapt. English is the primary medium, but Indian restaurants, groceries, and community events are everywhere.",
        "Work–Life Balance: Indian students can work up to 40 hours per fortnight during semesters and full-time in vacations, providing practical experience and financial support.",
        "Vibrant Student Life: From multicultural food fairs and music festivals to sports and hiking trips, Australia offers countless opportunities for personal growth, relaxation, and building a global network.",
      ],
    },

    // Why Choose Australia
    whyChoose: [
      {
        title: "World–Ranked Universities",
        desc: "Eight Australian universities are listed in the QS World Top 100 (2025), praised for academic reputation, research excellence, and employer outcomes.",
      },
      {
        title: "Wide Range of Courses",
        desc: "Over 22,000+ accredited programs across business, IT, engineering, creative arts, and health sciences.",
      },
      {
        title: "Quality & Innovation",
        desc: "Australian qualifications are globally respected, with universities known for cutting-edge research and strong technology programs.",
      },
      {
        title: "Cultural Diversity",
        desc: "Over a quarter of Australia’s population is born overseas—creating a welcoming, safe, and inclusive environment.",
      },
      {
        title: "Affordability",
        desc: "Living costs and tuition fees are lower compared to other English-speaking countries. Merit-based scholarships are widely available.",
      },
      {
        title: "Post–Study Work Rights",
        desc: "Graduates may apply for the Temporary Graduate visa, gaining valuable work experience and potential pathways to permanent residency.",
      },
    ],

    // Top Universities (converted from table)
    universities: {
      list: [
  {
    name: "University of Melbourne",
    rank: 19,
    knownFor: [
      "Medicine",
      "Business & Management",
      "Life Sciences",
      "Law"
    ]
  },
  {
    name: "University of New South Wales (UNSW)",
    rank: 19,
    knownFor: [
      "Engineering",
      "Business",
      "Computer Science",
      "Law"
    ]
  },
  {
    name: "University of Sydney",
    rank: 25,
    knownFor: [
      "Health & Medical Sciences",
      "Law",
      "Business",
      "Arts & Humanities"
    ]
  },
  {
    name: "Australian National University (ANU)",
    rank: 32,
    knownFor: [
      "Politics & International Relations",
      "Social Sciences",
      "Earth Sciences",
      "Computer Science"
    ]
  },
  {
    name: "Monash University",
    rank: 36,
    knownFor: [
      "Pharmacy & Pharmacology",
      "Engineering",
      "Business",
      "Medicine"
    ]
  },
  {
    name: "University of Queensland",
    rank: 42,
    knownFor: [
      "Life Sciences",
      "Environmental Sciences",
      "Engineering",
      "Business"
    ]
  },
  {
    name: "University of Western Australia",
    rank: 77,
    knownFor: [
      "Life Sciences",
      "Agriculture",
      "Earth Sciences",
      "Business"
    ]
  },
  {
    name: "University of Adelaide",
    rank: 82,
    knownFor: [
      "Engineering",
      "Wine Science",
      "Health Sciences",
      "Physical Sciences"
    ]
  },
  {
    name: "University of Technology Sydney",
    rank: 96,
    knownFor: [
      "Engineering & Technology",
      "Computer Science",
      "Business",
      "Design & Innovation"
    ]
  },
  {
    name: "Macquarie University",
    rank: 125,
    knownFor: [
      "Linguistics",
      "Finance & Accounting",
      "Earth & Planetary Sciences",
      "Business"
    ]
  }
]

,
      photo: universitiesAustralia,
    },

    // Eligibility Criteria
    eligibility: [
      "Undergraduate (Bachelor’s): Completion of Class 12 (CBSE, ISC, or State Board) with generally at least 65% (requirements vary by program).",
      "English proficiency: IELTS 6.5, TOEFL iBT 79, or PTE 58 (minimum).",
      "Some programs require prerequisite subjects like mathematics for engineering.",
      "Postgraduate (Master’s): Recognized bachelor’s degree, minimum 60–65% depending on course.",
      "English proficiency: IELTS 6.5/7.0, TOEFL iBT 79–90, or PTE 58–65.",
      "Letters of Recommendation, Statement of Purpose, CV, and sometimes interviews/entrance exams.",
      "Additional: International students must apply for a CRICOS-registered institution for Subclass 500 Visa.",
      "Proof of funds (minimum AU$18,000/year), Overseas Student Health Cover (OSHC), and a valid passport.",
      "Visa Requirements: Confirmation of Enrollment (CoE), valid English test scores, GTE statement, medicals, and financial evidence.",
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
