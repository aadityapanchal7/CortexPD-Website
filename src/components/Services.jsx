import React from 'react'
import { Featureslist } from '../utils/FeaturesList'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Features() {
  return (
    <article className='py-16 space-y-10 bg-black md:pt-0 md:py-36' id='Services'>

      {/* Heading */}
      <span className="relative flex justify-center ">
        <span className="relative z-10 items-center px-6 text-4xl font-semibold text-transparent bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text " data-aos='fade-down' data-aos-duration="500">Services</span>
      </span>

      {/* Cards */}
      <section className='px-10 md:px-28'>

        <div className="grid grid-cols-1 gap-4 space-y-4 md:space-y-0 lg:grid-cols-2 lg:gap-8">

          {Featureslist.map((info, index) => (
        <div className="flex items-center justify-center w-full h-auto py-8 font-semibold text-purple-200 transition ease-in-out delay-75 border border-white rounded-lg bg-black/60 hover:-translate-y-1 hover:scale-105 " data-aos="flip-up" key={index}>
          {/* Info */}
          <div className='flex flex-col items-center space-y-2 '>

            {/* Topic */}
            <div className='text-2xl'>
              {info.Topic}
            </div>

            {/* Subtopic */}
            <div className='px-5 font-normal text-center text-gray-400 '>
              {info.Info}
            </div>
           </div>
         </div>
          ))}
      

        </div>
      </section>
    </article>
  )
}

export default Features