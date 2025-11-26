// src/pages/About.jsx
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import shivImg from "../assets/shiv.jpg";
import yaminiImg from "../assets/yamini.jpg";

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

    {/* Box wrapper */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-10 bg-white border border-blue-100 shadow-md rounded-2xl p-10"
    >
      {/* Two founders side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

        {/* Founder - Shiv Kumar */}
        <div className="text-center">
          <img
            src={shivImg}
            alt="Prof. (Dr.) Shiv Kumar - Co-Founder & Director, EduGlobal Gateway"
            className="w-56 h-56 object-contain rounded-xl mx-auto shadow-md"
            loading="lazy"
          />
          <h3 className="mt-5 text-xl font-semibold text-slate-800">
            Prof. (Dr.) Shiv Kumar
          </h3>
          <p className="text-blue-600 font-medium">Co-Founder & Director</p>
          <p className="text-slate-800 font-bold text-sty mt-2 text-sm leading-relaxed">
            Over 20+ years of experience in academia and corporate with
            B.E. (CSE), MBA – Australia, Ph.D. – Management
          </p>
        </div>

        {/* Founder - Yamini Pandey */}
        <div className="text-center">
          <img
            src={yaminiImg}
            alt="Prof. (Dr.) Yamini Pandey - Co-Founder & Director, EduGlobal Gateway"
            className="w-56 h-56 object-contain rounded-xl mx-auto shadow-md"
            loading="lazy"
          />
          <h3 className="mt-5 text-xl font-semibold text-slate-800">
            Prof. (Dr.) Yamini Pandey
          </h3>
          <p className="text-blue-600 font-medium">Co-Founder & Director</p>
          <p className="text-slate-800 font-bold mt-2 text-sm leading-relaxed">
            Researcher with Ph.D. in Management and 18+ years of experience
            in academia and student affairs
          </p>
        </div>

      </div>

      {/* Message below */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <div className="max-w-3xl mx-auto text-slate-600 text-center text-lg leading-relaxed">
          <p>Dear Students and Parents,</p>

          <p className="mt-4">
            It gives immense pleasure to welcome you to EduGlobal Gateway consultancy
            where we empower you with global education, a gateway for a successful
            academic journey.
          </p>

          <p className="mt-4">
            Studying abroad and cross-cultural learning is allowing students to
            transcend traditional structures and expand their worldview. We,
            EduGlobal Gateway, provide students with the best academic and career
            guidance as well as opportunities for higher education abroad. We believe
            that by studying abroad, you don’t only get an international degree but
            also learn new cultural norms and how the society functions.
          </p>

          <p className="mt-4">
            EduGlobal Gateway truly understands that selecting the right program
            and university is an important decision in every student’s life. Therefore,
            we provide a wide spectrum of personalized services that includes career
            counselling, the best university selection and admission for the required
            program, creating the student’s profile according to the university,
            guiding them to sharpen their skill sets through research for their choice
            of program, language proficiency testing, and visa application assistance.
            Ultimately we ensure that students have access to the best options available
            to study abroad.
          </p>

          <p className="mt-4">
            We look forward to welcome you at EduGlobal Gateway to start your exciting
            educational journey and ensure that you reach new heights in your pursuit
            of the best abroad education.
          </p>
        </div>
      </motion.div>
    </motion.div>

  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}
