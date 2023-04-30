import { useState } from "react";
import Navbar from "./components/Navbar";
import Listings from "./components/Listings";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGuests, setSelectedGuests] = useState(null);

  return (
    <div>
      <Navbar
        setSelectedGuests={setSelectedGuests}
        setSelectedCity={setSelectedCity}
      />
      <Listings selectedGuests={selectedGuests} selectedCity={selectedCity} />
    </div>
  );
}

export default App;
