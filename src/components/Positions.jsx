import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { Positionslist } from '../utils/PositionsList'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Positions() {
  return (
    <section id='Join'>
      <div className="max-w-screen-xl px-16 md:px-28 pb-10 md:py-8 pt-20">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-left lg:mx-0" data-aos='fade-right'>
            <h2 className="text-4xl sm:text-6xl bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent font-semibold" >
              Join Our Team!
            </h2>

            <p className="mt-4 text-white">
              By joining our team, you'll make a real difference in
              the lives of financially struggling Parkinson's patients
              by providing support for treatments and medications.
              You'll raise awareness about the disease, promoting early
              detection and patient support, while educating communities
            </p>

            <a 
              className="mt-8 inline-block rounded-md border border-purple-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-300/20">
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2" >
            {Positionslist.map((item, index) => (
              <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring "
              key={index}
              href={item.path}
              target="__blank"
              data-aos='flip-left'
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <LuGraduationCap />
              </span>

              <h2 className="mt-2 font-bold text-left text-purple-300">{item.name}</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 text-left">
                {item.Reqs}
              </p>
            </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Positions;
