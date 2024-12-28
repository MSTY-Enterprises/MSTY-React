import React from 'react'
import { brand1, brand2, brand3, brand4 } from '../../../assets'

const OurPartner = () => {
  return (
    <section>
        <div className="container mx-auto p-4 py-8 lg:py-16">
        <div className="text-center">
            <h2 className='text-3xl lg:text-4xl font-semibold'>Our Partner</h2>
            <p className='text-xs lg:text-sm max-w-[500px] mx-auto text-neutral-600'> 
             We are proud to have partnered with some of the most innovative and forward-thinking companies in the industry. Our partners are leaders in their respective fields, and we are honored to work with them.
            </p>
        </div>
        <div className="flex justify-around flex-col lg:flex-row gap-4 lg:gap-0 p-2 lg:p-8 mt-2">
            <img src={brand1} alt="logoipsum" className='max-w-[100px] mx-auto' />
            <img src={brand2} alt="logoipsum" className='max-w-[100px] mx-auto' />
            <img src={brand3} alt="logoipsum" className='max-w-[100px] mx-auto' />
            <img src={brand4} alt="logoipsum" className='max-w-[100px] mx-auto' />
        </div>
        </div>
    </section>
  )
}

export default OurPartner
