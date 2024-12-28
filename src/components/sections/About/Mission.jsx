import React from 'react'
import { logo } from '../../../assets'

const Mission = () => {
  return (
    <section>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
          <div className="flex columns-4 flex-col justify-center bg-purple-300 rounded-2xl p-6 py-8 lg:py-16">
            <h2 className="  text-4xl font-bold"><span className='font-normal text-3xl'>Our</span><br/> Mission</h2>
            <p className="text-xs lg:text-base text-neutral-700 mt-4">
            Our mission is simple: to deliver exceptional digital solutions that not only meet but exceed our clients' expectations. We aim to foster long-term partnerships by combining creativity, technical expertise, and customer-centricity to help businesses thrive in the digital age. </p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <p className=' italic text-xl font-light '><span>“</span>Innovation distinguishes between a leader and a follower. <span>”</span></p>
        <span className='text-xl font-bold ' >– Steve Jobs</span>
        </div>
            <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-fit mx-auto bg-white rounded-full p-4 shadow-[0_4px_10px_rgba(0,0,0,0.3),0_6px_24px_rgba(0,0,0,0.15)]">
                <img src={logo} alt="msty enteprises" className='w-20 h-20' />
            </div>
        <div className="flex flex-col items-center justify-center">
        <p className=' italic text-xl font-light '><span>“</span>The best way to predict the future is to create it. <span>”</span></p>
        <span className='text-xl font-bold '>– Peter Drucker</span>
        </div>
        <div className="flex flex-col justify-center bg-orange-300 rounded-2xl p-6 py-8 lg:py-16">
        <h2 className="  text-4xl font-bold"><span className='font-normal text-3xl'>Our</span><br/> Vision</h2>
        <p className="text-xs lg:text-base text-neutral-700 mt-4">
        We envision a world where every business, regardless of size or industry, can harness the full potential of digital innovation to achieve their goals. We strive to be a leading force in shaping the future of digital transformation.
        </p>
            </div>

        </div>

    </section>
  )
}

export default Mission


