import { useState } from "react";
import Navbar from "./components/Navbar";
import Listings from "./components/Listings";

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div>
      <Navbar selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      <Listings selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
    </div>
  );
}

export default App;
