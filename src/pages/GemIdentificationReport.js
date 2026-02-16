import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white mt-12">
            {/* Hero Quote Section */}
            <div className="minhscreen3 flex items-center justify-center relative overflow-hidden px-4">
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

                                <span className="text-orange-400">Gem Identification Report</span>
                            </h1>
                            <p className="text-lg text-gray-100 ">
                                Comprehensive gemstone analysis and certification from IDVL's expert gemologists.
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
                                Gem Identification Report
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                At IDVL, we provide comprehensive Gem Identification Report services designed to accurately authenticate and evaluate gemstones with the highest level of precision. Our experienced gemological experts conduct detailed examinations using advanced testing methods and professional laboratory standards.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Each certified IDVL report clearly identifies the gemstone’s type, species, and key characteristics, while also disclosing any treatments or enhancements detected during analysis.
                            </p>

                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Whether you are a collector, jeweler, retailer, or gemstone enthusiast, IDVL is committed to delivering reliable, transparent, and professional documentation—empowering you to make informed decisions with confidence about your valuable gemstones.
                            </p>
                        </div>
                        <div className="relative ">
                            <img
                                src="/images/DiamondColor.png"
                                alt="IDVL Lab"
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-lg -z-10"></div>
                            <div className="absolute -top-6 -right-6 w-40 h-40 bg-orange-100 rounded-lg -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default About;
