// src/components/sections/CareerCounselling.jsx
import { motion } from "framer-motion";
import careerImg from "../../assets/career.png"; // your local image

export default function CareerCounselling() {
  return (
    <section
      id="career"
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
            Career Counselling
          </h2>

          {/* Text + Image Block */}
          <div className="space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">

            <p>
              At EduGlobal Gateway, we believe that the foundation of a successful study-abroad journey begins with choosing the right career path.
              To support students in making confident and well-informed decisions, we provide Career Counselling sessions also.
            </p>

            <p>
              Our Career Counselling services are designed to help students understand their strengths, interests, and long-term goals.
              With the guidance of experienced career mentors, students receive personalised counselling sessions that help them explore suitable career options,
              academic pathways, and future opportunities in India and abroad.
            </p>

            {/* Centered large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center py-4"
            >
              <div className="w-full max-w-[420px] md:max-w-[520px]">
                <img
                  src={careerImg}
                  alt="Career Counselling Illustration"
                  className="w-full h-auto object-contain rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <p>
              We use a structured approach that includes aptitude assessments, personality mapping,
              academic profiling, and detailed career guidance discussions. This ensures that every student receives clear direction
              and tailored suggestions that align with their unique abilities and aspirations.
            </p>

            <p>
              Whether a student is confused about choosing the right stream, unsure about college options,
              or exploring global career prospects, our counselling team provides step-by-step support.
              We aim to remove uncertainty, build clarity, and empower both students and parents to make the best decisions for their future.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Book a Counselling Session
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
