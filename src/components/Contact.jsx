import React from 'react'
import { FaDiscord, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=' w-full justify-center flex items-center pt-10 flex-col h-[300px] bg-black ' id='Contact'>

      <div className='flex pt-10 space-x-5 text-white '>
        <a href='https://discord.com/invite/n6Et39M2Bs' target='__blank'>< FaDiscord className=' size-8'/></a>
        <a href='https://www.instagram.com/neurocatalyst/' target='__blank'>< FaInstagram className=' size-8'/></a>
        <a href='https://www.tiktok.com/@neurocatalyst?_t=8l3rgLsFCNW&_r=1' target='__blank'>< FaTiktok className=' size-8'/></a>
        <a href='https://www.linkedin.com/company/neurocatalyst/mycompany/' target='__blank'>< FaLinkedinIn className=' size-8'/></a>
        <a href='mailto:neurocatalystofficial@gmail.com' target='__blank'>< MdEmail className=' size-8'/></a>
      </div>

      <footer className="bottom-0 flex justify-center w-full pt-5 text-sm text-center text-white">
        <span className="mb-3">
          © {year} NeuroCatalyst All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Contact
