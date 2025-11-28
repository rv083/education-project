// src/pages/countries/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const countries = [
  { slug: "america", name: "USA" },
  { slug: "uk", name: "United Kingdom" },
  { slug: "canada", name: "Canada" },
  // add more
];

export default function CountriesIndex() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {countries.map((c) => (
          <Link key={c.slug} to={`/country/${c.slug}`} className="p-4 border rounded hover:shadow">
            <h3 className="font-semibold">{c.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
