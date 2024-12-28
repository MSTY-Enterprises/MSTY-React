import React from 'react'

const Mission = () => {
  return (
    <section className='bg-'>
        <div className="container mx-auto p-4 lg:p-16 flex flex-col lg:flex-row gap-4 justify-center items-center">
            <div className="w-full lg:w-1/3 text-4xl lg:text-6xl font-bold">
                <h2><span className='text-xl lg:text-4xl font-semibold'>Our</span><br /> Mission</h2>
            </div>
            <div className="w-full lg:w-2/3 text-sm lg:text-base">
                <p>
                    We are dedicated to providing exceptional services to our clients. Our mission is to deliver high-quality solutions that exceed expectations and help businesses thrive in the digital world.
                </p>    
            </div>
        </div>
    </section>
  )
}

export default Mission
