// src/pages/countries/index.jsx
import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const countries = [
  { slug: "America", name: "USA", code: "us" },
  { slug: "Ireland", name: "Ireland", code: "ie" },
  { slug: "Canada", name: "Canada", code: "ca" },
  { slug: "Belgium", name: "Belgium", code: "be" },
  { slug: "Denmark", name: "Denmark", code: "dk" },
  { slug: "Australia", name: "Australia", code: "au" },
  { slug: "Luxembourg", name: "Luxembourg", code: "lu" },
  { slug: "Italy", name: "Italy", code: "it" },
  // add more later
];

export default function CountriesIndex() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Page Heading */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
              Explore Study Destinations
            </h1>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Discover top countries for international education and find the
              right destination for your academic journey.
            </p>
          </header>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((c) => (
              <Link
                key={c.slug}
                to={`/country/${c.slug}`}
                className="
                  group p-6 rounded-2xl border border-blue-100 bg-white shadow-sm 
                  hover:shadow-lg transition-all duration-300 
                  hover:-translate-y-1
                "
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  
                  {/* Country Flag (replaces initial circle) */}
                  <img
                    src={`https://flagcdn.com/w80/${c.code}.png`}
                    alt={c.name}
                    className="
                      w-16 h-16 rounded-full object-cover shadow-sm 
                      group-hover:scale-105 transition-transform duration-300
                    "
                  />

                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-blue-700">
                    {c.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Learn more about studying in {c.name}.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative floating blobs */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </section>

      <Footer />
    </>
  );
}
