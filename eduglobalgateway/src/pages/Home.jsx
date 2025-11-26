// import Topbar from '../components/layout/Topbar';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Counters from '../components/sections/Counters';
import Countries from '../components/sections/Countries';
import ServiceGrid from '../components/sections/ServiceGrid';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';
import AboutIntro from '../components/sections/AboutIntro';
import CorporateTraining from '../components/sections/CorporateTraining';
import CareerCounselling from '../components/sections/CareerCounselling';
import Univ from '../components/sections/Univ';
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* <Topbar /> */}
      <Header />
      <main className="pt-4">
        <Hero />
        <AboutIntro />
        {/* <Counters /> */}
        <Countries />
        <CorporateTraining />
        <CareerCounselling />
        <ServiceGrid />
        {/* <Univ /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
