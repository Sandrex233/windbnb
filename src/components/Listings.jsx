import React from "react";
import stays from "../data/stays.json";
import star from "../assets/red-star.svg";

const Listings = ({ selectedGuests, selectedCity }) => {
  return (
    <div className="pl-[2rem] pr-[2rem] sm:pl-[3rem] sm:pr-[3rem] lg:px-40 min-h-screen">
      <div className="flex justify-between items-center py-5 ">
        <h1 className="text-[#333333] text-xl md:text-2xl font-medium">
          Stays in Finland
        </h1>
        <p className="mr-5 text-[#4F4F4F] text-sm md:text-base">12+ stays</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stays
          .filter((stay) => (selectedCity ? stay.city === selectedCity : true))
          .filter((stay) =>
            selectedGuests ? stay.maxGuests == selectedGuests : true
          )
          .map((stay) => (
            <div key={stay.rating} className="flex flex-col mb-6">
              <div className="mr-4">
                <img
                  src={stay.photo}
                  alt={stay.title}
                  className="w-full h-56 md:h-60 lg:h-80 object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-between pt-4">
                <div className="sm:pb-4">
                  <div className="flex items-center sm:mb-2">
                    {stay.superHost && (
                      <div className="py-1 px-2 border border-[#4F4F4F] rounded-full mr-2">
                        <p className="text-xs font-medium text-gray-700">
                          Superhost
                        </p>
                      </div>
                    )}
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {stay.type}
                      {stay.type == "Private room" ||
                      !stay.beds > 0 ||
                      stay.beds == null
                        ? ""
                        : stay.beds > 1
                        ? ", " + stay.beds + " beds"
                        : ", " + stay.beds + " bed"}
                    </p>
                    <div className="flex items-center ml-auto mr-4">
                      <div className="w-4 h-4 mr-1">
                        <img src={star} alt="star" className="" />
                      </div>
                      <p className="text-gray-500 text-sm">{stay.rating}</p>
                    </div>
                  </div>
                  <h2 className="text-sm sm:text-lg md:text-xl font-medium mb-2">
                    {stay.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Listings;
