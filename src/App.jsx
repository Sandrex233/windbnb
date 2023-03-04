import { useState } from "react";
import Navbar from "./components/Navbar";
import Listings from "./components/Listings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Listings />
    </div>
  );
}

export default App;
