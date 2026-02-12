import React from "react";
import wdc from "../images/wdc.webp";
import wji from "../images/wji.webp";
import cibjo from "../images/cibjo.webp";
import rjc from "../images/rjc.webp";
import nica from "../images/n-ica-2.webp";

const BiggestBrands = () => {
  const brands = [
    { name: "christ", logo: wdc },
    { name: "mangalmay", logo: wji },
    { name: "amity", logo: cibjo },
    { name: "shivnadar", logo: rjc },
    { name: "ashoka", logo: nica },
  ];

  return (
    <section className="Our_Presence py-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Heading */}
        <h2 className="mb-8 text-center text-5xl font-bold text-green-500">
          Affiliations
        </h2>

        {/* Subheading */}
        <h3 className="mb-12 text-center text-2xl text-gray-800">
          One of the World's Largest Independent Grading and Accreditation Services Providers <br />
          <i style={{ fontSize: 16 }}>Join a global community of diamond, gemstone and jewelry professionals and enthusiasts</i>
        </h3>

        {/* Brands Logo Grid */}
        <div className="gap2 mx-auto mb-12 flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-16 w-40 items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p className="text-lg text-gray-800">
            For Corporate Catering Enquiries Call us at{" "}
            <a
              href="tel:+91 7078548120"
              className="font-semibold text-green-600 hover:underline"
            >
              +91 7078548120
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BiggestBrands;
