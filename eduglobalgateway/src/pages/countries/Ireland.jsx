// src/pages/countries/Ireland.jsx
import React from "react";
import CountrySection from "../../components/sections/CountrySection";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import HeroImg from "../../assets/trinity_college_dublin.png"
import LibraryImg from "../../assets/trinity_library.jpg"

export default function Ireland() {
  const data = {
    name: "Ireland",
    heading: "Study in Ireland: The Emerald Isle of Opportunity",

    description:
      "Ireland, often called the Emerald Isle for its lush green landscapes, is a culturally rich and dynamic European nation. It stands out as the only English-speaking country in the Eurozone, offering a unique blend of historic traditions and modern innovation. Renowned for its friendly and welcoming atmosphere, Ireland has become a top destination for international students seeking a world-class education in a safe and vibrant environment.",

    heroImage: HeroImg,

    welcomingHub: {
      title: "A Home Away from Home for Indian Students",
      points: [
        "Ireland’s reputation for friendliness is well-earned, with locals often making new arrivals feel at home quickly. For Indian students, the transition is often smooth, thanks to a welcoming society and a growing Indian diaspora.",
        "Ireland has one of the highest per-capita populations of Indian students in the EU. Cities like Dublin, Cork, and Limerick have flourishing Indian communities, making it easy to find familiar foods, customs, and friendships.",
        "The Irish appreciate and respect diversity, creating an inclusive environment for all cultures. Universities and local communities host celebrations for festivals like Diwali and Holi, helping you stay connected to your heritage while embracing new traditions.",
        "Irish universities foster a strong sense of community, with countless clubs and events that help international students integrate, socialize, and build a supportive network."
      ]
    },

    whyChooseFull:
      "Ireland offers a compelling combination of high-quality education, excellent career opportunities, and a high standard of living.",

    whyChoose: [
      {
        title: "Academic Excellence",
        desc: "Irish universities are globally recognized and heavily invested in cutting-edge research, especially in science, technology, pharmaceuticals, and chemistry."
      },
      {
        title: "Hub for Global Corporations",
        desc: "Ireland is home to European headquarters of major multinational companies like Google, Apple, Facebook, and Microsoft, offering unmatched internship and work opportunities."
      },
      {
        title: "Post-Study Work Opportunities",
        desc: "Ireland offers a two-year post-study work visa for postgraduate students, helping them gain international work experience."
      },
      {
        title: "Flexible Education System",
        desc: "With over 5,000 programs to choose from, Ireland provides flexibility, smooth credit transfers, and strong academic pathways."
      }
    ],

    universities: {
      title: "Top Universities in Ireland",
      fullText:
        "Ireland is home to world-class universities known for research excellence, innovation, and strong global industry connections. Here are the top institutions and what they are best known for:",
      list: [
        {
          name: "Trinity College Dublin (TCD)",
          rank: 81,
          knownFor: [
            "Humanities & Literature",
            "Computer Science",
            "Engineering",
            "Business"
          ]
        },
        {
          name: "University College Dublin (UCD)",
          rank: 171,
          knownFor: [
            "Business (Smurfit School)",
            "Agriculture & Food Science",
            "Engineering",
            "Computer Science"
          ]
        },
        {
          name: "University College Cork (UCC)",
          rank: 292,
          knownFor: [
            "Medicine & Health Sciences",
            "Pharmacy",
            "Environmental Science",
            "Biological Sciences"
          ]
        },
        {
          name: "University of Galway",
          rank: 289,
          knownFor: [
            "Biomedical Engineering",
            "Medicine",
            "Arts & Humanities",
            "Marine Science"
          ]
        },
        {
          name: "Dublin City University (DCU)",
          rank: 436,
          knownFor: [
            "Engineering",
            "Business",
            "Media Studies",
            "Computer Science"
          ]
        },
        {
          name: "University of Limerick (UL)",
          rank: 426,
          knownFor: [
            "Engineering",
            "Business",
            "Data Science",
            "Health Sciences"
          ]
        },
        {
          name: "Maynooth University",
          rank: 801,
          knownFor: [
            "Humanities",
            "Social Sciences",
            "Computer Science",
            "Education"
          ]
        },
        {
          name: "Technological University Dublin (TU Dublin)",
          rank: 851,
          knownFor: [
            "Engineering",
            "Architecture",
            "Hospitality & Tourism",
            "Creative Arts"
          ]
        }
      ],
      photo: LibraryImg
    },

    eligibilityTitle: "Eligibility Criteria for Indian Students",

    eligibilityDetails:
      "To secure admission to an Irish institution, Indian students generally need to meet the following requirements:",

    eligibility: [
      "Completion of 12 years of formal schooling for undergraduate courses (minimum 65% depending on institution).",
      "Proof of English proficiency: IELTS (6.5 overall), TOEFL (minimum 90 iBT), or equivalent.",
      "For postgraduate programs: A bachelor's degree equivalent to an Irish degree (usually 16 years of education).",
      "Strong academic performance—often first class or high second class depending on the university.",
      "Some courses such as MBA may require relevant work experience.",
      "Proof of funds, health insurance, and other documents for the student visa."
    ]
  };

  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <CountrySection data={data} />
        </div>

        {/* Background Blobs - same as USA */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>
      <Footer />
    </>
  );
}
