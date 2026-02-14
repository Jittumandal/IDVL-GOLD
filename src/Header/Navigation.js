import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const wrapperRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
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

  useEffect(() => {
    // lock body scroll when mobile menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
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
                    className={`font-medium inline-flex items-center gap-1 ${isActive("/services")
                      ? "border-b-2 border-green-500 pb-1 text-green-500"
                      : "text-gray-700 hover:text-green-500"
                      }`}
                  >
                    Services
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-40 mt-2 w-48 rounded border border-gray-200 bg-white py-2 shadow-lg">
                      <Link
                        to="/services"
                        className="block px-4 py-2 hover:bg-green-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        All Services
                      </Link>
                      <Link
                        to="/services/diagnostics"
                        className="block px-4 py-2 hover:bg-green-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        Diagnostics
                      </Link>
                      <Link
                        to="/services/consulting"
                        className="block px-4 py-2 hover:bg-green-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        Consulting
                      </Link>
                      <Link
                        to="/services/training"
                        className="block px-4 py-2 hover:bg-green-50"
                        onClick={() => setServicesOpen(false)}
                      >
                        Training
                      </Link>
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
                  <button className="text-gray-700 hover:text-green-500">
                    <IoSearch size={20} />
                  </button>

                  <span className="mx-2 text-gray-300">|</span>

                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-green-500"
                  >
                    <FaUser size={20} />
                  </Link>

                  <Link
                    to="/verify-report"
                    className="ml-2 rounded border border-green-500 px-4 py-1 text-green-500 hover:bg-green-50"
                  >
                    Verify Report
                  </Link>
                </div>
              </div>
            </div>

            <button
              className="text-gray-700 md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

          </nav>
        </div>
      </header>

      {/* Mobile overlay + slide-in drawer (left -> right) rendered outside header so it sits above everything */}
      <div className={`fixed inset-0 z-50 pointer-events-none`} aria-hidden={!menuOpen}>
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />

        <aside aria-hidden={!menuOpen} className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 pointer-events-auto z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3">
              <img src="/img/logo.png" alt="logo" className="h-10 w-10 object-contain" />
              <div>
                <div className="font-semibold">IDVL</div>
              </div>
            </div>
            <button className="text-gray-700 p-2 rounded hover:bg-gray-100" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-full">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={`py-3 rounded px-2 ${isActive("/") ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Diamond 4Cs</Link>
              <Link to="/about" className={`py-3 rounded px-2 ${isActive("/about") ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/reports" className={`py-3 rounded px-2 ${isActive("/reports") ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Grading & Reports</Link>

              <div>
                <button className="w-full flex items-center justify-between py-3 px-2 rounded text-gray-700 hover:bg-gray-50" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                  <span className={`${isActive("/services") ? 'text-green-600 font-medium' : ''}`}>Services</span>
                  <svg className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>

                {mobileServicesOpen && (
                  <div className="pl-3 mt-1 space-y-1">
                    <Link to="/services" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>All Services</Link>
                    <Link to="/services/diagnostics" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Diagnostics</Link>
                    <Link to="/services/consulting" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Consulting</Link>
                    <Link to="/services/training" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Training</Link>
                  </div>
                )}
              </div>

              <Link to="/careers" className={`py-3 rounded px-2 ${isActive("/careers") ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Careers</Link>
              <Link to="/blog" className={`py-3 rounded px-2 ${isActive("/blog") ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Blog</Link>

              <div className="pt-4 border-t mt-4 flex items-center gap-3">
                <button className="text-gray-700" onClick={() => setMenuOpen(false)}>
                  <IoSearch size={18} />
                </button>
                <Link to="/login" className="text-gray-700" onClick={() => setMenuOpen(false)}>
                  <FaUser size={18} />
                </Link>
                <Link to="/verify-report" className="ml-2 rounded border border-green-500 px-3 py-1 text-green-500" onClick={() => setMenuOpen(false)}>Verify Report</Link>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}