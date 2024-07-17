import React, { useState } from "react";
import { Navlinks } from "../utils/Navlinks";
import { GrMenu, GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div
      className="flex items-center justify-between py-6 text-white bg-black shadow-sm md:px-36 px-7 font-Outfit "
      data-aos="fade-down"
    >
      {/* Logo */}
        <a href="/" className="flex items-center z-[2] space-x-2">
          <div>
            <img
              src="./assets/CortexPD.webp"
              className="text-purple-500 size-10 rounded-xl"
              alt="Logo"
            />
          </div>
          <div className="md:text-xl ">CortexPD</div>
        </a>

      {/* Menu icon for mobile */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center text-xl transition-all duration-500 ease-in cursor-pointer md:text-3xl right-8 top-6 md:hidden"
      >
        {open ? <GrClose className="" /> : <GrMenu className="" />}
      </div>

      {/* Links */}
      <ul
        className={`md:flex items-center md:pb-0 absolute py-5 md:py-0 md:static bg-black md:bg-transparent z-[0] left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? " top-20" : " left-[-490px] top-20"
        }`}
      >
        {Navlinks.map((link, index) => (
          <>
            <li key={index} className="md:ml-8 text-md md:my-0 my-7 ">
              <a
                href={link.path}
                className="duration-200 hover:text-purple-500"
              >
                {link.name}
              </a>
            </li>
          </>
        ))}

        <Link to="/spotlight" className="mr-7 text-md md:my-0 my-7 hover:text-purple-500">
            Spotlight
        </Link>
        <br />
        <a href="/#Join" className="">
          <button className="py-2 mt-5 duration-500 bg-purple-600 md:mt-0 md:px-2 rounded-xl hover:bg-purple-300">
            Join Now!
          </button>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
