import React from 'react'
import { about2 } from '../../../assets'

const Abouts = () => {
  return (
    <section> 
      <div className="container mx-auto">
      <div className="rounded-3xl grid grid-cols-1 lg:grid-cols-2 p-4">
        <div className="">
          <img src={about2} alt="" className='rounded-3xl lg:scale-75 shadow-[0_4px_10px_rgba(0,0,0,0.5),0_6px_24px_rgba(0,0,0,0.15)]' />
        </div>
        <div className="flex flex-col justify-center p-4 lg:p-6 py-8 lg:py-16">
          <h2 className="text-3xl lg:text-4xl font-semibold">About Us</h2>
          <p className="text-xs lg:text-base text-neutral-700 mt-4">
            At Msty Enterprises, we are a team of passionate individuals dedicated to delivering exceptional digital solutions. With a focus on innovation, collaboration, and excellence, we strive to empower businesses to thrive in the digital age.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Abouts
