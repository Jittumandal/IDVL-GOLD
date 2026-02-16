import React from 'react';

export default function DiamondScreening() {
    return (
        <main className="min-h-screen bg-white mt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Diamond Screening</h1>
                    <p className="text-xl text-green-50">Advanced initial assessment of diamonds with rapid evaluation and quality determination</p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Diamond Screening?</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Diamond screening is the initial phase of our comprehensive diamond evaluation process. This service provides a rapid, professional assessment of your diamonds to determine their key characteristics, authenticity, and market positioning.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Perfect for diamond traders, retailers, and collectors who need quick, accurate initial assessments before detailed grading or certification.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Included */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included in Screening</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Quick Assessment",
                                description: "Rapid evaluation of diamond weight, color, and clarity characteristics"
                            },
                            {
                                title: "Authenticity Check",
                                description: "Verification that the stone is a genuine diamond using advanced testing"
                            },
                            {
                                title: "Quality Estimation",
                                description: "Professional estimate of diamond quality and approximate grading"
                            },
                            {
                                title: "Market Value Insight",
                                description: "Preliminary indication of market value based on the 4Cs"
                            },
                            {
                                title: "Treatment Detection",
                                description: "Identification of any treatments or enhancements applied to the diamond"
                            },
                            {
                                title: "Fast Turnaround",
                                description: "Results typically available within 2-3 business days"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Screening Process</h2>
                    <div className="space-y-4">
                        {[
                            { step: "1", title: "Submit Diamond", desc: "Securely send your diamond(s) to IDVL with proper documentation" },
                            { step: "2", title: "Registration", desc: "Your diamond is photographed and registered in our system" },
                            { step: "3", title: "Initial Testing", desc: "Quick assessment using our screening protocols and equipment" },
                            { step: "4", title: "Analysis", desc: "Our experts analyze findings and prepare screening report" },
                            { step: "5", title: "Report Generation", desc: "Detailed screening report is compiled with findings" },
                            { step: "6", title: "Return & Delivery", desc: "Diamond returned safely with screening report" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-semibold text-green-600">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </main>
    );
}
