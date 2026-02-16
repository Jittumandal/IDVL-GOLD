import React from 'react'
import { Link } from 'react-router-dom'

const blocks = [
  { type: 'image', img: '/images/DiamondColor.png' },
  {
    type: 'text',
    title: "Diamond Color",
    paragraphs: [
      "When discussing diamond color, we are typically referring to the degree of color absence within the stone. Even the slightest variation in tone can significantly influence a diamond’s overall quality, appearance, and market value. While these differences may appear subtle to the untrained eye, they are measurable and scientifically evaluated through professional gemological standards.",
      "At IDVL, diamond color assessment is never based on opinion. It is determined through strict grading procedures, controlled lighting environments, and expert analysis to ensure precision and consistency.",
      "Historically, before standardized grading systems were established, diamonds were often described using informal terms such as “water-clear” for colorless stones, clarity as “with or without flaws,” and cut simply as “well made.” Among these characteristics, only carat weight had long-standing consistency, dating back several centuries.",


    ],
  },
  {
    type: 'text', title: "Diamond Clarity",
    paragraphs: [
      "Diamond clarity refers to the presence or absence of internal characteristics (inclusions) and external features (blemishes) formed during a diamond’s natural growth process. These characteristics are carefully evaluated under magnification to determine their size, position, visibility, and overall impact on the diamond’s appearance and value.",
      "As an independent and professionally managed gemological laboratory, IDVL provides expert analysis, detailed grading reports, and reliable verification services that are trusted by industry professionals—from manufacturers and wholesalers to retailers and consumers.",
      "An IDVL Clarity Report ensures complete transparency and accuracy, helping buyers make informed decisions with confidence. When purchasing a diamond, always request an official laboratory grading report from a trusted certification body. Independent documentation is essential for ensuring authenticity, quality assurance, and peace of mind.",
    ]
  },
  { type: 'image', img: '/images/engagement-ring.png' },
  { type: 'image', img: '/images/diamondcut.png' },
  {
    type: 'text', title: "Diamond Cut",
    paragraphs: [
      "Diamond cut is one of the most visually impactful characteristics of a diamond, describing how effectively it interacts with light. Qualities such as brightness, fire, and scintillation are direct results of precise cutting and expert craftsmanship. A well-cut diamond reflects and refracts light beautifully, creating the brilliance and sparkle that make diamonds so captivating.",
      "Cut also refers to the diamond’s overall design, including the proportions, symmetry, and arrangement of its facets. Even minor variations in angles and measurements can significantly influence light performance. With countless possible combinations of proportions, accurate evaluation is essential to determine how successfully a diamond maximizes its visual potential.",
      "At IDVL, diamond cut is assessed using advanced grading standards and careful analytical procedures. In addition to providing detailed and transparent reports, IDVL is committed to education—offering guidance, resources, and clear documentation to help both consumers and industry professionals fully understand diamond and gemstone quality.",
    ]
  },
  {
    type: 'text', title: "Diamond Carat Weight",
    paragraphs: [
      "Carat weight is the most precise and consistently measured of the Diamond 4Cs. While often associated with a diamond’s size, carat actually refers to the stone’s weight. Larger diamonds are typically rarer, which can increase their value; however, carat weight alone does not determine overall worth. Two diamonds of the same carat weight may differ significantly in value depending on their cut, color, and clarity.",
      "At IDVL, carat weight is measured using highly accurate digital instruments to ensure precision and reliability. Our grading process follows consistent and repeatable standards, allowing buyers and industry professionals to confidently compare diamonds.",
      "Every IDVL report clearly documents all four value-defining characteristics—Cut, Color, Clarity, and Carat Weight—providing transparent and trustworthy information for informed purchasing and investment decisions.",
    ]
  },
  { type: 'image', img: '/images/CaratWeight.png' },
]


const OurHistory = () => {
  return (

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
                  <div className="mt-8 flex justify-center md:justify-start">
                    <Link to="/reports" className="inline-block rounded bg-green-500 px-8 py-3 text-white font-medium hover:bg-green-600">Know More</Link>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}


export default OurHistory