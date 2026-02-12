import React from "react";
import { Link } from "react-router-dom";

export const Careers = () => {
  // Jobs data for IDVL
  const jobs = [
    {
      title: "Diamond Grading Specialist",
      description:
        "Evaluate and grade diamonds using international certification standards and advanced lab equipment.",
    },
    {
      title: "Gemologist",
      description:
        "Analyze gemstones, verify authenticity, and prepare detailed laboratory certification reports.",
    },
    {
      title: "Lab Operations Executive",
      description:
        "Manage daily laboratory operations, coordinate testing processes, and maintain quality assurance procedures.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-[420px] bg-gradient-to-r from-purple-900 via-blue-900 to-teal-800"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/career.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlend: "overlay",
        }}
      >
        <div className="career_sec mx-auto max-w-6xl px-4 text-center">
          <h1 className="career_h1 animate__animated animate__backInDown mb-6 text-5xl font-bold text-white">
            Join IDVL Team:
            <span className="bg-gradient-to-r from-green-400 via-green-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Diamond & Gemology Career Opportunities
            </span>
          </h1>

          <p className="animate__animated animate__backInDown mb-12 px-24 text-lg leading-relaxed text-gray-200">
            International Diamond Verified Lab (IDVL) is committed to excellence
            in diamond grading, gemstone verification, and certification
            services. We are looking for passionate professionals who want to
            grow in the diamond and gemology industry while maintaining global
            quality standards.
          </p>

          <button className="animate__animated animate__bounceIn inline-block rounded-md bg-orange-500 px-8 py-4 font-semibold text-white transition-all hover:scale-105 mb-4 hover:shadow-lg">
            Submit your resume to &nbsp;
            <a
              href="mailto:info@idvl.in"
              className="text-white hover:underline"
            >
              info@idvl.in
            </a>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* About Us */}
        <div className="mb-4">
          <p className="animate__animated animate__backInUp mb-4 text-lg leading-relaxed text-gray-700">
            International Diamond Verified Lab (IDVL) is a trusted diamond and
            gemstone testing laboratory providing accurate certification,
            grading, and verification services. Our mission is to ensure
            transparency, authenticity, and trust within the global jewelry
            industry.
          </p>
        </div>

        {/* Why Work with Us */}
        <div className="mb-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Why Work with IDVL?
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Join a team of certified gemologists and laboratory professionals
            using advanced technology and international grading standards. IDVL
            promotes professional growth, innovation, and ethical practices in
            the diamond certification industry.
          </p>
        </div>

        {/* Our Features */}
        <div className="mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Our Expertise
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Diamond Certification
              </h3>
              <p className="text-gray-600">
                Professional grading reports based on international diamond
                standards ensuring authenticity and accuracy.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Advanced Lab Technology
              </h3>
              <p className="text-gray-600">
                Use of modern equipment for diamond analysis, gemstone testing,
                and verification processes.
              </p>
            </div>

            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                Trusted Industry Standards
              </h3>
              <p className="text-gray-600">
                IDVL follows ethical practices and global certification
                standards to maintain industry trust and transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Current Openings */}
        <div id="openings">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Current Openings
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-semibold text-green-600">
                  {job.title}
                </h3>
                <p className="mb-4 text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="mt-16 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How to Apply
          </h2>
          <p className="text-gray-600">
            Interested candidates can submit their resume to{" "}
            <a
              href="mailto:info@idvl.in"
              className="text-green-600 hover:underline"
            >
              info@idvl.in
            </a>{" "}
            along with details about experience in gemology, diamond grading, or
            laboratory operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
