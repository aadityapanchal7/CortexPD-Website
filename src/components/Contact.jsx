import React from 'react'
import { FaDiscord, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=' w-full justify-center flex items-center pt-10 flex-col h-[300px] bg-black ' id='Contact'>

      <div className=' flex text-white pt-10 space-x-5 '>
        <a href='https://discord.com/invite/n6Et39M2Bs' target='__blank'>< FaDiscord className=' size-8'/></a>
        <a href='https://www.tiktok.com/@neurocatalyst?_t=8l3rgLsFCNW&_r=1' target='__blank'>< FaInstagram className=' size-8'/></a>
        <a href='https://www.instagram.com/neurocatalyst/' target='__blank'>< FaTiktok className=' size-8'/></a>
        <a href='https://www.linkedin.com/company/neurocatalyst/mycompany/' target='__blank'>< FaLinkedinIn className=' size-8'/></a>
        <a href='mailto:' target='__blank'>< MdEmail className=' size-8'/></a>
      </div>

      <footer className="bottom-0 text-center pt-5 text-sm flex justify-center w-full text-white">
        <span className="mb-3">
          © {year} NeuroCatalyst All Rights Reserved.
          <br />
          <div className=' pt-2 hover:text-purple-200'><a href='https://aadityapanchal.vercel.app' target='__blank'>Made by Aaditya Panchal</a></div>
        </span>
      </footer>
    </div>
  )
}

export default Contact