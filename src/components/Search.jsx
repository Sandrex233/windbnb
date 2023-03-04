import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Search = ({ selectedCity, setSelectedCity }) => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleCitySelect = (city) => {
    // setSelectedCity(city);
    setLocation(city);
  };

  const handleSearch = (location) => {
    setSelectedCity(location);
    setOpen(false);
  };

  const cities = [
    { city: "Helsinki", country: "Finland" },
    { city: "Turku", country: "Finland" },
    { city: "Vaasa", country: "Finland" },
    { city: "Oulu", country: "Finland" },
  ];

  return (
    <>
      <button
        className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <span className="text-gray-600 text-sm font-medium">Search</span>
      </button>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={open ? { y: 0 } : { y: "-100vh" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: "0vh",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 10,
        }}
      >
        <div className="w-full h-1/2 flex items-center justify-center bg-white rounded-md shadow-lg p-4">
          <div className="flex items-center flex-col mb-4">
            <label htmlFor="location" className="mr-2">
              Location:
            </label>
            <div className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500">
              {cities.map((city) => (
                <div
                  key={city.city}
                  value={city.city}
                  onClick={() => handleCitySelect(city.city)}
                  className={`cursor-pointer ${
                    location === city.city ? "text-blue-500" : ""
                  }`}
                >
                  {city.city}, {city.country}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4 flex-col">
            <label htmlFor="guests" className="mr-2">
              Guests:
            </label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={handleGuestsChange}
              className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 flex items-center justify-center"
            onClick={() => handleSearch(location)}
          >
            <span className="text-white text-sm font-medium">Search</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Search;
