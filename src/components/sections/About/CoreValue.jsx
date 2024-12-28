import React from 'react'
import { collab, excellence, innovate, integrity } from '../../../assets'

const CoreValue = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 ">
        <div className="py-4 ">
          <h2 className="text-4xl font-bold "><span className=' text-3xl text-orange-500'>Our</span><br /> Core Values</h2>
          <p className="text-base text-neutral-700 mt-4 max-w-[600px] mx-auto">
            Our core values are the foundation of our company, guiding our actions and decisions. They define our culture and shape our approach to every project we undertake.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-3xl border">
            <img src={innovate} alt="msty enterprises" className='w-16 h-16 mb-4' />
            <h4 className='text-2xl font-semibold'>Innovation</h4>
            <p className='text-sm text-neutral-600'> Staying ahead with cutting-edge solutions.</p>
          </div>
          <div className="bg-white p-4 rounded-3xl border">
            <img src={integrity} alt="msty enterprises" className='w-16 h-16 mb-4' />
            <h4 className='text-2xl font-semibold'>Integrity</h4>
            <p className='text-sm text-neutral-600'> Building trust through transparency and commitment.</p>
          </div>
          <div className="bg-white p-4 rounded-3xl border">
            <img src={collab} alt="msty enterprises" className='w-16 h-16 mb-4' />
            <h4 className='text-2xl font-semibold'>Collaboration</h4>
            <p className='text-sm text-neutral-600'> Partnering with our clients to ensure mutual success.</p>
          </div>
          <div className="bg-white p-4 rounded-3xl border">
            <img src={excellence} alt="msty enterprises" className='w-16 h-16 mb-4' />
            <h4 className='text-2xl font-semibold'>Excellence</h4>
            <p className='text-sm text-neutral-600'> Delivering quality-driven results every time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValue
