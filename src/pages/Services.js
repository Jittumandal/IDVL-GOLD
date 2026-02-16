import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    const services = [
        {
            icon: "💎",
            title: "Diamond Screening",
            description: "Advanced screening and initial assessment of diamonds to determine their characteristics, authenticity, and market value.",
            features: ["Rapid assessment", "Authenticity verification", "Quality grading", "Market value estimation"]
        },
        {
            icon: "🔍",
            title: "Diamond Sorting",
            description: "Expert classification and sorting of diamonds by color, clarity, cut, and carat weight using international standards.",
            features: ["Precision classification", "Bulk sorting", "Standard compliance", "Quality assurance"]
        },
        {
            icon: "📜",
            title: "Gem Identification Report",
            description: "Comprehensive identification and authentication of gemstones with detailed laboratory analysis and certification.",
            features: ["Complete analysis", "Treatment detection", "Unique identification", "Secure certification"]
        },
        {
            icon: "✅",
            title: "Certification Services",
            description: "Official IDVL certification providing globally recognized documentation and authentication of diamonds and gemstones.",
            features: ["Global recognition", "Secure hologram", "Anti-counterfeit features", "Lifetime validity"]
        },
        {
            icon: "🎓",
            title: "Training & Consulting",
            description: "Professional training programs and expert consulting services for jewelry professionals and gemstone traders.",
            features: ["Expert guidance", "Industry standards", "Practical training", "Custom solutions"]
        },
        {
            icon: "🔬",
            title: "Advanced Testing",
            description: "State-of-the-art laboratory testing using advanced equipment for accurate assessment of gemstone properties.",
            features: ["Latest technology", "High precision", "Comprehensive analysis", "Fast turnaround"]
        }
    ];

    return (
        <main className="min-h-screen bg-white mt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-green-50 max-w-2xl mx-auto">
                        Comprehensive diamond and gemstone certification solutions with world-class expertise and technology
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-8 border-t-4 border-green-500">
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <span className="text-green-500 mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How Our Services Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Submit", desc: "Send your diamonds or gemstones to IDVL in secure packaging" },
                            { step: "2", title: "Evaluate", desc: "Our experts conduct comprehensive testing and analysis" },
                            { step: "3", title: "Certify", desc: "Detailed report and certification is generated and verified" },
                            { step: "4", title: "Deliver", desc: "Certified reports and gemstones are returned securely" }
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white font-bold text-2xl mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                    <p className="text-xl mb-8 text-green-50">
                        Contact us today to learn more about our services or submit your diamonds and gemstones for evaluation.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-block px-8 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100 transition">
                            Contact Us
                        </Link>
                        <Link to="/gem-identification-report" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition">
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
