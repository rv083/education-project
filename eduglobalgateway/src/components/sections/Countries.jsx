import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Countries() {
  const countries = [
    { name: "Canada", code: "ca", slug: "Canada" },
    { name: "USA", code: "us", slug: "America" },
    { name: "Australia", code: "au", slug: "Australia" },
    { name: "Ireland", code: "ie", slug: "Ireland" },     // Updated
    { name: "Belgium", code: "be", slug: "Belgium" },     // Updated
    { name: "Many More...", code: "world", slug: "#" },   // Generic world icon
  ];

  return (
    <section
      id="countries"
      className="relative bg-gradient-to-b from-blue-50 to-white py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-800"
        >
          Popular Study Destinations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 mt-2 mb-10 text-base"
        >
          Explore top countries where students thrive academically and culturally
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="bg-white border border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl py-6"
            >
              <Link
                to={country.slug === "#" ? "/countries" : `/country/${country.slug}`}
                className="flex flex-col items-center justify-center"
              >
                {/* Flag or generic world icon */}
                {country.code !== "world" ? (
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={country.name}
                    className="w-10 h-7 object-cover rounded mb-2 shadow-sm"
                  />
                ) : (
                  <div className="w-10 h-10 mb-2 flex items-center justify-center">
                    🌍
                  </div>
                )}

                <span className="font-semibold text-blue-700 text-sm md:text-base">
                  {country.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-10 right-0 w-52 h-52 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </section>
  );
}
