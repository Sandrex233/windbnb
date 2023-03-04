import React from "react";
import stays from "../data/stays.json";

const Listings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stays.map((stay) => (
        <div key={stay.id} className="flex flex-col mb-6">
          <div className="mr-4">
            <img
              src={stay.photo}
              alt={stay.title}
              className="w-full h-48 object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-between pt-4">
            <div className="pb-4">
              <div className="flex items-center mb-2">
                {stay.superHost && (
                  <div className="py-1 px-2 border border-[#4F4F4F] rounded-full mr-2">
                    <p className="text-xs font-medium text-gray-700">
                      Superhost
                    </p>
                  </div>
                )}
                <p className="text-gray-500 text-sm">
                  {stay.type}, {stay.beds} beds
                </p>
                <div className="flex items-center ml-auto mr-4">
                  <div className="w-4 h-4 mr-1 fill-current text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 1.344l2.94 6.55 6.56.954-4.742 4.508 1.396 6.406L10 14.963l-5.154 3.79 1.396-6.406L.504 8.847l6.56-.954L10 1.344zm0 2.615L7.37 8.09l-5.055.734 3.665 3.48-.978 4.49L10 15.89l4.998 2.919-.978-4.49 3.665-3.48-5.054-.734L10 3.96z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">{stay.rating}</p>
                </div>
              </div>
              <h2 className="text-xl font-medium mb-2">{stay.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
