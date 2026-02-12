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
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
