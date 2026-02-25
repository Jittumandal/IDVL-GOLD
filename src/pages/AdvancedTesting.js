import React from 'react';
import { Link } from 'react-router-dom';

export default function AdvancedTesting() {
    return (
        <main className="min-h-screen bg-white mt-16">

            {/* Hero Section */}
            <div className="minhscreen3 flex items-center justify-center relative overflow-hidden px-4">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/AdvancedTesting.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                    </div>
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <div className="w-full">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Advanced Testing</h1>
                            <p className="text-lg text-gray-100">State-of-the-art laboratory testing using advanced equipment for accurate assessment of gemstone properties.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Advanced Testing</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">Our laboratories employ advanced instrumentation and methodologies to provide comprehensive analysis and reliable results for gemstones and materials.</p>
                        <p className="text-gray-700 text-lg leading-relaxed">We focus on treatment detection, compositional analysis, provenance studies, and any specialized testing required by clients and industry stakeholders.</p>
                    </div>
                </div>
            </section>

            {/* Testing Capabilities */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Testing Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Spectroscopy & Analysis", description: "Raman, FTIR and UV-Vis spectroscopy for material identification." },
                            { title: "Chemical & Elemental Analysis", description: "LA-ICP-MS and other techniques for trace element profiling." },
                            { title: "Treatment Detection", description: "Advanced protocols to detect heat, fracture filling and other treatments." },
                            { title: "Provenance Studies", description: "Scientific approaches to infer origin and supply-chain characteristics." },
                            { title: "High-Precision Measurements", description: "Accurate measurements for inclusion, clarity and optical properties." },
                            { title: "Custom Tests", description: "Tailored analyses to meet regulatory, insurance or research needs." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}

