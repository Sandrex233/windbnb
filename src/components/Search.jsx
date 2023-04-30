import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ setSelectedCity, setSelectedGuests }) => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");

  const handleLocationSelect = (city, country) => {
    setLocation({ city, country });
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleSearch = (location, guests) => {
    setSelectedCity(location.city);
    setSelectedGuests(guests);
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
      <div className="border border-[#FFFFFF] rounded-xl px-4 py-3 flex items-center justify-center shadow-custom text-xs sm:text-sm">
        <div className="border-r border-gray-300 pr-4 flex-grow">
          <button onClick={() => setOpen(true)}>
            {location ? (
              <>
                <span>{location.city},</span>
                <span className="ml-1">{location.country}</span>
              </>
            ) : (
              <span className="text-[#BDBDBD]">Add location</span>
            )}
          </button>
        </div>
        <div className="border-r border-gray-300 px-4">
          <button onClick={() => setOpen(true)}>
            {guests ? (
              <span>{guests} guests</span>
            ) : (
              <span className="text-[#BDBDBD]">Add guests</span>
            )}
          </button>
        </div>
        <div className="ml-3 flex items-center">
          <button onClick={() => setOpen(true)}>
            <AiOutlineSearch className="text-[#EB5757]" size={25} />
          </button>
        </div>
      </div>
      <motion.div
        initial={{ y: "-10vh" }}
        animate={open ? { y: 0 } : { y: "-1000vh" }}
        transition={{ duration: 0 }}
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
                  onClick={() => handleLocationSelect(city.city, city.country)}
                  className={`cursor-pointer ${
                    location && location.city === city.city
                      ? "text-blue-500"
                      : ""
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
              min="1"
              className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 flex items-center justify-center"
            onClick={() => handleSearch(location, guests)}
          >
            <span className="text-white text-sm font-medium">Search</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Search;
