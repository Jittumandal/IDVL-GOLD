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
              {/* <Link
                to="/menu"
                className={`${isActive("/menu") || isMenuActive()
                  ? "border-b-2 border-green-500 pb-1 text-green-500"
                  : "text-gray-700 hover:text-green-500"
                  }`}
              >
                Menu
              </Link> */}

              {/* <Link
                to="/subscription"
                className={`${isActive("/subscription")
                  ? "border-b-2 border-green-500 pb-1 text-green-500"
                  : "text-gray-700 hover:text-green-500"
                  }`}
              >
                Subscription Plan
              </Link> */}
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
          <div className="fixed right-0 top-16 z-50 h-full w-3/4 max-w-xs translate-x-0 transform border-l border-gray-200 bg-white shadow-lg transition-transform duration-300 ease-out md:hidden">
            <div className="flex flex-col gap-4 px-4 py-4">
              <Link
                to="/"
                className={`font-medium ${isActive("/") ? "text-green-500" : "text-gray-700 hover:text-green-500"}`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`${isActive("/about") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/reports"
                className={`${isActive("/reports") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`}
                onClick={() => setMenuOpen(false)}
              >
                Grading & Reports
              </Link>
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between text-left text-gray-700 hover:text-green-500"
                >
                  <span>Services</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 flex flex-col gap-1 pl-3">
                    <Link to="/services" className="text-gray-700 hover:text-green-500" onClick={() => setMenuOpen(false)}>All Services</Link>
                    <Link to="/services/diagnostics" className="text-gray-700 hover:text-green-500" onClick={() => setMenuOpen(false)}>Diagnostics</Link>
                    <Link to="/services/consulting" className="text-gray-700 hover:text-green-500" onClick={() => setMenuOpen(false)}>Consulting</Link>
                    <Link to="/services/training" className="text-gray-700 hover:text-green-500" onClick={() => setMenuOpen(false)}>Training</Link>
                  </div>
                )}
              </div>
              <Link
                to="/careers"
                className={`${isActive("/careers")
                  ? "border-b-2 border-green-500 pb-1 text-green-500"
                  : "text-gray-700 hover:text-green-500"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                Careers
              </Link>
              {/* <Link
                to="/blog"
                className={`${isActive("/blog") ? "text-orange-500" : "text-gray-700 hover:text-orange-500"}`}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link> */}

              <hr className="my-2 border-gray-200" />
              <div className="flex items-center gap-4">
                <button className="text-gray-700 hover:text-green-500" aria-label="Search">
                  <svg className="inline h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <Link to="/login" className="text-gray-700 hover:text-green-500" onClick={() => setMenuOpen(false)} aria-label="Login">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </Link>
                <Link
                  to="/verify-report"
                  className="ml-auto rounded border border-green-500 bg-white px-4 py-1 font-medium text-green-500 hover:border-green-600 hover:bg-green-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Verify Report
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
