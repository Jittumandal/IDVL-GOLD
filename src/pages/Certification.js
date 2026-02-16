import React from 'react';

export default function Certification() {
    return (
        <main className="min-h-screen bg-white mt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Diamond Certification</h1>
                    <p className="text-xl text-purple-50">Obtain internationally recognized diamond certifications from IDVL</p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Diamond Certification</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Diamond certification provides an independent, expert assessment of your diamond's quality, authenticity, and characteristics. Each certified diamond receives a detailed report documenting the 4Cs and other pertinent information.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            IDVL certifications are recognized globally and significantly enhance the marketability and value of your diamonds. Whether you're selling, insuring, or simply wanting to know your diamond's true value, our certification service provides peace of mind and credibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* Certification Options */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certification Types</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Standard Certification",
                                description: "Comprehensive gemological report with 4Cs assessment, suitable for most diamonds"
                            },
                            {
                                title: "Luxury Grade Certification",
                                description: "High-resolution imaging and extended analysis for premium and rare diamonds"
                            },
                            {
                                title: "Insurance Certification",
                                description: "Detailed valuation report suitable for insurance and appraisal purposes"
                            },
                            {
                                title: "Custom Analysis",
                                description: "Specialized testing and reporting tailored to specific requirements or claims"
                            },
                            {
                                title: "Re-certification",
                                description: "Updated certification for diamonds previously certified by other labs"
                            },
                            {
                                title: "Condition Report",
                                description: "Assessment of diamond condition, repair history, and treatment detection"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's in a Report */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included in Certification</h2>
                    <div className="space-y-4">
                        {[
                            { icon: "💎", title: "4Cs Assessment", desc: "Detailed Color, Clarity, Cut, and Carat weight evaluation" },
                            { icon: "🔬", title: "Treatment Detection", desc: "Analysis for any enhancements, coatings, or treatments" },
                            { icon: "📸", title: "High-Res Images", desc: "Professional photography and fluorescence documentation" },
                            { icon: "✍️", title: "Detailed Report", desc: "Comprehensive written assessment with professional analysis" },
                            { icon: "🌍", title: "Global Recognition", desc: "Certification recognized by international gemological bodies" },
                            { icon: "🔐", title: "Secure Documentation", desc: "Official certificate with security features and hologram" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certification Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { num: "1", title: "Submit Diamond", desc: "Send your diamond for evaluation with our secure postal service" },
                            { num: "2", title: "Expert Analysis", desc: "Our certified gemologists conduct thorough testing and evaluation" },
                            { num: "3", title: "Report Generation", desc: "Detailed certification report generated with all findings" },
                            { num: "4", title: "Quality Check", desc: "Final verification by senior gemologist for accuracy" },
                            { num: "5", title: "Certification", desc: "Official certificate issued with security features" },
                            { num: "6", title: "Return & Support", desc: "Diamond returned with certificate and lifetime support" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center mb-4">
                                    {item.num}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </main>
    );
}
