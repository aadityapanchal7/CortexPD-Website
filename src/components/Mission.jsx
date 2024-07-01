import React from 'react'
import { GiAtom } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Mission() {
  return (
    <section id='Mission'>
  <div className="px-4 pb-16 mx-auto bg-black max-w-screen-2xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 lg:h-full " data-aos='fade-right'>
           <GiAtom className='absolute inset-0 object-cover w-full h-full text-purple-300/90'/> 
        </div>
      </div>

      <div className="relative flex items-center bg-black/60 rounded-3xl">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-black"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24" >
          <h2 className="text-2xl font-bold text-transparent sm:text-4xl bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text" data-aos='fade-up'>
            Mission
          </h2>

          <div data-aos='fade-up'>
            <p className="mt-4 text-white" data-aos='fade-up'>
            NeuroCatalyst is dedicated to easing the lives of those with Parkinson's through
            innovative tools and strong advocacy. Our specialized algorithms support daily
            activities, addressing both the major and minor challenges faced by patients. We
            also emphasize financial aid and community awareness to combat stigma and ensure
            that the voices of those impacted are heard. Our mission is to create a more caring
            and supportive world for everyone affected by Parkinson's.
            </p>
  
            <a
              href="#Contact"
              className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white border border-purple-300 rounded hover:bg-purple-300/25 "
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Mission