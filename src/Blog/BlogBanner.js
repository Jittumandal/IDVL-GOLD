import React from "react";

export default function BlogBanner() {
  return (
    <section className="relative flex w-full flex-col bg-[#002512] md:flex-row">
      {/* Left: Content */}
      <div className="blog_banner flex w-full flex-col items-center justify-center px-8 md:w-1/2 md:items-start">
        <h1 className="Talk animate__animated animate__backInDown quiklinks mb-6 text-center text-5xl font-bold leading-tight md:text-left">
          International Diamond
          <br />
          Verified Labs

        </h1>
        <p className="LetGreeNox animate__animated animate__backInDown mb-10 text-center text-lg text-white md:text-left">
          To deliver trusted diamond and jewelry certification services that promote transparency, authenticity, and integrity across the global gem and jewelry industry.
        </p>

      </div>
      {/* Right: Image */}
      <div className="flex w-full items-center justify-center bg-[#181818] md:w-1/2">
        <img
          src="/blog/Homepage.jpg"
          alt="Experts"
          className="h-[550px] w-full object-cover"
        />
      </div>
    </section>
  );
}
