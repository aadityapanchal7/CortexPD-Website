import React from 'react'
import { Featureslist } from '../utils/FeaturesList'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Features() {
  return (
    <article className='space-y-10 md:pt-0 py-16 md:py-36 bg-black' id='Services'>

      {/* Heading */}
      <span className="relative flex justify-center ">
        <span className="relative z-10 items-center px-6 text-4xl bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text  text-transparent font-semibold  " data-aos='fade-down' data-aos-duration="500">Services</span>
      </span>

      {/* Cards */}
      <section className='px-10 md:px-28'>

        <div className="grid grid-cols-1 gap-4 space-y-4 md:space-y-0 lg:grid-cols-3 lg:gap-8">

          {Featureslist.map((info, index) => (
        <div className="flex items-center justify-center w-full h-auto py-8 bg-black/60 text-purple-200 font-semibold  transition ease-in-out delay-75 border border-white rounded-lg hover:-translate-y-1 hover:scale-105 " data-aos="flip-up" key={index}>
          {/* Info */}
          <div className='flex flex-col items-center space-y-2 '>

            {/* Topic */}
            <div className='text-2xl'>
              {info.Topic}
            </div>

            {/* Subtopic */}
            <div className='px-5 text-center text-gray-400 font-normal '>
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