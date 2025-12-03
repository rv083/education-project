// src/components/sections/ServicesGrid.jsx
import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  Plane,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Award,
  Users,
} from "lucide-react";

export default function ServicesGrid() {
  // Each card now routes to /services#section-id
  const services = [
    { name: "Career Counselling", href: "/services#career", icon: <Briefcase size={32} className="text-blue-600" /> },
    { name: "University Shortlisting", href: "/services#university-shortlisting", icon: <GraduationCap size={32} className="text-blue-600" /> },
    { name: "Application Assistance", href: "/services#application-assistance", icon: <ClipboardCheck size={32} className="text-blue-600" /> },
    { name: "Document Prep", href: "/services#document-preparations", icon: <FileText size={32} className="text-blue-600" /> },
    { name: "Visa Guidance", href: "/services#visa-guidance", icon: <Plane size={32} className="text-blue-600" /> },
    { name: "Test Preparation", href: "/services#test-prep", icon: <BookOpen size={32} className="text-blue-600" /> },
    { name: "Scholarship Help", href: "/services#scholarship-help", icon: <Award size={32} className="text-blue-600" /> },
    { name: "Pre-departure Briefing", href: "/services#predeparture", icon: <Users size={32} className="text-blue-600" /> },
  ];

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-blue-800"
        >
          Our Core Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-600 mt-3 mb-12 max-w-2xl mx-auto text-base"
        >
          We offer comprehensive guidance to make your study abroad journey smooth and successful — from applications to your first day overseas.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <a key={service.name} href={service.href} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-blue-100 p-6 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h5 className="font-semibold text-blue-800 text-lg">{service.name}</h5>
                <p className="text-sm text-slate-500 mt-2">
                  Expert assistance tailored to your academic goals and international ambitions.
                </p>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
