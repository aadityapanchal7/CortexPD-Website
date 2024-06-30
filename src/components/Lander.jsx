import React from "react";
import ParticlesComponent from "./Particles";

function Lander() {
  return (
    <section className="bg-black text-white">
      <ParticlesComponent />
      <div className="mx-auto max-w-screen-xl px-8 flex lg:h-[500px] items-center h-[800px]">
        <div className="mx-auto max-w-3xl text-center justify-center space-y-6" data-aos='fade-up' data-aos-duration='1000'>
          <h1 className="bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
            Conquering Parkinson's
            <span className="sm:block py-2 "> stride by stride. </span>
          </h1>

          <p className="mx-auto max-w-xl sm:text-md/relaxed">
          Conquering Parkinson's through dedicated support and innovative solutions
          </p>
        </div>
      </div>
    </section>
  );
}

export default Lander;
