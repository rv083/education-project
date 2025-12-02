// src/components/sections/Advisors.jsx
import React from "react";

// Import individual images from src/assets
import vikramImg from "../../assets/vikram.jpeg";
import sheenaImg from "../../assets/sheena.jpeg";
import mayankImg from "../../assets/mayank.jpeg";
import vandanaImg from "../../assets/vandana.jpeg";
import siddharthImg from "../../assets/siddharth.jpeg";
import adityaImg from "../../assets/aditya.jpg";
import sourabhImg from "../../assets/sourabh.jpg";
const advisors = [
  {
    id: 1,
    name: "Prof. (Dr.) Vikram Singh",
    title: "Retired Director General of Police (DGP) – Uttar Pradesh",
    image: vikramImg,
bio: `Retired Director General of Police (DGP) Uttar Pradesh, he is a well-renowned name in the nation for his tireless efforts in curbing crime and establishing law and order in society.

A person with high integrity, discipline, and character, Prof. (Dr.) Vikram Singh is a household name when it comes to voicing opinions on matters of public importance.

He is a pool of knowledge, an excellent orator, and an inspiration for people of all generations, especially the youth.

EduGlobal Gateway looks up to Prof. (Dr.) Vikram Singh for his experience, scholarly contributions, and guidance in the strategic decisions of EduGlobal Gateway Consultancy.`
  },

  {
  id: 2,
  name: "Mr. Saurabh Mohan",
  title: "Overseas Admissions Expert",
  image: sourabhImg, // add image when available
  bio: `Mr. Saurabh Mohan has more than 20 years of hands-on experience in overseas admissions across many prestigious universities.

He has guided countless students toward top global institutions, helping them secure admissions in highly competitive programs.

With deep expertise in the admission process, program selection, and aligning academic choices with industry requirements, he plays a crucial role at EduGlobal Gateway Consultancy.

His insights and experience are a strong guiding force for EduGlobal Gateway and its students in choosing the best universities for their UG and PG programs.`
}
  ,
  {
    id: 3,
    name: "Ms. Sheena Shukla",
    title: "Commercial Strategy & Operations Leader – Google Cloud",
    image: sheenaImg,
    bio: `Sheena Shukla is a seasoned commercial strategy and operations leader with 10+ years of experience driving transformation across global organizations. At Google Cloud, she shapes high-impact programs that translate complex commercial goals into measurable business outcomes.

Known for her expertise in deal strategy, data-driven decisioning, and cross-functional leadership, Sheena brings clarity, precision, and momentum to every initiative she leads. Her strong business acumen and experience across global markets enable her to provide invaluable guidance to students and professionals.`
  },

  {
    id: 4,
    name: "Mr. Mayank Bhati",
    title: "MarTech & Customer Experience Product Leader",
    image: mayankImg,
    bio: `Mayank Bhati is a MarTech and Customer Experience Product Leader with 10+ years of experience in the banking and IT industry. He has spent the last decade shaping AI-powered digital products for global enterprises.

With expertise in product strategy, analytics, and large-scale SaaS implementations, he has delivered transformative solutions across markets. At Sprinklr and ALDI DX, he led global marketing strategy through AI-driven VoC innovation, helping brands listen smarter and act faster.`
  },

  {
    id: 5,
    name: "Ms. Vandana Pareek",
    title: "Senior Business Consultant – Cleargoals, Canada",
    image: vandanaImg,
    bio: `A seasoned and client-focused professional, she brings over a decade of experience leading diverse cross-functional teams and delivering impactful solutions across industries.

Currently serving as a Senior Business Consultant at Cleargoals, Canada, she manages complex projects with strong organizational, analytical, and leadership skills. Her dedication to exceeding customer expectations is reflected in her resilience and consistent track record of success.

With expertise in project management and software development, she has delivered dynamic, cost-effective solutions for multiple global clients. She also excels in business development, process optimization, and team building.

Deeply committed to guiding students, her international exposure and understanding of global work culture make her an excellent mentor for EduGlobal Gateway students.`
  },

  {
    id: 6,
    name: "Mr. Siddharth Vyas",
    title: "Enterprise Solutions Architect – Cloud, SaaS & IIoT",
    image: siddharthImg,
    bio: `With over 13 years of experience in business engagement, software development, and solution delivery across globally diverse environments, Mr. Vyas brings deep expertise in transformative digital initiatives.

A specialist in Cloud, SaaS, PaaS, and Industrial Internet of Things (IIoT), he has delivered impactful solutions to more than 100 global customers. His collaborative approach with stakeholders ensures solutions aligned with real-world needs.

Focused strongly on the Life Sciences and Healthcare sectors, he designs scalable, high-value, future-ready systems. Passionate about guiding students in study-abroad pathways, he offers invaluable insights into global education, career planning, and adapting to international work environments.`
  },

   {
  id: 7,
  name: "Mr. Aditya Rana",
  title: "Program Director – Cognizant USA",
  image: adityaImg,
  bio: `Mr. Aditya has over 20 years of IT consulting experience, working with leading organizations such as Cognizant, Tata Consultancy Services (TCS), and Nucleus Software. His expertise spans multiple domains, including Retail, Pharmacy, Banking, and Hospitality.

A forward-thinking technology leader, he excels at integrating modern technology stacks — including Generative AI — to drive innovation and enable business transformation. His strategic mindset and deep industry experience make him a key contributor in shaping future-ready enterprise solutions.`
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
