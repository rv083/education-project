// src/components/sections/Advisors.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

import vikramImg from "../../assets/vikram.jpeg";
import sheenaImg from "../../assets/sheena.jpeg";
import mayankImg from "../../assets/mayank.jpeg";
import vandanaImg from "../../assets/vandana.jpeg";
import siddharthImg from "../../assets/siddharth.jpeg";
import adityaImg from "../../assets/aditya.jpg";
import sourabhImg from "../../assets/sourabh.jpg";
import kakkarImg from "../../assets/kakkarsir.jpg";

const advisors = [
  {
    id: 1,
    name: "Prof. (Dr.) Vikram Singh",
    title: "Retired Director General of Police (DGP) – Uttar Pradesh",
    image: vikramImg,
    bio: `Retired Director General of Police (DGP) Uttar Pradesh, Prof. (Dr.) Vikram Singh is a nationally acclaimed figure recognized for his unwavering commitment to curbing crime and upholding law and order. Renowned for his integrity, discipline, and character, he is a trusted voice on matters of public importance and an inspiring figure for people of all generations, particularly the youth. EduGlobal Gateway greatly values Prof. (Dr.) Vikram Singh for his vast experience, scholarly contributions, and insightful guidance, which play a pivotal role in shaping the strategic decisions and vision of EduGlobal Gateway Consultancy.`,
  },
  {
    id: 2,
    name: "Prof. (Dr.) Gurudatt Kakkar",
    title: "Strategic Advisor",
    image: kakkarImg,
    bio: `Prof. (Dr.) Gurudatt Kakkar is an accomplished academic leader with over 25 years of experience in higher education, academic administration, institutional development, and policy execution. A distinguished professional in Business Management and Human Resource Development, he has served in senior leadership roles including Pro Vice Chancellor and Acting Vice Chancellor at Career Point University, Kota, Managing Director at Maharishi Arvind University, Jaipur, and Director Academics at Ananta Institute of Medical Science and Research Centre, Rajsamand (Udaipur). Dr. Kakkar has taught and mentored thousands of students and authored three books along with nearly 100 research papers. His expertise includes accreditation frameworks, regulatory compliance (UGC, NMC, NAAC, AICTE), faculty development, and institution-building from foundation to operational excellence.`,
  },
  {
    id: 3,
    name: "Mr. Saurabh Mohan",
    title: "Overseas Admissions Expert",
    image: sourabhImg,
    bio: `Mr. Saurabh Mohan brings over 20 years of hands-on experience in overseas admissions, having successfully guided countless students to prestigious universities around the world. His deep expertise in the admissions process, program selection, and aligning academic choices with industry demands makes him an invaluable asset at EduGlobal Gateway Consultancy. By providing personalized guidance and strategic insights, he empowers students to make informed decisions, helping them secure placements in highly competitive undergraduate and postgraduate programs.`,
  },
  {
    id: 4,
    name: "Ms. Sheena Shukla",
    title: "Commercial Strategy & Operations Leader – Google Cloud",
    image: sheenaImg,
    bio: `Ms. Sheena Shukla is a seasoned commercial strategy and operations leader with 10+ years of experience driving transformation across global organizations. At Google Cloud, she shapes high-impact programs that translate complex commercial goals into measurable business outcomes. Known for her expertise in deal strategy, data-driven decisioning, and cross-functional leadership, Ms. Sheena brings clarity, precision, and momentum to every initiative she leads.`,
  },
  {
    id: 5,
    name: "Mr. Mayank Bhati",
    title: "MarTech & Customer Experience Product Leader",
    image: mayankImg,
    bio: `Mr. Mayank Bhati is a MarTech and Customer Experience Product Leader with 10+ years of experience in the banking and IT industry who has spent the last decade shaping AI-powered digital products for global enterprises. With a background spanning product strategy, analytics, and large-scale SaaS implementations, he has delivered transformative solutions across markets.`,
  },
  {
    id: 6,
    name: "Ms. Vandana Pareek",
    title: "Senior Business Consultant – Cleargoals, Canada",
    image: vandanaImg,
    bio: `A seasoned and client-focused professional, she brings over a decade of experience leading diverse cross-functional teams and delivering impactful solutions across industries. Currently serving as a Senior Business Consultant at Cleargoals, Canada, she leverages strong organizational, analytical, and leadership skills to manage complex projects and deliver exceptional client outcomes.`,
  },
  {
    id: 7,
    name: "Mr. Siddharth Vyas",
    title: "Enterprise Solutions Architect – Cloud, SaaS & IIoT",
    image: siddharthImg,
    bio: `With over 13 years of experience in business engagement, software development, and solution delivery across globally diverse environments, Mr. Vyas brings deep expertise in driving transformative digital initiatives. He has worked extensively with distributed, cross-functional teams to implement innovative solutions across globally diverse environments.`,
  },
  {
    id: 8,
    name: "Mr. Aditya Rana",
    title: "Program Director – Cognizant USA",
    image: adityaImg,
    bio: `Mr. Aditya has over 20 years of IT consulting experience, working with leading organizations such as Cognizant, Tata Consultancy Services (TCS), and Nucleus Software. His expertise spans multiple domains, including Retail, Pharmacy, Banking, and Hospitality.`,
  },
];

function ShortBio({ text, limit = 260 }) {
  if (!text) return null;
  if (text.length <= limit) return <p className="mt-3 text-slate-600 text-sm leading-relaxed">{text}</p>;
  return <p className="mt-3 text-slate-600 text-sm leading-relaxed">{text.slice(0, limit).trim()}…</p>;
}

export default function Advisors() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="advisors" className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            Our Advisors
          </h2>
          <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
            Experienced leaders guiding EduGlobal Gateway’s strategy and student success.
          </p>
        </div>

        {/* Stacked rectangular cards (one per row) */}
        <div className="space-y-6">
          {advisors.map((adv, index) => (
            <motion.article
              key={adv.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Photo column */}
                <div className="w-full md:w-44 lg:w-56 flex-shrink-0">
                  <img
                    src={adv.image}
                    alt={`${adv.name} photo`}
                    loading="lazy"
                    className="w-full h-44 md:h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='360'><rect width='100%' height='100%' fill='%23f8fafc'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='16'>Photo unavailable</text></svg>";
                    }}
                  />
                </div>

                {/* Content column */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                        {adv.name}
                      </h3>
                      <p className="mt-1 text-sm text-blue-700 font-medium">
                        {adv.title}
                      </p>
                    </div>

                    {/* Optional quick actions: contact mailto */}
                    <div className="flex items-center gap-3">
                      <a
                        href={`mailto:info@eduglobal.example?subject=Contact%20${encodeURIComponent(adv.name)}`}
                        className="text-sm text-slate-600 hover:text-slate-800 transition"
                        aria-label={`Contact ${adv.name}`}
                      >
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-3 flex-1">
                    {!expanded[adv.id] ? (
                      <ShortBio text={adv.bio} />
                    ) : (
                      <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{adv.bio}</p>
                    )}
                  </div>

                  {/* Actions row */}
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => toggle(adv.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
                      aria-expanded={!!expanded[adv.id]}
                      aria-controls={`bio-${adv.id}`}
                    >
                      {expanded[adv.id] ? "Show less" : "Read more"}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {expanded[adv.id] ? (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 15l-6-6-6 6" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        )}
                      </svg>
                    </button>

                    <a
                      href={`mailto:info@eduglobal.example?subject=Contact%20${encodeURIComponent(adv.name)}`}
                      className="text-sm text-slate-500 hover:text-slate-700 transition"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative floating blobs */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
    </section>
  );
}
