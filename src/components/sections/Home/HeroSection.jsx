import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
    
    <section className="w-full h-screen  bg-gradient-to-t from-blue-300 to-red-100 flex justify-center items-center lg:pt-32">
    <div className="text-center ">
      <h1 className="max-w-[900px] m-auto text-5xl lg:text-7xl font-normal ">Building Your Brand's Success 
      in the Digital World</h1>
      <p className="max-w-[600px] m-auto text-slate-600 mt-4 text-xs lg:text-base ">We are a team of professionals dedicated to providing top-notch services to our clients. Our mission is to deliver exceptional results and exceed our clients' expectations.</p>
      <NavLink to='/contact' ><button className="bg-red-600 text-white text-sm lg:text-base  px-6 py-3 rounded-3xl shadow-md mt-8">Get Started</button></NavLink>
      </div>
    </section>
    </>
  )
}

export default HeroSection
