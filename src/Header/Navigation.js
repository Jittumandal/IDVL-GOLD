import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile
  const [servicesOpen, setServicesOpen] = useState(false); // desktop services dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile services accordion
  const [megaOpen, setMegaOpen] = useState(false); // desktop mega
  const wrapperRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setMegaOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <nav className="flex items-center justify-between py-1">
          <Link to="/" className="logo flex items-center gap-2">
            <img
              src="/img/logo.png"
              alt="orangeox Logo"
              className="h-20 w-20 object-contain"
            />
            IDVL
          </Link>

          <div className="hidden w-full items-center justify-end md:flex">
            <div className="flex items-center gap-8 pr-8">
              <Link
                to="/"
                className={`font-medium ${isActive("/")
                  ? "border-b-2 border-green-500 text-green-500"
                  : "text-gray-700 hover:text-green-500"
                  }`}
              >
                Diamond 4Cs
              </Link>


              <Link
                to="/about"
                className={`${isActive("/about")
                  ? "border-b-2 border-orange-500 pb-1 text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
                  }`}
              >
                About
              </Link>
              <Link
                to="/reports"
                className={`${isActive("/reports")
                  ? "border-b-2 border-orange-500 pb-1 text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
                  }`}
              >
                Grading & Reports
              </Link>
              <div
                ref={wrapperRef}
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                className="relative"
              >
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`font-medium inline-flex items-center gap-1 ${isActive("/services") ? "border-b-2 border-green-500 pb-1 text-green-500" : "text-gray-700 hover:text-green-500"}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full z-40 mt-2 w-48 rounded border border-gray-200 bg-white py-2 shadow-lg">
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setServicesOpen(false)}>All Services</Link>
                    <Link to="/services/diagnostics" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setServicesOpen(false)}>Diagnostics</Link>
                    <Link to="/services/consulting" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setServicesOpen(false)}>Consulting</Link>
                    <Link to="/services/training" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setServicesOpen(false)}>Training</Link>
                  </div>
                )}
              </div>
              <Link
                to="/careers"
                className={`${isActive("/careers")
                  ? "border-b-2 border-green-500 pb-1 text-green-500"
                  : "text-gray-700 hover:text-green-500"
                  }`}
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className={`${isActive("/blog")
                  ? "border-b-2 border-green-500 pb-1 text-green-500"
                  : "text-gray-700 hover:text-green-500"
                  }`}
              >
                Blog
              </Link>


              <div className="flex items-center gap-4">
                <button
                  className="text-gray-700 hover:text-green-500"
                  aria-label="Search"
                >
                  <IoSearch size={20} className="inline" />
                </button>
                <span className="mx-2 text-gray-300">|</span>
                <Link to="/login" className="text-gray-700 hover:text-green-500" aria-label="Login">
                  <FaUser size={20} className="inline" />
                </Link>
                <Link
                  to="/verify-report"
                  className="ml-2 rounded border border-green-500 bg-white px-4 py-1 font-medium text-green-500 hover:border-green-600 hover:bg-green-50"
                >
                  Verify Report
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="text-gray-700 hover:text-green-500 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed right-0 top-16 z-50 h-full w-3/4 max-w-xs border-l border-gray-200 bg-white shadow-lg md:hidden overflow-y-auto">
            <div className="flex flex-col gap-1 px-4 py-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded font-medium ${isActive("/") ? "bg-green-50 text-green-500" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3 py-2 rounded ${isActive("/about") ? "bg-green-50 text-green-500" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/reports"
                className={`px-3 py-2 rounded ${isActive("/reports") ? "bg-green-50 text-green-500" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setMenuOpen(false)}
              >
                Grading & Reports
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full px-3 py-2 rounded flex items-center justify-between ${mobileServicesOpen ? "bg-green-50 text-green-500" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <span>Services</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-1 flex flex-col gap-1 pl-6 bg-gray-50 rounded py-2">
                    <Link
                      to="/services"
                      className="px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-white rounded"
                      onClick={() => setMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    <Link
                      to="/services/diagnostics"
                      className="px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-white rounded"
                      onClick={() => setMenuOpen(false)}
                    >
                      Diagnostics
                    </Link>
                    <Link
                      to="/services/consulting"
                      className="px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-white rounded"
                      onClick={() => setMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                    <Link
                      to="/services/training"
                      className="px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-white rounded"
                      onClick={() => setMenuOpen(false)}
                    >
                      Training
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/careers"
                className={`px-3 py-2 rounded ${isActive("/careers") ? "bg-green-50 text-green-500" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </Link>

              <Link
                to="/blog"
                className={`px-3 py-2 rounded ${isActive("/blog") ? "bg-green-50 text-green-500" : "text-gray-700 hover:bg-gray-100"}`}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>

              <hr className="my-3 border-gray-200" />

              <div className="flex items-center gap-3 px-1">
                <button className="p-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded" aria-label="Search">
                  <IoSearch size={20} />
                </button>
                <Link
                  to="/login"
                  className="p-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Login"
                >
                  <FaUser size={20} />
                </Link>
                <Link
                  to="/verify-report"
                  className="ml-auto rounded border border-green-500 bg-white px-4 py-2 font-medium text-green-500 hover:border-green-600 hover:bg-green-50 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  Verify
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
