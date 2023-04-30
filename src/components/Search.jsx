import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
  console.log(location);

  return (
    <>
      <div className="border border-[#FFFFFF] rounded-xl px-4 py-3 flex items-center justify-center shadow-custom text-xs sm:text-sm">
        <div className="border-r border-gray-300 pr-4 flex-grow">
          <button onClick={() => setOpen(true)}>
            {location.city ? (
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
            <div className="pr-4 flex-grow" onClick={handleLocationMenuOpen}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={location && location.city ? location.city : ""}
                  label="Location"
                  onChange={(e) =>
                    handleLocationSelect(
                      e.target.value,
                      e.target.value ? "Finland" : null
                    )
                  }
                >
                  {cities.map((city) => (
                    <MenuItem
                      key={city.city}
                      value={city.city}
                      className={`cursor-pointer flex items-center px-4 py-2 ${
                        location && location.city === city.city
                          ? "bg-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <IoLocationSharp className="text-[#4F4F4F]" size={25} />
                        <span>{city.city},</span>
                        <span className="ml-1">{city.country}</span>
                      </div>
                    </MenuItem>
                  ))}
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="px-4">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Guests
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={guests}
                  onChange={handleGuestsChange}
                  label="Guests"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {Array.from({ length: 10 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>
                      {index + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
