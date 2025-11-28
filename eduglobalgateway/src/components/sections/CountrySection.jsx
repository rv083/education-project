// src/components/sections/countries/CountrySection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CountrySection({ data }) {
  if (!data) return null;

  return (
    <div className="w-full text-slate-900 space-y-20">

      {/* Heading */}
      <header>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          {data.heading || data.name}
        </h1>

        {data.description && (
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        )}
      </header>

      {/* Main Hero Image */}
      {data.heroImage && (
        <img
          src={data.heroImage}
          alt={`View of ${data.name}`}
          className="w-full rounded-xl shadow-md object-cover max-h-[450px]"
        />
      )}

      {/* Welcoming Hub */}
      {data.welcomingHub && (
        <section>
          <h2 className="text-3xl font-bold text-blue-700">
            {data.welcomingHub.title}
          </h2>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            {data.welcomingHub.points?.map((pt, idx) => (
              <li key={idx} className="text-base">
                {pt}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Why Choose */}
      {data.whyChoose && (
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Why Choose {data.name}?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChoose.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-blue-50/60 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Top Universities */}
      {data.universities && (
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Top Universities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              {data.universities.list?.map((uni, i) => (
                <li key={i} className="text-base font-medium">
                  {uni}
                </li>
              ))}
            </ul>

            {data.universities.photo && (
              <img
                src={data.universities.photo}
                alt="Universities"
                className="rounded-xl shadow-md object-cover w-full"
              />
            )}
          </div>
        </section>
      )}

      {/* Eligibility */}
      {data.eligibility && (
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Eligibility Criteria
          </h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            {data.eligibility.map((el, i) => (
              <li key={i} className="text-base">
                {el}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* CTA */}
      <section className="rounded-xl bg-gradient-to-r from-blue-100/60 to-white p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-blue-800">
          Need Help with Your Application?
        </h3>
        <p className="text-slate-700 mt-2 max-w-xl">
          Get personalized guidance, university selection support, and expert documentation help.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
        >
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
}

CountrySection.propTypes = {
  data: PropTypes.object,
};
