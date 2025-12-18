import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main className="flex items-center justify-center px-6 py-32">
        <div className="max-w-xl text-center bg-blue-50 p-10 rounded-2xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            Thank You!
          </h1>

          <p className="mt-4 text-slate-700 text-lg">
            Your message has been successfully submitted.  
            Our team will get back to you within 24 hours.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
