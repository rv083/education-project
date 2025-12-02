// src/components/layout/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_embedded.svg";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // toggles bg/shadow after small scroll
  const [hidden, setHidden] = useState(false); // hides header on scroll down

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;

      // small threshold for background/shadow
      setScrolled(y > 40);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // if scrolling down and scrolled beyond threshold -> hide header
          if (y > lastY && y > 80) {
            setHidden(true);
          } else if (y < lastY) {
            // scrolling up -> show header
            setHidden(false);
          }
          lastY = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      // Keep sticky and animate with translateY for consistent hide/show behavior
      className={`w-full top-0 left-0 z-50 sticky transition-transform duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ willChange: "transform" }}
    >
      {/* Top: Logo and Text close together, both very large */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center gap-4 md:gap-6">
        {/* Big Logo — scaled visually without increasing layout size */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          <img
            src={logo}
            alt="EduGlobalGateway Logo"
            className="object-contain scale-125"
          />
        </div>

        {/* Big Name + Tagline */}
        <div className="flex flex-col text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
            EduGlobal Gateway
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-extrabold text-slate-700 -mt-1">
            Your pathway to study abroad
          </p>
        </div>
      </div>

      {/* Bottom: Navigation bar */}
      <nav className="w-full border-t border-b bg-white/0 relative z-40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Desktop nav (centered links) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-6 text-[15px] font-medium flex-nowrap whitespace-nowrap">
              <Link
                to="/"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Home
              </Link>
              {/* Study Abroad with dropdown */}
              
              <Link
                to="/services"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Services
              </Link>
              <Link
                to="/#career"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Career Counselling
              </Link>

              <Link
                to="/#corporate"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Corporate Training
              </Link>

              <Link
                to="/countries"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Countries
              </Link>

              <Link
                to="/universities"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Partner Institutions
              </Link>

              <Link
                to="/advisory-board"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                Advisory Board
              </Link>

              <Link
                to="/about"
                className="text-slate-700 hover:text-blue-600 transition"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right side: Contact button (desktop) + mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-block px-4 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition whitespace-nowrap"
            >
              Contact
            </a>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t shadow-md py-3">
            <ul className="flex flex-col gap-1 text-base font-medium px-4">
              {/* ADDED: Home */}
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50 text-slate-700"
                >
                  Home
                </Link>
              </li>

              {/* ADDED: Services */}
              <li>
                <Link
                  to="/services"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50 text-slate-700"
                >
                  Services
                </Link>
              </li>

              {/* Study Abroad dropdown (keeps original behavior) */}
              

              <li>
                <Link
                  to="/#career"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50"
                >
                  Career Counselling
                </Link>
              </li>

              <li>
                <Link
                  to="/#corporate"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50"
                >
                  Corporate Training
                </Link>
              </li>
              
              <li>
                <Link
                  to="/countries"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50"
                >
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  to="/universities"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50"
                >
                  Partner Institutions
                </Link>
              </li>

              <li>
                <Link
                  to="/advisory-board"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50"
                >
                  Advisory Board
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 rounded hover:bg-blue-50"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 px-4 py-2 rounded-md bg-blue-600 text-white text-center block hover:bg-blue-700 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}