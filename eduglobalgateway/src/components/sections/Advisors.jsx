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
import kakkarImg from "../../assets/kakkarsir.jpg";

const advisors = [
  {
    id: 1,
    name: "Prof. (Dr.) Vikram Singh",
    title: "Strategic Advisor",
    image: vikramImg,
    bio: `Retired Director General of Police (DGP) Uttar Pradesh, Prof. (Dr.) Vikram Singh is a nationally acclaimed figure recognized for his unwavering commitment to curbing crime and upholding law and order. Renowned for his integrity, discipline, and character, he is a trusted voice on matters of public importance and an inspiring figure for people of all generations, particularly the youth. EduGlobal Gateway greatly values Prof. (Dr.) Vikram Singh for his vast experience, scholarly contributions, and insightful guidance, which play a pivotal role in shaping the strategic decisions and vision of EduGlobal Gateway Consultancy.

`
  },

  {
    id: 2,
    name: "Prof. (Dr.) Gurudatt Kakkar",
    title: "Strategic Advisor",
    image: kakkarImg, // add image when available
    bio: `Prof. (Dr.) Gurudatt Kakkar is an accomplished academic leader with over 25 years of experience in higher education, academic administration, institutional development, and policy execution. A distinguished professional in Business Management and Human Resource Development, he has served in senior leadership roles including Pro Vice Chancellor and Acting Vice Chancellor at Career Point University, Kota, Managing Director at Maharishi Arvind University, Jaipur, and Director Academics at Ananta Institute of Medical Science and Research Centre, Rajsamand (Udaipur).
Dr. Kakkar has taught and mentored thousands of students and authored three books along with nearly 100 research papers. His expertise includes accreditation frameworks, regulatory compliance (UGC, NMC, NAAC, AICTE), faculty development, and institution-building from foundation to operational excellence.`
  },

  {
    id: 3,
    name: "Mr. Saurabh Mohan",
    title: "Overseas Admissions Expert",
    image: sourabhImg, // add image when available
    bio: `Mr. Saurabh Mohan brings over 20 years of hands-on experience in overseas admissions, having successfully guided countless students to prestigious universities around the world. His deep expertise in the admissions process, program selection, and aligning academic choices with industry demands makes him an invaluable asset at EduGlobal Gateway Consultancy. By providing personalized guidance and strategic insights, he empowers students to make informed decisions, helping them secure placements in highly competitive undergraduate and postgraduate programs. His experience and mentorship serve as a strong guiding force, ensuring EduGlobal Gateway students choose the best-fit universities for their academic and career aspirations.`
  },

 {
    id: 4,
    name: "Mr. Aditya Rana",
    title: "Program Director – Cognizant USA",
    image: adityaImg,
    bio: `Mr. Aditya has over 20 years of IT consulting experience, working with leading organizations such as Cognizant, Tata Consultancy Services (TCS), and Nucleus Software. His expertise spans multiple domains, including Retail, Pharmacy, Banking, and Hospitality. A forward-thinking technology leader, he excels at integrating modern technology stacks — including Generative AI — to drive innovation and enable business transformation. His strategic mindset and deep industry experience make him a key contributor in shaping future-ready enterprise solutions.

His experience with global enterprises allows him to mentor students on selecting programs that not only match their academic goals but also maximize their career prospects internationally and help students understand how to position their profiles to meet admission requirements.`
  },
{
    id: 5,
    name: "Ms. Sheena Shukla",
    title: "Commercial Strategy & Operations Leader – Google Cloud",
    image: sheenaImg,
    bio: `Ms. Sheena Shukla is a seasoned commercial strategy and operations leader with 10+ years of experience driving transformation across global organizations. At Google Cloud, she shapes high-impact programs that translate complex commercial goals into measurable business outcomes. Known for her expertise in deal strategy, data-driven decisioning, and cross-functional leadership, Ms. Sheena brings clarity, precision, and momentum to every initiative she leads. 
Her strong business acumen and experience across global markets enable her to provide invaluable guidance to students and professionals.`
  },
  {
    id: 6,
    name: "Mr. Mayank Bhati",
    title: "MarTech & Customer Experience Product Leader – Sprinklr",
    image: mayankImg,
    bio: `Mr. Mayank Bhati is a MarTech and Customer Experience Product Leader with 10+ years of experience in the banking and IT industry who has spent the last decade shaping AI-powered digital products for global enterprises. With a background spanning product strategy, analytics, and large-scale SaaS implementations, he has delivered transformative solutions across markets.At Sprinklr and ALDI DX, he led global marketing strategy through AI-driven VoC innovation, helping brands listen smarter and act faster.

Mr. Bhati's extensive international exposure, expertise in AI-powered products, and deep understanding of customer behavior make him an invaluable mentor for EduGlobal Gateway students. He can guide them in making informed educational choices, leveraging digital tools for career planning, and developing the skills needed to excel in a global academic and professional environment.nalized guidance, and a student-centric approach that greatly strengthens Eduglobal’s support system.`
  },

  {
    id: 7,
    name: "Ms. Vandana Pareek",
    title: "Senior Business Consultant – Cleargoals, Canada",
    image: vandanaImg,
    bio: `A seasoned and client-focused professional, she brings over a decade of experience leading diverse cross-functional teams and delivering impactful solutions across industries.Currently serving as a Senior Business Consultant at Cleargoals, Canada, she leverages strong organizational, analytical, and leadership skills to manage complex projects and deliver exceptional client outcomes.
In addition to her achievements, she is deeply committed to guiding students and aspiring professionals. Her international exposure, industry insights, and understanding of global work culture make her an excellent mentor for EduGlobal Gateway students, helping them gain clarity on educational choices, career pathways, and the skills needed to thrive abroad.
`
  },

  {
    id: 8,
    name: "Mr. Siddharth Vyas",
    title: "Enterprise Solutions Architect – TCS, Canada",
    image: siddharthImg,
    bio: `With over 13 years of experience in business engagement, software development, and solution delivery across globally diverse environments, Mr. Vyas brings deep expertise in driving transformative digital initiatives. He has worked extensively with distributed, cross-functional teams to implement innovative solutions that address complex business challenges.Specializing in Cloud, SaaS, PaaS, and Industrial Internet of Things (IIoT) technologies, he has successfully delivered impactful solutions to more than 100 global customers. His strong ability to lead collaborative sessions with business stakeholders, product owners, development teams, and end-users ensures that every solution is aligned with real-world needs.

In addition to his professional achievements, Mr. Vyas is passionate about guiding students in their study-abroad aspirations. His global exposure and experience working across diverse cultures allow him to offer valuable insights into international education pathways, career planning, and adapting to global work environments. He actively supports students in making informed decisions about courses, universities, and career opportunities, helping them prepare confidently for their academic journey overseas.`
  },
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
