import React from 'react';
import { Link } from 'react-router-dom';

export default function DiamondSorting() {
    return (
        <main className="min-h-screen bg-white mt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Diamond Sorting</h1>
                    <p className="text-xl text-blue-50">Expert classification and sorting of diamonds by international standards and specifications</p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Diamond Sorting?</h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            Diamond sorting is a specialized service that classifies and categorizes diamonds based on the 4Cs (Color, Clarity, Cut, and Carat). Using advanced analytical techniques and expert gemological knowledge, we accurately sort diamonds into specific grades and categories.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Ideal for wholesale operations, manufacturers, and traders who need systematic organization and accurate grading of large batches of diamonds.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sorting Criteria */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Sort By</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Color Grade",
                                description: "Classification from D (colorless) to Z (light color) using standardized color scales"
                            },
                            {
                                title: "Clarity Grade",
                                description: "Classification from FL (Flawless) to I (Included) based on inclusion characteristics"
                            },
                            {
                                title: "Cut Quality",
                                description: "Assessment of cut quality, proportions, and light performance characteristics"
                            },
                            {
                                title: "Carat Weight",
                                description: "Precise weight measurement using calibrated laboratory equipment"
                            },
                            {
                                title: "Certification Status",
                                description: "Sorting by desired certification level or market requirements"
                            },
                            {
                                title: "Market Category",
                                description: "Classification into market segments for easier inventory management"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500">
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sorting Process</h2>
                    <div className="space-y-4">
                        {[
                            { step: "1", title: "Batch Reception", desc: "Receive and register complete batch of diamonds with proper documentation" },
                            { step: "2", title: "Quality Check", desc: "Preliminary inspection and counting of all diamonds in the batch" },
                            { step: "3", title: "Individual Testing", desc: "Each diamond tested and evaluated using standard protocols" },
                            { step: "4", title: "Classification", desc: "Diamonds sorted into categories based on 4Cs and specifications" },
                            { step: "5", title: "Verification", desc: "Quality assurance verification of all sorting results" },
                            { step: "6", title: "Report & Return", desc: "Comprehensive sorting report with classification details" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
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
