import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white mt-12">
      {/* Hero Quote Section */}
      <div className="minhscreen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/img/about-hero.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
          </div>
          <div className="absolute inset-0 h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="w-full ">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Beauty lies in the eye of the beholder.

              </h1>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">

                <span className="text-orange-400">Quality rests on the foundation  <br /> of science.</span>
              </h1>
              <p className="text-lg text-gray-100 ">
                International Diamond Verified Lab (IDVL) is committed to delivering world-class diamond grading,<br /> gemstone authentication, and certification services <br /> with accuracy, integrity, and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About IDVL Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-black">
                About IDVL
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                International Diamond Verified Lab is a premier certification authority in the diamond and precious gemstone industry. With decades of expertise, we combine traditional gemological knowledge with cutting-edge technology to provide accurate, trustworthy assessments.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our mission is to ensure that every diamond and gemstone is evaluated with the highest standards of accuracy and integrity, giving our clients and consumers the confidence they deserve.
              </p>
              <div className="flex gap-4">
                <button type="button" className="px-8 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                  Learn More
                </button>
                <Link to="/contact" className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-50 transition">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="/img/idvl-lab.png"
                alt="IDVL Lab"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-purple-900 to-orange-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose IDVL?</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              We set the standard for diamond and gemstone certification
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/img/ExpertGemologists.png",
                title: "Expert Gemologists",
                description:
                  "Our team comprises certified experts with decades of combined experience in diamond and gemstone evaluation."
              },
              {
                img: "/img/AdvancedTechnology.png",
                title: "Advanced Technology",
                description:
                  "State-of-the-art laboratory equipment ensures accuracy and precision in every assessment and certification."
              },
              {
                img: "/img/GlobalRecognition.png",
                title: "Global Recognition",
                description:
                  "IDVL certificates are trusted by buyers, sellers, and traders worldwide in the diamond and jewelry industry."
              },
              {
                img: "/img/TransparentReporting.png",
                title: "Transparent Reporting",
                description:
                  "Detailed, jargon-free reports that clearly communicate every aspect of your diamond or gemstone."
              },
              {
                img: "/img/CompetitivePricing.png",
                title: "Competitive Pricing",
                description:
                  "Premium certification services at industry-standard rates without compromising on quality."
              },
              {
                img: "/img/QuickTurnaround.png",
                title: "Quick Turnaround",
                description:
                  "Efficient processing ensures you receive your certified reports promptly without unnecessary delays."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20 hover:border-white/40 transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 mb-4 mx-auto bg-white rounded-md"
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Certification Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Diamonds and gemstones are carefully examined and registered in our system."
              },
              {
                step: "02",
                title: "Detailed Testing",
                description: "Advanced laboratory tests measure color, clarity, cut, and carat weight with precision."
              },
              {
                step: "03",
                title: "Expert Review",
                description: "Our certified gemologists review all findings and verify accuracy and consistency."
              },
              {
                step: "04",
                title: "Certification",
                description: "Official IDVL certificate is issued with detailed report and unique identification number."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="mt-4 text-2xl text-orange-400"> → </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Diamonds Certified Today</h2>
          <p className="text-xl mb-8 text-gray-100">
            Trust IDVL for accurate, transparent, and globally recognized diamond and gemstone certification.
          </p>
          <button type="button" className="px-12 py-4 bg-white text-orange-500 font-bold text-lg rounded hover:bg-gray-100 transition">
            Start Certification
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
