import React from 'react'
import { Link } from 'react-router-dom'

const blocks = [
    { type: 'image', img: '/img/02_Color-D-Z-Scale_960x800.jpg' },
    {
        type: 'text',
        title: "Diamond Color Grading",
        paragraphs: [
            "Viewed in a standardized environment, every diamond’s color is graded against masterstones. Multiple GIA graders independently evaluate each diamond and use our proprietary grading technology. The grade is not determined until there is consensus, and additional graders may be brought in until a determination can be made.",


        ],
    },
    {
        type: 'text', title: "Diamond Clarity Grading",
        paragraphs: [
            "n making your next diamond decision.Viewed with 10x magnification under standard conditions, multiple graders independently evaluate each diamond. First addressing any clarity enhancements or surface coatings, they document the diamond’s clarity, polish, and symmetry, while plotting the clarity characteristics on the diagram most representative of the diamond’s shape and faceting style.",
        ]
    },
    { type: 'image', img: '/img/03_50-50-Module_960x800-8.jpg' },
    { type: 'image', img: '/images/colored_diamond.png' },
    {
        type: 'text', title: "Diamond Cut Grading",
        paragraphs: [
            "At International Diamond Verified Lab (IDVL), diamond cut grading is performed using advanced computerized analysis systems developed to generate precise mathematical measurements and performance metrics. These measurements help predict light performance based on extensive proportion modeling and detailed evaluation processes. Each diamond is carefully reviewed through a combination of technology-based assessment and expert human observation to ensure accurate, reliable, and consistent grading results.",
        ]
    },
    {
        type: 'text', title: "Diamond Carat Weight",
        paragraphs: [
            "At International Diamond Verified Lab (IDVL), every diamond is carefully weighed using high-precision digital micro-balance technology to ensure maximum accuracy and consistency. Measurements are performed with advanced laboratory equipment capable of detecting extremely fine weight differences. Each diamond is evaluated to highly precise decimal measurements and then professionally recorded and reported according to international diamond grading standards.",
        ]
    },
    { type: 'image', img: '/img/05_CaratWeight_1530x815.jpg' },
]


const Reports = () => {
    return (
        <div>
            <div className="bg-white mt-12">
                {/* Hero Quote Section */}
                <div className="minhscreen2 flex items-center justify-center relative overflow-hidden px-4">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 h-full bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/img/diamondgrading.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="absolute inset-0 h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                    </div>

                    <div className="relative z-10 w-full max-w-6xl mx-auto">
                        <div className="w-full ">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                    VERIFY YOUR DIAMOND
                                </h1>
                                <h1 className="text-5xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                    WITH CONFIDENCE
                                </h1>
                                <p className="text-lg text-gray-100 ">
                                    Independent Analysis , Advanced Technology , Certified Experts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="our-history w-full">
                <div className="mx-auto max-w-8xl">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
                        {blocks.map((b, i) => (
                            b.type === 'image' ? (
                                <div key={i} className="h-full w-full">
                                    <img src={b.img} alt={`block-${i}`} className="h-full w-full object-cover" />
                                </div>
                            ) : (
                                <div key={i} className="flex items-center p-12">
                                    <div>
                                        <h2 className="mb-6 text-3xl md:text-4xl font-extrabold text_title_color text-gray-900">{b.title}</h2>
                                        {b.paragraphs.map((p, idx) => (
                                            <p key={idx} className="mb-4 max-w-xl text-gray-600">{p}</p>
                                        ))}
                                        {/* <div className="mt-8 flex justify-center md:justify-start">
                                            <Link to="/services" className="inline-block rounded bg-green-500 px-8 py-3 text-white font-medium hover:bg-green-600">Know More</Link>
                                        </div> */}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Reports