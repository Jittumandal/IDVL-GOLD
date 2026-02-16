import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import lazyWithRetry from "../utils/lazyWithRetry";
import ErrorBoundary from "../components/ErrorBoundary";
const Home = lazyWithRetry(() => import("../Home/Home"));
const Blog = lazyWithRetry(() => import("../Blog/Blog"));
const BlogPost = lazyWithRetry(() => import("../pages/BlogPost"));
const About = lazyWithRetry(() => import("../About/About"));
const Contact = lazyWithRetry(() => import("../Contact/Contact"));
const Careers = lazyWithRetry(() => import("../Careers/Careers"));
const Termservice = lazyWithRetry(() => import("../pages/Termservice"));
const Termsconditions = lazyWithRetry(() => import("../pages/Termsconditions"));
const Privacypolicy = lazyWithRetry(() => import("../pages/Privacypolicy"));
const VerifyReport = lazyWithRetry(() => import("../pages/VerifyReport"));
const Reports = lazyWithRetry(() => import("../pages/Reports"));
const GemIdentificationReport = lazyWithRetry(() => import("../pages/GemIdentificationReport"));
const Services = lazyWithRetry(() => import("../pages/Services"));
const DiamondScreening = lazyWithRetry(() => import("../pages/DiamondScreening"));
const DiamondSorting = lazyWithRetry(() => import("../pages/DiamondSorting"));
const Certification = lazyWithRetry(() => import("../pages/Certification"));

export default function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/post/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/termservice" element={<Termservice />} />
          <Route path="/termsconditions" element={<Termsconditions />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/verify-report" element={<VerifyReport />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/gem-identification-report" element={<GemIdentificationReport />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/screening" element={<DiamondScreening />} />
          <Route path="/services/sorting" element={<DiamondSorting />} />
          <Route path="/services/certification" element={<Certification />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
