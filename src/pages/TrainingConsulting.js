import React from 'react';

export default function TrainingConsulting() {
    return (
        <main className="min-h-screen bg-white mt-16">


            {/* Hero Section */}
            <div className="minhscreen3 flex items-center justify-center relative overflow-hidden px-4">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/images/TrainingConsulting.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                    </div>
                    <div className="absolute inset-0 h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl mx-auto">
                    <div className="w-full">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Training & Consulting
                            </h1>

                            <p className="text-lg text-gray-100">
                                Professional training programs and expert consulting services for jewellery professionals and gemstone traders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Training & Consulting</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            IDVL provides tailored training programs and consulting services designed to raise expertise across the jewelry and gemstone supply chain. Our courses combine theoretical knowledge with hands-on practical sessions delivered by industry experts.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Whether you are an individual seeking to upskill or a company needing a custom training program, our team designs practical, standards-aligned training and consulting engagements to meet your goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Options */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Programs & Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Basic Gemology Course", description: "Fundamentals of gemstones, identification and handling techniques." },
                            { title: "Advanced Diamond Grading", description: "In-depth 4Cs training with hands-on grading sessions." },
                            { title: "Corporate Workshops", description: "Custom workshops for teams covering quality control and standards." },
                            { title: "Consulting Engagements", description: "Process improvement, compliance and market-entry consulting." },
                            { title: "Retail Training", description: "Customer-facing training for sales and valuation." },
                            { title: "E-Learning Modules", description: "Self-paced online modules with certification." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
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

