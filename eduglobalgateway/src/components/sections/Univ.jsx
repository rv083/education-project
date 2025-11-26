// src/components/sections/Universities.jsx
import React from "react";
import { motion } from "framer-motion";
import tio from "../../assets/tio.png";
import imsc from "../../assets/imsc.png";
import hau from "../../assets/hau.png";
import griffith from "../../assets/griffithcollege.jpg";
import eu from "../../assets/eu global.png";
/**
 * Sample universities (replace / extend as needed)
 */
export const universitiesSample = [
  {
    id: 1,
    name: "TIO Buisness School , Amsterdam , Netherlands",
    logoUrl: tio,
    websiteUrl: "https://www.tio.nl/en/",
  },
  {
    id: 2,
    name: "Internatinal Management & Sports College (IMSC) , Singapore",
    logoUrl: imsc ,
    websiteUrl: "https://imsc.edu.sg/",
  },
  {
    id: 3,
    name: "Hellenic American University , Athens , Greece",
    logoUrl: hau ,
    websiteUrl: "https://www.hauniv.edu/",
  },
  {
    id: 4,
    name: "Griffith College , Dublin , Ireland",
    logoUrl:
      griffith,
    websiteUrl: "https://www.griffith.ie/locations/cork",
  },
  {
    id: 5,
    name: "EU Global Institute Of Innovation & Technology , Malta",
    logoUrl:
      eu,
    websiteUrl: "https://www.euglobal.edu.eu/",
  },
  {
    id: 6,
    name: "National University of Singapore (NUS)",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/National_University_of_Singapore_logo.svg",
    websiteUrl: "https://www.nus.edu.sg/",
  },
];

/**
 * Universities section
 * Props:
 *  - list (optional): array of university objects -> {id, name, logoUrl, websiteUrl}
 *
 * Default: uses universitiesSample
 */
export default function Universities({ list = universitiesSample }) {
  return (
    <section id="universities" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Partner Universities
          </h2>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((u) => (
            <motion.div
              key={u.id || u.name}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  window.open(u.websiteUrl, "_blank", "noopener");
                }
              }}
              onClick={() => window.open(u.websiteUrl, "_blank", "noopener")}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer text-center"
              aria-label={`Open ${u.name} website`}
            >
              <div className="w-50 h-25 flex items-center justify-center">
                <img
                  src={u.logoUrl}
                  alt={`${u.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='80'><rect width='100%' height='100%' fill='%23f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='12'>No image</text></svg>";
                  }}
                />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-slate-900">
                {u.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {(!list || list.length === 0) && (
          <p className="mt-6 text-sm text-slate-500">
            No universities available. Add entries to the `universitiesSample` or pass a `list` prop.
          </p>
        )}
      </div>
    </section>
  );
}
