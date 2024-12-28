import React, { useState } from 'react'
import { about, roundtext } from '../../../assets'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const AboutUs = () => {

    
  const [isHovered, setIsHovered] = useState(false);

  // Variants for motion animation
  const buttonVariants = {
    initial: {
      width: '48px',
      // Small circular button
      borderRadius: '30px', // Fully round
      backgroundColor: '#FFFFFF', // Dark background
      color: '#000000', // White arrow
    },
    hover: {
      width: '145px', // Expanded button
      borderRadius: '30px', // Rounded rectangle
      backgroundColor: '#2563EB', // Tailwind blue-600
      color: '#FFFFFF', // White text
    },
  };

  return (
    <section>
        <div className="container mx-auto flex flex-col lg:flex-row hover:bg-orange-200  bg-gradient-to-tr from-orange-300 to-orange-200 rounded-3xl p-2 lg:p-4">
            <div className="w-full lg:w-1/2 lg:p-12 relative">
                <div className="absolute lg:bottom-20 lg:right-20 -bottom-5 right-0 z-10 p-1 bg-white rounded-full">
                    <img src={roundtext} alt="msty enterprises" className=' w-24 animate-spin-slow' />
                </div>
                <img src={about} alt="Msty Enterprises, Delhi" className='rounded-2xl shadow-2xl scale-90 ' />
            </div>
            <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
             className="w-full lg:w-1/2  ">
                <NavLink to='/about' >
                <div className="flex flex-col justify-center gap-4 p-4 lg:p-0 h-full">
                <span className='text-xs lg:text-sm bg-blue-600 w-fit text-white px-3 py-1 rounded-full'>About Us</span>
                <h2 className="text-3xl lg:text-4xl font-semibold">Get To Know Us Better</h2>
                <p className="text-xs lg:text-sm text-neutral-600 max-w-[600px]">
                    MSTY Enterprises is your trusted partner in crafting innovative digital experiences. With a focus on quality and client satisfaction, we specialize in empowering businesses through tailored web development, strategic digital marketing, and impactful content creation
                </p>
                
                 <motion.button
                className="  text-sm lg:text-base p-3 mt-3"

                variants={buttonVariants}
                initial="initial"
                animate={isHovered ? 'hover' : 'initial'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="overflow-hidden flex items-center justify-end whitespace-nowrap ">
                <div className="">Know More</div>
                <span><MdKeyboardArrowRight className="text-2xl" /></span>
                </div>

              </motion.button>
              </div>
              </NavLink>
            </motion.div>
        </div>
    </section>
  )
}

export default AboutUs
