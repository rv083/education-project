// src/components/sections/CorporateTraining.jsx
import { motion } from "framer-motion";
import corporateImg from "../../assets/corporate-training.avif";

export default function CorporateTraining() {
  return (
    <section
      id="corporate"
      className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white border border-blue-100 shadow-xl rounded-3xl p-10 md:p-12"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center mb-6">
            Corporate Training
          </h2>

          {/* Text + Image Block */}
          <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">

            <p>
              Our Corporate Training vertical aims to support organizations in building a skilled, confident,
              and future-ready workforce.
            </p>

            <p>
              Our Corporate Training programs are designed to enhance the professional capabilities of employees at all levels. With a focus on
              practical skills, real-world applications, and industry-relevant learning, we offer structured training modules that help teams improve
              performance, productivity, and leadership potential.
            </p>

            {/* Centered larger image between paragraphs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center py-4"
            >
              <div className="w-full max-w-[420px] md:max-w-[520px]">
                <img
                  src={corporateImg}
                  alt="Corporate Training Illustration"
                  className="w-full h-auto object-contain rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <p>
              We provide customized training solutions in key areas such as communication and interpersonal skills, leadership and team development,
              project and time management, workplace professionalism, and technology-driven skill enhancement. Each program is crafted and delivered by
              experienced trainers who bring strong industry expertise and hands-on knowledge.
            </p>

            <p>
              At EduGlobal Gateway, we understand that every organization’s needs are unique. That’s why our training sessions are flexible, interactive,
              and tailored to match business goals, ensuring a meaningful learning experience for every participant. Whether companies are looking to upskill
              their existing workforce or prepare new employees for success, our programs offer measurable value and long-term benefits.
            </p>

            <p className="font-semibold text-blue-700">
              With the addition of Corporate Training as a new vertical, EduGlobal Gateway proudly extends its commitment to not only guiding students but
              also empowering professionals and organizations. Together, we aim to create a stronger bridge between education, skills, and workplace readiness.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Contact for Corporate Training
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative floating accents */}
      <motion.div
        className="absolute -top-8 -left-8 w-36 h-36 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        aria-hidden="true"
      />
    </section>
  );
}
