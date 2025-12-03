// src/components/sections/Univ.jsx
import React from "react";
import { motion } from "framer-motion";

import tio from "../../assets/tio.png";
import imsc from "../../assets/imsc.png";
import hau from "../../assets/hau.png";
import griffith from "../../assets/griffithcollege.jpg";
import eu from "../../assets/eu global.png";

/**
 * Sample universities
 */
export const universitiesSample = [
  {
    id: 1,
    name: "TIO Business School",
    subtitle: "Amsterdam, Netherlands",
    logoUrl: tio,
    websiteUrl: "https://www.tio.nl/en/",
  },
  {
    id: 2,
    name: "International Management & Sports College (IMSC)",
    subtitle: "Singapore",
    logoUrl: imsc,
    websiteUrl: "https://imsc.edu.sg/",
  },
  {
    id: 3,
    name: "Hellenic American University",
    subtitle: "Athens, Greece",
    logoUrl: hau,
    websiteUrl: "https://www.hauniv.edu/",
  },
  {
    id: 4,
    name: "Griffith College",
    subtitle: "Dublin, Ireland",
    logoUrl: griffith,
    websiteUrl: "https://www.griffith.ie/locations/cork",
  },
  {
    id: 5,
    name: "EU Global Institute of Innovation & Technology",
    subtitle: "Malta",
    logoUrl: eu,
    websiteUrl: "https://www.euglobal.edu.eu/",
  },
  {
    id: 6,
    name: "University of Central Lancashire (UCLan)",
    subtitle: "Lancashire, UK",
    logoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC5nfWgHTo2aFy8vqaQScyv7XxuyogqNkBb5KbzQoKyba6wzXqhhUp5bxDNvHYMYKQU8&usqp=CAU",
    websiteUrl: "https://www.lancashire.ac.uk/",
  },
];

export default function Universities({ list = universitiesSample }) {
  return (
    <section id="universities" className="py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Partner Universities
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Our global partners — trusted institutions for international students.
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((u, i) => (
            <motion.a
              key={u.id}
              href={u.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className="group block rounded-2xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-sm hover:shadow-lg transition-transform duration-200"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="w-36 h-24 flex items-center justify-center mb-4">
                  <img
                    src={u.logoUrl}
                    alt={`${u.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='288' height='96'><rect width='100%' height='100%' fill='%23eef2ff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23707f94' font-family='Arial' font-size='14'>Logo unavailable</text></svg>";
                    }}
                  />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-slate-900 text-center">
                  {u.name}
                </h3>

                {u.subtitle && (
                  <p className="mt-1 text-xs md:text-sm text-slate-500 text-center">
                    {u.subtitle}
                  </p>
                )}

                <div className="mt-4 flex items-center gap-1 text-xs text-slate-500">
                  <span>Visit site</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-slate-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5h6v6m-6-6L21 12m-7.5-7.5L3 21"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {!list.length && (
          <p className="mt-6 text-sm text-slate-500">
            No universities available. Add entries to the list.
          </p>
        )}
      </div>
    </section>
  );
}
