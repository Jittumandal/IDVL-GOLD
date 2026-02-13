import React from 'react'
import { Link } from 'react-router-dom'

const blocks = [
  { type: 'image', img: '/images/DiamondColor.png' },
  {
    type: 'text',
    title: "Diamond Color",
    paragraphs: [
      "Often when we talk about diamond color, we are actually talking about the absence of color. As subtle as color distinction may be, color variations from the most obvious to subdued can drastically alter diamond quality and price. Luckily, diamond color isn’t a matter of opinion. Proper color evaluation is a matter of expertise..",
      "Before GIA, colorless stones might have been described as water, clarity could be described as with or without flaws, and cut could be communicated as made well. Only carat weight has been consistently in use, dating back to the 1500s.",


    ],
  },
  {
    type: 'text', title: "Diamond Clarity",
    paragraphs: [
      "As a nonprofit public benefit institute, we provide the expertise, quality reports and verifications that everyone from miners to merchant and you can trust when making your next diamond decision.",
      "Ask for a GIA report. If they don't have one, ask for a new jeweler.",
    ]
  },
  { type: 'image', img: '/images/engagement-ring.png' },
  { type: 'image', img: '/images/diamondcut.png' },
  {
    type: 'text', title: "Diamond Cut",
    paragraphs: [
      "One of a diamond’s most recognizable characteristics, diamond cut, refers to how a diamond interacts with light. When you hear words like Brightness, Scintillation and Fire, they describe how masterfully a diamond is cut. Cut also describes the overall design of a diamond, including the arrangement and proportions of the diamond’s facets. There are a nearly unlimited combination of proportions possible, and all of them impact the interaction with light.",
      "We provide training, resources and clear reporting so consumers and professionals understand gemstone and diamond quality.",
    ]
  },
  {
    type: 'text', title: "Diamond Carat Weight",
    paragraphs: [
      "Carat weight is the most consistent of the 4Cs, but it’s not just about size. Carat weight is a measure of a diamond’s weight, and it can be an indicator of rarity. However, two diamonds of equal carat weight can have vastly different values based on their cut, color and clarity.",
      "Consistent, repeatable grading lets buyers compare and choose with confidence. Our reports document clarity, color, cut and carat for trusted decisions.",
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
                    <Link to="/services" className="inline-block rounded bg-green-500 px-8 py-3 text-white font-medium hover:bg-green-600">Know More</Link>
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