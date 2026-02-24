import React, { useEffect, useRef } from "react";
import RealReviews from "./RealReviews.js"; // or "./RealReviews.jsx" if the file has .jsx extension

const testimonials = [
  {
    text: "Our association with them spans several years, and the excellence in their craftsmanship has always reflected sophistication and precision.Their commitment to quality perfectly aligns with the standards we uphold at our jewellery establishment.",
    name: "Mr. Chaju Singh",
    role: "Manager, Shri Ram Hari Ram (Jewellers)",
    img: "/img/User.png",
  },
  {
    text: "Their work consistently demonstrates elegance, refinement, and meticulous attention to detail. We value their professionalism and the premium finish they deliver every time.",
    name: "Mr. Khagan Jana",
    role: "Manager, Gauri Hari",
    img: "/img/User.png",
  },
  {
    text: "Quality is paramount in our industry, and they have never fallen short of expectations. Their service reflects integrity, reliability, and a deep understanding of luxury presentation.",
    name: "Mr. Kishor",
    role: "Manager, Raj Laxmi Jewellers",
    img: "/img/User.png",
  },
  {
    text: "For years, we have entrusted them with our requirements, and their dedication to excellence remains unwavering. Their craftsmanship truly complements the prestige of our brand.",
    name: "Mr. Nakul",
    role: "Manager, Radhey Radhey Jewellers",
    img: "/img/User.png",
  },

];

const ITEM_HEIGHT = 375; // px
const SLIDES_TO_SHOW = 2;
const SCROLL_SPEED = 0.5; // px per frame (slower)

export const Testimonials = () => {
  const marqueeRef = useRef(null);
  const animRef = useRef();

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scroll = 0;
    let isPaused = false;

    // Duplicate content for seamless scroll
    const totalHeight = marquee.scrollHeight / 2;

    function animate() {
      if (!isPaused) {
        scroll += SCROLL_SPEED;
        if (scroll >= totalHeight) {
          scroll = 0;
          marquee.style.transition = "none";
          marquee.style.transform = `translateY(0px)`;
          // Force reflow to apply the transition reset
          void marquee.offsetWidth;
          marquee.style.transition = "transform 0.5s linear";
        } else {
          marquee.style.transform = `translateY(-${scroll}px)`;
        }
      }
      animRef.current = requestAnimationFrame(animate);
    }

    marquee.style.transition = "transform 0.5s linear";
    animRef.current = requestAnimationFrame(animate);

    marquee.parentElement.addEventListener(
      "mouseenter",
      () => (isPaused = true),
    );
    marquee.parentElement.addEventListener(
      "mouseleave",
      () => (isPaused = false),
    );

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section className="freshmealplan px-4 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left: Heading and intro */}
          <div className="flex flex-col justify-center md:w-1/2">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-block h-1 w-10 rounded bg-green-700" />
              <span className="text-xl font-semibold text-orange-500">
                Trusted by Our Clients
              </span>
            </div>
            <h2 className="Real mb-6 text-5xl font-extrabold leading-tight text-gray-800">
              Real Stories, Real Satisfaction
            </h2>
            <p className="text-lg text-gray-700">
              Unfiltered appreciation and honest reviews from customers who believe in our work.
            </p>
          </div>
          {/* Right: Vertical Marquee */}
          <div
            className="Testimonials_mobile relative"
            style={{
              width: "370px",
              height: `${ITEM_HEIGHT * SLIDES_TO_SHOW}px`,
              overflow: "hidden",
            }}
          >
            <div
              ref={marqueeRef}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="testimonial-item testimonial-item_tabs"
                  style={{
                    width: "100%",
                    height: `${ITEM_HEIGHT}px`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#fff",
                    marginBottom: "25px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px #0001",
                    overflow: "hidden",
                    padding: "32px 28px",
                  }}
                >
                  <div className="mb-6 text-base text-gray-700">{t.text}</div>
                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-14 w-14 rounded-full  border-green-500 object-cover"
                    />
                    <div>
                      <div className="text-lg font-bold text-green-700">
                        {t.name}
                      </div>
                      <div className="text-sm font-semibold text-gray-600">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <RealReviews />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
