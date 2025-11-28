// src/components/sections/countries/CountrySection.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CountrySection({ data }) {
  if (!data) return null;

  return (
    <section className="w-full bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">

        {/* Breadcrumb */}
        {/* <nav className="text-sm text-slate-500 mb-2" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link to="/countries" className="hover:underline">Countries</Link></li>
            <li>/</li>
            <li className="text-slate-700 font-semibold" aria-current="page">{data.heading || data.name}</li>
          </ol>
        </nav> */}

        {/* Page heading (country name) */}
        <header>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
            {data.heading || data.name}
          </h1>
          {data.description && (
            <p className="mt-3 text-lg text-slate-600 max-w-3xl">
              {data.description}
            </p>
          )}
        </header>

        {/* Hero image */}
        {data.heroImage && (
          <div>
            <img
              src={data.heroImage}
              alt={`View representing ${data.name}`}
              loading="lazy"
              className="w-full rounded-lg shadow-md object-contain h-56 md:h-72 lg:h-96 bg-slate-50"
            />
          </div>
        )}

        {/* Welcoming hub for Indian students */}
        {data.welcomingHub && (
          <section className="p-6 rounded-lg bg-blue-50 border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-900">{data.welcomingHub.title}</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              {data.welcomingHub.points && data.welcomingHub.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1 text-lg">•</span>
                  <p className="text-sm leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why Choose */}
        {data.whyChoose && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose {data.name}?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Top Universities + photo */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Top Universities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 grid grid-cols-1 gap-3">
              {data.universities && data.universities.list && data.universities.list.map((uni, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-lg border shadow-sm">
                  <p className="font-medium">{uni}</p>
                </div>
              ))}
            </div>

            {data.universities && data.universities.photo && (
              <div className="flex items-center justify-center">
                <img
                  src={data.universities.photo}
                  alt={`${data.name} universities`}
                  loading="lazy"
                  className="w-full rounded-lg shadow-md object-cover h-56"
                />
              </div>
            )}
          </div>
        </section>

        {/* Eligibility */}
        {data.eligibility && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              {data.eligibility.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA (same as before) */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-white border">
          <h3 className="text-xl font-bold">Need Help Planning Your Application?</h3>
          <p className="text-slate-700 mt-2">
            Contact us for personalized counselling and application support.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Book Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}

CountrySection.propTypes = {
  data: PropTypes.object,
};

CountrySection.defaultProps = {
  data: {},
};
