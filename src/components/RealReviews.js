import React, { useEffect, useRef } from "react";

const testimonials = [

  {
    text: "Their attention to precision and premium standards makes them a trusted partner in our journey of maintaining excellence. We appreciate their consistent delivery and refined approach.",
    name: "Mr. Narender",
    role: "Managing Director, Dalbeer Sons",
    img: "/img/User.png",
  },
  {
    text: "In the world of fine jewellery, presentation and authenticity matter immensely. Their services embody both, making our long-standing association highly valued.",
    name: "Mr Nitin",
    role: "Managing Director, Aggarwal Abhushan Bhandar",
    img: "/img/User.png",
  },
  {
    text: "Their professionalism, superior quality, and commitment to perfection set them apart. We confidently recommend their services for those who seek nothing but excellence.",
    name: "Mr Nitin",
    role: "Manager, Kuber Jewellers",
    img: "/img/User.png",
  },
];

const SLIDE_HEIGHT = 360; // px
const SCROLL_SPEED = 0.5; // px per frame
const SLIDES_TO_SHOW = 2;

const MainSlider = () => {
  const sliderRef = useRef(null);
  const animRef = useRef();
  const scrollRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = [...testimonials, ...testimonials]; // duplicate for seamless loop
    const totalHeight = slides.length * (SLIDE_HEIGHT + 18); // each slide height + margin

    // Start offset so we scroll downward from top to bottom
    scrollRef.current = -totalHeight / 2;

    const animate = () => {
      if (!pausedRef.current) {
        scrollRef.current += SCROLL_SPEED;
        if (scrollRef.current >= 0) {
          // reset seamlessly to start again from middle
          scrollRef.current = -totalHeight / 2;
        }
        slider.style.transform = `translateY(${scrollRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    // Pause on hover
    slider.parentElement.addEventListener("mouseenter", () => {
      pausedRef.current = true;
    });
    slider.parentElement.addEventListener("mouseleave", () => {
      pausedRef.current = false;
    });

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="main-container testimonials_justify flex items-center justify-center">
      <div
        className="Testimonials_mobile Testimonials_tabs_view relative"
        style={{
          position: "relative",
          width: "330px",
          height: `${SLIDE_HEIGHT * SLIDES_TO_SHOW}px`,
          overflow: "hidden",
        }}
      >
        <div
          ref={sliderRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="testimonial-item testimonial-item_tabs"
              style={{
                width: "100%",
                height: `${SLIDE_HEIGHT}px`,
                marginBottom: "25px",
                borderRadius: "10px",
                background: "#fff",
                boxShadow: "0 2px 8px #0001",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "background 0.3s, color 0.3s",
                color: "#222",
              }}
            >
              <div className="text-base text-gray-700">{item.text}</div>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-14 w-14 rounded-full  border-cyan-500 object-cover"
                />
                <div>
                  <div className="text-lg font-bold text-cyan-700">
                    {item.name}
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
