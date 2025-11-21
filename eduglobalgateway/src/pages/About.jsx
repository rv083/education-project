// src/pages/About.jsx
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="pt-20 pb-16">
        {/* ==================== EduGlobal Gateway ==================== */}
        <section className="bg-gradient-to-b from-white to-blue-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center"
            >
              About EduGlobal Gateway
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-8 text-slate-700 leading-relaxed space-y-5 text-justify bg-white shadow-md border border-blue-100 rounded-2xl p-8"
            >
              <p>
                At EduGlobal Gateway, we believe that the right guidance can turn dreams into reality.
                With a strong commitment to helping students and professionals achieve their international
                aspirations, we specialize in abroad education consultancy, language proficiency training,
                and corporate training. Our expert counsellors provide personalized support in selecting
                the best universities, courses, and countries tailored to your career goals.
              </p>

              <p>
                From application assistance to visa guidance, we ensure a smooth and stress-free journey
                toward your academic future abroad. Alongside academic consultancy, we offer comprehensive
                language coaching designed to enhance English proficiency and boost your confidence in
                achieving top scores in IELTS, TOEFL, and PTE exams.
              </p>

              <p>
                With a focus on trust, transparency, and success, EduGlobal Gateway stands as a one-stop
                solution for all your international education and training needs. Your dream, our guidance –
                together toward global success.
              </p>

              <p>
                For Indian students, studying abroad is more than just earning a degree – it’s a life-changing
                experience. International education opens doors to world-class universities, advanced research
                opportunities, and global career prospects. It helps students gain exposure to diverse cultures,
                develop independent thinking, and build a strong international network.
              </p>

              <p>
                In today’s competitive world, a foreign degree not only enhances knowledge and skills but also
                gives students a global edge in employability. Beyond academics, it nurtures confidence,
                adaptability, and a broader outlook – qualities that shape successful careers and meaningful lives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== Vision ==================== */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center"
            >
              Our Vision
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 bg-blue-50 border border-blue-100 shadow-sm p-6 text-slate-700 text-lg leading-relaxed rounded-xl text-center"
            >
              Our vision is to become a leading global gateway for education, foster career excellence
              and empower the students to be globally competent individuals.
            </motion.p>
          </div>
        </section>

        {/* ==================== Mission ==================== */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center"
            >
              Our Mission
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-6 bg-white border border-blue-100 shadow-md p-6 text-slate-700 text-lg leading-relaxed rounded-xl text-center"
            >
              Our mission is to assist the students to simply choose the best university for their successful
              career advancement by providing ethical, transparent and personalized guidance.
            </motion.p>
          </div>
        </section>

        {/* ==================== Founders ==================== */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-blue-800 text-center"
            >
              Founders
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mt-8 text-slate-600 text-center text-lg"
            >
              Founder details coming soon...
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
