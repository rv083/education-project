// src/components/sections/Advisors.jsx
import React from "react";

const advisors = [
  { id: 1, name: "Dr. Ananya Sharma", title: "Senior Education Advisor" },
  { id: 2, name: "Mr. Rajiv Kapoor", title: "Immigration & Visa Expert" },
  { id: 3, name: "Prof. Meera Joshi", title: "Academic Partnerships Lead" },
  { id: 4, name: "Ms. Sneha Verma", title: "Career Development Specialist" },
  { id: 5, name: "Dr. Vikram Patel", title: "Global Recruitment Advisor" },
];

// 60-ish word placeholder bio (approx. 60-64 words)
const placeholderBio =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae justo vitae arcu facilisis bibendum. Curabitur non lectus vitae urna gravida sodales. Integer facilisis, sapien a cursus tincidunt, nisl urna fermentum augue, sed efficitur nisl neque vitae nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Phasellus euismod, lorem at posuere finibus, mi nisl convallis odio, at tincidunt libero metus a odio.";

export default function Advisors() {
  // Use the uploaded local image path as requested
  const imageUrl = "/mnt/data/f792f0f9-b656-49a7-9cec-843afc7e9172.png";

  return (
    <section id="advisors" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-2xl md:text-3xl font-extrabold text-blue-800 mb-6">
          Our Advisors
        </h2> */}

        <div className="space-y-8">
          {advisors.map((adv) => (
            <div
              key={adv.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-white rounded-2xl p-4 md:p-6 shadow-sm"
            >
              {/* Left: Photo */}
              <div className="flex-shrink-0 w-full md:w-36 lg:w-44">
                <img
                  src={imageUrl}
                  alt={`${adv.name} photo`}
                  className="w-full h-auto object-cover rounded-xl border border-gray-100 shadow-sm"
                />
              </div>

              {/* Right: Text */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {adv.name}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">{adv.title}</p>
                  </div>
                </div>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {placeholderBio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
