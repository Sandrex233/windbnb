import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Search = ({ setSelectedCity, setSelectedGuests }) => {
  const [locationMenuOpen, setLocationMenuOpen] = useState(false);
  const [guestsMenuOpen, setGuestsMenuOpen] = useState(false);
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

  const handleLocationMenuOpen = () => {
    setLocationMenuOpen(!locationMenuOpen);
    setGuestsMenuOpen(false);
  };

  const handleGuestsMenuOpen = () => {
    setLocationMenuOpen(false);
    setGuestsMenuOpen(!guestsMenuOpen);
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
          <div className="border border-[#FFFFFF] rounded-xl px-4 py-3 flex items-center justify-center shadow-custom text-xs sm:text-sm">
            <div className="pr-4 flex-grow">
              <button
                onClick={handleLocationMenuOpen}
                className="flex items-center"
              >
                {location ? (
                  <>
                    <span>{location.city},</span>
                    <span className="ml-1">{location.country}</span>
                  </>
                ) : (
                  <span className="text-[#BDBDBD]">Add location</span>
                )}
                <FaChevronDown
                  className={`ml-1 ${
                    locationMenuOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {locationMenuOpen && !guestsMenuOpen && (
                <div className="border border-gray-300 rounded-md mt-2">
                  {cities.map((city) => (
                    <div
                      key={city.city}
                      value={city.city}
                      onClick={() =>
                        handleLocationSelect(city.city, city.country)
                      }
                      className={`cursor-pointer flex items-center px-4 py-2 ${
                        location && location.city === city.city
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      <IoLocationSharp />{" "}
                      <span>
                        {city.city}, {city.country}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className=" border-gray-300 px-4">
              <button
                onClick={handleGuestsMenuOpen}
                className="flex items-center"
              >
                {guests > 0 ? (
                  <span>{guests} guests</span>
                ) : (
                  <span className="text-[#BDBDBD]">Add guests</span>
                )}
                <FaChevronDown
                  className={`ml-1 ${
                    guestsMenuOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {guestsMenuOpen && !locationMenuOpen && (
                <div className="mt-2">
                  <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={handleGuestsChange}
                    min="1"
                    className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              )}
            </div>
            <div className="ml-3 flex items-center">
              <button
                className="bg-[#EB5757] hover:opacity-80 rounded-md px-4 py-2 flex items-center justify-center"
                onClick={() => handleSearch(location, guests)}
              >
                <AiOutlineSearch className="text-[#F2F2F2]" size={20} />
                <span className="text-[#F2F2F2] text-sm font-medium">
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Search;
