import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="relative  bg-contain bg-center bg-no-repeat px-4 pb-4 pt-10 text-gray-200">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#474747]/90"></div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-8 pt-8 md:flex-row">
        {/* Left: Logo and About */}
        <div className="min-w-[220px] flex-1">
          <div className="mb-4 flex items-center gap-2">
            <img src="/img/logo.png" alt="GreeNox Logo" className="h-10 w-10" />
            <span className="quiklinks text-2xl font-semibold italic">
              IDVL Hallmarking
            </span>
          </div>
          <p className="mb-4 text-sm text-gray-300">
            Dedicated to excellence in precious metals certification, offering trusted hallmarking services with precision and integrity.
          </p>
          <div className="mt-12 flex gap-5">
            <button
              type="button"
              className="hover:text-green-400"
            >
              <FaFacebook size={32} className="bg-orange" />
            </button>
            <button
              type="button"
              className="hover:text-green-400"
            >
              <FaInstagram size={32} />
            </button>
            <button
              type="button"
              className="hover:text-green-400"
            >
              <IoLogoLinkedin size={32} />
            </button>
            <button type="button" className="hover:text-green-400">
              <FaTwitter size={32} />
            </button>
            <button type="button" className="hover:text-green-400">
              <FaYoutube size={32} />
            </button>
          </div>
        </div>
        {/* Center: Quick Links and Utility Pages */}
        <div className="flex flex-[2] flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="quiklinks mb-2 font-semibold">Services</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/services" className="hover:text-white">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/services/screening" className="hover:text-white">
                  Diamond Screening
                </Link>
              </li>
              <li>
                <Link to="/services/sorting" className="hover:text-white">
                  Diamond Sorting
                </Link>
              </li>
              <li>
                <Link to="/services/certification" className="hover:text-white">
                  Certification
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="quiklinks mb-2 font-semibold">Learn More</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="/gem-identification-report" className="hover:text-white">
                  Gem Identification Report
                </Link>
              </li>

              <li>
                <Link to="/privacypolicy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsconditions" className="hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              {/* <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("target-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Terms & Conditions
                </button>
              </li> */}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <div className="quiklinks mb-2 font-semibold">Contact Info</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>
                <Link to="#" className="hover:text-white mb-2 flex items-center">
                  <MdOutlinePhone size={24} className="inline mr-2 text_title_color " />
                  +91 99998 04777
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white mb-2 flex items-center">
                  <TfiEmail size={24} className="inline mr-2 text_title_color " />
                  info@idvlhallmarking.com
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white mb-2 flex items-center">
                  <IoLocationSharp size={24} className="inline mr-2 text_title_color " />
                  Delhi, India - 110006
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="relative z-10 mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-gray-500 pt-4 md:flex-row">
        <div className="text-sm text-gray-400">
          © 2025{" "}
          <Link to="/" className="no-underline hover:text-white">
            IDVL Hallmarking
          </Link>
          , All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <img src="/img/appstore.png" alt="App Store" className="h-10" />
          <img src="/img/playstore.png" alt="Google Play" className="h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
