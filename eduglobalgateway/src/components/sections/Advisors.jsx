// src/components/sections/Advisors.jsx
import React from "react";

// Import individual images from src/assets
import vikramImg from "../../assets/vikram.jpeg";
import sheenaImg from "../../assets/sheena.jpeg";
import mayankImg from "../../assets/mayank.jpeg";
import vandanaImg from "../../assets/vandana.jpeg";
import siddharthImg from "../../assets/siddharth.jpeg";

const advisors = [
  {
    id: 1,
    name: "Prof. (Dr.) Vikram Singh",
    title: "Retired Director General of Police (DGP) – Uttar Pradesh",
    image: vikramImg,
    bio: `Retired Director General of Police (DGP) Uttar Pradesh, needs no elaborate introduction as he is a well-renowned name in the nation for his tireless efforts for curbing crime and establishing law and order in the society. A person with high integrity, discipline, and character, Prof. (Dr.) Vikram Singh is a household name when it comes to voicing opinion on matters of public importance. He is regularly invited on media channels like Aaj Tak, ABP news, Times Now, Republic, Zee news, India TV, NDTV 24/7, India Today and others for voicing his expert views on socio-economic and political issues encountered by the nation. Further, he is popular for his TEDX talk on “How Youth can emerge as winners?” He is rated as a star trainer and speaker on issues related to security, man-management, crisis resolution team building, values and ethics. The Limca book of records mentions him as “Most Decorated Police officer” in the year 2014. Several gallantry awards namely, President’s Police Medal for Gallantry – 1986 , Bar to President’s Police Medal for Gallantry – 1987, President’s Police Medal for Gallantry – 1988, Bar to President’s Police Medal for Gallantry – 1989, President’s Police Medal for Long and Meritorious Service – 1990, President’s Police Medal for Distinguished Service – 1996, Kathin Seva Medal – 2001, Bar to Kathin Seva Medal – 2002 and other awards to his credit makes him a highly respectable professional in police and education circles alike. He has directly worked for the modernization and induction of state-of-the-art technology and universal best practices to make police effective and people friendly. He completed M. Sc. from Allahabad University in 1972 and Ph. D. in Ecology from Kumaon University in 1990. He has authored 3 books till now entitled, “Ecosystems of Central Himalayas”, “Human Rights and Police” and “Chambal Dacoits-BAAGHIS OR BANDITS”. He has been awarded by National Human Rights Commission (NHRC) for his book entitled, “Human Rights and Police”. The university looks up to Prof. (Dr.) Vikram Singh for his experience and scholarly contributions in the strategic decisions and day-to-day working of the university. He is an admirable and adorable figure amongst the faculty members and students both and is always available as a guiding light for all concerned. He is a pool of knowledge, an excellent orator, and an inspiration for the people belonging to all the generations, especially the youth.`
  },

  {
    id: 2,
    name: "Ms. Sheena Shukla",
    title: "Commercial Strategy & Operations Leader – Google Cloud",
    image: sheenaImg,
    bio: `Sheena Shukla is a seasoned commercial strategy and operations leader with 10+ years of experience driving transformation across global organizations. At Google Cloud, she shapes high-impact programs that translate complex commercial goals into measurable business outcomes.

Known for her expertise in deal strategy, data-driven decisioning, and cross-functional leadership, Sheena brings clarity, precision, and momentum to every initiative she leads. Her strong business acumen and experience across global markets enable her to provide invaluable guidance to students and professionals.`
  },

  {
    id: 3,
    name: "Mr. Mayank Bhati",
    title: "MarTech & Customer Experience Product Leader",
    image: mayankImg,
    bio: `Mayank Bhati is a MarTech and Customer Experience Product Leader with 10+ years of experience in the banking and IT industry. He has spent the last decade shaping AI-powered digital products for global enterprises.

With expertise in product strategy, analytics, and large-scale SaaS implementations, he has delivered transformative solutions across markets. At Sprinklr and ALDI DX, he led global marketing strategy through AI-driven VoC innovation, helping brands listen smarter and act faster.`
  },

  {
    id: 4,
    name: "Ms. Vandana Pareek",
    title: "Senior Business Consultant – Cleargoals, Canada",
    image: vandanaImg,
    bio: `A seasoned and client-focused professional, she brings over a decade of experience leading diverse cross-functional teams and delivering impactful solutions across industries.

Currently serving as a Senior Business Consultant at Cleargoals, Canada, she manages complex projects with strong organizational, analytical, and leadership skills. Her dedication to exceeding customer expectations is reflected in her resilience and consistent track record of success.

With expertise in project management and software development, she has delivered dynamic, cost-effective solutions for multiple global clients. She also excels in business development, process optimization, and team building.

Deeply committed to guiding students, her international exposure and understanding of global work culture make her an excellent mentor for EduGlobal Gateway students.`
  },

  {
    id: 5,
    name: "Mr. Siddharth Vyas",
    title: "Enterprise Solutions Architect – Cloud, SaaS & IIoT",
    image: siddharthImg,
    bio: `With over 13 years of experience in business engagement, software development, and solution delivery across globally diverse environments, Mr. Vyas brings deep expertise in transformative digital initiatives.

A specialist in Cloud, SaaS, PaaS, and Industrial Internet of Things (IIoT), he has delivered impactful solutions to more than 100 global customers. His collaborative approach with stakeholders ensures solutions aligned with real-world needs.

Focused strongly on the Life Sciences and Healthcare sectors, he designs scalable, high-value, future-ready systems. Passionate about guiding students in study-abroad pathways, he offers invaluable insights into global education, career planning, and adapting to international work environments.`
  }
];

export default function Advisors() {
  return (
    <section id="advisors" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {advisors.map((adv) => (
            <div
              key={adv.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              {/* Left: Photo */}
              <div className="flex-shrink-0 w-full md:w-36 lg:w-44">
                <img
                  src={adv.image}
                  alt={`${adv.name} photo`}
                  className="w-full h-auto object-cover rounded-xl border border-gray-100 shadow-sm"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {adv.name}
                </h3>

                <p className="text-sm text-blue-700 font-medium mt-1">
                  {adv.title}
                </p>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {adv.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
