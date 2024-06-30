import React from 'react'
import { ImpactNums } from '../utils/ImpactNums'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Impact() {
  return (
    <section className="">
  <div className="mx-auto max-w-screen-xl md:px-28 px-14 md:pb-36 py-16 ">
    <div className="mx-auto max-w-3xl text-center" data-aos='fade-down' data-aos-duration="500">
      <span className="text-3xl sm:text-4xl bg-gradient-to-r from-purple-400 via-purple-200 to-white bg-clip-text text-transparent font-semibold">Impact</span>
    </div>

    <div className="mt-8 sm:mt-12" data-aos="flip-down">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {ImpactNums.map((num, index) => (
          <div className="flex flex-col rounded-lg bg-black/60 shadow-md shadow-purple-300 px-4 py-8 text-center" key={index}>
            <dt className="order-last text-lg font-medium text-gray-500">{num.Topic}</dt>

            <dd className="text-4xl font-extrabold text-purple-300 md:text-5xl">{num.Number}</dd>
          </div>
        ))} 
      </dl>
    </div>

  </div>
</section>
  )
}

export default Impact
