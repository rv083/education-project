// src/pages/Services.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// existing sections you already made (assumed paths)
import CareerCounselling from "../components/sections/CareerCounselling";
import CorporateTraining from "../components/sections/CorporateTraining";

// newly created sections
import UniversityShortlisting from "../components/sections/services_sections/UniversityShortlisting";
import ApplicationAssistance from "../components/sections/services_sections/ApplicationAssistance";
import DocumentPreparations from "../components/sections/services_sections/DocumentPreparations";
import VisaGuidance from "../components/sections/services_sections/VisaGuidance";
import TestPreparation from "../components/sections/services_sections/TestPreparation";
import ScholarshipHelp from "../components/sections/services_sections/ScholarshipHelp";
import PreDepartureBriefing from "../components/sections/services_sections/PreDepartureBriefing";

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-20">
        {/* Existing sections (already created by you) */}
        <CareerCounselling />
        <CorporateTraining />

        {/* New service sections (each in its own file) */}
        <UniversityShortlisting />
        <ApplicationAssistance />
        <DocumentPreparations />
        <VisaGuidance />
        <TestPreparation />
        <ScholarshipHelp />
        <PreDepartureBriefing />

        {/* Keep the exam sections you already had (IELTS/TOEFL/PTE/SAT) */}
        
      </main>

      <Footer />
    </div>
  );
}
