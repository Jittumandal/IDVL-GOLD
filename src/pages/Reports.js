import React from "react";

export default function Reports() {
    const blocks = [
        { type: 'image', img: '/img/02_Color-D-Z-Scale_960x800.jpg' },
        {
            type: 'text',
            title: "Diamond Color Grading",
            paragraphs: [
                "Viewed in a standardized environment, every diamond's color is graded against masterstones. Multiple GIA graders independently evaluate each diamond and use our proprietary grading technology. The grade is not determined until there is consensus.",
            ],
        },
        {
            type: 'text',
            title: "Diamond Clarity Grading",
            paragraphs: [
                "Viewed with 10x magnification under standard conditions, multiple graders independently evaluate each diamond. First addressing any clarity enhancements or surface coatings, they document the diamond's clarity, polish, and symmetry.",
            ]
        },
        { type: 'image', img: '/img/03_50-50-Module_960x800-8.jpg' },
        { type: 'image', img: '/images/colored_diamond.png' },
        {
            type: 'text',
            title: "Diamond Cut Grading",
            paragraphs: [
                "At IDVL, diamond cut grading is performed using advanced computerized analysis systems to generate precise mathematical measurements and performance metrics. Each diamond is carefully reviewed through a combination of technology and expert observation.",
            ]
        },
        {
            type: 'text',
            title: "Diamond Carat Weight",
            paragraphs: [
                "At IDVL, every diamond is carefully weighed using high-precision digital micro-balance technology to ensure maximum accuracy and consistency in all measurements.",
            ]
        },
        { type: 'image', img: '/img/05_CaratWeight_1530x815.jpg' },
    ];

    return (
        <div className="bg-white mt-12">
            {/* Hero Section */}
            <div className="minhscreen2 flex items-center justify-center relative overflow-hidden px-4">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/img/diamondgrading.png')",
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
                                VERIFY YOUR DIAMOND
                            </h1>
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                <span className="text-orange-400">WITH CONFIDENCE</span>
                            </h1>
                            <p className="text-lg text-gray-100">
                                Independent Analysis • Advanced Technology • Certified Experts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reports Content */}
            <section className="w-full">
                <div className="mx-auto max-w-full">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                        {blocks.map((b, i) => (
                            b.type === 'image' ? (
                                <div key={i} className="h-full w-full">
                                    <img src={b.img} alt={`block-${i}`} className="h-full w-full object-cover" />
                                </div>
                            ) : (
                                <div key={i} className="flex items-center p-12 bg-white">
                                    <div>
                                        <h2 className="mb-6 text-3xl md:text-4xl font-bold text-gray-900">{b.title}</h2>
                                        {b.paragraphs.map((p, idx) => (
                                            <p key={idx} className="mb-4 max-w-xl text-gray-600">{p}</p>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-orange-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Certify Your Diamonds?</h2>
                    <p className="text-xl mb-8">
                        Get your diamonds graded by IDVL's certified expert gemologists today.
                    </p>
                    <button
                        type="button"
                        className="px-12 py-4 bg-white text-orange-500 font-bold text-lg rounded hover:bg-gray-100 transition"
                    >
                        Submit for Grading
                    </button>
                </div>
            </section>
        </div>
    );
}
