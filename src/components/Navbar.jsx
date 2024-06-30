import React, { useState } from "react";
import { Navlinks } from "../utils/Navlinks";
import { GrMenu, GrClose } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between  py-6 md:px-36 px-7 shadow-sm font-Outfit text-white bg-black " data-aos='fade-down'>
      {/* Logo */}
      <div className="flex space-x-2 items-center z-[2]">
        <div>
          <img
            src="./assets/logo.png"
            className="size-12 rounded-xl text-purple-500"
            alt="Logo"
          />
        </div>
        <div className="md:text-xl  ">NeuroCatalyst</div>
      </div>

      {/* Menu icon for mobile */}
      <div
        onClick={() => setOpen(!open)}
        className="md:text-3xl text-xl right-8 top-6 cursor-pointer md:hidden transition-all duration-500 ease-in items-center flex"
      >
        {open ? <GrClose className=" " /> : <GrMenu className=" " />}
      </div>

      {/* Links */}
      <ul
        className={`md:flex items-center md:pb-0 absolute md:static z-[0] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? " top-20" : " left-[-490px] top-20"
        }`}
      >
        {Navlinks.map((link, index) => (
          <>
            <li key={index} className="md:ml-8 text-md md:my-0 my-7 ">
              <a
                href={link.path}
                className="  hover:text-purple-500 duration-200"
              >
                {link.name}
              </a>
            </li>
          </>
        ))}
        <a href="#Join" className=" ">
          <button className=" bg-purple-600 py-2 px-2 rounded-xl hover:bg-purple-300 duration-500">
            Join Now!
          </button>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
