import React, { useState } from "react";
import LocationPic from "./LocationPic";
import { MdOutlinePhone } from "react-icons/md";
import cityLocations from "../data/locations.json";

const cities = Object.keys(cityLocations);

const Location = () => {
  const [selectedCity, setSelectedCity] = useState("New Delhi");

  return (
    <div className="flex min-h-screen w-full flex-col bg-white md:flex-row">
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
        {!selectedCity ? (
          <div className="z-10 hidden h-full w-full flex-col items-center justify-center md:flex">
            <div className="top_40px absolute left-8 top-8 z-20">
              <div className="relative rounded-lg border border-orange-300 bg-orange-100 px-6 py-4 text-lg font-medium text-gray-700 shadow">
                Please select a city
                <br />
                to find the nearest
                <br />
                GreeNox store
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
              {cityLocations[selectedCity] && cityLocations[selectedCity].length > 0 ? (
                cityLocations[selectedCity].map((loc, idx) => (
                  <div
                    key={idx}
                    className="custom-scrollbar-inner flex min-h-[385px] flex-col justify-between rounded-2xl bg-white p-4 shadow"
                  >
                    <div>
                      <div className="mb-2 line-clamp-3 text-base font-semibold text-gray-800">{loc.address}</div>
                      <h3 className="mb-2 flex items-center text-lg font-bold text-gray-700">Business Hours</h3>
                      <div className="mb-4 rounded-lg bg-orange-50 p-3 border-l-4 border-orange-400">
                        {loc.time ? (
                          <div className="text-sm font-semibold text-gray-800">
                            <span className="mr-2">{loc.BusinessHours}</span><br />
                            <span className="text-green-600 mr-2">{loc.time},</span><br />
                            <span>
                              {loc.closedDay ? `${loc.closedDay}: ` : "Sunday: "}
                              <span className="text-green-600">{loc.closedStatus || loc.Closed || "Closed"}</span>
                            </span>
                          </div>
                        ) : (
                          loc.BusinessHours &&
                          loc.BusinessHours.split(", ").map((day, i) => (
                            <div key={i} className="text-sm font-semibold text-gray-800 mb-1">
                              {day}
                            </div>
                          ))
                        )}
                      </div>

                      <div className="mb-2 flex flex-col gap-2 text-lg text-gray-700">
                        {loc.phone && (
                          <div className="flex items-center gap-3">
                            <MdOutlinePhone size={24} className="inline mr-2 text_title_color " />
                            <span className="font-bold text-gray-900">{loc.phone}</span>
                          </div>
                        )}

                        {loc.phone2 && (
                          <div className="flex items-center gap-3">
                            <MdOutlinePhone size={24} className="inline mr-2 text_title_color " />
                            <span className="font-bold text-gray-900">{loc.phone2}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {(() => {
                      const directionsHref = loc.locationLink
                        ? loc.locationLink
                        : loc.address
                          ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`
                          : null;

                      if (!directionsHref) {
                        return (
                          <button disabled className="mt-4 w-full rounded-full bg-gray-300 py-3 text-lg text-white cursor-not-allowed">
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
                    })()}
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-xl text-gray-700">No locations available for this city.</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Location;
