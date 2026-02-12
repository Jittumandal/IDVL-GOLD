import React, { useState } from "react";
import LocationPic from "./LocationPic";

const cityLocations = {
  "New Delhi": [
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
  Others: [
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      address: "1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006",
      phone: "98719 98212",
      dinein: "10:00 AM - 6:00 PM",
      delivery: "Closed",
      locationLink: "https://www.google.com/maps/search/1164%2F2,+IV+Floor,+Kucha+Mahajani,+Chandni+Chowk,+Central+Delhi,+Delhi,+India+-+110006/@28.6569058,77.2284571,18z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
    },
  ],

  // Mumbai: [],
  // Bangalore: [],
  // Kolkata: [],
  // Chennai: [],
  // Hyderabad: [],
  // Pune: [],
};

const cities = Object.keys(cityLocations);

const Location = () => {
  // Change the initial state to "Uttar Pradesh"
  const [selectedCity, setSelectedCity] = useState("New Delhi");

  return (
    <div className="flex min-h-screen w-full flex-col bg-white md:flex-row">
      {/* Left: Select City */}
      <div className="freshmealplan locaton_mobile_section flex flex-col items-center justify-center p-8 pl-12 md:w-1/3">
        <div className="max-w-xm select_locotion mb-8 w-full pb-4 pl-12">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <img src="/img/location.svg" alt="Location" className="h-7 w-5" />
            </span>
            <select
              className="m-0 w-full rounded-full border border-gray-300 py-3 pl-12 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <span className="selectLoc pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>

        <LocationPic />
      </div>
      {/* Right: Locations or Mascot */}
      <div
        className={
          "relative flex flex-col items-center justify-center p-6 transition-colors duration-300 md:w-2/3 " +
          (selectedCity ? "" : "bg-orange-50")
        }
        style={
          selectedCity
            ? {
              backgroundImage: "url('/img/subscription2.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
            : {}
        }
      >
        {/* Show mascots image only when no city is selected */}
        {!selectedCity && (
          <img
            src="/img/broccolimascots.svg"
            alt="Broccoli Mascots"
            className="pointer-events-none absolute bottom-0 right-0 z-0 hidden h-full w-full object-contain opacity-90 md:block"
          />
        )}

        {!selectedCity ? (
          <div className="z-10 hidden h-full w-full flex-col items-center justify-center md:flex">
            {/* Speech bubble - hidden on small screens, visible md+ */}
            <div className="top_40px absolute left-8 top-8 z-20">
              <div className="relative rounded-lg border border-orange-300 bg-orange-100 px-6 py-4 text-lg font-medium text-gray-700 shadow">
                Please select a city
                <br />
                to find the nearest
                <br />
                GreeNox store
                {/* Arrow */}
                <span className="absolute -left-6 top-6 h-0 w-0 border-b-8 border-r-8 border-t-8 border-b-transparent border-r-orange-100 border-t-transparent"></span>
                <span className="absolute -left-6 top-6 z-[-1] h-0 w-0 border-b-8 border-r-8 border-t-8 border-b-transparent border-r-orange-300 border-t-transparent"></span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="z-10 mb-6 text-white text-center text-2xl font-extrabold text-green-600 md:text-4xl">
              Our Locations
            </h2>
            <div
              className="custom-scrollbar z-10 grid w-full grid-cols-1 gap-6 pr-2 md:grid-cols-2 lg:grid-cols-3"
              style={{ height: "500px", overflowY: "auto" }}
            >
              {cityLocations[selectedCity] &&
                cityLocations[selectedCity].length > 0 ? (
                cityLocations[selectedCity].map((loc, idx) => (
                  <div
                    key={idx}
                    className="custom-scrollbar-inner flex min-h-[300px] flex-col justify-between rounded-2xl bg-white p-6 shadow"
                  >
                    <div>
                      <div className="mb-2 text-base font-semibold text-gray-800">
                        {loc.address}
                      </div>
                      <div className="mb-1 font-bold">
                        Monday - Saturday:{" "}<br />
                        <span className="text-green-600">{loc.dinein}</span>
                      </div>
                      <div className="mb-2 font-bold">
                        Sunday: {" "}
                        <span className="text-green-600">{loc.delivery}</span>
                      </div>
                      <div className="mb-2 flex items-center gap-2 text-lg font-bold text-gray-400">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="font-bold">{loc.phone}</span>
                      </div>
                    </div>
                    {
                      (() => {
                        const directionsHref = loc.locationLink
                          ? loc.locationLink
                          : loc.address
                            ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                              loc.address
                            )}`
                            : null;

                        if (!directionsHref) {
                          return (
                            <button
                              disabled
                              className="mt-4 w-full rounded-full bg-gray-300 py-3 text-lg text-white cursor-not-allowed"
                            >
                              GET DIRECTIONS
                            </button>
                          );
                        }

                        return (
                          <a
                            href={directionsHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block w-full rounded-full bg-orange-400 py-3 text-center text-lg text-white transition hover:bg-orange-500"
                          >
                            GET DIRECTIONS
                          </a>
                        );
                      })()
                    }
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-xl text-gray-700">
                  No locations available for this city.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Location;
