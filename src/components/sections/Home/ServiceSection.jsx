import React, { useState } from 'react'
import { web, content, marketing, hosting, solution } from '../../../assets'
import { NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'motion/react';
import { BiCloset, BiRightArrow } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';

const ServiceSection = () => {

  const [isHovered, setIsHovered] = useState(false);

  // Variants for motion animation
  const buttonVariants = {
    initial: {
      width: '48px',
      borderRadius: '30px', 
      backgroundColor: '#ffffff', 
      color: '#000000', 
    },
    hover: {
      width: '160px', 
      borderRadius: '30px', 
      backgroundColor: '#2563EB',
      color: '#FFFFFF',
    },
  };

  const services = [
    {
      title: 'Web Development',
      description: 'We create responsive and user-friendly websites that help businesses establish a strong online presence.',
      image: web,
    },
    {
      title: 'Content Creation',
      description: 'Our team of skilled content creators produces high-quality content that engages and informs your audience.',
      image: content,
    },
    {
      title: 'Digital Marketing',
      description: 'We help businesses grow their online presence through effective digital marketing strategies.',
      image: marketing,
    },
    {
      title: 'Business Solution',
      description: 'We offer customized business solutions to help businesses streamline their operations and achieve their goals.',
      image: solution,
    }
  ];


  return (
    <section >
      <div className="container mx-auto">
        <div className="bg-yellow-100 p-4 rounded-3xl flex flex-col lg:flex-row gap-6 lg:gap-0 cursor-pointer ">
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}

            className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-12">
            <NavLink to="/services">
              <span className="w-fit bg-blue-600 text-white p-1 px-2 rounded-2xl text-xs lg:text-sm mb-2">
                Our Service
              </span>
              <h2 className="text-2xl lg:text-4xl font-semibold mb-2">What We Offer</h2>
              <p className="text-xs lg:text-sm text-black/60 max-w-[500px]">
                We offer a wide range of services to meet your needs. Whether you need web development, mobile app development, or digital marketing, we have the expertise to deliver top-notch solutions.
              </p>
              <motion.button
                className="  text-sm lg:text-base p-3 mt-3"

                variants={buttonVariants}
                initial="initial"
                animate={isHovered ? 'hover' : 'initial'}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="overflow-hidden flex items-center justify-end whitespace-nowrap ">
                  <div className="">Explore More</div>
                  <span><MdKeyboardArrowRight className="text-2xl" /></span>
                </div>

              </motion.button>
            </NavLink>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-8 gap-4 lg:gap-8">
              {
                services.map((service, index) => {
                  const [isCardFlip, setIsCardFlip] = useState(false)
                  return (
                    <div key={index} className="flip-box">
                      <motion.div
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isCardFlip ? 180 : 0 }}
                        transition={{ duration: 0.5, ease: 'linear' }}
                        className="relative flip-box-inner">
                        <div 
                        onClick={() => { setIsCardFlip(!isCardFlip) }}
                        className="relative bg-violet-200 rounded-3xl p-4 flex flex-col inner-flip-front">
                          

                          <div className="w-full lg:h-28 flex justify-center items-center">
                            <img src={service.image} alt={service.title} className="w-36 hover:scale-125 transition-all  mx-auto rounded-t-3xl" />
                          </div>
                          <div className="   ">
                            <h4 className="text-xl lg:text-2xl font-semibold  mt-4">{service.title}</h4>
                            <p className="text-xs text-black/60 text-ellipsis line-clamp-4">{service.description}</p>
                          </div>
                        </div>
                        <div className=" bg-white w-full h-full rounded-3xl p-4 flex flex-col absolute top-0 left-0  inner-flip-back">
                          <div
                            onClick={() => { setIsCardFlip(!isCardFlip) }}
                            className="absolute top-0 right-0 text-3xl py-2 px-4"><IoClose /></div>
                          <div className="  ">
                            <h4 className='text-xl mt-4 '>Offers in {service.title}</h4>
                            <p className="text-sm mt-2 text-neutral-600">
                              {service.description}
                            </p>

                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
