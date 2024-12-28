import React from 'react'
import { afford, longterm, tailor } from '../../../assets'

const WhyUs = () => {
  return (
     <section>
      <div className="container mx-auto bg-gradient-to-tr from-red-300 to-rose-200 rounded-3xl p-4 lg:p-8 py-8 lg:py-16 flex flex-col lg:flex-row gap-3" >
        <div className=" ">
          <span className='bg-blue-600 text-white p-3 py-1 rounded-full text-xs'>Why Us</span>
          <h2 className="text-3xl lg:text-4xl font-semibold  text-black mt-2 mb-4">
            Why Choose MSTY ?
          </h2>
          <p className='text-xs lg:text-sm text-neutral-600 my-2 max-w-[600px] mx-auto'> 
            We are committed to delivering exceptional results and exceeding your expectations. Here are some reasons why you should choose MSTY:
          </p>
        </div>
      
         
          <div className=" flex flex-col lg:flex-row  gap-4 ">
            <div className="lg:w-1/3 bg-white rounded-2xl p-2 lg:p-6 px-4  ">
              <img src={tailor} alt="MSTY Enterprises Tailored Solutions Delhi" className='w-24 lg:w-28 scale-75' />
              <h4 className='text-lg lg:text-2xl font-semibold'>Tailored Solutions  </h4>
              <p className='text-xs lg:text-sm text-neutral-600'>We customize strategies to fit your unique business needs</p>
            </div>
            <div className="lg:w-1/3 bg-white rounded-2xl p-2 lg:p-6 px-4  ">
            <img src={afford} alt="MSTY Enterprises Affordable Pricing Delhi" className='w-24 lg:w-28 scale-75' />
              <h4 className='text-lg lg:text-2xl font-semibold'>Affordable Pricing  </h4>
              <p className='text-xs lg:text-sm text-neutral-600'>Delivering exceptional quality within your budget.</p>
            </div>
            <div className="lg:w-1/3 bg-white rounded-2xl p-2 lg:p-6 px-4  ">
              <img src={longterm} alt="MSTY Enterprises Long Term" className='w-24 lg:w-28 scale-75' />
              <h4 className='text-lg lg:text-2xl font-semibold'>Long-Term Partnership  </h4>
              <p className='text-xs lg:text-sm text-neutral-600'>Building relationships that grow with your success.</p>
            </div>
          </div>
       
      </div>
     </section>
  )
}

export default WhyUs
