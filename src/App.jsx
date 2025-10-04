import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Loader from "./Components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    // Listen for full window load (includes images & async scripts)
    window.addEventListener("load", handleLoad);

    // Fallback — if something delays load too long
    const timeout = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
