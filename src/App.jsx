import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Lander from "./components/Lander";
import Mission from "./components/Mission";
import Features from "./components/Services";
import Impact from "./components/Impact";
import Positions from "./components/Positions";
import Contact from "./components/Contact";
import Spotlight from "./components/Spotlight";
import "./index.css";

function App() {
  return (
    <div className="bg-black md:min-h-screen md:flex md:justify-center">
      <div className="md:max-w-[1263px] md:w-full md:flex md:flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Lander />
                <Mission />
                <Features />
                <Impact />
                <Positions />
              </>
            }
          />
          <Route path="/spotlight" element={<Spotlight />} />
        </Routes>
        <Contact />
      </div>
    </div>
  );
}

export default App;
