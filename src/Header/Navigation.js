import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAdminAuthenticated, removeAdminToken } from "../utils/auth";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [mobileReportsOpen, setMobileReportsOpen] = useState(false);

  const wrapperRef = useRef(null);
  const reportsRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const closeTimeoutReportsRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(isAdminAuthenticated());

  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Keep admin state in sync across tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'adminToken') {
        setIsAdmin(isAdminAuthenticated());
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Keep admin state in sync within the same tab via custom events
  useEffect(() => {
    const onLogin = () => setIsAdmin(true);
    const onLogout = () => setIsAdmin(false);
    window.addEventListener('admin-login', onLogin);
    window.addEventListener('admin-logout', onLogout);
    return () => {
      window.removeEventListener('admin-login', onLogin);
      window.removeEventListener('admin-logout', onLogout);
    };
  }, []);

  const handleLogout = () => {
    removeAdminToken();
    setIsAdmin(false);
    try { window.dispatchEvent(new Event('admin-logout')); } catch { }
    navigate('/login');
  };

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

  const handleReportsEnter = () => {
    if (closeTimeoutReportsRef.current) {
      clearTimeout(closeTimeoutReportsRef.current);
      closeTimeoutReportsRef.current = null;
    }
    setReportsOpen(true);
  };

  const handleReportsLeave = () => {
    closeTimeoutReportsRef.current = setTimeout(() => setReportsOpen(false), 150);
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
          <nav className="flex items-center justify-between py-2">
            <Link to="/" className="logo flex items-center gap-2">
              <img
                src="/img/logo.png"
                alt="orangeox Logo"
                className="h-16 w-16 object-contain"
              />
              IDVL
            </Link>

            {!isAdmin ? (
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

                  <div
                    ref={reportsRef}
                    onMouseEnter={handleReportsEnter}
                    onMouseLeave={handleReportsLeave}
                    className="relative"
                  >
                    <button
                      onClick={() => setReportsOpen(!reportsOpen)}
                      className={`font-medium inline-flex items-center gap-1 ${isActive("/reports")
                        ? "border-b-2 border-orange-500 pb-1 text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                        }`}
                    >
                      Grading & Reports
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

                    {reportsOpen && (
                      <div className="absolute left-0 top-full z-40 mt-2 w-60 rounded border border-gray-200 bg-white py-2 shadow-lg">
                        <Link
                          to="/reports"
                          className="block px-4 py-2 hover:bg-green-50 font-medium text-gray-900"
                          onClick={() => setReportsOpen(false)}
                        >
                          Grading & Reports
                        </Link>
                        <Link
                          to="/reports/colored-stone"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setReportsOpen(false)}
                        >
                          Coloured Stone Report
                        </Link>
                        <Link
                          to="/reports/jewellery"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setReportsOpen(false)}
                        >
                          Jewellery Report
                        </Link>
                        <Link
                          to="/reports/diamond"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setReportsOpen(false)}
                        >
                          Diamond Report
                        </Link>
                      </div>
                    )}
                  </div>

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
                      <div className="absolute left-0 top-full z-40 mt-2 w-56 rounded border border-gray-200 bg-white py-2 shadow-lg">

                        <Link
                          to="/services/screening"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          Diamond Screening
                        </Link>
                        <Link
                          to="/services/sorting"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          Diamond Sorting
                        </Link>
                        <Link
                          to="/gem-identification-report"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          Gem Identification
                        </Link>
                        <Link
                          to="/services/certification"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          Certification
                        </Link>
                        <Link
                          to="/services/training"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          Training & Consulting
                        </Link>
                        <Link
                          to="/services/advanced-testing"
                          className="block px-4 py-2 hover:bg-green-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          Advanced Testing
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className={`${isActive("/contact")
                      ? "border-b-2 border-green-500 pb-1 text-green-500"
                      : "text-gray-700 hover:text-green-500"
                      }`}
                  >
                    Contact
                  </Link>

                  <div className="flex items-center gap-4">


                    <Link
                      to="/verify-report"
                      className="ml-2 rounded border border-green-500 px-4 py-2 text-green-500 hover:bg-green-50"
                    >
                      Verify Report
                    </Link>
                    <Link
                      to="/login"
                      className="login rounded border border-green-500 px-4 py-1 text-green-500 hover:bg-green-50"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden w-full items-center justify-end md:flex">
                <div className="flex items-center gap-8 pr-8">
                  <button onClick={handleLogout} className="ml-2 rounded border border-green-500 px-4 py-1 text-green-500 hover:bg-green-50">Logout</button>
                </div>
              </div>
            )}

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

        <aside aria-hidden={!menuOpen} className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 pointer-events-auto z-50 flex flex-col ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
            <div className="flex items-center gap-3">
              <img src="/img/logo.png" alt="logo" className="h-10 w-10 object-contain" />
              <div className="font-semibold">IDVL</div>
            </div>
            <button className="text-gray-700 p-2 rounded hover:bg-gray-100" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {!isAdmin ? (
              <>
                <div className="p-4 space-y-2">
                  <Link to="/" className={`block py-3 rounded px-2 ${isActive("/") ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Diamond 4Cs</Link>
                  <Link to="/about" className={`block py-3 rounded px-2 ${isActive("/about") ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>About</Link>

                  <div>
                    <button className="w-full flex items-center justify-between py-3 px-2 rounded text-gray-700 hover:bg-gray-50" onClick={() => setMobileReportsOpen(!mobileReportsOpen)}>
                      <span className={`${isActive("/reports") ? 'text-orange-600 font-medium' : ''}`}>Grading & Reports</span>
                      <svg className={`h-4 w-4 transition-transform ${mobileReportsOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {mobileReportsOpen && (
                      <div className="pl-3 mt-1 space-y-1">
                        <Link to="/reports" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50 font-medium" onClick={() => { setMenuOpen(false); setMobileReportsOpen(false); }}>Grading & Reports</Link>
                        <Link to="/reports/colored-stone" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileReportsOpen(false); }}>Colored Stone Report</Link>
                        <Link to="/reports/jewellery" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileReportsOpen(false); }}>Jewellery Report</Link>
                        <Link to="/reports/diamond" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileReportsOpen(false); }}>Diamond Reports</Link>
                      </div>
                    )}
                  </div>

                  <div>
                    <button className="w-full flex items-center justify-between py-3 px-2 rounded text-gray-700 hover:bg-gray-50" onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                      <span className={`${isActive("/services") ? 'text-green-600 font-medium' : ''}`}>Services</span>
                      <svg className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-3 mt-1 space-y-1">
                        <Link to="/services/screening" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Diamond Screening</Link>
                        <Link to="/services/sorting" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Diamond Sorting</Link>
                        <Link to="/gem-identification-report" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Gem Identification Report</Link>
                        <Link to="/services/certification" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Certification</Link>
                        <Link to="/services/training" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Training & Consulting</Link>
                        <Link to="/services/advanced-testing" className="block py-2 text-gray-700 rounded px-2 hover:bg-gray-50" onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}>Advanced Testing</Link>
                      </div>
                    )}
                  </div>

                  <Link to="/contact" className={`block py-3 rounded px-2 ${isActive("/contact") ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
                <div className="p-4 flex-shrink-0">
                  <Link to="/verify-report" className="block text-center rounded border border-green-500 px-3 py-2 text-green-500 hover:bg-green-50" onClick={() => setMenuOpen(false)}>Verify Report</Link>
                  <Link
                    to="/login"
                    className="login block mt-2 text-center rounded border border-green-500 px-3 py-2 text-green-500 hover:bg-green-50"
                  >
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 space-y-2">
                  <button onClick={() => { setMenuOpen(false); handleLogout(); }} className="w-full text-left py-3 rounded px-2 text-gray-700 hover:bg-gray-50">Logout</button>
                </div>
              </>
            )}
          </nav>


        </aside>
      </div>
    </>
  );
}